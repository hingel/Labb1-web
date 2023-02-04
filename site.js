    class coffee
    {
        constructor(type, description, price) {
            this.type = type;
            this.description = description;
            this.price = price;
        }
    }


    let testVar = 1;
    const shoppingCart = [];
    let sumCart = 0;
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("closeModal")[0]; //Första elementet i listan sätts, kan byta mot id eller query kanske?

    let shoppingCartData = document.getElementById("myShoppingCart");

    let showCart = false;

    //Skapa en riktig klass:
    //Arrayen med ingredienser:
    const singleEspresso = new coffee("Single Espresso", "One shot of espresso.",2);
    const cappucino = new coffee("Cappucino", "One shot of espresso and 4 parts hot foamed milk.", 4);
    const cortado = new coffee("Cortado", "Double shot of espresso and same amount of hot foamed milk.", 3);

    let data = [singleEspresso, cappucino, cortado];
    let list = document.getElementById("myList");

   
    //Lägga till menyn till html:
    data.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add("list-group", "list-group-horizontal", "m-1");

        //Type texten:
        let div = document.createElement("div");
        div.classList.add("list-group-item", "w-100");
        div.innerText = `${item.type} Price: ${item.price}.`;

        //Bild för kaffet: lägg till bildlänk
        let img = document.createElement("img");
        img.src="";
        img.alt=`Image of: ${item.type}`;

        //Knappen
        let infoButton = document.createElement("button");
        infoButton.innerText = "Show info";  
        infoButton.classList.add("list-group-item", "list-group-item-action");
        infoButton.id = "myBtn";

        //Kan göra detta till extern funktion istället:
        infoButton.onclick = function () {            
            //från w3 schools:
            modal.style.display = "block";

            const modalHead = document.getElementById("modalHead");
            modalHead.innerText = item.type;

            const modalBody = document.getElementById("modalBody");
            modalBody.innerText = item.description;
        }
        
        let addButton = document.createElement("button");
        addButton.innerText = "Add to cart";
        addButton.classList.add("list-group-item", "list-group-item-action");//) = "btn btn-primary";

        //lägga till köpt detalj
        addButton.onclick = function (){            
            shoppingCart.unshift(item);
            sumCart += item.price;
                     
            shoppingCartData.innerText = `Sum: ${sumCart} €`;   
            
            if(showCart)
            {
                //Borde ha en metod som enbart lägger till en del kanske?
                //lite fult sätt kan tyckas.
                document.getElementById("shopList").remove(); 
                updateShoppingCart();
            }
        }

        //li.appendChild(div);
        li.append(div, img, infoButton, addButton);
        //li.appendChild(infoButton);
        //li.appendChild(addButton);
        list.appendChild(li);
    });

    // var modal = document.getElementById("modal");

    // var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    //Denna lista visas o släcks som Niklas visade på lektionen. när användaren trycker på shoppingcarten.
    function showShoppingList() {
        showCart = !showCart;

        if (showCart) {
            updateShoppingCart();                  
        } else {
            document.getElementById("shopList").remove();            
        }
    }

    //Uppdatera listan:
    function updateShoppingCart() {
        let shoppinglistdiv = document.getElementById("myShoppingList");
        let shoppinglist = document.createElement("ol");
        shoppinglist.id = "shopList";           
        shoppinglistdiv.appendChild(shoppinglist);

        shoppingCart.forEach(item=> {             
            let shoppingListItems = document.createElement("li");    
            shoppingListItems.innerText = `${item.type}: ${item.price}`;             
            
            //knapp för att ta bort varor
            const removeButton = document.createElement("button");
            shoppingListItems.appendChild(removeButton);
            removeButton.innerText = "-";

            removeButton.onclick = function (){                
                //Måste finnas ett bättre sätt att göra detta:
                //let index = shoppingCart.findIndex((item));                
                index = -1;
                for (let i = 0; i < shoppingCart.length; i++) {
                    if(shoppingCart[i].type === item.type){
                        index = i;
                    }
                }                    
                
                sumCart -= item.price;
                shoppingCart.splice(index, 1);   
                console.log("shoud remove");
                shoppingCartData.innerText = `Sum: ${sumCart} €`;                
                shoppingListItems.remove(item);            
            }

            shoppinglist.appendChild(shoppingListItems); 
        });
    }



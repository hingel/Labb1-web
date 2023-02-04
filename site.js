    class coffee
    {
        constructor(type, description, picture, price) {
            this.type = type;
            this.description = description;
            this.picture = picture;
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

    //Kaffesorter:
    const singleEspresso = new coffee("Single Espresso", "One shot of espresso.", "espresso.png", 2);
    const cappucino = new coffee("Cappucino", "Foamed oat milk, hot oat milk and an espresso.","cappucino.png", 4);
    const americano = new coffee("Americano", "Double shot of espresso and hot H20.","americano.png", 3);
    const doppio = new coffee("Doppio", "Double shot of espresso.", "doppio.png", 4);
    const romano = new coffee("Romano", "Espresso with lemon.", "romano.png", 3);

    let data = [singleEspresso, cappucino, americano, doppio, romano];
    let list = document.getElementById("myList");

   
    //Lägga till menyn till html:
    data.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add("list-group", "list-group-horizontal", "m-1", "border", "border-1");
        li.id="coffe-list";

        //Type texten:
        let div = document.createElement("div");
        div.classList.add("list-group-item", "w-75");
        div.innerText = `${item.type}`;

        //Bild för kaffet: lägg till bildlänk
        let img = document.createElement("img");
        img.src=item.picture;
        img.alt=`Image of: ${item.type}`;
                
        //Knappen
        let infoButton = document.createElement("button");
        infoButton.innerText = "Show info";  
        infoButton.classList.add("list-group-item", "list-group-item-action", "w-25");
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
        addButton.innerText = `Add to cart: ${item.price} €`;
        addButton.classList.add("list-group-item", "list-group-item-action");

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

        li.append(div, img, infoButton, addButton);
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
            removeButton.classList.add("m-1");
            removeButton.innerText = "Remove item";
            shoppingListItems.appendChild(removeButton);

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



    let testVar = 1;
    const shoppingCart = [];
    let sumCart = 0;
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("closeModal")[0]; //Första elementet i listan sätts

    let shoppingCartData = document.getElementById("myShoppingCart");

    let showCart = false;

    //Arrayen med ingredienser:
    const singleEspresso = {type:"Single Espresso", description:"One shot of espresso.", price: 2};
    const cappucino = {type:"Cappucino", description:"One shot of espresso and 4 parts hot foamed milk.", price: 4};
    const cortado = {type:"cortado", description:"Double shoe of espresso and same amount of hot foamed milk.", price: 3}

    let data = [singleEspresso, cappucino, cortado];

    let list = document.getElementById("myList");

    data.forEach((item) => {
        let li = document.createElement("li");

        li.innerText = item.type + " Price: " +  item.price.toString(); //Gör om till textimplementation eller vad det heter.

        //Knappen
        let infoButton = document.createElement("button");
        infoButton.innerText = "Show info";  
        infoButton.className = "btn btn-primary";
        infoButton.id = "myBtn";


        //Kan göra detta till extern funktion istället:
        infoButton.onclick = function () {            
            //från w3 schools:
            modal.style.display = "block";

            //FÖr test att se att knappen funkar:
            // testVar = testVar + 1;
            // console.log(testVar);

            const modalHead = document.getElementById("modalHead");
            modalHead.innerText = item.type;
            //console.log(modalHead.innerText);

            const modalBody = document.getElementById("modalBody");
            modalBody.innerText = item.description;
            //console.log(modalBody.innerText)
        }
        
        let addButton = document.createElement("button");
        addButton.innerText = "Add to cart";
        addButton.className = "btn btn-primary";

        //lägga till köpt detalj
        addButton.onclick = function (){            
            shoppingCart.unshift(item);
            sumCart += item.price;

            // console.clear();

            // //Bara för test.
            // shoppingCart.forEach(item => {
            //     console.log(item.innerText)
            // });

            //console.log(sumCart);                       
            shoppingCartData.innerText = `Sum: ${sumCart} €`;            
        }

        li.appendChild(infoButton);
        li.appendChild(addButton);
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
            let shoppinglistdiv = document.getElementById("myShoppingList");
            let shoppinglist = document.createElement("ol");
            shoppinglist.id = "shopList";            
            shoppinglistdiv.appendChild(shoppinglist);

            shoppingCart.forEach(element => {             
                let shoppingListElement = document.createElement("li");
        
                shoppingListElement.innerText = `${element.type}: ${element.price}`;
        
                
                
                console.log("child element count: " + shoppinglist.childElementCount);

                //lägg till knapp för att ta bort varor från shoppingCart listan.
                const removeButton = document.createElement("button");

                shoppingListElement.appendChild(removeButton);

                removeButton.innerText = "-";

                removeButton.onclick = function (){
                    let index = shoppingCart.findIndex(); //Hur hitta indexet?
                    sumCart -= element.price;
                    console.log(index);
                    shoppingCart.splice(index, 1);                    
                }

                shoppinglist.appendChild(shoppingListElement);  

            });
        } else {
            document.getElementById("shopList").remove();
            console.log("shoud remove");
        }
    }







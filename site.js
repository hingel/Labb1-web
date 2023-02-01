

    
       

    let testVar = 1;
    const shoppingCart = [];
    let sumCart = 0;
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];

    let shoppingCartData = document.getElementById("myShoppingCart");

    //Arrayen med ingredienser:
    const singleEspresso = {type:"Single Espresso", description:"One shot of espresso.",  price: 2};
    const cappucino = {type:"Cappucino", description:"One shot of espresso and 4 parts hot foamed milk.", price: 4};
    const cortado = {type:"cortado", description:"Double shoe of espresso and same amount of hot foamed milk.", price: 3}

    let data = [singleEspresso, cappucino, cortado];

    let list = document.getElementById("myList");

    data.forEach((item) => {
        let li = document.createElement("li");

        li.innerText = item.type + ": " + item.description + " Price: " +  item.price.toString();

        //Knappen
        let infoButton = document.createElement("button");
        infoButton.innerHTML = "Show info";  
        infoButton.className = "btn btn-primary";
        infoButton.id = "myBtn";

        infoButton.onclick = function () {            
            //från w3 schools:
            modal.style.display = "block";

            //FÖr test att se att knappen funkar:
            testVar = testVar + 1;
            console.log(testVar);
        }
        
        let addButton = document.createElement("button");
        addButton.innerHTML = "Add to cart";
        addButton.className = "btn btn-primary";

        //lägga till arrayen med 
        addButton.onclick = function (){            
            shoppingCart.unshift(item.type);
            sumCart += item.price;

            console.clear();

            shoppingCart.forEach(item => {
                console.log(item.toString())
            });

            console.log(sumCart);

            shoppingCartData.innerHTML = shoppingCart;
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




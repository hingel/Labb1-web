<script>  
    
    const singleEspresso = {type:"Single Espresso", description:"One shot of espresso", price: 2};
    const cappucino = {type:"Cappucino", description:"One shot of espresso and 4 parts hot foamed milk.", price: 4};
    const cortado = {type:"cortado", description:"Double shoe of espresso and same amount of hot foamed milk.", price: 3}

    let data = [singleEspresso, cappucino, cortado];
    let list = document.getElementById("myList");

    data.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item.type + ": " + item.description; // hur få med priset?
        list.appendChild(li);
    });

</script>
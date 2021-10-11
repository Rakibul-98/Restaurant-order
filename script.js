function handleIncrease(item,isIncrease) {
    const burgerCount=document.getElementById(item);
    const burgerNumber=parseInt(burgerCount.value);
    if(isIncrease=="true"){
        const burgerNewCount=burgerNumber+1;
        burgerCount.value=burgerNewCount;
    }
    else if(isIncrease=="false" && burgerNumber>0){
        const burgerNewCount=burgerNumber-1;
        burgerCount.value=burgerNewCount;
    }
    calculateTotal();
}

function calculateTotal() {
    const beefBurger = getItemCount('beef');
    const elkBurger = getItemCount('elk');
    const mushroomBurger = getItemCount('mushroom');
    const turkeyBurger = getItemCount('turkey');
    const veggieBurger = getItemCount('veggie');
    const greenBurger = getItemCount('green');
    const hawaiiBurger = getItemCount('hawaii');

    const subTotalAmount = beefBurger*250 + elkBurger*100 + mushroomBurger*150 + turkeyBurger*200 + hawaiiBurger*180 + veggieBurger*75 + greenBurger*130;
    document.getElementById("sub-total").innerText=subTotalAmount;

    const totalVat = subTotalAmount / 25;
    document.getElementById("vat").innerText=totalVat;

    const totalAmount = subTotalAmount + totalVat;
    document.getElementById("total").innerText=totalAmount;
}

function getItemCount(item) {
    const itemCount = document.getElementById(item);
    const itemNumber = parseInt(itemCount.value);
    return itemNumber;
}

function handleOrder() {
    document.getElementById("menu-sec").style.display='none';
    document.getElementById("animation").style.display='block';
}
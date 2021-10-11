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
}




function handleOrder() {
    document.getElementById("menu-sec").style.display='none';
    document.getElementById("animation").style.display='block';
}
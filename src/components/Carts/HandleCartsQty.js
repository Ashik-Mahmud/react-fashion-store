const handleIncreaseCart = (setCartsQty, cartsQty, id, price) =>{
    setCartsQty(cartsQty + 1)
    setDataIntoLocalStorage(id, price, true, setCartsQty)
    
}

const handleDecreaseCart = (setCartsQty, cartsQty, id, price) =>{
    cartsQty > 0 && setCartsQty(cartsQty - 1)
    setDataIntoLocalStorage(id, price, false)
}

const setDataIntoLocalStorage = (id , price, isAdd) =>{
    const getStorageData = JSON.parse(localStorage.getItem("carts"));
    const filteredStorageData = getStorageData.filter(data => data.cartId === id)
    if(filteredStorageData){
        if(!isAdd){
            if(filteredStorageData[0].qty > 1){
                filteredStorageData[0].qty -= 1
                filteredStorageData[0].price =filteredStorageData[0].qty===0 ? 0 : filteredStorageData[0].price - price;
            }
        }else{
            filteredStorageData[0].qty += 1
            filteredStorageData[0].price = price * filteredStorageData[0].qty;
        }
        localStorage.setItem('carts', JSON.stringify(getStorageData))
        
    }
}


const deletedFromLocalStorage = (target, id) =>{
    const getStorageData = JSON.parse(localStorage.getItem("carts"));
    const totalDataWithoutDeletedItem = getStorageData.filter(item => item.cartId !== id);
    if(window.confirm("Do you want to delete?")){
        localStorage.setItem('carts', JSON.stringify(totalDataWithoutDeletedItem))
        window.location.reload();
       /*  const targetedParent = target.nativeEvent.path.filter(newPath => newPath.className === 'col-lg-10')
        targetedParent[0].remove(); */
    }
}





export { handleIncreaseCart, handleDecreaseCart, deletedFromLocalStorage }


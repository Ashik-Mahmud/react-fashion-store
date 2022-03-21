const showQuantity = (id) =>{
    const localStorageData = JSON.parse(localStorage.getItem("carts"))
    const filteredData = localStorageData.filter((data) => data.cartId === id)
    if(filteredData[0].qty > 0){
        return filteredData[0].qty;
    }
}


const totalCartsMoneyFromStorage = () =>{
    const localStorageData = JSON.parse(localStorage.getItem("carts"))
    if(localStorageData){
        const totalMoney = localStorageData?.reduce((acc, item) => acc + item.price, 0)
        return totalMoney?.toFixed(2);
    }
}

export { showQuantity, totalCartsMoneyFromStorage };


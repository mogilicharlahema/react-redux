


export function getProductAction(products){
    return{
        type:"GET-PRODUCT-SUCESS",
        payload:products
    }
}
export function addNewProduct(){
    return{
        type:"ADD-NEW-PRODUCT"
    }
}

export function deleteProduct(){
    return{
        type:"DELETE_A_PRODUCT"
    }
}
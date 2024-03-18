import axios from "axios"



export function getProductAction(products){
    return{
        type:"GET-PRODUCT-SUCESS",
        payload:products
    }
}

 function showLoader(){
    return{
        type:"SHOW_LOADER"
    }
}

 function hideLoader(){
    return{
        type:"HIDE_LOADER"
    }
}

 function productError(){
    return{
        type:"PRODUCTS_ERROR"
    }
}
export function addNewProduct(newProduct){
    return{
        type:"ADD-NEW-PRODUCT",
        payload:"newProduct"
    }
}

// export function deleteProduct(){
//     return{
//         type:"DELETE_A_PRODUCT"
//     }
// }

export function removeProduct(id){
    return{
        type:"DELETE-PRODUCT",
        payload:id
    }
}


export function updateProductAction(id){
    return{
        type:"UPDATE-PRODUCT",
        payload:id
    }
}

export function fetchProducts(){
   
    return async(dispatch)=>{
        dispatch(showLoader())
        const result=await axios.get("https://dummyjson.com/products")
        if(result.status===200){
            dispatch(getProductAction(result.data.products))
            dispatch(hideLoader())
        }
        else{
            dispatch(productError())
        }
    }
}

export function addToCart(products){
    return{
        type:"ADD-CART",
         payload:products
    }
}
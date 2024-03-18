import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decerementAction, incrementAction, resetAction } from './redux/actions';
import { useEffect } from 'react';
import axios from 'axios';
import { addNewProduct, addToCart, fetchProducts, getProductAction, removeProduct, updateProductAction,  } from './redux/products/productaction';

function App() {

 const {profile,ticket,productListing}= useSelector(state=>state)

 const dispatch=useDispatch()
 const handleClick=()=>{
  dispatch(incrementAction())

 }
 const handleClicking=()=>{
  dispatch(decerementAction())

 }

 const handleClicker=()=>{
  dispatch(resetAction())

 }
useEffect(()=>{
 dispatch(fetchProducts())



},[])

// async function fetchData(){
//   const result=await axios.get("https://dummyjson.com/products")
//  dispatch (getProductAction(result.data.products))
//  console.log(result);
// }

const addNew=()=>{
const newProduct={
  "id": 1,
  "title": "iPhone 16",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  "images": [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]
}
  dispatch(addNewProduct(newProduct))


}

// const delProduct=()=>{
//   dispatch(deleteProduct())
// }


const delProduct=(id)=>{
  dispatch(removeProduct(id))
}

const updateProduct=(id)=>{
  dispatch(updateProductAction(id))
}

  return (
    <>
    <h2>{productListing.cart.length}</h2>
       <h2>{profile.name}</h2>
         {ticket.count}
       
        
        <button onClick={handleClick}>increment counter</button><br></br>
        <button onClick={handleClicking}>decrement counter</button><br></br>
        <button onClick={handleClicker}>reset counter</button><br></br>
        <button onClick={addNew}>addproduct</button>
        {/* <button onClick={delProduct}>deleteproduct</button> */}

         {
          // productListing.products.length>0 &&
          // productListing.products.map(eachObject=><h3>{eachObject.title}</h3>)

          productListing.loader?
          <h3>products are loading...</h3>
          :
          productListing.products.map(eachObject=><>
          <h3>{eachObject.title}</h3>
          <button onClick={()=>delProduct(eachObject.id)}>delete</button><br></br>
          <button onClick={()=>updateProduct(eachObject.id)}>update</button>
          <button onClick={()=>dispatch(addToCart(eachObject))}>Add To Cart</button>
          </>
          
          
          )

        } 
        </>
      
      
   
  );
}

export default App;

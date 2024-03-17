import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decerementAction, incrementAction, resetAction } from './redux/actions';
import { useEffect } from 'react';
import axios from 'axios';
import { addNewProduct, deleteProduct, getProductAction } from './redux/products/productaction';

function App() {

 const {profile,ticket,productListing}= useSelector(state=>state)
//  console.log(reduxStore,"reduxstore");
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
  fetchData()



},[])

async function fetchData(){
  const result=await axios.get("https://dummyjson.com/products")
 dispatch (getProductAction(result.data.products))
 console.log(result);
}

const addNew=()=>{
  dispatch(addNewProduct())


}

const delProduct=()=>{
  dispatch(deleteProduct())
}

  return (
    <>
       <h2>{profile.name}</h2>
         {ticket.count}
       
        
        <button onClick={handleClick}>increment counter</button><br></br>
        <button onClick={handleClicking}>decrement counter</button><br></br>
        <button onClick={handleClicker}>reset counter</button><br></br>
        <button onClick={addNew}>addproduct</button>
        <button onClick={delProduct}>deleteproduct</button>

        {
          productListing.products.length>0 &&
          productListing.products.map(eachObject=><h3>{eachObject.title}</h3>)
        }
        </>
      
      
   
  );
}

export default App;

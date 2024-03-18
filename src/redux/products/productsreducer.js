


const initialstate={
    products:[],
    loader:false,
    error:null,
    cart:[]
}

export function productReducer(state=initialstate,action){
    switch (action.type){
        case "GET-PRODUCT-SUCESS":
            return {...state,products:action.payload}
            case "ADD-NEW-PRODUCT":
                return{...state,products:[...state.products,action.payload]}

                case "DELETE-PRODUCT":
                 const id=action.payload
                    const newState=state.products.filter(item=>item.id!==id)
                    return {...state,products:newState}

                    case "UPDATE-PRODUCT":
                        const updateId=action.payload
                        const newUpdateState=state.products.map(item=>{
                            if(item.id==updateId){
                                return{...item,title:"SAMSUNG"}
                            }
                            else{
                                return item
                            }
                        })

                        return {...state,products:newUpdateState}
                   
                  case "SHOW-LOADER":
                    return{...state,loader:true}

                    case "HIDE_LOADER":
                        return{...state,loader:false}

                        case "PRODUCTS_ERROR":
                            return{...state,error: "somethinmg went wrong"}
                            case "ADD-CART":
                                return{...state,cart:[...state.cart,action.payload ]}

                // case "DELETE_A_PRODUCT":
                //     return{...state,products:state.products.filter(product=>product.id!==1)
                //         }



                  

            default:
                return state
    }
}
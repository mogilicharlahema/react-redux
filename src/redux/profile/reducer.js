



 const initialstate={
    name:"hema"

 }

 export function profileReducer(state=initialstate,action){
    switch(action.type){
        case "changeName":
            return{...state,name:"hello"}
            default :
            return state
    }
 }




// initial state of redux
const initialstate={
    count:10
}

export function reducer(state=initialstate,action){

    switch(action.type){
        case "increment":
            return{...state,count:state.count+1}

            default:
                return state
    }

}
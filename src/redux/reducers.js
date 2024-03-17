



// initial state of redux
const initialstate={
    count:0,
    totalTickets:100,
    holdTickets:0,
    bookedTickets:0,
    availableTickets:100
}

export function reducer(state=initialstate,action){

    switch(action.type){
        case "increment":
            return{...state,count:state.count+1}
            case "decrement":
            return{...state,count:state.count-1}
            case "reset":
            return{...state,count:0}
            case "bookedTickets":
                return{...state,availableTickets:state.availableTickets-1}
                case "holdTickets":
                    return{...state,holdTickets:state.holdTickets+1}

            

            default:
                return state
    }

}
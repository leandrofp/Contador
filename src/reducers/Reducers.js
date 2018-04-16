const initialState = {
    count1: 0 ,
    isFetching: false,
    errorMessage: '',
    people: []

};
/* Estado inicial */

export default (state = initialState, action) => {
    let newStore;
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            newStore = Object.assign({}, state, {
                ...state,
                count1: state.count1 + 1
            });
            return newStore;
        case 'DECREMENT_COUNTER':
            newStore = Object.assign({},state, {...state , count1: state.count1 +1})
            return newStore;
        case 'SET_COUNTER':
            newStore = Object.assign({},state, {...state , count1: state.count1 = 0})
            return newStore;
        case 'INPUT_COUNTER':
            //newStore = Object.assign({},state, {...state , count1: state.count1 = action.payload})
            newStore = Object.assign({},state, {...state , count1: state.count1 = parseInt(action.payload,10)})
            return newStore;

        case 'FETCHING_PEOPLE_REQUEST':
           return {...state, isFetching: true};
        case 'FETCHING_PEOPLE_FAILURE':
           return {...state, isFetching: false, errorMessage: action.payload  };
        case 'FETCHING_PEOPLE_SUCCESS':
           return {...state, isFetching: false, people: action.payload };    

        default:
           return state;
    }
}
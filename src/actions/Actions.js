export const counterIncrement = () => {
    return {
        type: 'INCREMENT_COUNTER'
    };
}

export const counterDecrement = () => {
    return {
        type: 'DECREMENT_COUNTER'
    };
}
export const counterSet = () => {
    return {
        type: 'SET_COUNTER'
    };
}
export const counterInput = (valor) => {
    console.log("valor pre accion: ",valor);
    return {
        type: 'INPUT_COUNTER',
        payload: valor
    };
    
}

export const fetchingPeopleRequest = () => {
    return {
        type: 'FETCHING_PEOPLE_REQUEST'
    };
}
export const fetchingPeopleSuccess = (json) => {
    return {
        type: 'FETCHING_PEOPLE_SUCCESS',
        payload: json
    };
}
export const fetchingPeopleFailure = (error) => {
    return {
        type: 'FETCHING_PEOPLE_FAILURE',
        payload: error
    };
}
export const fetchPeople = () => {
  return async dispatch => {
    dispatch(fetchingPeopleRequest());
    try {
        console.log("ejecuta llamada API");
        let response = await fetch("https://randomuser.me/api/?results=15");
        let json = await response.json();
        dispatch(fetchingPeopleSuccess(json.results));
     } catch (error){
         dispatch(fetchingPeopleFailure(error));
     }
  };
};


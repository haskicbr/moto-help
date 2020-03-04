import {SystemMutationTypes} from "./types";

const mutations = {};

const initialState = {
    "services": [{
        "type": "CHANGE_SPARK_PLUGS",
        "mileage": 17000,
        "lifetime": 10000,
        "date": "2020-02-24",
        "description": "ngk iridium"
    }, {
        "type": "CHANGE_OIL_FILTER",
        "mileage": 17000,
        "lifetime": 5000,
        "date": "2020-02-24",
        "description": ""
    }, {"type": "CHANGE_OIL", "mileage": 17000, "lifetime": 5000, "date": "2020-02-24", "description": "10 W 40"}],
    "currentMileage": "21000",
    "isLogged": false,
    "nightMode": false,
    "serviceTypes": {
        "CHANGE_OIL": {"description": "Change oil"},
        "CHANGE_OIL_FILTER": {"description": "Change oil filter"},
        "CHANGE_FUEL_FILTER": {"description": "Change fuel filter"},
        "CHANGE_AIR_FILTER": {"description": "Change air filter"},
        "CHANGE_SPARK_PLUGS": {"description": "Change spark plugs"}
    },
    "defaultServiceType": "CHANGE_OIL"
};

mutations[SystemMutationTypes.INITIAL_STORE] = function (state) {
    // Check if the ID exists

    let currentState;

    if (localStorage.getItem('store')) {
        currentState =  JSON.parse(localStorage.getItem('store'));
    } else {
        currentState = initialState;
    }

    // Replace the state object with the stored item
    this.replaceState(
        {...state, ...currentState}
    );
};
mutations[SystemMutationTypes.CHANGE_NIGHT_MODE] = function (state, isActive) {
    state.nightMode = isActive;
};

mutations[SystemMutationTypes.LOGIN] = function (state, isLogged) {
    state.isLogged = isLogged;
};

export default mutations;

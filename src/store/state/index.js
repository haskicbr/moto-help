const state = {
    services: [],
    currentMileage: 0,
    isLogged: false
};


let serviceTypes = {
    CHANGE_OIL         : "CHANGE_OIL",
    CHANGE_OIL_FILTER  : "CHANGE_OIL_FILTER",
    CHANGE_FUEL_FILTER : "CHANGE_FUEL_FILTER",
    CHANGE_AIR_FILTER  : "CHANGE_AIR_FILTER"
};

let serviceTypesDescriptions = {};

serviceTypesDescriptions[serviceTypes.CHANGE_OIL]         = "Замена масла";
serviceTypesDescriptions[serviceTypes.CHANGE_OIL_FILTER]  = "Замена маслянного фильтра";
serviceTypesDescriptions[serviceTypes.CHANGE_FUEL_FILTER] = "Замена топливного филтра";
serviceTypesDescriptions[serviceTypes.CHANGE_AIR_FILTER]  = "Замена воздушного фильтра";

state.serviceTypes       = serviceTypesDescriptions;
state.defaultServiceType = serviceTypes.CHANGE_OIL;

export default state;

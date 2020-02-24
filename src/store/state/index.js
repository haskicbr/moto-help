const state = {
    services: [],
    currentMileage: 0,
    isLogged: false,
    nightMode: false
};

let serviceTypes = {
    CHANGE_OIL: "CHANGE_OIL",
    CHANGE_OIL_FILTER: "CHANGE_OIL_FILTER",
    CHANGE_FUEL_FILTER: "CHANGE_FUEL_FILTER",
    CHANGE_AIR_FILTER: "CHANGE_AIR_FILTER",
    CHANGE_SPARK_PLUGS: "CHANGE_SPARK_PLUGS"
};

let serviceTypesDescriptions = {};

serviceTypesDescriptions[serviceTypes.CHANGE_OIL] = {
    description: "Change oil"
};
serviceTypesDescriptions[serviceTypes.CHANGE_OIL_FILTER] = {
    description: "Change oil filter"
};
serviceTypesDescriptions[serviceTypes.CHANGE_FUEL_FILTER] = {
    description: "Change fuel filter"
};
serviceTypesDescriptions[serviceTypes.CHANGE_AIR_FILTER] = {
    description: "Change air filter"
};
serviceTypesDescriptions[serviceTypes.CHANGE_SPARK_PLUGS] = {
    description: "Change spark plugs"
};

state.serviceTypes = serviceTypesDescriptions;
state.defaultServiceType = serviceTypes.CHANGE_OIL;

export default state;

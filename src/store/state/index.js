const state = {

    count: 0,

    mileages: [],
    currentMileage: 0,

    todos: [
        {id: 1, text: '...', done: true},
        {id: 2, text: '...', done: false}
    ],
    testComputed: {
        computedValue: 'this is computed value'
    },

    isLogged: false
};


let mileageTypes = {
    CHANGE_OIL         : "CHANGE_OIL",
    CHANGE_OIL_FILTER  : "CHANGE_OIL_FILTER",
    CHANGE_FUEL_FILTER : "CHANGE_FUEL_FILTER",
    CHANGE_AIR_FILTER  : "CHANGE_AIR_FILTER"
};

let mileageTypesDescriptions = {};

mileageTypesDescriptions[mileageTypes.CHANGE_OIL]         = "Замена масла";
mileageTypesDescriptions[mileageTypes.CHANGE_OIL_FILTER]  = "Замена маслянного фильтра";
mileageTypesDescriptions[mileageTypes.CHANGE_FUEL_FILTER] = "Замена топливного филтра";
mileageTypesDescriptions[mileageTypes.CHANGE_AIR_FILTER]  = "Замена воздушного фильтра";

state.mileageTypes       = mileageTypesDescriptions;
state.defaultMileageType = mileageTypes.CHANGE_OIL;

export default state;

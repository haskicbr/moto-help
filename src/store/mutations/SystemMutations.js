import {SystemMutationTypes} from "./types";

const mutations = {};

mutations[SystemMutationTypes.INITIAL_STORE] = function (state) {
    // Check if the ID exists
    if(localStorage.getItem('store')) {
        // Replace the state object with the stored item
        this.replaceState(
            {...state, ...JSON.parse(localStorage.getItem('store'))}
        );
    }
};
mutations[SystemMutationTypes.CHANGE_NIGHT_MODE] = function (state, isActive) {
    state.nightMode = isActive;
};

export default mutations;

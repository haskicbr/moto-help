import {SettingsMutationsTypes} from "./types";

const mutations = {};

mutations[SettingsMutationsTypes.CHANGE_LANGUAGE] = (state, {language}) => {
    state.settings.language = language
};

mutations[SettingsMutationsTypes.CHANGE_DISTANCE_UNIT] = (state, {distanceUnit}) => {
    state.settings.units.distance = distanceUnit
};

export default mutations;

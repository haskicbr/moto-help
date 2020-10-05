import {SettingsMutationsTypes} from "./types";

const mutations = {};

mutations[SettingsMutationsTypes.CHANGE_LANGUAGE] = (state, {language}) => {
    state.settings.language = language
};

export default mutations;

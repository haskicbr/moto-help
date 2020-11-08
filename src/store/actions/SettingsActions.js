import {SettingsActionTypes} from "./types"
import {SettingsMutationsTypes} from "../mutations/types"
import {Application} from "../../app";
import {LanguageTypes} from "../state/SettingsTypes";

const actions = {};

actions[SettingsActionTypes.CHANGE_LANGUAGE] = function ({commit, state, dispatch}, {language}) {

    if (language === LanguageTypes.RU) {
        Application.$vuetify.lang.current = 'ru';
    } else {
        Application.$vuetify.lang.current = 'en';
    }

    commit(SettingsMutationsTypes.CHANGE_LANGUAGE, {language});
};
actions[SettingsActionTypes.CHANGE_DISTANCE_UNIT] = function ({commit, state, dispatch}, {distanceUnit}) {
    commit(SettingsMutationsTypes.CHANGE_DISTANCE_UNIT, {distanceUnit});
};

export default actions;

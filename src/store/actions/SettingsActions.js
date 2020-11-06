import {SettingsActionTypes} from "./types"
import {SettingsMutationsTypes} from "../mutations/types"

const actions = {};

actions[SettingsActionTypes.CHANGE_LANGUAGE] = function ({commit, state, dispatch}, {language}) {
    commit(SettingsMutationsTypes.CHANGE_LANGUAGE, {language});
};
actions[SettingsActionTypes.CHANGE_DISTANCE_UNIT] = function ({commit, state, dispatch}, {distanceUnit}) {
    commit(SettingsMutationsTypes.CHANGE_DISTANCE_UNIT, {distanceUnit});
};

export default actions;

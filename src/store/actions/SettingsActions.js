import {SettingsActionTypes} from "./types"
import {SettingsMutationsTypes} from "../mutations/types"

const actions = {};

actions[SettingsActionTypes.CHANGE_LANGUAGE] = function ({commit, state, dispatch}, {language}) {
    commit(SettingsMutationsTypes.CHANGE_LANGUAGE, {language});
};

export default actions;

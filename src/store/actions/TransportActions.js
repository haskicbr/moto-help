import {TransportActionTypes} from "./types";
import {TransportMutationTypes} from "../mutations/types";
import SystemActionTypes from "./types/SystemActionTypes";

const actions = {};

actions[TransportActionTypes.ADD_TRANSPORT] = function ({commit, state, dispatch}, {id, name, mileage}) {
    commit(TransportMutationTypes.ADD_TRANSPORT, {id, name, mileage});
    dispatch(SystemActionTypes.SYNC_STORE_WITH_SERVER);
}

actions[TransportActionTypes.DELETE_TRANSPORT] = function ({commit, state, dispatch}, {id}) {
    commit(TransportMutationTypes.DELETE_TRANSPORT, {id});
    dispatch(SystemActionTypes.SYNC_STORE_WITH_SERVER);
};

actions[TransportActionTypes.CHANGE_CURRENT_TRANSPORT] = function ({commit, state, dispatch}, {id}) {
    commit(TransportMutationTypes.CHANGE_CURRENT_TRANSPORT, {id});
    dispatch(SystemActionTypes.SYNC_STORE_WITH_SERVER);
};

actions[TransportActionTypes.CHANGE_MILEAGE] = function ({commit, state, dispatch}, {id, mileage}) {
    commit(TransportMutationTypes.CHANGE_MILEAGE, {id, mileage});
    dispatch(SystemActionTypes.SYNC_STORE_WITH_SERVER);
};

export default actions;

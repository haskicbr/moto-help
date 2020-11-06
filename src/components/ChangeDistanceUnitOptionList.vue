<script>
import {DistanceTypes, SettingsTypes} from "../store/state/SettingsTypes";
import {SettingsActionTypes} from "../store/actions/types";

export default {
    name: "ChangeDistanceUnitOptionList",

    methods: {
        changeDistanceUnit(distanceUnit) {
            this.$store.dispatch(SettingsActionTypes.CHANGE_DISTANCE_UNIT, {
                distanceUnit
            })
        }
    },

    computed: {
        distanceOptionList() {
            const distances = SettingsTypes.UNITS.DISTANCE;
            const list = [];


            for (let key in distances) {
                list.push({
                    key, description: distances[key]
                });
            }
            return list;
        }
    },
    data() {
        return {
            distanceUnit: this.$store.state.settings.units.distance,
        }
    }
}
</script>

<template>
    <v-select
        v-on:change="changeDistanceUnit(distanceUnit)"
        :items="distanceOptionList"
        item-text="description"
        item-value="key"
        v-model="distanceUnit"
        :label="$store.getters.languages('DISTANCE_UNIT')"
    ></v-select>
</template>

<script>

import {DistanceTypes, SettingsTypes} from "../../store/state/SettingsTypes";
import ChangeLanguageOptionList from "../ChangeLanguageOptionList";

export default {
    name: "Settings",
    components: {ChangeLanguageOptionList},
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
            distanceUnit: DistanceTypes.KM
        }
    }
}
</script>

<template>
    <v-list-item>
        <v-list-item-content>

            <ChangeLanguageOptionList/>
            <v-select
                v-on:change=""
                :items="distanceOptionList"
                item-text="description"
                item-value="key"
                v-model="distanceUnit"
                label="Distance unit"
            ></v-select>
            {{ distanceOptionList }}
        </v-list-item-content>
    </v-list-item>

</template>
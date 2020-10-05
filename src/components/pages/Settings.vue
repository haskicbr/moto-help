<script>

import {LanguageTypes, DistanceTypes, SettingsTypes} from "../../store/state/SettingsTypes";
import {SettingsActionTypes} from "../../store/actions/types"

export default {
    name: "Settings",

    methods: {
        changeLanguage(language) {
            this.$store.dispatch(SettingsActionTypes.CHANGE_LANGUAGE, {
                language
            })
        }
    },

    computed: {
        languageOptionList() {
            const languages = SettingsTypes.LANGUAGE;
            const list = [];
            for (let key in languages) {
                list.push({
                    key, description: languages[key]
                });
            }
            return list;
        },
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
            language: this.$store.state.settings.language,
            distanceUnit: DistanceTypes.KM
        }
    }
}
</script>

<template>
    <v-list-item>
        <v-list-item-content>
            <v-select
                v-on:change="changeLanguage(language)"
                v-model="language"
                :items="languageOptionList"
                item-text="description"
                item-value="key"

                label="Language"
            ></v-select>

            <v-select
                v-on:change=""
                :items="distanceOptionList"
                item-text="description"
                item-value="key"
                v-model="distanceUnit"
                label="Distance unit"
            ></v-select>
            {{distanceOptionList}}
        </v-list-item-content>
    </v-list-item>

</template>
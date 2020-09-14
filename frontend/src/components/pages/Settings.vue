<script>

    import SettingTypes from "../../store/state/SettingsTypes";

    export default {
        name: "Settings",


        data() {


            return {
                language: SettingTypes.LANGUAGE.EN,
                distanceUnit: SettingTypes.UNITS.DISTANCE.KM


            }
        }
    }
</script>

<template>
    <v-list-item>
        <v-list-item-content>
            <v-select
                    v-on:change=""
                    v-model="language"
                    :items="[{
                    key: language, description: language
                }]"
                    item-text="description"
                    item-value="key"

                    label="Language"
            ></v-select>

            <v-select
                    v-on:change=""
                    :items="[{
                    key: distanceUnit, description: distanceUnit
                    }]"
                    item-text="description"
                    item-value="key"
                    v-model="distanceUnit"
                    label="Distance unit"

            ></v-select>
        </v-list-item-content>
    </v-list-item>

</template>
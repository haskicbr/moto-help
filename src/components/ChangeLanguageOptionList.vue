<script>
import {SettingsTypes} from "../store/state/SettingsTypes";
import {SettingsActionTypes} from "../store/actions/types";

export default {
    name: "ChangeLanguageOptionList",
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
                    key, description: this.$store.getters.languages(key)
                });
            }
            return list;
        },
    },
    data() {
        return {
            language: this.$store.state.settings.language,
        }
    }
}
</script>

<template>
    <v-select
        v-on:change="changeLanguage(language)"
        v-model="language"
        :items="languageOptionList"
        item-text="description"
        item-value="key"
        :label="$store.getters.languages('LANGUAGE')"
    ></v-select>
</template>
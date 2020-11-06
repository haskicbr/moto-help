<script>
import ChangeLanguageOptionList from "../ChangeLanguageOptionList";
import ChangeDistanceUnitOptionList from "../ChangeDistanceUnitOptionList";

export default {
    name: "Settings",
    components: {
        ChangeDistanceUnitOptionList,
        ChangeLanguageOptionList
    },
}
</script>

<template>
    <v-list-item>
        <v-list-item-content>
            <ChangeLanguageOptionList/>
            <ChangeDistanceUnitOptionList/>
        </v-list-item-content>
    </v-list-item>

</template>
<script>
import {ServiceActionTypes} from "../store/actions/types";

export default {
    name: "CurrentMileageForm",
    methods: {
        changeCurrent() {
            this.isEditable = false;
            this.$store.dispatch(ServiceActionTypes.CHANGE_CURRENT_MILEAGE, this.currentMileage);
        },
    },
    data() {
        return {
            currentMileage: this.$store.getters.currentMileage,
            isEditable: false,
        }
    }
}
</script>

<template>
    <v-list-item>
        <v-list-item-content v-if="!isEditable">
            <v-list-item-title>
                <div class="">current transport {{ $store.getters.currentTransport.name }}</div>
            </v-list-item-title>

            <v-list-item-title class="d-flex" style="padding: 10px 0px 10px 0px;">
                    <span class="d-flex align-self-center"
                          style="width: 80%">current mileage {{
                            $store.getters.currentMileage
                        }} {{ $store.getters.languages($store.state.settings.units.distance) }}</span>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" v-on:click="isEditable = !isEditable" class="mx-2" fab x-small>
                            <v-icon small dark>mdi-pencil</v-icon>
                        </v-btn>
                    </template>
                    <span>change mileage</span>
                </v-tooltip>
            </v-list-item-title>
        </v-list-item-content>

        <v-list-item-content v-if="isEditable">

            <form v-on:submit.prevent="changeCurrent">
                <div>
                    <label class="subtitle-1 font-weight-regular">Change current mileage</label>

                    <v-text-field type="number" v-model="currentMileage"></v-text-field>
                </div>
                <v-btn type="submit" color="primary">Save</v-btn>
            </form>

        </v-list-item-content>
    </v-list-item>
</template>
<script>

import {ServiceActionTypes} from "../store/actions/types";
import CurrentMileageServices from "./CurrentMileageServices";
import AddTransportNotice from "./AddTransportNotice";

export default {
    name: "CurrentMileage",

    components: {
        AddTransportNotice,
        CurrentMileageServices
    },

    methods: {

        getServices() {

            let services = this.$store.getters.currentServices;

            let lastTypes = [];

            services = services.filter(service => {

                if (lastTypes.includes(service.type)) {
                    return false;
                }

                lastTypes.push(service.type);

                return true;
            });

            return services;
        },

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

    <div v-if="!$store.getters.currentTransport">
        <AddTransportNotice/>
    </div>
    <div v-else>
        <v-list-item v-if="!isEditable">
            <v-list-item-content>
                <v-list-item-title>
                    <div class="">current transport {{$store.getters.currentTransport.name}}</div>
                </v-list-item-title>

                <v-list-item-title class="d-flex" style="padding: 10px 0px 10px 0px;">
                    <span class="d-flex align-self-center"
                          style="width: 80%">current mileage {{ $store.getters.currentMileage }} {{$store.getters.languages($store.state.settings.units.distance)}}</span>
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
        </v-list-item>

        <v-list-item v-if="isEditable">
            <v-list-item-content>

                <form v-on:submit.prevent="changeCurrent">
                    <div>
                        <label class="subtitle-1 font-weight-regular">Change current mileage</label>

                        <v-text-field type="number" v-model="currentMileage"></v-text-field>
                    </div>
                    <v-btn type="submit" color="primary">Save</v-btn>
                </form>

            </v-list-item-content>
        </v-list-item>

        <div v-if="getServices() !== 0" class="md-layout md-gutter">
            <v-row justify="center">
                <template v-for="(mileage) in getServices()">
                    <CurrentMileageServices v-bind:mileage="mileage"/>
                </template>
            </v-row>
        </div>
    </div>
</template>

<script>

import {ServiceActionTypes} from "../store/actions/types";
import CurrentMileageServices from "./CurrentMileageServices";
import AddTransportNotice from "./AddTransportNotice";
import CurrentMileageForm from "./CurrentMileageForm";

export default {
    name: "CurrentMileage",

    components: {
        AddTransportNotice,
        CurrentMileageServices,
        CurrentMileageForm
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
    },

    data() {
        return {}
    }
}
</script>


<template>

    <div v-if="!$store.getters.currentTransport">
        <AddTransportNotice/>
    </div>
    <div v-else>
        <CurrentMileageForm/>
        <div v-if="getServices() !== 0" class="md-layout md-gutter">
            <v-row justify="center">
                <template v-for="(mileage) in getServices()">
                    <CurrentMileageServices v-bind:mileage="mileage"/>
                </template>
            </v-row>
        </div>
    </div>
</template>

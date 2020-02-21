<script>

    import {ServiceActionTypes} from "../store/actions/types";
    import dateFormat from "date-format";


    export default {
        name: "CurrentMileage",

        methods: {

            getServices() {

                let services = this.$store.state.services;

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

            dateFormat(dateString) {
                return dateFormat('dd-MM-yyyy', new Date(dateString));
            },
            getMileageProgress(mileage, lifetime) {


                console.log(this.currentMileage)

                let compareMileage = this.currentMileage - mileage;

                let progress = compareMileage / lifetime * 100;

                if (progress > 100) {
                    return 100;
                }

                if (progress < 0) {
                    return 0;
                }

                return parseInt(progress)
            },

            changeCurrent() {


                this.isEditable = false;
                this.$store.dispatch(ServiceActionTypes.CHANGE_CURRENT, this.currentMileage);
            },

            getMileageDescription(type) {
                return this.$store.state.serviceTypes[type];
            },

            getProgressColor(progress) {

                if (progress >= 90) {
                    return "red";
                } else if (progress >= 70) {
                    return "orange";
                }

                return "blue";
            }
        },

        data() {
            return {
                currentMileage: this.$store.state.currentMileage,
                isEditable: false,

            }
        }
    }
</script>


<template>


    <div>


        <div class="md-headline" v-if="!isEditable" style="vertical-align: middle; display: flex; align-self: center">
            <div style="display: flex; align-items: center">current mileage: {{$store.state.currentMileage}} km</div>

            <v-btn v-on:click="isEditable = !isEditable" class="mx-2" fab dark small color="cyan">
                <v-icon dark>mdi-pencil</v-icon>
            </v-btn>

            <router-link tag="div" to="/service/add">
                <v-btn class="mx-1" fab dark small color="cyan">
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </router-link>
        </div>


        <div v-if="isEditable" class="md-layout md-gutter">
            <div class="md-layout-item md-xsmall-size-100  md-medium-size-25 md-size-25">

                <div>
                    <label>Change current mileage</label>

                    <v-text-field type="number" v-model="currentMileage"></v-text-field>
                </div>

                <button v-on:click="changeCurrent" class="md-layout-item md-size-100 md-raised md-primary">
                    Save
                </button>
            </div>
        </div>


        <div v-if="getServices() !== 0" class="md-layout md-gutter">
            <div class="">
                <div class="md-double-line md-elevation-4">

                    <h1>Maintenance</h1>

                    <template v-for="(mileage) in getServices()">


                        <div class="md-list-item-text">

                            <br/>

                            <span>lifetime {{mileage.lifetime}} km</span>
                            <span>change date {{dateFormat(mileage.date)}}</span>
                            <span>change mileage {{mileage.mileage}} km</span>

                            <br/>

                            <v-progress-linear
                                    :color="getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))"
                                    :value="getMileageProgress(mileage.mileage, mileage.lifetime)"
                                    height="10"
                            ></v-progress-linear>
                        </div>

                    </template>

                </div>
            </div>

        </div>
    </div>

</template>

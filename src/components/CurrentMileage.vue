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
                return this.$store.state.serviceTypes[type].description;
            },

            getChangeThought(mileage) {

                if (mileage.mileage > this.currentMileage) {
                    return mileage.lifetime;
                }

                let change = mileage.lifetime + mileage.mileage - this.currentMileage;

                if (change < 0) {
                    return 0;
                }

                return change;
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

    <v-card max-width="700px">
        <v-list-item>
            <v-list-item-content v-if="!isEditable">
                <div class="md-headline"
                     style="vertical-align: middle; display: flex; align-self: center">
                    <div class="subtitle-1 font-weight-regular" style="display: flex; align-items: center">current mileage:
                        {{$store.state.currentMileage}} km
                    </div>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" v-on:click="isEditable = !isEditable" class="mx-2" fab dark small
                                   color="primary">
                                <v-icon dark>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>change mileage</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <router-link tag="div" to="/service/add">
                                <v-btn v-on="on" class="mx-1" fab dark small color="primary">
                                    <v-icon dark>mdi-plus</v-icon>
                                </v-btn>
                            </router-link>
                        </template>

                        <span>add service</span>
                    </v-tooltip>
                </div>
            </v-list-item-content>


            <v-list-item-content v-if="isEditable">
                <div>
                    <label class="subtitle-1 font-weight-regular">Change current mileage</label>

                    <v-text-field type="number" v-model="currentMileage"></v-text-field>
                </div>
                <v-btn v-on:click="changeCurrent" color="primary">Save</v-btn>
            </v-list-item-content>
        </v-list-item>
        <br>

        <div v-if="getServices() !== 0" class="md-layout md-gutter">

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="subtitle-1 font-weight-regular">Services</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <template v-for="(mileage) in getServices()">
                <v-list-item three-line>
                    <v-list-item-content>

                        <v-list-item-title>
                            {{getMileageDescription(mileage.type)}}
                        </v-list-item-title>

                        <v-list-item-title>
                            change through: {{getChangeThought(mileage)}} km
                        </v-list-item-title>

                        <v-list-item-title>
                            lifetime: {{mileage.lifetime}} km
                        </v-list-item-title>

                        <v-list-item-title>
                            change date: {{dateFormat(mileage.date)}}
                        </v-list-item-title>

                        <v-list-item-title>
                            change mileage: {{mileage.mileage}} km
                        </v-list-item-title>

                        <v-progress-linear
                                :color="getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))"
                                :value="getMileageProgress(mileage.mileage, mileage.lifetime)"
                                height="10"
                        ></v-progress-linear>

                    </v-list-item-content>
                </v-list-item>
            </template>
        </div>
    </v-card>
</template>

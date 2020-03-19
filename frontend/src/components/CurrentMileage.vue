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
    <div>
        <v-list-item>
            <v-list-item-content v-if="!isEditable">
                <div class="md-headline justify-center align-center d-flex">
                    <div class="subtitle" style="display: flex; align-items: center; justify-content: center">
                        current mileage {{$store.state.currentMileage}} km
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

<!--                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <router-link tag="div" to="/service/add">
                                <v-btn v-on="on" class="mx-1" fab dark small color="primary">
                                    <v-icon dark>mdi-plus</v-icon>
                                </v-btn>
                            </router-link>
                        </template>

                        <span>add service</span>
                    </v-tooltip>-->
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

            <template v-for="(mileage) in getServices()">

                {{(() => {
                    progeressColor = getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))
                })()}}

                <v-list-item three-line>
                    <v-list-item-content class="justify-center">

                        <v-list-item-content class="justify-center">
                            <div class="v-btn">
                                {{getMileageDescription(mileage.type)}}
                            </div>
                        </v-list-item-content>

                        <v-list-item class="justify-center flex-wrap">
                            <v-btn text>
                                <span>{{getChangeThought(mileage)}} km</span>
                                <v-icon class="mx-1" :color="progeressColor">mdi-cog-clockwise</v-icon>
                            </v-btn>

                            <v-btn text>
                                <span>{{mileage.lifetime}} km</span>
                                <v-icon class="mx-1" :color="progeressColor">mdi-cogs</v-icon>
                            </v-btn>

                            <v-btn text>
                                <span>{{mileage.mileage}} km</span>
                                <v-icon class="mx-1" icon="mdi-lock" :color="progeressColor">mdi-wrench</v-icon>
                            </v-btn>
                        </v-list-item>

                        <v-progress-linear
                                :color="progeressColor"
                                :value="getMileageProgress(mileage.mileage, mileage.lifetime)"
                                height="10"
                        ></v-progress-linear>

                    </v-list-item-content>
                </v-list-item>
            </template>
        </div>
    </div>
</template>

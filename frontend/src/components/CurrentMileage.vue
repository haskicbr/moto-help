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
        <v-list-item v-if="!isEditable">
            <v-list-item-title>
                <span >current mileage {{$store.state.currentMileage}} km</span>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" v-on:click="isEditable = !isEditable" class="mx-2"  fab small color="primary">
                            <v-icon small dark>mdi-pencil</v-icon>
                        </v-btn>
                    </template>
                    <span>change mileage</span>
                </v-tooltip>
            </v-list-item-title>
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

            <template v-for="(mileage) in getServices()">

                {{(() => {
                    progeressColor = getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))
                })()}}

                <v-list-item three-line>
                    <v-list-item-content class="justify-center">

                            <div class="subtitle-1 d-flex">
                                {{getMileageDescription(mileage.type)}}
                            </div>
                            <div class="d-flex">
                                <v-progress-linear
                                        :color="progeressColor"
                                        :value="getMileageProgress(mileage.mileage, mileage.lifetime)"
                                        height="10"
                                ></v-progress-linear>
                            </div>

                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action>
                        <v-icon  :color="progeressColor">mdi-cog-clockwise</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <span>{{getChangeThought(mileage)}} km</span>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action>
                        <v-icon :color="progeressColor">mdi-cogs</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <span>{{mileage.lifetime}} km</span>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action>
                        <v-icon :color="progeressColor">mdi-wrench</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <span>{{mileage.mileage}} km</span>
                    </v-list-item-content>
                </v-list-item>

            </template>
        </div>
    </div>
</template>

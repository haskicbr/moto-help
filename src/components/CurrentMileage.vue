<script>

    import {ServiceActionTypes} from "../store/actions/types";
    import dateFormat from "date-format";


    export default {
        name: "CurrentMileage",


        methods: {

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
                return this.$store.state.serviceTypes[type];
            },

            getProgressClass(progress) {

                if (progress >= 75) {

                    return "md-accent";
                }

                return "";
            }
        },

        data() {
            return {
                currentMileage: this.$store.state.currentMileage,
                isEditable: false
            }
        }
    }
</script>


<template>


    <div>


        <div class="md-headline" v-if="!isEditable" style="vertical-align: middle; display: flex; align-self: center">
            <div style="display: flex; align-items: center">current mileage: {{$store.state.currentMileage}} km</div>
            <md-button v-on:click="isEditable = !isEditable" class="md-icon-button md-tab-icon md-raised md-primary">
                <md-icon>edit</md-icon>
                <md-tooltip md-direction="bottom">change current mileage</md-tooltip>
            </md-button>


            <router-link to="/service/add">
                <md-button class="md-icon-button md-tab-icon md-raised md-primary">
                    <md-icon>add</md-icon>
                    <md-tooltip md-direction="bottom">add service</md-tooltip>
                </md-button>
            </router-link>
        </div>


        <div v-if="isEditable" class="md-layout md-gutter">
            <div class="md-layout-item md-xsmall-size-100  md-medium-size-25 md-size-25">

                <md-field>
                    <label>Change current mileage</label>
                    <md-input v-model="currentMileage" type="number"></md-input>
                </md-field>

                <md-button v-on:click="changeCurrent" class="md-layout-item md-size-100 md-raised md-primary">
                    Save
                </md-button>
            </div>
        </div>

        <br>



        <div v-if="$store.state.services.length !== 0" class="md-layout md-gutter">
            <div class="md-layout-item md-xsmall-size-100 md-medium-size-30 md-size-30">
                <md-list class="md-double-line md-elevation-4">

                    <md-subheader>Maintenance</md-subheader>

                    <template v-for="mileage in $store.state.services">
                        <md-list-item>
                            <div class="md-list-item-text">
                                <span> {{getMileageDescription(mileage.type)}}</span>
                                <span>lifetime {{mileage.lifetime}} km</span>
                                <span>change date {{dateFormat(mileage.date)}}</span>
                                <span>change mileage {{mileage.mileage}} km</span>

                                <br>

                                <md-progress-bar :class="getProgressClass(getMileageProgress(mileage.mileage, mileage.lifetime))"
                                                 md-mode="determinate"
                                                 :md-value="getMileageProgress(mileage.mileage, mileage.lifetime)">
                                </md-progress-bar>

                            </div>
                        </md-list-item>
                        <br>

                    </template>

                </md-list>
            </div>


        </div>
    </div>

</template>

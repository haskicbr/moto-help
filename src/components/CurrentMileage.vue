<script>

    import {MileageActionTypes} from "../store/actions/types";
    import dateFormat from "date-format";


    export default {
        name: "CurrentMileage",


        methods: {

            dateFormat(dateString) {
                return dateFormat('dd-MM-yyyy', new Date(dateString));
            },
            getMileageProgress(mileage, lifetime) {
                let compareMileage = this.currentMileage - mileage

                if (compareMileage > mileage) {
                    return 100;
                }

                let progress = compareMileage / lifetime * 100;

                if (progress < 0) {
                    return 0;
                }

                return parseInt(progress)
            },

            changeCurrent() {
                this.$store.dispatch(MileageActionTypes.CHANGE_CURRENT, this.currentMileage);
            },

            getMileageDescription(type) {
                return this.$store.state.mileageTypes[type];
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
                currentMileage: this.$store.state.currentMileage
            }
        }
    }
</script>


<template>


    <div>

        <h1>
            current mileage: {{$store.state.currentMileage}} km
        </h1>

        <div class="md-layout" style="justify-content: space-between">
            <div class="md-layout-item md-xsmall-size-100  md-medium-size-25 md-size-15">


                <md-field>
                    <label>Change current mileage</label>
                    <md-input v-model="currentMileage" type="number"></md-input>
                </md-field>


                <md-button v-on:click="changeCurrent" class="md-layout-item md-size-100 md-raised md-primary">
                    Save
                </md-button>


                <md-list class="md-double-line">

                    <md-subheader>Maintenance</md-subheader>

                    <template v-for="mileage in $store.state.mileages">
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
                        <md-divider></md-divider>
                    </template>

                </md-list>


            </div>
        </div>
    </div>

</template>

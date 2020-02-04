<script>

    import {MileageActionTypes} from "../store/actions/types";
    import dateFormat from "date-format";


    export default {

        name: "Mileage",

        components: {},

        methods: {

            getMileageDescription(type) {
                return this.$store.state.mileageTypes[type];
            },

            dateFormat(dateString) {
                return dateFormat('dd-MM-yyyy', new Date(dateString));
            },

            addMileage() {

                this.$store.dispatch(MileageActionTypes.ADD_MILEAGE, {
                    type: this.mileageType,
                    mileage: parseInt(this.mileageValue),
                    lifetime: parseInt(this.lifetime),
                    date: this.mileageDate
                });
            },

            deleteMileage(index) {
                this.$store.dispatch(MileageActionTypes.DELETE_MILEAGE, index);
            }
        },

        data() {

            let mileageTypesDescriptions = this.$store.state.mileageTypes;
            let mileageType = this.$store.state.defaultMileageType;

            return {
                lifetime: 100,
                mileageValue: this.$store.state.currentMileage,
                mileageDate : new Date(),
                mileageTypesDescriptions,
                mileageType,
            }
        }
    }
</script>

<template>

    <div class="md-layout" style="justify-content: space-between">
        <div class="md-layout-item md-small-size-100  md-size-50">


            <div class="md-layout-item  md-size-100">
                <md-field>
                    <label>lifetime</label>
                    <md-input v-model="lifetime" type="number"></md-input>
                </md-field>
            </div>


            <div class="md-layout-item  md-size-100">
                <md-field>
                    <label>Mileage</label>
                    <md-input v-model="mileageValue" type="number"></md-input>
                </md-field>
            </div>

            <div class="md-layout-item  md-size-100">
                <md-datepicker v-model="mileageDate" />
            </div>
            <br>
            <div class="md-layout-item md-size-100">
                <md-field>
                    <label for="mileageType">Type</label>
                    <md-select v-model="mileageType" name="mileageType" id="mileageType" md-dense>

                        <template v-for="(description, type) in mileageTypesDescriptions">
                            <md-option :value="type">{{description}}</md-option>
                        </template>

                    </md-select>
                </md-field>
            </div>

            <br>

            <md-button v-on:click="addMileage" class="md-layout-item md-size-100 md-raised md-primary">
                Save
            </md-button>
        </div>

        <div class="md-layout-item md-small-size-100 md-size-45">
            <div class="md-layout-item md-size-100">

                <md-list class="md-triple-line">
                    <md-list-item :key="key" v-for="(mileage,key) in $store.state.mileages">

                        <div class="md-list-item"></div>

                        <div class="md-list-item-text">
                            <span>{{getMileageDescription(mileage.type)}}</span>
                            <span>{{dateFormat(mileage.date)}}</span>
                            <span>{{mileage.value}} km</span>
                            <span>{{mileage.lifetime}} km</span>
                        </div>

                        <md-button v-on:click="deleteMileage(key)" class="md-icon-button md-raised md-accent ">
                            <md-icon>delete</md-icon>
                        </md-button>

                    </md-list-item>
                </md-list>
            </div>
        </div>
    </div>


</template>

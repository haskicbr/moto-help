<script>

    import {MileageActionTypes} from "../store/actions/types";
    import dateFormat from "date-format";


    export default {

        name: "Mileage",

        components: {},

        props: {
            visibleMileageForm: {
                type: Boolean,
                default: false
            }
        },

        methods: {

            changeVisibleMileageForm() {
                this.$props.visibleMileageForm = !this.$props.visibleMileageForm;
            },

            getMileageDescription(type) {
                return this.$store.state.mileageTypes[type];
            },

            dateFormat(dateString) {
                return dateFormat('dd-MM-yyyy', new Date(dateString));
            },

            addMileage() {

                this.changeVisibleMileageForm();

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


<style lang="scss">

    .add-mileage-container {
        margin-bottom: 15px;
    }

</style>

<template>
    <div>
        <div class="md-layout md-gutter">
            <template v-if="!visibleMileageForm">
                <div class="md-layout-item md-size=100 add-mileage-container">
                    <md-button v-on:click="changeVisibleMileageForm" class="md-icon-button md-raised md-primary">
                        <md-icon>add</md-icon>

                        <md-tooltip md-direction="right">Add mileage</md-tooltip>
                    </md-button>
                </div>
            </template>
        </div>

        <div class="md-layout md-gutter ">
            <template v-if="visibleMileageForm">
                <div class="md-layout-item    md-xsmall-size-100 md-small-size-50 md-medium-size-40  md-size-20">
                    <div class="md-layout-item md-size-100">
                        <md-field>
                            <label>lifetime</label>
                            <md-input v-model="lifetime" type="number"></md-input>
                        </md-field>
                    </div>

                    <div class="md-layout-item  md-size-100">
                        <md-datepicker v-model="mileageDate"/>
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
            </template>

            <div v-if="$store.state.mileages.length !== 0" class="md-layout-item md-xsmall-size-100 md-size-45 md-xlarge-size-25 md-size-50">
                <div class="md-layout-item md-size-100 md-elevation-4">

                    <md-list class="md-triple-line">
                        <md-list-item :key="key" v-for="(mileage,key) in $store.state.mileages">

                            <div class="md-list-item"></div>

                            <div class="md-list-item-text">
                                <span>{{getMileageDescription(mileage.type)}}</span>
                                <span>{{dateFormat(mileage.date)}}</span>
                                <span>change mileage: {{mileage.mileage}} km</span>
                                <span>lifetime: {{mileage.lifetime}} km</span>
                            </div>

                            <md-button v-on:click="deleteMileage(key)" class="md-icon-button md-raised md-accent ">
                                <md-icon>delete</md-icon>
                                <md-tooltip md-direction="left">Delete mileage</md-tooltip>
                            </md-button>

                        </md-list-item>
                    </md-list>
                </div>
            </div>
        </div>
    </div>


</template>

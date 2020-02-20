<script>

    import {ServiceActionTypes} from "../store/actions/types";
    import dateFormat from "date-format";


    export default {

        name: "Service",

        components: {},

        props: {
            visibleServiceForm: {
                type: Boolean,
                default: false
            }
        },

        methods: {

            changeVisibleServiceForm() {
                this.visibleServiceFormState = !this.visibleServiceFormState;
            },

            getServiceDescription(type) {
                return this.$store.state.serviceTypes[type];
            },

            dateFormat(dateString) {
                return dateFormat('dd-MM-yyyy', new Date(dateString));
            },

            addService() {

                this.changeVisibleServiceForm();

                this.$store.dispatch(ServiceActionTypes.ADD_MILEAGE, {
                    type: this.mileageType,
                    mileage: parseInt(this.mileageValue),
                    lifetime: parseInt(this.lifetime),
                    date: this.mileageDate
                });
            },

            deleteService(index) {
                this.$store.dispatch(ServiceActionTypes.DELETE_MILEAGE, index);
            }
        },

        data() {

            let serviceTypesDescriptions = this.$store.state.serviceTypes;
            let mileageType = this.$store.state.defaultServiceType;

            return {
                visibleServiceFormState : this.$props.visibleServiceForm,
                lifetime: 100,
                mileageValue: this.$store.state.currentMileage,
                mileageDate : new Date(),
                serviceTypesDescriptions,
                mileageType,
            }
        }
    }
</script>




<template>
    <div>
        <div class="md-layout md-gutter">
            <template v-if="!visibleServiceFormState">
                <div class="md-layout-item md-size=100 add-mileage-container">
                    <md-button v-on:click="changeVisibleServiceForm" class="md-icon-button md-raised md-primary">
                        <md-icon>add</md-icon>

                        <md-tooltip md-direction="right">Add mileage</md-tooltip>
                    </md-button>
                </div>
            </template>
        </div>

        <div class="md-layout md-gutter ">
            <template v-if="visibleServiceFormState">
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

                                <template v-for="(description, type) in serviceTypesDescriptions">
                                    <md-option :value="type">{{description}}</md-option>
                                </template>

                            </md-select>
                        </md-field>
                    </div>

                    <br>

                    <md-button v-on:click="addService" class="md-layout-item md-size-100 md-raised md-primary">
                        Save
                    </md-button>
                </div>
            </template>

            <div v-if="$store.state.services.length !== 0" class="md-layout-item md-xsmall-size-100 md-size-45 md-xlarge-size-25 md-size-50">
                <div class="md-layout-item md-size-100 md-elevation-4">

                    <md-list class="md-triple-line">
                        <md-list-item :key="key" v-for="(mileage,key) in $store.state.services">

                            <div class="md-list-item"></div>

                            <div class="md-list-item-text">
                                <span>{{getServiceDescription(mileage.type)}}</span>
                                <span>{{dateFormat(mileage.date)}}</span>
                                <span>change mileage: {{mileage.mileage}} km</span>
                                <span>lifetime: {{mileage.lifetime}} km</span>
                            </div>

                            <md-button v-on:click="deleteService(key)" class="md-icon-button md-raised md-accent ">
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

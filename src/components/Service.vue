<script>

    import {ServiceActionTypes} from "../store/actions/types";
    import dateFormat from "date-format";


    export default {

        name: "Service",

        props: {
            visibleServiceForm: {
                type: Boolean,
                default: false
            }
        },

        methods: {

            getServiceTypesAsArray() {

                let serviceTypesDescriptions = this.$store.state.serviceTypes;
                let serviceTypes = [];

                for (let key in serviceTypesDescriptions) {
                    serviceTypes.push({
                        key,
                        description: serviceTypesDescriptions[key].description
                    })
                }

                return serviceTypes;
            },

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

            let mileageType = this.$store.state.defaultServiceType;

            let serviceTypesDescriptions = this.getServiceTypesAsArray();


            return {
                visibleServiceFormState: this.$props.visibleServiceForm,
                lifetime: 100,
                mileageValue: this.$store.state.currentMileage,
                mileageDate: new Date().toISOString().substr(0, 10),
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
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">


                            <v-btn v-on="on" v-on:click="changeVisibleServiceForm"   class="mx-1" fab dark small color="primary">
                                <v-icon dark>mdi-plus</v-icon>
                            </v-btn>

                        </template>
                        <span>add mileage</span>
                    </v-tooltip>

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
                    <v-col cols="12">

                    </v-col>

                    <v-row>
                        <v-col cols="12" sm="12" md="12">
                            <v-dialog
                                    ref="dialog"
                                    v-model="modal"
                                    :return-value.sync="mileageDate"
                                    persistent
                                    width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                            v-model="mileageDate"
                                            label="Picker in dialog"
                                            prepend-icon="mdi-view-dashboard"
                                            readonly
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="mileageDate" scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(mileageDate)">OK</v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </v-col>
                    </v-row>

                    <v-row>

                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select
                                    :items="serviceTypesDescriptions"
                                    item-text="description"
                                    item-value="key"
                                    v-model="mileageType"
                                    label="Solo field"
                                    solo
                            ></v-select>
                        </v-col>
                    </v-row>
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

            <div v-if="$store.state.services.length !== 0"
                 class="md-layout-item md-xsmall-size-100 md-size-45 md-xlarge-size-25 md-size-50">
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

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
                return this.$store.state.serviceTypes[type].description;
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
                    date: this.mileageDate,
                    description: this.description
                });
            },

            goToAddServiceType(){
                this.$router.push('/service-types')
            },

            deleteService(index) {
                this.$store.dispatch(ServiceActionTypes.DELETE_MILEAGE, index);
            }
        },

        computed: {

          serviceTypes() {
              return this.$store.state.serviceTypes;
          }

        },

        data() {

            let mileageType = this.$store.state.defaultServiceType;

            let serviceTypesDescriptions = this.getServiceTypesAsArray();

            return {
                visibleServiceFormState: this.$props.visibleServiceForm,
                lifetime: 100,
                description: '',
                mileageValue: this.$store.state.currentMileage,
                mileageDate: new Date().toISOString().substr(0, 10),
                serviceTypesDescriptions,
                mileageType,
                modal: false,
            }
        }
    }
</script>


<template>
    <v-card max-width="700px">
        <v-list-item>
            <v-list-item-content>
            <div class="md-layout md-gutter">
                <template v-if="!visibleServiceFormState">
                    <div class="md-layout-item md-size=100 add-mileage-container">
                        <label class="subtitle-1 font-weight-regular">Change services</label>



                        <template v-if="Object.keys(serviceTypes).length > 0">
                            <v-tooltip right>
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" v-on:click="changeVisibleServiceForm" class="mx-2" fab dark small
                                           color="primary">
                                        <v-icon dark>mdi-plus</v-icon>
                                    </v-btn>
                                </template>
                                <span>add service</span>
                            </v-tooltip>
                        </template>
                        <template v-else>

                            <v-tooltip right>
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" v-on:click="goToAddServiceType" class="mx-2" fab dark small
                                           color="primary">
                                        <v-icon dark>mdi-plus</v-icon>
                                    </v-btn>
                                </template>
                                <span>add service type</span>
                            </v-tooltip>
                        </template>


                    </div>
                </template>
            </div>

            <template v-if="visibleServiceFormState">
                <div>
                    <span class="subtitle-1">lifetime</span>
                    <v-text-field style="font-size: 16px" type="number" v-model="lifetime"></v-text-field>

                    <span class="subtitle-1">description</span>
                    <v-text-field style="font-size: 16px" type="text" v-model="description"></v-text-field>

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
                                            label="Change date"
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
                        <v-col class="d-flex" cols="12">
                            <v-select full-width
                                      :items="serviceTypesDescriptions"
                                      item-text="description"
                                      item-value="key"
                                      v-model="mileageType"
                                      label="Solo field"
                                      solo
                            ></v-select>
                        </v-col>
                    </v-row>

                    <v-btn color="primary" style="width: 100%" v-on:click="addService">
                        Save
                    </v-btn>
                </div>
            </template>

            </v-list-item-content>
        </v-list-item>

            <template v-if="$store.state.services.length !== 0">
                <v-list-item :key="key" v-for="(mileage,key) in $store.state.services">
                    <v-list-item-content>

                        <v-list-item-title class="subtitle-1">{{getServiceDescription(mileage.type)}}</v-list-item-title>
                        <v-list-item-title>{{dateFormat(mileage.date)}}</v-list-item-title>
                        <v-list-item-title>change mileage: {{mileage.mileage}} km</v-list-item-title>
                        <v-list-item-title>lifetime: {{mileage.lifetime}} km</v-list-item-title>

                        <template v-if="mileage.description">
                            <v-list-item-title>description: {{mileage.description}}</v-list-item-title>
                        </template>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        v-on="on" v-on:click="deleteService(key)"
                                        small
                                        absolute

                                        fab
                                        middle
                                        right
                                        depressed
                                >
                                    <v-icon>mdi-minus</v-icon>
                                </v-btn>
                            </template>
                            <span>delete service</span>
                        </v-tooltip>

                    </v-list-item-content>
                </v-list-item>
            </template>
    </v-card>
</template>

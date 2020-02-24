<script>

    import {ServiceActionTypes} from "../store/actions/types";
    import { v1 as uuidv1 } from "uuid";

    export default {
        name: "ServiceTypes",


        methods: {


            deleteType(type) {
                this.$store.dispatch(ServiceActionTypes.DELETE_TYPE, type);
            },

            saveType() {
                this.$store.dispatch(ServiceActionTypes.ADD_TYPE, {
                    type: uuidv1(),
                    description: this.mileageDescription,
                });
            },

            checkExistsServiceWithType(type) {

                if (this.$store.state.services.length !== 0) {

                    let existsTypes = this.$store.state.services.filter((mileage) => {
                        return mileage.type === type;
                    });

                    if (existsTypes.length !== 0) {
                        return true;
                    }
                }

                return false;
            }
        },

        data() {
            return {
                mileageDescription: "",
            }
        }
    }
</script>

<template>

    <v-card max-width="700px">
        <v-list-item>
            <v-list-item-content>
                <div class="md-layout md-gutter ">

                    <div>
                        <v-text-field label="Description" style="font-size: 24px" type="text"
                                      v-model="mileageDescription"></v-text-field>
                    </div>
                    <v-btn style="width:100%" v-on:click="saveType" color="primary">add service type</v-btn>
                </div>
            </v-list-item-content>
        </v-list-item>

        <template v-if="Object.keys($store.state.serviceTypes).length !== 0">
            <v-list-item :key="type" v-for="(item,type) in $store.state.serviceTypes">
                <v-list-item-content>
                    <v-list-item-title>{{item.description}}</v-list-item-title>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn :disabled="checkExistsServiceWithType(type)"
                                   v-on="on" v-on:click="deleteType(type)"
                                   x-small
                                   absolute

                                   fab
                                   middle
                                   right
                                   depressed
                            >
                                <v-icon>mdi-minus</v-icon>
                            </v-btn>
                        </template>
                        <span>delete</span>
                    </v-tooltip>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-card>
</template>

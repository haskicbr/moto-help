<script>

import {ServiceActionTypes} from "../../store/actions/types";
import {v1 as uuidv1} from "uuid";
import {validationRules} from "../../validation";

export default {
    name: "ServiceTypes",
    methods: {
        deleteType(type) {
            this.$store.dispatch(ServiceActionTypes.DELETE_TYPE, type);
        },
        saveType() {
            if (this.mileageDescription.trim() !== "") {
                this.$store.dispatch(ServiceActionTypes.ADD_TYPE, {
                    type: uuidv1(),
                    description: this.mileageDescription,
                });
            }
            this.mileageDescription = "";
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
            formIsValid: true,
            rules: {
                required: validationRules.required(),
            },

            mileageDescription: "",
        }
    }
}
</script>

<template>

    <div>
        <v-list-item>
            <v-list-item-content>
                <v-form
                    v-model="formIsValid"
                    v-on:submit.prevent="saveType">
                    <div>
                        <v-text-field :label="$store.getters.languages('DESCRIPTION')" type="text"
                                      :rules="[...rules.required]"
                                      v-model="mileageDescription"></v-text-field>
                    </div>
                    <v-btn
                        :disabled="!formIsValid"
                        style="width:100%"
                        type="submit"
                        color="primary">
                        {{ $store.getters.languages('ADD') }}
                    </v-btn>
                </v-form>
            </v-list-item-content>
        </v-list-item>

        <template v-if="Object.keys($store.state.serviceTypes).length !== 0">
            <v-list-item :key="type" v-for="(item,type) in $store.state.serviceTypes">
                <v-list-item-content>
                    <v-list-item-title>{{ item.description }}</v-list-item-title>
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
                        <span>{{ $store.getters.languages('DELETE') }}</span>
                    </v-tooltip>
                </v-list-item-content>
            </v-list-item>
        </template>
    </div>
</template>

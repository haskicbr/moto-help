<script>

    import {MileageActionTypes} from "../store/actions/types";

    export default {
        name: "MileageTypes",


        methods: {


            deleteType(type) {
                this.$store.dispatch(MileageActionTypes.DELETE_TYPE, type);
            },

            saveType() {
                this.$store.dispatch(MileageActionTypes.ADD_TYPE, {
                    type: this.mileageType,
                    description: this.mileageDescription,
                });
            },

            checkExistsMileageWithType(type) {

                if (this.$store.state.mileages.length !== 0) {

                    let existsTypes = this.$store.state.mileages.filter((mileage) => {
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
                mileageType: "",
                mileageDescription: "",
            }
        }
    }
</script>

<template>

    <div>

        <div class="md-layout md-gutter ">
            <template>
                <div class="md-layout-item    md-xsmall-size-100 md-small-size-50 md-medium-size-40  md-size-20">
                    <div class="md-layout-item md-size-100">
                        <md-field>
                            <label>type</label>
                            <md-input v-model="mileageType" type="text"></md-input>
                        </md-field>
                    </div>

                    <div class="md-layout-item  md-size-100">
                        <md-field>
                            <label>description</label>
                            <md-input v-model="mileageDescription" type="text"></md-input>
                        </md-field>
                    </div>

                    <br>

                    <md-button v-on:click="saveType" class="md-layout-item md-size-100 md-raised md-primary">
                        Save
                    </md-button>
                </div>
            </template>

            <div v-if="Object.keys($store.state.mileageTypes).length !== 0"
                 class="md-layout-item md-xsmall-size-100 md-size-45 md-xlarge-size-25 md-size-50">
                <div class="md-layout-item md-size-100 md-elevation-4">

                    <md-list class="md-triple-line">
                        <md-list-item :key="type" v-for="(description, type) in $store.state.mileageTypes">

                            <div class="md-list-item"></div>

                            <div class="md-list-item-text">
                                <span>{{type}}</span>
                                <span>{{description}}</span>
                            </div>

                            <div v-if="!checkExistsMileageWithType(type)">
                                <md-button v-on:click="deleteType(type)" class="md-icon-button md-raised md-accent ">
                                    <md-icon>delete</md-icon>
                                </md-button>
                                <md-tooltip md-direction="left">Delete mileage type</md-tooltip>
                            </div>
                            <div v-else>
                                <md-button class="md-icon-button md-raised md-accent" :disabled="true">
                                    <md-icon>delete</md-icon>
                                </md-button>

                                <md-tooltip md-direction="left">Mileage type already used</md-tooltip>
                            </div>


                        </md-list-item>
                    </md-list>
                </div>
            </div>
        </div>
    </div>
</template>

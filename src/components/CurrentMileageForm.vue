<script>
import {ServiceActionTypes} from "../store/actions/types";

export default {
    name: "CurrentMileageForm",

    watch: {
        isIncrease(next, prev) {
            this.handleChangeMileage(next, true);
        },

        isDecrease(next, prev) {
            this.handleChangeMileage(next, false);
        }
    },
    methods: {

        handleChangeMileage(isActive, isIncrease) {
            if (isActive) {

                let currentMileage = this.$store.getters.currentMileage;
                let timeOut = 150;
                let value = 1;
                const updateMileage = () => {

                    if (isIncrease) {
                        currentMileage = currentMileage + value;
                    } else if (currentMileage > 0) {
                        currentMileage = currentMileage - value;
                    }

                    if (currentMileage < 0) {
                        currentMileage = 0;
                    }

                    if (value < 10) {
                        value += 1;
                    }
                    this.$store.dispatch(ServiceActionTypes.CHANGE_CURRENT_MILEAGE, currentMileage);

                    return true;
                }

                updateMileage();

                this.intervalTimer = setInterval(() => {
                    updateMileage();
                }, timeOut);

            } else {
                if (this.intervalTimer) {
                    clearInterval(this.intervalTimer);
                }
            }
        },
        changeCurrent() {
            this.isEditable = false;
            this.$store.dispatch(ServiceActionTypes.CHANGE_CURRENT_MILEAGE, this.currentMileage);
        },
    },
    data() {
        return {
            currentMileage: this.$store.getters.currentMileage,
            isEditable: false,
            isDecrease: false,
            isIncrease: false,
        }
    }
}
</script>

<template>
    <div>
        <v-list-item class="d-flex">
            <v-list-item-content class="d-flex justify-content-center" v-if="!isEditable">
                <v-list-item-title>
                    <h3 class="">current transport {{ $store.getters.currentTransport.name }}</h3>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content style="padding-right: 20px">

                <h4 class="d-flex" style="justify-content: flex-end">current mileage</h4>

                <h2 class="d-flex p-5" style="justify-content: flex-end">
                    {{
                        $store.getters.currentMileage
                    }} {{ $store.getters.languages($store.state.settings.units.distance) }}
                </h2>

            </v-list-item-content>
            <v-list-item-content>
                <div style="display: flex">

                    <v-btn v-touch="{
                                start: () => {
                                    isIncrease = true;
                                },
                                end: () => {
                                    isIncrease = false;
                                },
                            }" class="mx-2" fab>
                        <v-icon color="blue" large dark>mdi-plus</v-icon>
                    </v-btn>

                    <v-btn v-touch="{
                                start: () => {
                                    isDecrease = true;
                                },
                                end: () => {
                                    isDecrease = false;
                                },
                            }" class="mx-2" fab>
                        <v-icon color="red" large dark>mdi-minus</v-icon>
                    </v-btn>
                </div>
            </v-list-item-content>
        </v-list-item>
    </div>
</template>
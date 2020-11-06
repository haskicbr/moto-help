<template>
    <v-expansion-panels>
        <v-expansion-panel style="margin-bottom: 10px">
            <v-expansion-panel-header>
                <span class="d-flex" style="width: 50%">{{ getMileageDescription(mileage.type) }}</span>
                <div class="d-flex" style="padding-right: 20px; padding-left: 10px; width: 50%">
                    <v-progress-linear
                        :color="getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))"
                        :value="getMileageProgress(mileage.mileage, mileage.lifetime)"
                        height="10"
                    ></v-progress-linear>
                </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <div class="d-flex align-self-center">
                    <div class="d-flex pa-1">
                        <v-icon :color="getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))">
                            mdi-cog-clockwise
                        </v-icon>
                        <span class="pa-1">{{ getChangeThought(mileage) }} {{$store.getters.languages($store.state.settings.units.distance)}}</span>
                    </div>
                    <div class="d-flex pa-1">
                        <v-icon :color="getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))">
                            mdi-cogs
                        </v-icon>
                        <span class="pa-1">{{ mileage.lifetime }} {{$store.getters.languages($store.state.settings.units.distance)}}</span>
                    </div>
                    <div class="d-flex pa-1">
                        <v-icon :color="getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))">
                            mdi-wrench
                        </v-icon>
                        <span class="pa-1">{{ mileage.mileage }} {{$store.getters.languages($store.state.settings.units.distance)}}</span>
                    </div>
                </div>

                <v-list-item v-if="mileage.description">
                    <div>
                        <span>{{ mileage.description }}</span>
                    </div>
                </v-list-item>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import dateFormat from "date-format";

export default {
    name: "CurrentMileageServices",
    props: ['mileage'],


    methods: {

        dateFormat(dateString) {
            return dateFormat('dd-MM-yyyy', new Date(dateString));
        },
        getMileageProgress(mileage, lifetime) {

            let compareMileage = this.$store.getters.currentMileage - mileage;

            let progress = compareMileage / lifetime * 100;

            if (progress > 100) {
                return 100;
            }

            if (progress < 0) {
                return 0;
            }

            return parseInt(progress)
        },

        getMileageDescription(type) {
            return this.$store.state.serviceTypes[type].description;
        },

        getChangeThought(mileage) {

            if (mileage.mileage > this.$store.getters.currentMileage) {
                return mileage.lifetime;
            }

            let change = mileage.lifetime + mileage.mileage - this.$store.getters.currentMileage;

            if (change < 0) {
                return 0;
            }

            return change;
        },

        getProgressColor(progress) {

            if (progress >= 90) {
                return "red";
            } else if (progress >= 70) {
                return "orange";
            }

            return "blue";
        }
    },

    data() {
        return {
            showMore: false
        }
    }
}
</script>
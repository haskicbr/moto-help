<template>
    <div>
        <v-list-item three-line>
            <v-list-item-content class="justify-center">

                <div class="subtitle-1 d-flex ">

                    <div style="width: 80%">
                        <span  class="d-flex align-center">{{getMileageDescription(mileage.type)}}</span>
                    </div>
                    <v-btn x-small class="d-flex mx-2" fab v-on:click="showMore= !showMore">
                        <v-icon  v-if="!showMore">mdi-layers-search-outline</v-icon>
                        <v-icon v-if="showMore">mdi-layers</v-icon>
                    </v-btn>
                </div>
                <div class="d-flex">
                    <v-progress-linear
                            :color="getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))"
                            :value="getMileageProgress(mileage.mileage, mileage.lifetime)"
                            height="10"
                    ></v-progress-linear>
                </div>

            </v-list-item-content>
        </v-list-item>

        <template v-if="showMore">

            <v-list-item>
                <v-list-item-action>
                    <v-icon :color="getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))">mdi-cog-clockwise</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <span>{{getChangeThought(mileage)}} km</span>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-action>
                    <v-icon :color="getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))">mdi-cogs</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <span>{{mileage.lifetime}} km</span>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-action>
                    <v-icon :color="getProgressColor(getMileageProgress(mileage.mileage, mileage.lifetime))">mdi-wrench</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <span>{{mileage.mileage}} km</span>
                </v-list-item-content>
            </v-list-item>

            <v-list-item v-if="mileage.description">
                <div >
                    <span>{{mileage.description}}</span>
                </div>
            </v-list-item>
        </template>
    </div>
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

                let compareMileage = this.$store.state.currentMileage - mileage;

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

                if (mileage.mileage > this.$store.state.currentMileage) {
                    return mileage.lifetime;
                }

                let change = mileage.lifetime + mileage.mileage - this.$store.state.currentMileage;

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
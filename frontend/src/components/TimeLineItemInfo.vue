<script>
    export default {
        name: "TimeLineItemInfo",

        props: [
            'service', 'mileage'
        ],

        methods: {

            getMileageDescription(type) {
                return this.$store.state.serviceTypes[type].description;
            },

            getMileageProgress(mileage, lifetime, currentMileage) {

                let compareMileage = currentMileage - mileage;

                let progress = compareMileage / lifetime * 100;

                if (progress > 100) {
                    return 100;
                }

                if (progress < 0) {
                    return 0;
                }

                return parseInt(progress)
            },

            getProgressColor(progress) {

                if (progress >= 90) {
                    return "red";
                } else if (progress >= 70) {
                    return "orange";
                }

                return "blue";
            },
            getChangeThought(mileage, currentMileage) {

                if (mileage.mileage > currentMileage) {
                    return mileage.lifetime;
                }

                let change = mileage.lifetime + mileage.mileage - currentMileage;

                if (change < 0) {
                    return 0;
                }

                return change;
            },
        },


        data() {


            let service = this.$props.service;
            let mileage = this.$props.mileage;

            let progressColor = this.getProgressColor(this.getMileageProgress(service.mileage, service.lifetime, mileage));

            return {
                showInfo: false,
                progressColor
            }
        }
    }
</script>

<template>
    <div class="justify-center">
        <v-list-item-content class="justify-center">
            <button v-on:click="showInfo = !showInfo" class="v-btn pointer">
                {{getMileageDescription(service.type)}}

                <template v-if="!showInfo">
                    <v-icon>mdi-magnify</v-icon>
                </template>
                <template v-else>
                    <v-icon>mdi-magnify-minus-outline</v-icon>
                </template>
            </button>
        </v-list-item-content>

        <template v-if="showInfo">

            <v-list-item class="justify-center flex-wrap">
                <v-btn text>
                    <span>{{getChangeThought(service, mileage)}} km</span>
                    <v-icon class="mx-1" :color="progressColor">mdi-cog-clockwise</v-icon>
                </v-btn>
            </v-list-item>

            <v-list-item class="justify-center flex-wrap">
                <v-btn text>
                    <span>{{service.lifetime}} km</span>
                    <v-icon class="mx-1" :color="progressColor">mdi-cogs</v-icon>
                </v-btn>

                <v-btn text>
                    <span>{{service.mileage}} km</span>
                    <v-icon class="mx-1" icon="mdi-lock" :color="progressColor">mdi-wrench</v-icon>
                </v-btn>
            </v-list-item>
            <v-progress-linear
                    :color="progressColor"
                    :value="getMileageProgress(service.mileage, service.lifetime, mileage)"
                    height="10"
            ></v-progress-linear>
        </template>
    </div>
</template>
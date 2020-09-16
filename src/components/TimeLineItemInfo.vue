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


    <div>

        <v-list-item v-on:click="showInfo = !showInfo">
            <v-list-item-action>
                <template v-if="!showInfo">
                    <v-icon>mdi-magnify</v-icon>
                </template>
                <template v-else>
                    <v-icon>mdi-magnify-minus-outline</v-icon>
                </template>
            </v-list-item-action>

            <v-list-item-content>
                {{getMileageDescription(service.type)}}
            </v-list-item-content>

        </v-list-item>


        <template v-if="showInfo">
            <v-list-item>
                <v-list-item-action>
                    <v-icon :color="progressColor">mdi-cog-clockwise</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <span>{{getChangeThought(service, mileage)}} km</span>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-action>
                    <v-icon :color="progressColor">mdi-cogs</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <span>{{service.lifetime}} km</span>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-action>
                    <v-icon icon="mdi-lock" :color="progressColor">mdi-wrench</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <span>{{service.mileage}} km</span>
                </v-list-item-content>
            </v-list-item>

            <v-progress-linear
                    :color="progressColor"
                    :value="getMileageProgress(service.mileage, service.lifetime, mileage)"
                    height="10"
            ></v-progress-linear>

        </template>
    </div>

</template>
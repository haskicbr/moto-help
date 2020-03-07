<script>
    export default {
        name: "TimeLine",


        methods: {


            getServicesByDate(date) {
                return this.$store.state.services.filter((item) => {
                    return item.date === date
                })
            },
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

        computed: {
            mileageHistory() {
                return this.$store.state.mileageHistory;
            },
        }
    }
</script>

<template>

    <div>
        <v-timeline dense clipped>
            <v-timeline-item color="grey" :key="key" v-for="(val, key) in mileageHistory">

                <v-row justify="center">
                    <v-col cols="3">
                        {{key}}
                    </v-col>
                    <v-col cols="3">
                        {{val}} km
                    </v-col>
                </v-row>

                <div class="mb-4" small v-if="getServicesByDate(key).length > 0">
                    <div v-for="service in getServicesByDate(key)">
                        <div class="justify-center">

                            <v-list-item-content class="justify-center">
                                <div class="v-btn">
                                    {{getMileageDescription(service.type)}}
                                </div>
                            </v-list-item-content>

                            {{(() => {
                                progeressColor = getProgressColor(getMileageProgress(service.mileage, service.lifetime, val))
                            })()}}

                            <v-list-item class="justify-center flex-wrap">
                                <v-btn text>
                                    <span>{{getChangeThought(service, val)}} km</span>
                                    <v-icon class="mx-1" :color="progeressColor">mdi-cog-clockwise</v-icon>
                                </v-btn>
                            </v-list-item>

                            <v-list-item class="justify-center flex-wrap">
                                <v-btn text>
                                    <span>{{service.lifetime}} km</span>
                                    <v-icon class="mx-1" :color="progeressColor">mdi-cogs</v-icon>
                                </v-btn>

                                <v-btn text>
                                    <span>{{service.mileage}} km</span>
                                    <v-icon class="mx-1" icon="mdi-lock" :color="progeressColor">mdi-wrench</v-icon>
                                </v-btn>
                            </v-list-item>
                            <v-progress-linear
                                    :color="progeressColor"
                                    :value="getMileageProgress(service.mileage, service.lifetime, val)"
                                    height="10"
                            ></v-progress-linear>

                        </div>

                    </div>
                </div>
            </v-timeline-item>
        </v-timeline>
    </div>

</template>


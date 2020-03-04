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
        <v-timeline
                :align-top="false"
                :dense="false"
                :reverse="false"
        >
            <v-timeline-item
                    v-for="(val, key) in mileageHistory"
                    :key="key"
                    :fill-dot="true"
                    :hide-dot="false"
                    :icon="'mdi-star'"
                    :icon-color="'white'"
                    :left="false"
                    :right="true"
                    :small="true"
            >
                <template v-slot:icon>
                    <v-avatar v-if="false">
                        <img src="http://i.pravatar.cc/64">
                    </v-avatar>
                </template>

                <span slot="opposite"><span class="title">{{key}} <br>{{val}} km</span></span>

                <v-card v-if="getServicesByDate(key).length > 0" class="">
                    <div v-for="service in getServicesByDate(key)">

                        <v-list-item three-line>
                            <v-list-item-content class="justify-center">

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

                                    <v-btn text>
                                        <span>{{service.lifetime}} km</span>
                                        <v-icon class="mx-1" :color="progeressColor">mdi-cogs</v-icon>
                                    </v-btn>

                                    <v-btn text>
                                        <span>{{service.mileage}} km</span>
                                        <v-icon class="mx-1" icon="mdi-lock" :color="progeressColor">mdi-wrench</v-icon>
                                    </v-btn>
                                </v-list-item>
                                <!--
                                                                <v-progress-linear
                                                                        :color="progeressColor"
                                                                        :value="getMileageProgress(mileage.mileage, mileage.lifetime)"
                                                                        height="10"
                                                                ></v-progress-linear>-->

                            </v-list-item-content>
                        </v-list-item>


                    </div>
                </v-card>
            </v-timeline-item>
        </v-timeline>

    </div>


</template>

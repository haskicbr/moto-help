<script>

    import TimeLineItemInfo from "./TimeLineItemInfo";

    export default {
        name: "TimeLineItem",

        props: [
            'date',
            'mileage'
        ],

        components: {
            TimeLineItemInfo
        },


        methods: {
            getServicesByDate(date) {
                return this.$store.state.services.filter((item) => {
                    return item.date === date
                })
            },
        },


        data() {


            return {
                showInfo: false
            }
        }
    }
</script>

<template>
    <div>
        <v-row justify="center">

            <button style="width: 100%" v-on:click="showInfo = !showInfo" class="v-btn pointer">
                <v-col cols="3">
                    {{date}}
                </v-col>
                <v-col cols="3">
                    {{mileage}} km
                </v-col>

                <template v-if="!showInfo">
                    <v-icon>mdi-magnify</v-icon>
                </template>
                <template v-else>
                    <v-icon>mdi-magnify-minus-outline</v-icon>
                </template>
            </button>


        </v-row>

        <div  class="mb-4" v-if="getServicesByDate(date).length > 0 && showInfo">
            <div v-for="(service, key) in getServicesByDate(date)">
                <TimeLineItemInfo :mileage="mileage" :key="key" :service="service"></TimeLineItemInfo>
            </div>
        </div>
    </div>
</template>
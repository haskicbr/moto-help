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
            <v-col cols="3">
                {{date}}
            </v-col>
            <v-col cols="3">
                {{mileage}} km
            </v-col>
        </v-row>

        <div class="mb-4" v-if="getServicesByDate(date).length > 0">
            <div v-for="(service, key) in getServicesByDate(date)">
                <TimeLineItemInfo :mileage="mileage" :key="key" :service="service"></TimeLineItemInfo>
            </div>
        </div>
    </div>
</template>
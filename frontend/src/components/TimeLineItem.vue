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

    <div v-if="getServicesByDate(date).length > 0">
        <v-list-item v-on:click="showInfo = !showInfo"   >
            <v-list-item-action>
                <template v-if="!showInfo">
                    <v-icon>mdi-magnify</v-icon>
                </template>
                <template v-else>
                    <v-icon>mdi-magnify-minus-outline</v-icon>
                </template>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>{{date}}</v-list-item-title>
                <v-list-item-subtitle>{{mileage}} km</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>


        <div v-if="showInfo" v-for="(service, key) in getServicesByDate(date)">
            <TimeLineItemInfo :mileage="mileage" :key="key" :service="service"></TimeLineItemInfo>
        </div>


        <v-divider :inset="false"></v-divider>

    </div>
</template>
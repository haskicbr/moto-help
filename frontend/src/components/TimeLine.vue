<script>

    import TimeLineItem from "./TimeLineItem";

    export default {
        name: "TimeLine",

        components: {
          TimeLineItem
        },

        methods: {


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
            <v-timeline-item hide-dot color="grey" :key="date" v-for="(val, date) in mileageHistory">
                <TimeLineItem  :key="date" v-bind:date="date" v-bind:mileage="val"></TimeLineItem>
            </v-timeline-item>
        </v-timeline>
    </div>

</template>


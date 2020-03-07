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

            <div :key="date" v-for="(val, date) in mileageHistory">
                <TimeLineItem  :key="date" v-bind:date="date" v-bind:mileage="val"></TimeLineItem>
            </div>

    </div>

</template>


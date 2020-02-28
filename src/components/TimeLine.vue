<script>
    export default {
        name: "TimeLine",


        computed: {
            mileageHistory() {
                return this.$store.state.mileageHistory;
            }


        }
    }
</script>

<template>


    <ul>

        <li v-for="(val, key) in mileageHistory">

            {{val}}

            <hr>

            {{key}}


        </li>

    </ul>

</template>

<script>
    export default {
        name: "Mileage",

        methods: {


            addMileage() {



                this.$store.commit('addMileage', {
                    mileage: {
                        action:      "checkPressure",
                        description: "Проверка давления в шинах",
                        mileageValue: 1000,
                    }
                })
            }


        }

    }
</script>

<template>


    <h1>

        <button v-on:click="addMileage">
            add mileage
        </button>

        {{$store.state.mileages}}
    </h1>


</template>

<script>

    import { MileageActions } from "../store/actions"

    export default {
        name: "Mileage",

        methods: {


            addMileage() {

                this.$store.commit(MileageActions.ADD_MILEAGE, {
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


    <div>
        <button v-on:click="addMileage">
            add mileage
        </button>

        <br>

        {{$store.state.mileages}}

    </div>


</template>

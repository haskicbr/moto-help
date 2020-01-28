<script>

    import {mdbRow, mdbCol, mdbContainer, mdbBtn, mdbNumericInput }  from "mdbvue"

    import { MileageActionTypes } from "../store/actions/actionTypes"

    export default {
        name: "Mileage",

        components: {mdbRow, mdbCol, mdbContainer, mdbBtn, mdbNumericInput },

        methods: {


            addMileage() {

                console.log(this.$refs.mileageInput.$attrs.value)

                this.$store.commit(MileageActionTypes.ADD_MILEAGE, {
                    mileage: {
                        action:      "checkPressure",
                        description: "Проверка давления в шинах",
                        mileageValue: this.mileageValue,
                    }
                })
            },

            data() {
                return {
                    mileageValue: null
                }
            }
        }
    }
</script>

<template>


    <div>


        <mdb-container>
            <mdb-row>
                <mdb-col  md="9" xs="12">
                    <mdb-numeric-input ref="mileageInput" label="Material input" type="number" />
                </mdb-col>
                <mdb-col center  :style="`align-items: self-end;`"  md="3" xs="12">
                    <mdb-btn block  v-on:click="addMileage" color="primary">Success</mdb-btn>
                </mdb-col>
            </mdb-row>
        </mdb-container>





        <br>

        {{$store.state.mileages}}

    </div>


</template>

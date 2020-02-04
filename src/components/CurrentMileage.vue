<script>

    import {MileageActionTypes} from "../store/actions/types";

    export default {
        name: "CurrentMileage",


        methods: {
            changeCurrent() {
                this.$store.dispatch(MileageActionTypes.CHANGE_CURRENT, this.currentMileage);
            }
        },

        data() {
            return {
                currentMileage: this.$store.state.currentMileage
            }
        }
    }
</script>


<template>


    <div>

        <h1>
            current mileage: {{$store.state.currentMileage}} km
        </h1>

        <div class="md-layout" style="justify-content: space-between">
            <div class="md-layout-item md-small-size-100  md-size-50">

                <div class="md-layout-item  md-size-100">
                    <md-field>
                        <label>Change current mileage</label>
                        <md-input v-model="currentMileage" type="number"></md-input>
                    </md-field>
                </div>

                <md-button v-on:click="changeCurrent" class="md-layout-item md-size-100 md-raised md-primary">
                    Save
                </md-button>

            </div>
        </div>
    </div>

</template>

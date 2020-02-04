<script>

    import {MileageActionTypes} from "../store/actions/types";
    import dateFormat from "date-format";


    export default {

        name: "Mileage",

        components: {},

        methods: {

            getLastMileage() {

                if (typeof (this.$store.state.mileages[0]) !== 'undefined') {
                    return parseInt(this.$store.state.mileages[0].value);
                }

                return 0;
            },

            dateFormat(dateString) {
                return dateFormat('dd-MM-yyyy', new Date(dateString));
            },

            addMileage() {

                this.$store.dispatch(MileageActionTypes.ADD_MILEAGE, {
                    action: "checkPressure",
                    description: this.mileageType,
                    value: parseInt(this.mileageValue),
                    limit: parseInt(this.mileageLimit),
                    date: this.mileageDate
                });
            },

            deleteMileage(index) {
                this.$store.dispatch(MileageActionTypes.DELETE_MILEAGE, index);
            }
        },

        data() {

            let mileageTypes = [
                "Проверка давления в шинах",
                "Проверка масла",
                "проверка топливных шлангов"
            ];

            return {
                mileageLimit: 0,
                mileageValue: this.$store.state.currentMileage,
                mileageType : mileageTypes[0],
                mileageTypes,
                mileageDate : new Date()
            }
        }
    }
</script>

<template>

    <div class="md-layout" style="justify-content: space-between">
        <div class="md-layout-item md-small-size-100  md-size-50">


            <div class="md-layout-item  md-size-100">
                <md-field>
                    <label>Mileage limit</label>
                    <md-input v-model="mileageLimit" type="number"></md-input>
                </md-field>
            </div>


            <div class="md-layout-item  md-size-100">
                <md-field>
                    <label>Mileage</label>
                    <md-input v-model="mileageValue" type="number"></md-input>
                </md-field>
            </div>

            <div class="md-layout-item  md-size-100">
                <md-datepicker v-model="mileageDate" />
            </div>
            <br>
            <div class="md-layout-item md-size-100">
                <md-field>
                    <label for="mileageType">Type</label>
                    <md-select v-model="mileageType" name="mileageType" id="mileageType" md-dense>

                        <template v-for="type in mileageTypes">
                            <md-option :value="type">{{type}}</md-option>
                        </template>

                    </md-select>
                </md-field>
            </div>

            <br>

            <md-button v-on:click="addMileage" class="md-layout-item md-size-100 md-raised md-primary">
                Save
            </md-button>
        </div>

        <div class="md-layout-item md-small-size-100 md-size-45">
            <div class="md-layout-item md-size-100">

                <md-list class="md-triple-line">
                    <md-list-item :key="key" v-for="(mileage,key) in $store.state.mileages">

                        <div class="md-list-item"></div>

                        <div class="md-list-item-text">
                            <span>{{mileage.action}}</span>
                            <span>{{mileage.description}}</span>
                            <span>{{dateFormat(mileage.date)}}</span>
                            <span>{{mileage.value}} km</span>
                        </div>

                        <md-button v-on:click="deleteMileage(key)" class="md-icon-button md-raised md-accent ">
                            <md-icon>delete</md-icon>
                        </md-button>

                    </md-list-item>
                </md-list>
            </div>
        </div>
    </div>


</template>

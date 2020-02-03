<script>


    import {MileageActionTypes} from "../store/actions/actionTypes";
    import dateFormat from "date-format";


    export default {

        name: "Mileage",

        components: {},

        methods: {


            dateFormat(date) {
                return dateFormat('dd-MM-yyyy', date);
            },

            addMileage() {

                this.$store.commit(MileageActionTypes.ADD_MILEAGE, {
                    action: "checkPressure",
                    description: this.mileageType,
                    value: this.mileageValue,
                    date: this.mileageDate
                })
            },
        },

        data() {


            let mileageTypes = [
                "Проверка давления в шинах",
                "Проверка масла",
                "проверка топливных шлангов"
            ];

            return {
                mileageValue: 0,
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
                    <md-list-item v-for="mileage in $store.state.mileages">

                        <div class="md-list-item"></div>

                        <div class="md-list-item-text">
                            <span>{{mileage.action}}</span>
                            <span>{{mileage.description}}</span>
                            <span>{{dateFormat(mileage.date)}}</span>
                            <span>{{mileage.value}} km</span>
                        </div>

                        <md-button class="md-icon-button md-list-action">
                            <!--<md-icon class="md-primary">star</md-icon>-->
                        </md-button>
                    </md-list-item>
                </md-list>
            </div>
        </div>
    </div>


</template>

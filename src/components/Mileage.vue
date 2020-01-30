<script>


    import { MileageActionTypes } from "../store/actions/actionTypes"

    export default {
        name: "Mileage",

        components: {},

        methods: {


            addMileage() {

                console.log(this.$refs.mileageInput.value)

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

        <!-- Material input -->
        <div class="md-form">
            <input type="text" id="12" class="form-control">
            <label for="12">Example label</label>
        </div>
        <div>
            <div class="row">

                <div class="col-md-4">
                    <div class="md-form">
                        <input ref="mileageInput" type="text" id="form1" class="form-control">

                    </div>
                </div>

                <div center  :style="`align-items: self-end;`"  md="3" xs="12">
                    <button v-on:click="addMileage" color="primary">Success</button>
                </div>
            </div>
        </div>

        <div class="container">
            <section>

                <!-- Grid row -->
                <!-- <div class="row mx-1"> -->

                <!-- Grid column -->
                <!-- <div class="col-md-12 mb-4"> -->

                <!-- Card -->
                <div class="col-md-4">

                    <!-- Card image -->
                    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap">

                    <!-- Card content -->
                    <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title"><a>Card title</a></h4>
                        <!-- Text -->
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p>
                        <!-- Button -->
                        <a href="#" class="btn-block btn btn-primary waves-effect waves-light">Button</a>

                    </div>

                </div>
                <!-- Card -->

                <!-- </div> -->
                <!-- Grid column -->

                <!-- </div> -->
                <!-- Grid row -->

            </section>
        </div>



        <br>

        {{$store.state.mileages}}

    </div>


</template>

<script>

    import EventBus from "../events/EventBus";
    import {ModalEventTypes} from "../events/types";
    import {AuthActionTypes} from "../store/actions/types";

    export default {
        name: "RateApp",


        mounted() {
            EventBus.$on(ModalEventTypes.SHOW_RATE_MODAL, () => {
                this.dialog = true;
            });
        },

        methods: {

            sendRate() {
                this.$store.dispatch(AuthActionTypes.RATE, {rate : this.rating, text: this.reviewText})
                    .then(() => {
                        this.dialog = false;
                    })
            }
        },

        data() {
            return {
                rating: 4.5,
                reviewText: "",
                dialog: false,
            }
        },
    }
</script>

<style lang="scss">
    .rating-container {
        svg {
            height: auto;
        }
    }
</style>


<template>
    <v-row justify="center">
        <v-dialog
                max-width="300"
                v-model="dialog"
        >
            <v-card
                    class="elevation-16 mx-auto"
                    max-width="300"
            >
                <v-card-title
                        class="headline"
                        primary-title
                >
                    Rate Our Application
                </v-card-title>
                <v-card-text>
                    If you enjoy using app, please take a few seconds to rate your experience with the app. It really
                    helps!

                    <div class="text-center rating-container">

                        <v-rating
                                v-model="rating"
                                :length="5"
                                color="red lighten-3"
                                background-color="grey lighten-2"
                                hover
                                x-large
                                half-increments
                        ></v-rating>

                    </div>
                </v-card-text>

                <v-textarea
                        v-model="reviewText"
                        style="padding: 0 10px 0 10px"
                        solo
                        name="input-7-4"
                        label="Review text"
                ></v-textarea>

                <v-divider></v-divider>

                <v-card-actions class="justify-space-between">
                    <v-btn
                            @click="dialog = false"
                            text>No Thanks
                    </v-btn>
                    <v-btn
                            @click="sendRate"
                            color="primary"
                            text
                    >
                        Rate Now
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

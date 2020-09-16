<script>
    import {AuthActionTypes, RegistrationsActionTypes} from "../../store/actions/types";
    import Registration from "./Registration";
    import Auth from "./Auth";

    export default {
        name: 'Login',

        components: {
            Registration,
            Auth
        },

        beforeMount() {
            if (this.$store.state.isLogged) {
                this.$router.push('/')
            }
        },

        methods: {

            showRegistrationForm() {
                this.isShowedRegistrationForm = true;
                this.isShowedAuthForm = false;
            },

            showAuthForm() {
                this.isShowedAuthForm = true;
                this.isShowedRegistrationForm = false;
            },

            authWithoutRegistration() {
                this.$store.dispatch(AuthActionTypes.AUTH_WITHOUT_REGISTRATION)
            }
        },

        data() {
            return {
                isShowedRegistrationForm: false,
                isShowedAuthForm: false
            }
        }
    }
</script>

<template>
    <div>
        <template>
            <v-banner one-line>
                <v-avatar
                        slot="icon"
                        color="primary accent-4"
                        size="40"
                >
                    <v-icon
                            icon="mdi-lock"
                            color="white"
                    >
                        mdi-wrench
                    </v-icon>
                </v-avatar>
                <span class="subtitle-1">
                    moto.help is a free app to help for service motorcycles
                </span>
            </v-banner>

            <template>

                <br>

                <div class="d-flex justify-center">
                    <v-btn text color="primary accent-4" v-on:click="showRegistrationForm">Start new history</v-btn>
                    <v-btn text color="success" v-on:click="showAuthForm">Sign in</v-btn>
                </div>

                <Registration v-if="isShowedRegistrationForm" />
                <Auth v-if="isShowedAuthForm" />

                <v-btn text block color="primary accent-4" v-on:click="authWithoutRegistration">Without registration
                </v-btn>
            </template>
        </template>
    </div>

</template>
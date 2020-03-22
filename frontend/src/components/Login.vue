<script>
    import {AuthActionTypes, RegistrationsActionTypes} from "../store/actions/types";
    import Registration from "./Registration";

    export default {
        name: 'Login',

        components: {
          Registration
        },

        beforeMount() {
            if(this.$store.state.isLogged) {
                this.$router.push('/')
            }
        },

        methods: {

            showRegistrationForm() {
                this.isShowedRegistrationForm = true;
            },

            loginWithoutRegistration() {
                this.$store.dispatch(AuthActionTypes.AUTH_WITHOUT_REGISTRATION)
            }
        },

        data() {
            return {
                isShowedRegistrationForm: false
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
                <v-btn  text block color="primary accent-4" v-on:click="showRegistrationForm">Start new history</v-btn>
                <Registration v-if="isShowedRegistrationForm" />
                <v-btn text block color="primary accent-4" v-on:click="loginWithoutRegistration">Without registration </v-btn>
            </template>
        </template>
    </div>

</template>
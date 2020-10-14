<script>
import {AuthActionTypes, RegistrationsActionTypes} from "../../store/actions/types";
import Registration from "./Registration";
import Auth from "./Auth";
import ChangeLanguageOptionList from "../ChangeLanguageOptionList";

export default {
    name: 'Login',

    components: {
        ChangeLanguageOptionList,
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
            <v-banner one-line class="d-flex justify-content-center align-center">
                <v-avatar class="d-flex"
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
                <div class="d-flex subtitle-1 align-center" style="min-height: 200px;padding: 10px;">
                    {{ $store.getters.languages("LOGIN_BANNER_TEXT") }}
                </div>
            </v-banner>
            <div class="pa-10 d-flex justify-center">
                <ChangeLanguageOptionList/>
            </div>
            <template>
                <div class="d-flex justify-center">
                    <v-btn text color="primary accent-4" v-on:click="showRegistrationForm">
                        {{ $store.getters.languages("REGISTRATION") }}
                    </v-btn>
                    <v-btn text color="success" v-on:click="showAuthForm">{{
                            $store.getters.languages("SIGN_IN")
                        }}
                    </v-btn>
                </div>
                <Registration v-if="isShowedRegistrationForm"/>
                <Auth v-if="isShowedAuthForm"/>
                <v-btn text block color="primary accent-4" v-on:click="authWithoutRegistration">
                    {{ $store.getters.languages("SIGN_IN_WITHOUT_REGISTRATION") }}
                </v-btn>
            </template>
        </template>
    </div>

</template>
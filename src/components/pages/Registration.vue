<script>

    import router from "../../routes";

    import {RegistrationsActionTypes} from "../../store/actions/types";
    import {validationRules} from "../../validation";
    import {AuthActionTypes} from "../../store/actions/types";

    export default {
        data: () => ({
            rules: {
                emailServer: true,
                passwordServer: true,
                required: validationRules.required(),
                min: validationRules.min(6),
                email: validationRules.email(),
            },
            valid: true,
            password: '',
            email: '',
            isShowedPassword: false,
        }),

        methods: {

            clearServerErrors() {
                this.rules.emailServer = true;
                this.rules.passwordServer = true;
            },

            validate() {

                if (this.$refs.form.validate()) {

                    this.$store.dispatch(RegistrationsActionTypes.REGISTRATION, {
                        email: this.email,
                        password: this.password
                    }).catch((error) => {
                        if (error.response) {

                            let errors = error.response.data;

                            this.rules.emailServer = errors.email ? errors.email.join(' ') : true;
                            this.rules.passwordServer = errors.password ? errors.password.join(' ') : true;
                        }
                    }).then(function () {
                        // always executed
                    });
                }
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>

<template>


        <v-col cols="12">

            <v-form
                    ref="form"
                    v-model="valid"
                    v-on:submit.prevent="validate"
            >

                <v-text-field
                        v-model="email"
                        :rules="[...rules.email, rules.emailServer]"
                        :label="$store.getters.languages('EMAIL')"
                        required
                        v-on:keydown="clearServerErrors"
                ></v-text-field>

                <v-text-field
                        v-model="password"
                        :append-icon="isShowedPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[...rules.required, ...rules.min, rules.passwordServer]"
                        :type="isShowedPassword ? 'text' : 'password'"
                        name="input-10-1"
                        :label="$store.getters.languages('PASSWORD')"
                        hint="At least 8 characters"
                        counter
                        v-on:keydown="clearServerErrors"
                        @click:append="isShowedPassword = !isShowedPassword"
                ></v-text-field>

                <v-btn class="mt-10"
                       :disabled="!valid"
                       color="primary"
                       style="width: 100%"
                       type="submit"
                >
                    {{ $store.getters.languages("REGISTRATION_BUTTON") }}
                </v-btn>
            </v-form>
        </v-col>

</template>
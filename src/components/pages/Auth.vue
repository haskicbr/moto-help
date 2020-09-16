<script>

    import router from "../../routes";
    import {AuthActionTypes} from "../../store/actions/types";

    export default {

        name: "Auth",

        data: () => ({
            valid: true,
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            rules: {
                emailServer: true,
                passwordServer: true,
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => ('The email and password you entered don\'t match'),
            },
            password: '',
            isShowedPassword: false,

        }),

        methods: {

            clearServerErrors() {
                this.rules.emailServer = true;
                this.rules.passwordServer = true;
            },

            validate() {

                if (this.$refs.form.validate()) {

                    this.$store.dispatch(AuthActionTypes.AUTH, {
                        email: this.email,
                        password: this.password
                    }).catch((error) => {
                        this.rules.emailServer = "user not found"
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
                    :rules="[...emailRules, rules.emailServer]"
                    label="E-mail"
                    required
                    v-on:keydown="clearServerErrors"
            ></v-text-field>

            <v-text-field
                    v-model="password"
                    :append-icon="isShowedPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="isShowedPassword ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
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
                Login
            </v-btn>
        </v-form>
    </v-col>

</template>
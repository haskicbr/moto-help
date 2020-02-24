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
                <v-btn text color="primary accent-4" v-on:click="login">Start new history</v-btn>
                <v-btn text color="primary accent-4" v-on:click="login">Registration</v-btn>
            </template>
        </template>
    </div>

</template>

<script>
    import {SystemMutationTypes} from "../store/mutations/types";

    export default {
        name: 'Login',

        beforeMount() {
            if(this.$store.state.isLogged) {
                this.$router.push('/')
            }
        },

        methods: {
            login() {

                this.$store.commit(SystemMutationTypes.LOGIN, true)
                this.$router.push('/')
            }
        }
    }
</script>

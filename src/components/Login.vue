<template>
    <div>
        <template>
            <div>
                <md-empty-state
                        md-icon="devices_other"
                        md-label="Create your first project"
                        md-description="Creating project, you'll be able to upload your design and collaborate with people.">
                    <md-button class="md-primary md-raised" v-on:click="login">Start free</md-button>
                    <md-button class="md-primary md-raised" v-on:click="login">Registration</md-button>
                </md-empty-state>
            </div>
        </template>
    </div>

</template>

<script>
    export default {
        name: 'Login',

        beforeMount() {
            if(this.$store.state.isLogged) {
                this.$router.push('/')
            }
        },

        methods: {
            login() {
                this.$store.state.isLogged = true;
                this.$router.push('/')
            }
        }
    }
</script>

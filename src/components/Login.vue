<template>
    <div>
        <template>
            <div>
                <md-empty-state
                        md-icon="devices_other"
                        md-label="Create your first project"
                        md-description="Creating project, you'll be able to upload your design and collaborate with people.">
                    <md-button class="md-primary md-raised" v-on:click="login">Create first project</md-button>
                </md-empty-state>
            </div>
        </template>
    </div>

</template>

<script>
    export default {
        name: 'DialogConfirm',
        data: () => ({
            active: true,
            value: null
        }),
        methods: {
            onConfirm() {
                this.value = 'Agreed'
            },
            onCancel() {
                this.value = 'Disagreed'
            },
            login() {
                this.$store.state.isLogged = true;
            }
        }
    }
</script>

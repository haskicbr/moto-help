<template>
    <div>

        <div class="md-layout">

            <div class="md-layout-item md-size-50 md-small-size-100">

                <md-card md-with-hover>
                    <md-ripple>
                        <md-card-header>
                            <div class="md-title">Go to use free moto.help service for yours motorcycle maintenance.
                            </div>
                            <div class="md-subhead">It also have a ripple</div>
                        </md-card-header>

                        <md-card-content>
                            Go to use free moto.help service for yours motorcycle maintenance.
                        </md-card-content>

                        <md-card-actions>
                            <md-button v-on:click="login" class="md-primary md-raised">
                                Use free
                            </md-button>
                        </md-card-actions>
                    </md-ripple>
                </md-card>
            </div>


        </div>

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

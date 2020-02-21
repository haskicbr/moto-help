<style lang="scss">
    .theme--dark.v-application {
        background: #484848 !important;
    }

</style>


<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
        >
            <v-list dense>
                <template v-if="$store.state.isLogged">
                    <router-link tag="div" v-on:click="closeMenu" to="/">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-view-dashboard</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title class="subtitle-1">

                                <span class="md-list-item-text" v-on:click="closeMenu">
                                    current mileage
                                </span>

                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>


                    <router-link tag="div" v-on:click="closeMenu" to="/service">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-view-dashboard</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>

                                <v-list-item-title class="subtitle-1">
                                <span
                                        class="md-list-item-text"
                                        v-on:click="closeMenu">services</span>
                                </v-list-item-title>

                            </v-list-item-content>
                        </v-list-item>
                    </router-link>


                    <router-link tag="div" v-on:click="closeMenu" to="/service-types">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-view-dashboard</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>

                                <v-list-item-title class="subtitle-1">
                                    <span v-on:click="closeMenu">service types</span>
                                </v-list-item-title>

                            </v-list-item-content>
                        </v-list-item>
                    </router-link>

                    <router-link tag="div" v-on:click="closeMenu" to="/service">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-view-dashboard</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>


                                <v-list-item-title class="subtitle-1">
                                    <span v-on:click="closeMenu">timeline</span>
                                </v-list-item-title>

                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                </template>

                <template v-else>

                    <router-link tag="div" v-on:click="closeMenu" to="/">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-view-dashboard</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title class="subtitle-1">


                                <span class="md-list-item-text" v-on:click="closeMenu">\
                                    current mileage
                                </span>


                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>

                    <router-link tag="div" v-on:click="closeMenu" to="/">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-view-dashboard</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title class="subtitle-1">

                                <span
                                        class="md-list-item-text"
                                        v-on:click="closeMenu">service</span>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                </template>

                <router-link tag="div" v-on:click="closeMenu" to="/playground">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-settings</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="subtitle-1">Playground</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>moto.help service</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container>
                <v-row align="center" justify="center">
                    <v-col class="col-sm-12 align-content-center">
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-footer style="height: 100px" app>

        </v-footer>
    </v-app>
</template>
<script>
    export default {

        name: "app",

        methods: {
            closeMenu() {
                this.menuVisible = false;
            }
        },

        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            menuVisible: false,
        }),
        created() {
            this.$vuetify.theme.dark = false
        },
    }
</script>

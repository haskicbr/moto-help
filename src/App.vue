<style lang="scss">


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
                                <v-list-item-title>


                                <span class="md-list-item-text" v-on:click="closeMenu">\
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

                                <v-list-item-title>
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

                                <v-list-item-title>
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


                                <v-list-item-title>
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
                                <v-list-item-title>


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
                            <v-list-item-title>

                                <span
                                        class="md-list-item-text"
                                        v-on:click="closeMenu">service</span>


                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </router-link>

                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-settings</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Settings</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>


                </template>


            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col class="mb-md-3 offset-3 align-content-center">

                        <md-app-content>
                            <router-view></router-view>
                        </md-app-content>

                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-footer app>

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
            this.$vuetify.theme.dark = true
        },
    }
</script>

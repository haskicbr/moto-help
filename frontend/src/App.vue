<script>
    import {ServiceMutationTypes, SystemMutationTypes} from "./store/mutations/types";



    export default {

        name: "app",

        components: {

        },

        methods: {
            closeMenu() {
                this.menuVisible = false;
            },

            showMenu() {
                this.menuVisible = true;
            }
        },

        watch: {
            nightMode: function (state) {
                this.$vuetify.theme.dark = state;
                this.$store.commit(SystemMutationTypes.CHANGE_NIGHT_MODE, state);
            }
        },

        props: {
            source: String,
        },

        data() {
            let self = this;

            return {
                drawer: null,
                menuVisible: false,
                nightMode: self.$store.state.nightMode
            }
        },

        mounted() {
            this.$vuetify.theme.dark = this.nightMode;
        },
    }
</script>

<style lang="scss">
    .theme--dark.v-application {
        background: #484848 !important;
    }

    footer {
        z-index: 100000 !important;
    }

</style>

<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="menuVisible"
                app
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

                                <span class="md-list-item-text subtitle-1" v-on:click="closeMenu">
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
                                        class="md-list-item-text subtitle-1"
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
                                    <span v-on:click="closeMenu" class="subtitle-1">service types</span>
                                </v-list-item-title>

                            </v-list-item-content>
                        </v-list-item>
                    </router-link>

                    <router-link tag="div" v-on:click="closeMenu" to="/time-line">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-view-dashboard</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    <span v-on:click="closeMenu" class="subtitle-1">timeline</span>
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
                                    <span class="md-list-item-text subtitle-1" v-on:click="closeMenu">
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
                                    <span class="md-list-item-text subtitle-1" v-on:click="closeMenu">services</span>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                </template>

                <v-list-item class="justify-space-between">
                    <div class="subtitle-1 mx-5">night mode</div>
                    <div class="mx-5">
                        <v-switch class=" d-flex d-flex" v-model="nightMode"></v-switch>
                    </div>
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
          <!--  <v-app-bar-nav-icon @click.stop="menuVisible = !menuVisible"/>-->
            <v-toolbar-title></v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container style="padding-bottom: 50px">
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4" class=" lign-content-center">
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>

            <v-bottom-navigation
                    v-if="$store.state.isLogged"
                    scroll-target="#scroll-area-1"
                    hide-on-scroll
                    fixed
            >

                <router-link tag="div" style="height: 100%" v-on:click="closeMenu" to="/">
                    <v-btn>
                        <span>Mileage</span>
                        <v-icon>mdi-history</v-icon>
                    </v-btn>
                </router-link>

                <router-link tag="div" style="height: 100%" v-on:click="closeMenu" to="/service">
                    <v-btn>
                        <span>Service</span>
                        <v-icon>mdi-cogs</v-icon>
                    </v-btn>
                </router-link>


                <router-link tag="div" style="height: 100%" v-on:click="closeMenu" to="/time-line">
                    <v-btn>
                        <span>Timeline</span>
                        <v-icon>mdi-road</v-icon>
                    </v-btn>
                </router-link>

                <v-btn v-on:click="showMenu">
                    <span>Other</span>
                    <v-icon>mdi-menu</v-icon>
                </v-btn>

            </v-bottom-navigation>
        </v-content>

<!--        <v-footer style="height: 100px" app>

        </v-footer>-->
    </v-app>
</template>

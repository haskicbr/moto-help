<script>
import {ServiceMutationTypes, SystemMutationTypes} from "./store/mutations/types";

import {AuthActionTypes} from "./store/actions/types";
import RateApp from "./components/modals/RateApp";
import EventBus from "./events/EventBus";
import {ModalEventTypes} from "./events/types";
import Confirm from "./components/modals/Confirm";


export default {

    name: "app",

    components: {
        Confirm,
        RateApp
    },

    methods: {
        closeMenu() {
            this.menuVisible = false;
        },

        showRateModal() {
            this.closeMenu();
            EventBus.$emit(ModalEventTypes.SHOW_RATE_MODAL);
        },

        logout() {
            this.closeMenu();

            this.$store.dispatch(AuthActionTypes.LOGOUT);
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
    background: #1e1e1e !important;
}

footer {
    z-index: 100000 !important;
}

.container {
    padding: 0 0 50px 0 !important;
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

                    <router-link tag="div" v-on:click="closeMenu" to="/service">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-cogs</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>

                                <v-list-item-title>
                                    <span class="md-list-item-text subtitle-1">service</span>
                                </v-list-item-title>

                            </v-list-item-content>
                        </v-list-item>
                    </router-link>

                    <router-link tag="div" v-on:click="closeMenu" to="/service-types">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-wrench</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>

                                <v-list-item-title>
                                    <span class="subtitle-1">service types</span>
                                </v-list-item-title>

                            </v-list-item-content>
                        </v-list-item>
                    </router-link>

<!--                    <router-link tag="div" v-on:click="closeMenu" to="/time-line">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-road</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>

                                <v-list-item-title>
                                    <span class="subtitle-1">Timeline</span>
                                </v-list-item-title>

                            </v-list-item-content>
                        </v-list-item>
                    </router-link>-->

                    <v-list-item link v-on:click="showRateModal">
                        <v-list-item-action>
                            <v-icon>mdi-star</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>

                            <v-list-item-title>
                                <span class="subtitle-1">rate app</span>
                            </v-list-item-title>

                        </v-list-item-content>
                    </v-list-item>

                    <router-link tag="div" v-on:click="closeMenu" to="/settings">
                        <v-list-item link>
                            <v-list-item-action>
                                <v-icon>mdi-settings</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>

                                <v-list-item-title>
                                    <span class="subtitle-1">settings</span>
                                </v-list-item-title>

                            </v-list-item-content>
                        </v-list-item>
                    </router-link>

                    <v-list-item link v-on:click="logout">
                        <v-list-item-action>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                <span class="md-list-item-text subtitle-1">logout</span>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>


                <v-list-item class="justify-space-between">
                    <div class="subtitle-1 mx-5">night mode</div>
                    <div class="mx-5">
                        <v-switch class=" d-flex d-flex" v-model="nightMode"></v-switch>
                    </div>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <template>
            <v-system-bar></v-system-bar>
        </template>

        <v-content>
            <v-container style="padding-bottom: 50px">
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>

            <v-bottom-navigation
                v-if="$store.state.isLogged"
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

                <router-link tag="div" style="height: 100%" v-on:click="closeMenu" to="/transport">
                    <v-btn>
                        <span>My transport</span>
                        <v-icon>mdi-road</v-icon>
                    </v-btn>
                </router-link>

                <v-btn v-on:click="menuVisible = !menuVisible">
                    <span>More</span>
                    <v-icon>mdi-menu</v-icon>
                </v-btn>

            </v-bottom-navigation>
        </v-content>

        <RateApp/>
        <Confirm/>

    </v-app>
</template>

<script>

    export default {
        name: "app",


        methods: {

            closeMenu() {
                this.menuVisible = false;
            }
        },

        data() {
            return {
                menuVisible: false,
                testComputedData: this.$store.state.testComputed.computedValue,
                testCountData: this.$store.state.count,
                testTextData: this.$store.getters.countAsText,
            }
        },
    };
</script>


<style lang="scss">

    @import '~vue-material/dist/vue-material.min.css';
    @import '~vue-material/dist/theme/default-dark.css';
    @import "~vue-material/dist/theme/engine";


    .md-list-item-text, link {
        color: white;
        font-size: 16px;
    }

</style>

<template>

    <md-app style="min-height: 100vh;" md-mode="fixed">
        <md-app-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">app.moto.help</span>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-transparent" md-elevation="0" style="font-size: 16px">Navigation</md-toolbar>

            <md-list>


                <md-list-item>
                    <router-link v-on:click="closeMenu" class="md-list-item-text link" to="/">
                        <span
                                class="md-list-item-text"
                                v-on:click="closeMenu">
                        current mileage
                    </span></router-link>
                </md-list-item>

                <template v-if="$store.state.isLogged">
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>

                        <router-link v-on:click="closeMenu" class="md-list-item-text link" to="/mileage"><span
                                class="md-list-item-text"
                                v-on:click="closeMenu">mileages</span></router-link>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>

                        <router-link v-on:click="closeMenu" class="md-list-item-text link" to="/mileage-types"><span
                                class="md-list-item-text"
                                v-on:click="closeMenu">mileage types</span></router-link>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>

                        <router-link v-on:click="closeMenu" class="md-list-item-text link" to="/mileage"><span
                                class="md-list-item-text"
                                v-on:click="closeMenu">timeline</span></router-link>
                    </md-list-item>
                </template>

                <template v-else>
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>

                        <router-link v-on:click="closeMenu" class="md-list-item-text link" to="/"><span
                                class="md-list-item-text"
                                v-on:click="closeMenu">mileages</span></router-link>
                    </md-list-item>
                </template>

            </md-list>
        </md-app-drawer>

        <md-app-content>
            <router-view></router-view>
        </md-app-content>
    </md-app>
</template>

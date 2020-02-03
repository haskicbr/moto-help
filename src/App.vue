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

        computed: {


            testCountFromComputed() {
                return this.$store.state.count;
            },

            testComputedValue() {
                return this.$store.state.testComputed.computedValue
            }
        },
    };
</script>


<style lang="scss">

    @import '~vue-material/dist/vue-material.min.css';
    @import '~vue-material/dist/theme/default-dark.css';
    @import "~vue-material/dist/theme/engine";

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
            <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

            <md-list>
                <md-list-item>
                    <md-icon>move_to_inbox</md-icon>

                    <router-link v-on:click="closeMenu" class="md-list-item-text link" to="/mileage"><span
                            class="md-list-item-text"
                            v-on:click="closeMenu">mileage</span></router-link>
                </md-list-item>

                <md-list-item>
                    <md-icon>send</md-icon>
                    <router-link class="md-list-item-text" to="/test">
                        <span v-on:click="closeMenu" class="md-list-item-text link">test</span>
                    </router-link>

                </md-list-item>

                <md-list-item>
                    <md-icon>delete</md-icon>

                    <router-link v-on:click="closeMenu" class="md-list-item-text" to="/mobile">
                        <span v-on:click="closeMenu" class="md-list-item-text link">mobile</span>
                    </router-link>
                </md-list-item>

                <md-list-item>
                    <md-icon>error</md-icon>
                    <span class="md-list-item-text">Spam</span>
                </md-list-item>
            </md-list>
        </md-app-drawer>

        <md-app-content>
            <router-view></router-view>
        </md-app-content>
    </md-app>
</template>

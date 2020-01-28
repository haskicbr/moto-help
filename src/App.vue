<script>

    export default {
        name: "app",

        data() {
          return {
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

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <div id="app">

        <ul>
            <li>
                <router-link to="/foo">Go to Foo</router-link>
            </li>
            <li>
                <router-link to="/animations">Go to animations</router-link>
            </li>
            <li>
                <router-link to="/mileage">Go to mileages</router-link>
            </li>
        </ul>



        <router-view></router-view>











    </div>
</template>

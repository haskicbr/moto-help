<script>
    import HelloWorld from "./components/HelloWorld.vue";

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

        components: {
            HelloWorld
        }
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
        <img alt="Vue logo" src="./assets/logo.png"/>
        <HelloWorld msg="Welcome to Your Vue.js App"/>


        <h1>{{testComputedValue}}</h1>
        <h1>{{testComputedData}}</h1>
        <h1>{{testCountData}}</h1>
        <h1>{{testTextData}}</h1>
        <h1>{{testCountFromComputed}}</h1>


        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/animations">Go to animations</router-link>
        <router-link to="/mileage">Go to mileages</router-link>

        <router-view></router-view>











    </div>
</template>

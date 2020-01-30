<script>




    export default {
        name: "RouterAnimations",

        components: {
        },

        computed: {},

        methods: {
            changeShowAnimation: function () {
                this.$data.showAnimation = !this.$data.showAnimation;
            },

            changeAnimations: function () {

                this.$data.animations.one.two.three = 'no three';
                console.log(this.$data);
                debugger;

            }

        },

        props: {},
        data: () => {
            return {
                checkboxModel: true,
                inputModel: '',
                showAnimation: false,
                dynamicProps: {color: 'warning'},
                dynamicComponent: 'mdb-btn',



                animations: {
                    one: {
                        two: {
                            three: 'three'
                        }
                    }
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin: 40px 0 0;
        color: #42b983;

    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .fade-enter-active, .fade-leave-active {
        color : red;
        transition: opacity .1s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        color : red;
        opacity: 0;
    }

</style>

<template>
    <div>
        <h1>ROUTER ANIMATIONS</h1>


        <transition name="fade">
            <h1 v-show="showAnimation">HELLO WORLD</h1>
        </transition>

        <div v-html="checkboxModel"></div>
        <input type="checkbox" v-model="checkboxModel">
        {{inputModel}}
        <input type="text" v-model="inputModel">

        <component v-bind="dynamicProps" v-bind:is="dynamicComponent">test</component>


        <h1 v-on:click="changeAnimations">{{animations.one.two.three}}</h1>
    </div>
</template>

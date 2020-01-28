<script>
    import {
        mdbBtn,
        mdbBtnFixed,
        mdbBtnFixedItem,
        mdbBtnGroup,
        mdbIcon
    } from "mdbvue";

    export default {
        components: {
            mdbBtn
        },

        methods: {
            test: () => {
                alert(123);
            }
        },

        computed: {
            count1: () => {
                return 30 + 20;
            }
        },

        data: () => {

            return {

                count: 100,

                testArray2: {
                    'one': 'this is one', 'two': 'this is two', 'three': 'this is three'
                },

                testArray: ['oqweqweqw', 'qweqweqwe', 'qweqweqweqw']
            }
        }
    };
</script>


<template>
    <div>
        <h1>test template</h1>
        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <mdb-btn color="primary">Primary</mdb-btn>
        <mdb-btn color="primary">Primary</mdb-btn>
        <mdb-btn color="primary">Primary</mdb-btn>
        <mdb-btn color="primary">Primary</mdb-btn>

        <!-- Default button -->
        <mdb-btn color="default">Default</mdb-btn>

        <!-- Secondary button -->
        <mdb-btn color="secondary">Secondary</mdb-btn>

        <!-- Indicates a successful or positive action -->
        <mdb-btn color="success">Success</mdb-btn>

        <!-- Contextual button for informational alert messages -->
        <mdb-btn color="info">Info</mdb-btn>

        <!-- Indicates caution should be taken with this action -->
        <mdb-btn color="warning">Warning</mdb-btn>

        <!-- Indicates a dangerous or potentially negative action -->
        <mdb-btn color="danger">Danger</mdb-btn>


        <button v-on:contextmenu.prevent="test">context</button>
        <button v-on:click.middle="test">middle</button>


        <h1>{{count1}}</h1>

        <ul>
            <li v-for="(val, key, index) in testArray">

                val : {{val}}
                key : {{key}}
                index : {{index}}

            </li>


            <li v-for="test in count">
                <h1>{{test}}</h1>
            </li>
        </ul>
    </div>
</template>

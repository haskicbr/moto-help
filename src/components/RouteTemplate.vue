<script>

    export default {
        components: {
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

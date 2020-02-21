<template>
    <div>

        <h1>playground</h1>

        <template>
            <v-row justify="center" align="center">
                <v-container>
                    <v-progress-linear
                            :active="active"
                            :background-opacity="opacity"
                            :bottom="bottom"
                            :buffer-value="buffer"
                            :height="height"
                            :indeterminate="indeterminate"
                            :query="query"
                            :rounded="rounded"
                            :stream="stream"
                            :striped="striped"
                            :top="top"
                            :value="value"
                            color="light-blue"
                    ></v-progress-linear>
                </v-container>

                <v-row>
                    <v-col cols="12" md="6" lg="3">
                        <button v-on:click="value=200">teesaes</button>
                    </v-col>
                </v-row>
            </v-row>
        </template>





    </div>
</template>

<script>
    export default {

        name : "PlayGround",

        data: () => ({
            absolute: false,
            active: true,
            opacity: 0.3,
            bottom: false,
            buffer: 100,
            fixed: false,
            height: 4,
            indeterminate: false,
            query: false,
            rounded: false,
            stream: false,
            striped: false,
            top: false,
            value: 25,
        }),
    }
</script>

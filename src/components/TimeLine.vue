<script>
    export default {
        name: "TimeLine",


        methods: {


            getServicesByDate(date) {
                return this.$store.state.services.filter((item) => {
                    return item.date === date
                })
            }

        },

        computed: {
            mileageHistory() {
                return this.$store.state.mileageHistory;
            },
        }
    }
</script>

<template>

    <div>
        <v-timeline
                :align-top="false"
                :dense="false"
                :reverse="false"
        >
            <v-timeline-item
                    v-for="(val, key) in mileageHistory"
                    :key="key"
                    :fill-dot="true"
                    :hide-dot="false"
                    :icon="'mdi-star'"
                    :icon-color="'white'"
                    :left="false"
                    :right="true"
                    :small="true"
            >
                <template v-slot:icon>
                    <v-avatar v-if="false">
                        <img src="http://i.pravatar.cc/64">
                    </v-avatar>
                </template>

                <span slot="opposite"><span class="title">{{key}} <br>{{val}} km</span></span>

                <v-card class="">
                    <v-card-title class="headline">Lorem ipsum</v-card-title>
                    <div>
                        {{getServicesByDate(key)}}
                    </div>
                </v-card>
            </v-timeline-item>
        </v-timeline>

    </div>


</template>

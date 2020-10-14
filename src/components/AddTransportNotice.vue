<script>
export default {
    name: "AddTransportNotice"
}
</script>

<template>
    <v-card
        class="mx-auto"
        max-width="344"

    >
        <v-card-text>
            <div class="text--primary text-center">
                {{$store.getters.languages('NEED_CREATE_TRANSPORT')}}
            </div>
        </v-card-text>
        <v-card-actions class="text-center full-width">
            <router-link tag="div" style="width: 100%" class="text-center full-width" to="/transport">
                <v-btn text  style="margin: 0 auto" color="primary accent-4">
                    {{$store.getters.languages('ADD_BUTTON')}}
                </v-btn>
            </router-link>
        </v-card-actions>
    </v-card>
</template>

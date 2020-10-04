<script>
import {TransportActionTypes} from "../../store/actions/types";
import {v4 as uuidv4} from 'uuid';
import EventBus from "../../events/EventBus";
import {ModalEventTypes} from "../../events/types";

export default {
    name: "Transport",
    methods: {
        async addTransport() {

            if (this.transportId) {

                this.$store.dispatch(TransportActionTypes.EDIT_TRANSPORT, {
                    id: this.transportId,
                    name: this.transportName,
                    mileage: this.transportMileage
                });

            } else {
                const transportId = uuidv4();

                await this.$store.dispatch(TransportActionTypes.ADD_TRANSPORT, {
                    id: transportId,
                    name: this.transportName,
                    mileage: this.transportMileage
                });

                if (this.$store.state.transports.length === 1) {
                    this.$store.dispatch(TransportActionTypes.CHANGE_CURRENT_TRANSPORT, {
                        id: transportId
                    });
                }
            }
            this.clearTransportForm();
        },
        deleteTransport(id) {
            this.$store.dispatch(TransportActionTypes.DELETE_TRANSPORT, {
                id
            });
        },
        editTransport(id) {

            const currentTransport = this.$store.state.transports.find(e => e.id === id);

            this.transportId = currentTransport.id;
            this.transportMileage = currentTransport.mileage;
            this.transportName = currentTransport.name;
            this.BUTTON_TEXT = this.CHANGE_BUTTON_TEXT
        },
        changeTransportMileage() {
            let value = parseInt(this.transportMileage);
            value = (value > 100000000) ? 100000000 : value;

            this.transportMileage = value;
        },
        changeCurrentTransport(id) {
            this.$store.dispatch(TransportActionTypes.CHANGE_CURRENT_TRANSPORT, {
                id
            });
        },
        changeMileage(id, mileage) {
            this.$store.dispatch(TransportActionTypes.CHANGE_MILEAGE, {
                id, mileage
            });
        },

        clearTransportForm() {
            this.transportId = "";
            this.transportName = "";
            this.transportMileage = 0;
            this.BUTTON_TEXT = this.ADD_BUTTON_TEXT;
        },

        confirmDelete(transportId) {
            EventBus.$emit(
                ModalEventTypes.SHOW_CONFIRM_MODAL,
                {
                    confirmTitle: 'Delete transport',
                    confirmText: 'YES',
                    disMissText: 'NO',
                    text: 'Do you want to delete transport?',
                    callback: () => {
                        this.deleteTransport(transportId);
                    }
                }
            );
        }
    },

    computed: {
        // a computed getter
        clearMileage: function () {
            // `this` points to the vm instance
            return parseInt(this.transportMileage);
        }
    },
    data() {
        return {
            transportId: "",
            transportName: "",
            transportMileage: 0,
            CHANGE_BUTTON_TEXT: "Save transport",
            ADD_BUTTON_TEXT: "Add new transport",
            BUTTON_TEXT: "Add new transport"
        }
    }
}
</script>

<template>
    <div>
        <v-list-item>
            <v-list-item-content>
                <form v-on:submit.prevent="addTransport">
                    <div>
                        <v-text-field v-model="transportName" label="Transport name" type="text"></v-text-field>
                        <v-text-field :suffix="$store.state.settings.units.distance" v-on:keyup="changeTransportMileage"
                                      v-model="transportMileage" label="Transport mileage" type="number"></v-text-field>
                    </div>
                    <v-btn style="width:100%" type="submit" color="primary">{{ BUTTON_TEXT }}</v-btn>
                </form>
            </v-list-item-content>
        </v-list-item>

        <template v-if="$store.state.transports.length !== 0">
            <v-list-item :key="key" v-for="(transport, key) in $store.state.transports">
                <v-list-item-content>
                    <v-list-item-title class="subtitle-1">transport: {{ transport.name }}</v-list-item-title>
                    <v-list-item-title>mileage: {{ transport.mileage }} {{ $store.state.settings.units.distance }}
                    </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                    <template>
                        <div class="text-center d-flex align-center justify-space-around">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="primary"
                                        v-bind:disabled="$store.getters.currentTransport && $store.getters.currentTransport.id === transport.id"
                                        v-bind="attrs"
                                        v-on="on"
                                        v-on:click="changeCurrentTransport(transport.id)"
                                        fab
                                        small
                                        depressed
                                    >
                                        <v-icon>mdi-checkbox-marked-circle-outline</v-icon>

                                    </v-btn>
                                </template>
                                <span>Change current</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="default"
                                        v-bind="attrs"
                                        v-on="on"
                                        v-on:click="editTransport(transport.id)"
                                        fab
                                        small
                                        depressed
                                    >
                                        <v-icon>mdi-pencil</v-icon>

                                    </v-btn>
                                </template>
                                <span>Edit transport</span>
                            </v-tooltip>

                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        v-bind:disabled="$store.getters.currentTransport && $store.getters.currentTransport.id === transport.id"
                                        fab
                                        small
                                        color="default"
                                        v-bind="attrs"
                                        v-on="on" v-on:click="confirmDelete(transport.id)"
                                        depressed
                                    >
                                        <v-icon>mdi-minus</v-icon>

                                    </v-btn>
                                </template>
                                <span>Delete transport</span>
                            </v-tooltip>
                        </div>
                    </template>
                </v-list-item-content>
            </v-list-item>
        </template>
    </div>
</template>
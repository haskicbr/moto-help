<script>
import EventBus from "../../events/EventBus";
import {ModalEventTypes} from "../../events/types";

export default {
    name: "Confirm",
    mounted() {
        EventBus.$on(ModalEventTypes.SHOW_CONFIRM_MODAL, ({confirmTitle, confirmText, disMissText, text, callback}) => {
            this.confirmTitle = confirmTitle;
            this.confirmText = confirmText;
            this.disMissText = disMissText;
            this.text = text;
            this.callback = callback;
            this.dialog = true;
        });
    },
    data() {
        return {
            confirmTitle : '',
            confirmText: '',
            disMissText: '',
            text: '',
            callback: function() {},
            dialog: false,
        }
    },
}
</script>
<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
        >
            <v-card>
                <v-card-title class="headline">
                    {{ confirmTitle }}
                </v-card-title>
                <v-card-text>
                    {{text}}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="orange"
                        text
                        @click="dialog = false"
                    >
                        {{ disMissText }}
                    </v-btn>
                    <v-btn
                        color="blue"
                        text
                        @click="dialog = false; callback()"
                    >
                        {{ confirmText }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
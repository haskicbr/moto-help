import Application from "../app";

export default {
    email: () => {
        return [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ]
    },
    min: (length) => {
        return [v => v.length >= length || `Min ${length} characters`]
    },
    max: (length) => {
        return [v => (v && v.length <= length) || `Name must be less than ${length} characters`]
    },
    required: () => {
        return [
            v => !!v || 'Name is required',
        ]
    }
}
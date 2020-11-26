import Application from "../app";

export default {
    email: () => {
        return [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'The field must be valid E-mail address',
        ]
    },
    min: (length) => {
        return [v => {

            if (typeof (v) === 'string') {
                return v.length >= length || `Min ${length} characters`
            } else {
                return v >= length || `Min ${length}`
            }
        }]
    },
    max: (length) => {
        return [
            v => {
                if (typeof (v) === 'string') {
                    return (v && v.length <= length) || `Max ${length} characters`
                } else {
                    console.log(v)
                    return (v && v <= length) || `Max ${length}`
                }
            }
        ]
    },
    maxNumber: (max) => {
        return [
            v => {
                v = Number(v);
                return (!isNaN(v) && v <= max) || `Max ${max}`;
            }
        ]
    },

    minNumber: (min) => {
        return [
            v => {
                v = Number(v);
                return (!isNaN(v) && v >= min) || `Max ${min}`;
            }
        ]
    },

    required: () => {
        return [
            v => !!v || 'Field is required',
        ]
    }
}

const LanguageTypes = {
    RU: "RU",
    EN: "EN"
}

const DistanceTypes = {
    MI: "MI",
    KM: "KM"
}

const SettingsTypes = {
    UNITS: {
        DISTANCE: {
            [DistanceTypes.MI]: "mi",
            [DistanceTypes.KM]: "km"
        },
    },
    LANGUAGE: {
        [LanguageTypes.RU]: "Russian",
        [LanguageTypes.EN]: "English"
    }
};

export {
    SettingsTypes,
    DistanceTypes,
    LanguageTypes
}
import {LanguageTypes} from "../state/SettingsTypes";
import WordTypes from "./types/WordTypes";
const languages = {
    [WordTypes.ADD_MILEAGE]: {
        [LanguageTypes.EN]: "Add mileage",
        [LanguageTypes.RU]: "Добаить сервис",
    },
    [WordTypes.SIGN_IN]: {
        [LanguageTypes.EN]: "Sign in",
        [LanguageTypes.RU]: "Войти",
    },
    [WordTypes.SIGN_IN_WITHOUT_REGISTRATION]: {
        [LanguageTypes.EN]: "Without registration",
        [LanguageTypes.RU]: "Войти без регистрации",
    },
    [WordTypes.REGISTRATION]: {
        [LanguageTypes.EN]: "Registration",
        [LanguageTypes.RU]: "Зарегистрироваться",
    }
};

const language = {
    languages(state, getters) {
        return (textType) => {
            return languages[textType][state.settings.language];
        }
    }
}

export default language;
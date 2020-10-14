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
    },
    "LOGIN_BANNER_TEXT" : {
        [LanguageTypes.EN]: "moto.help is a free app to help for service motorcycles",
        [LanguageTypes.RU]: "moto.help это бесплатное приложение для помощи в техническом обслуживании вашего транспортного средства",
    },
    "LANGUAGE" : {
        [LanguageTypes.EN]: "Language",
        [LanguageTypes.RU]: "Язык",
    },
    "RU" : {
        [LanguageTypes.EN]: "Russian",
        [LanguageTypes.RU]: "Русский",
    },
    "EN" : {
        [LanguageTypes.EN]: "English",
        [LanguageTypes.RU]: "Английский",
    },
    "EMAIL" : {
        [LanguageTypes.EN]: "Email",
        [LanguageTypes.RU]: "Email",
    },
    "PASSWORD" : {
        [LanguageTypes.EN]: "Password",
        [LanguageTypes.RU]: "Пароль",
    },
    "LOGIN_BUTTON" : {
        [LanguageTypes.EN]: "Login",
        [LanguageTypes.RU]: "Войти",
    },
    "REGISTRATION_BUTTON" : {
        [LanguageTypes.EN]: "Registration",
        [LanguageTypes.RU]: "Зарегистрироваться",
    },
    "LOGOUT_BUTTON" : {
        [LanguageTypes.EN]: "Logout",
        [LanguageTypes.RU]: "Выйти",
    },
    "SETTINGS" : {
        [LanguageTypes.EN]: "Settings",
        [LanguageTypes.RU]: "Настройки",
    },
    "RATE_APP" : {
        [LanguageTypes.EN]: "Rate app",
        [LanguageTypes.RU]: "Оценить приложение",
    },
    "SERVICE_TYPES" : {
        [LanguageTypes.EN]: "Service types",
        [LanguageTypes.RU]: "Типы обслуживания",
    },
    "SERVICE" : {
        [LanguageTypes.EN]: "Service",
        [LanguageTypes.RU]: "Обслуживание",
    },
    "NIGHT_MODE" : {
        [LanguageTypes.EN]: "night mode",
        [LanguageTypes.RU]: "night mode",
    },
};
const language = {
    languages(state, getters) {
        return (textType) => {
            return languages[textType][state.settings.language];
        }
    }
}

export default language;
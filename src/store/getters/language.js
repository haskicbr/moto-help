import {DistanceTypes, LanguageTypes} from "../state/SettingsTypes";
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
    "MILEAGE" : {
        [LanguageTypes.EN]: "Mileage",
        [LanguageTypes.RU]: "Пробег",
    },
    "MY_TRANSPORT" : {
        [LanguageTypes.EN]: "Transport",
        [LanguageTypes.RU]: "Транспорт",
    },
    "MORE" : {
        [LanguageTypes.EN]: "More",
        [LanguageTypes.RU]: "   ",
    },
    "NEED_CREATE_TRANSPORT" : {
        [LanguageTypes.EN]: "First you need create transport",
        [LanguageTypes.RU]: "Добавьте Ваш первый транспорт",
    },
    "ADD_BUTTON" : {
        [LanguageTypes.EN]: "Create",
        [LanguageTypes.RU]: "Добавить",
    },
    "ADD_SERVICE" : {
        [LanguageTypes.EN]: "Service",
        [LanguageTypes.RU]: "Обслуживание",
    },
    "ADD_SERVICE_TYPE" : {
        [LanguageTypes.EN]: "Service type",
        [LanguageTypes.RU]: "Тип обслуживания",
    },
    "SAVE" : {
        [LanguageTypes.EN]: "Save",
        [LanguageTypes.RU]: "Сохранить",
    },
    "LIFETIME" : {
        [LanguageTypes.EN]: "Lifetime",
        [LanguageTypes.RU]: "Пробег",
    },
    "PAYMENT" : {
        [LanguageTypes.EN]: "Payment",
        [LanguageTypes.RU]: "Payment",
    },
    "DESCRIPTION" : {
        [LanguageTypes.EN]: "Description",
        [LanguageTypes.RU]: "Description",
    },
    "DELETE_SERVICE" : {
        [LanguageTypes.EN]: "Delete service",
        [LanguageTypes.RU]: "Delete service",
    },
    "DISTANCE_UNIT" : {
        [LanguageTypes.EN]: "Distance unit",
        [LanguageTypes.RU]: "Distance unit",
    },
    "CANCEL" : {
        [LanguageTypes.EN]: "Cancel",
        [LanguageTypes.RU]: "Отмена",
    },
    "OK" : {
        [LanguageTypes.EN]: "Ok",
        [LanguageTypes.RU]: "Ок",
    },
    "CHANGE_MILEAGE" : {
        [LanguageTypes.EN]: "Change mileage",
        [LanguageTypes.RU]: "Change mileage",
    },

    [DistanceTypes.KM]: {
        [LanguageTypes.EN]: "Km",
        [LanguageTypes.RU]: "Км",
    },
    [DistanceTypes.MI]: {
        [LanguageTypes.EN]: "Mi",
        [LanguageTypes.RU]: "Миль",
    }
};
const language = {
    languages(state, getters) {
        return (textType) => {

            console.log(textType)
            return languages[textType][state.settings.language];
        }
    }
}

export default language;
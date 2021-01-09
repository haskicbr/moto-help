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
    "LOGIN_BANNER_TEXT": {
        [LanguageTypes.EN]: "moto.help is a free app to help for service motorcycles",
        [LanguageTypes.RU]: "moto.help это бесплатное приложение для помощи в техническом обслуживании вашего транспортного средства",
    },
    "LANGUAGE": {
        [LanguageTypes.EN]: "Language",
        [LanguageTypes.RU]: "Язык",
    },
    "RU": {
        [LanguageTypes.EN]: "Russian",
        [LanguageTypes.RU]: "Русский",
    },
    "EN": {
        [LanguageTypes.EN]: "English",
        [LanguageTypes.RU]: "Английский",
    },
    "EMAIL": {
        [LanguageTypes.EN]: "Email",
        [LanguageTypes.RU]: "Email",
    },
    "PASSWORD": {
        [LanguageTypes.EN]: "Password",
        [LanguageTypes.RU]: "Пароль",
    },
    "LOGIN_BUTTON": {
        [LanguageTypes.EN]: "Login",
        [LanguageTypes.RU]: "Войти",
    },
    "REGISTRATION_BUTTON": {
        [LanguageTypes.EN]: "Registration",
        [LanguageTypes.RU]: "Зарегистрироваться",
    },
    "LOGOUT_BUTTON": {
        [LanguageTypes.EN]: "Logout",
        [LanguageTypes.RU]: "Выйти",
    },
    "SETTINGS": {
        [LanguageTypes.EN]: "Settings",
        [LanguageTypes.RU]: "Настройки",
    },
    "RATE_APP": {
        [LanguageTypes.EN]: "Rate app",
        [LanguageTypes.RU]: "Оценить приложение",
    },
    "SERVICE_TYPES": {
        [LanguageTypes.EN]: "Service types",
        [LanguageTypes.RU]: "Типы обслуживания",
    },
    "SERVICE": {
        [LanguageTypes.EN]: "Service",
        [LanguageTypes.RU]: "Обслуживание",
    },
    "NIGHT_MODE": {
        [LanguageTypes.EN]: "night mode",
        [LanguageTypes.RU]: "night mode",
    },
    "MILEAGE": {
        [LanguageTypes.EN]: "Mileage",
        [LanguageTypes.RU]: "Пробег",
    },
    "MY_TRANSPORT": {
        [LanguageTypes.EN]: "Transport",
        [LanguageTypes.RU]: "Транспорт",
    },
    "MORE": {
        [LanguageTypes.EN]: "More",
        [LanguageTypes.RU]: "More",
    },
    "NEED_CREATE_TRANSPORT": {
        [LanguageTypes.EN]: "First you need create transport",
        [LanguageTypes.RU]: "Добавьте Ваш первый транспорт",
    },
    "ADD_BUTTON": {
        [LanguageTypes.EN]: "Create",
        [LanguageTypes.RU]: "Добавить",
    },
    "ADD_SERVICE": {
        [LanguageTypes.EN]: "Service",
        [LanguageTypes.RU]: "Обслуживание",
    },
    "ADD_SERVICE_TYPE": {
        [LanguageTypes.EN]: "Service type",
        [LanguageTypes.RU]: "Тип обслуживания",
    },
    "SAVE": {
        [LanguageTypes.EN]: "Save",
        [LanguageTypes.RU]: "Сохранить",
    },
    "ADD": {
        [LanguageTypes.EN]: "Add",
        [LanguageTypes.RU]: "Добавить",
    },
    "LIFETIME": {
        [LanguageTypes.EN]: "Lifetime",
        [LanguageTypes.RU]: "Ресурс",
    },
    "PAYMENT": {
        [LanguageTypes.EN]: "Payment",
        [LanguageTypes.RU]: "Стоимость",
    },
    "PAYMENT_AMOUNT": {
        [LanguageTypes.EN]: "Payment amount",
        [LanguageTypes.RU]: "Стоимость",
    },

    "DESCRIPTION": {
        [LanguageTypes.EN]: "Description",
        [LanguageTypes.RU]: "Описание",
    },
    "DELETE_SERVICE": {
        [LanguageTypes.EN]: "Delete service",
        [LanguageTypes.RU]: "Удалить сервис",
    },
    "DISTANCE_UNIT": {
        [LanguageTypes.EN]: "Distance unit",
        [LanguageTypes.RU]: "Единица измерения расстояния",
    },
    "CANCEL": {
        [LanguageTypes.EN]: "Cancel",
        [LanguageTypes.RU]: "Отмена",
    },
    "OK": {
        [LanguageTypes.EN]: "Ok",
        [LanguageTypes.RU]: "Ок",
    },
    "CHANGE_MILEAGE": {
        [LanguageTypes.EN]: "Change mileage",
        [LanguageTypes.RU]: "Изменить пробег",
    },
    [DistanceTypes.KM]: {
        [LanguageTypes.EN]: "km",
        [LanguageTypes.RU]: "км",
    },
    [DistanceTypes.MI]: {
        [LanguageTypes.EN]: "mi",
        [LanguageTypes.RU]: "миль",
    },
    "CHANGE_DATE": {
        [LanguageTypes.EN]: "Change date",
        [LanguageTypes.RU]: "Изменить дату",
    },
    "TRANSPORT_NAME": {
        [LanguageTypes.EN]: "Transport name",
        [LanguageTypes.RU]: "Название ТС",
    },
    "CHANGE_CURRENT": {
        [LanguageTypes.EN]: "Change current",
        [LanguageTypes.RU]: "Сделать текущим",
    },
    "EDIT": {
        [LanguageTypes.EN]: "Edit",
        [LanguageTypes.RU]: "Изменить",
    },
    "DELETE": {
        [LanguageTypes.EN]: "Delete",
        [LanguageTypes.RU]: "Удалить",
    },
    "TRANSPORT": {
        [LanguageTypes.EN]: "Transport",
        [LanguageTypes.RU]: "ТС",
    },
    "DELETE_TRANSPORT": {
        [LanguageTypes.EN]: "Delete transport",
        [LanguageTypes.RU]: "Удалиние ТС",
    },
    "DELETE_TRANSPORT_CONFIRM": {
        [LanguageTypes.EN]: "Do you want to delete transport?",
        [LanguageTypes.RU]: "Вы действительно хотите удалить выбранное ТС?",
    },
};
const language = {
    languages(state, getters) {
        return (textType) => {

            if (typeof (languages[textType]) === 'undefined') {
                console.error('lang: ' + textType + ' not found ')
                return textType;
            }

            if (typeof (languages[textType][state.settings.language]) === 'undefined') {
                console.error('lang: ' + state.settings.language + ' not found in ' + textType)
                return textType;
            }

            return languages[textType][state.settings.language];
        }
    }
}

export default language;
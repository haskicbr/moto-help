const API_HOST = "moto.help";
const API_PORT = "443";
/*
const API_HOST = "moto.help";
const API_PORT = "80";*/
const API_PROTOCOL = "https";

const API_URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;

export default {
    POST_RATE: `${API_URL}/api/rate`,
    POST_AUTH: `${API_URL}/api/auth`,
    POST_REGISTRATION: `${API_URL}/api/registration`,
    POST_UPDATE_STORE: `${API_URL}/api/update-store`
}
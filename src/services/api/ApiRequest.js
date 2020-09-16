import axios from 'axios';

let instance = axios.create({
    headers: {token: localStorage.getItem('auth-token')}
});

instance.setHeader = function(key, value) {
    this.defaults.headers[key] = value;
};

instance.setToken = function(value) {

    localStorage.setItem('auth-token', value);

    this.defaults.headers['token'] = value;
};

instance.removeToken = function() {

    localStorage.removeItem('auth-token');

    this.defaults.headers['token'] = null;
};

export default instance;
import axios from 'axios';

const instance = axios.create({
     baseURL: 'https://burger-app-30c09.firebaseio.com/'
});

export default instance;
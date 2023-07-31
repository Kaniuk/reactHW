import axios from "axios";

import {baseURL} from "../configs/urls";

let apiService = axios.create({baseURL});

export {
    apiService
};
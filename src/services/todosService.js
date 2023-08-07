import {apiService} from "./apiService";
import {urls} from "../constants";

const todosService = {
    getAll: () => apiService(urls.todos)
};

export {
    todosService
};
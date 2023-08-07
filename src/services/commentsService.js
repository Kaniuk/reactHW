import {apiService} from "./apiService";
import {urls} from "../constants";

const commentsService = {
    getAll: () => apiService(urls.comments)
};


export {
    commentsService
};
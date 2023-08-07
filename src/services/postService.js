import {apiService} from "./apiService";
import {urls} from "../constants";

const postService = {
    getById: (id) => apiService(urls.posts.byId(id))
};

export {
    postService
};
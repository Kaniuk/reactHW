import {apiService} from "./apiService";
import {urls} from "../constants";

const albumService = {
    getAll: () => apiService(urls.albums)
};

export {
    albumService
};
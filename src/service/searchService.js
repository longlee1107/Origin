// import { Axios } from "./Axios";
import axios from "axios";
export function getArticles(keyword) {
    return axios.get(`https://newsapi.org/v2/everything?q=${keyword}&from=2022-03-13&sortBy=publishedAt&apiKey=12b64533a43946a89ecaa67b9f852f10`);
}
export const searchService = {
    getArticles
};
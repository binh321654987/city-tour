import axiosClient from "./axiosClient";

export const productApi = {
    getAll: (params,dispatch) => {
        const url = '/product';
        return axiosClient.get(url, { params })
    }
}

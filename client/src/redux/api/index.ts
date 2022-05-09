import axios from "axios";

//Create axios instance.
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

//Executed before request is made to backend
axiosInstance.interceptors.request.use((req: any) => {
// Check localStorage for profile item
  if (localStorage.getItem("profile")) {
    //set our headers
    req.headers.Authorization = `Bearer ${
// parse 'profile' item to string and get token within object
      JSON.parse(localStorage.getItem("profile") || '{}').token 
      // JSON.parse(localStorage.getItem("profile")).token 
    }`;
  }
  return req;
});

export const login = (formData: any) => axiosInstance.post("/users/login", formData);
export const register = (formData: any) => axiosInstance.post("/users/register", formData);
// export const updateUser = (id: string, formData: any) => axiosInstance.put(`/users/${id}`, formData);
export const updateFavorites = (id: string, formData: any) => axiosInstance.post(`/users/favorites/${id}`, formData);

// export const addToCart = (id: string) => axiosInstance.get(`/products/find/${id}`);
// export const createCart = (newCartData: any) => axiosInstance.post("/carts/", newCartData);

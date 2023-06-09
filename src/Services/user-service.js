//import axios from "axios";
import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios
    .post("/auth/register",user)
    .then((Response) => Response.data);
};

export const logIn = (loginDetails) => {
  return myAxios
    .post("/auth/login",loginDetails)
    .then((Response) => Response.data);
};

export const getUser = (userId) => {
  return myAxios.get(`/users/${userId}`).then((resp) => resp.data);
};

export const GetAllUsers = () => {
  return myAxios.get("/users/").then((Response) => {
    return Response.data;
  });
};

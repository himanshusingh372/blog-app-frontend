//import axios from "axios";
import { myAxios } from "./helper";

export const GetAllCategories = () => {
  return myAxios.get("/categories/").then((Response) => {
    return Response.data;
  });
};

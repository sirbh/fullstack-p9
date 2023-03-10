import axios from "axios";
import { Diary, NewDiary } from "../types";

export const getDiaries = () => {
  const req = axios
    .get<Diary[]>("http://localhost:3001/api/diaries")
    .then((res) => res.data);
  return req;
};

export const addDiary = (newDiary: NewDiary) => {
  const req = axios
    .post<Diary>("http://localhost:3001/api/diaries",newDiary)
    .then((res) => res.data);
  return req
};

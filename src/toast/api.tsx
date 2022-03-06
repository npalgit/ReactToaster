import { API_URL } from "../constant";
import { get, post } from "../apiUtil";
import { ToastType } from "./types";

export const addToastStat = (type: ToastType): Promise<any> =>
  post(`${API_URL}/toasts/${type}`, {});

export const getToastStat = (): Promise<any> => get(`${API_URL}/toasts`);

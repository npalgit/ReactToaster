import { API_ERROR_MESSAGE } from "./constant";

const STANDARD_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  pragma: "no-cache",
  "cache-control": "no-cache",
};

export const get = (url: string) =>
  fetch(url, {
    credentials: "include",
    headers: STANDARD_HEADERS,
    method: "GET",
    mode: "cors",
    cache: "no-store",
  })
    .then(handleHttpResponse)
    .catch(() => {
      throw new Error(API_ERROR_MESSAGE);
    });

export const post = (url: string, payload: object) =>
  fetch(url, {
    credentials: "include",
    headers: STANDARD_HEADERS,
    method: "POST",
    mode: "cors",
    cache: "no-store",
    body: JSON.stringify(payload),
  })
    .then(handleHttpResponse)
    .catch(() => {
      throw new Error(API_ERROR_MESSAGE);
    });

export const put = (url: string, payload: object) =>
  fetch(url, {
    credentials: "include",
    headers: STANDARD_HEADERS,
    method: "PUT",
    mode: "cors",
    cache: "no-store",
    body: JSON.stringify(payload),
  })
    .then(handleHttpResponse)
    .catch(() => {
      throw new Error(API_ERROR_MESSAGE);
    });

export const deleteItem = (url: string) =>
  fetch(url, {
    credentials: "include",
    headers: STANDARD_HEADERS,
    method: "DELETE",
    mode: "cors",
    cache: "no-store",
  })
    .then(handleHttpResponse)
    .catch(() => {
      throw new Error(API_ERROR_MESSAGE);
    });

const handleHttpResponse = (response: any): Promise<any> => {
  return response.json();
};

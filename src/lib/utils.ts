import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE_BACKEND_URL = "http://localhost:1337/api/v1";
export const fetchGet = async (url: string) => {
  const response = await fetch(BASE_BACKEND_URL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchPost = async (url: string, data: object) => {
  const response = await fetch(BASE_BACKEND_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchPostForm = async (url: string, data: FormData) => {
  const response = await fetch(BASE_BACKEND_URL + url, {
    method: "POST",
    body: data,
    cache: "no-store",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

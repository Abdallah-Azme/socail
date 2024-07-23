import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE_BACKEND_URL = "http://localhost:1337/api/v1";
export const fetchGet = async (url: string) => {
  try {
    const response = await fetch(BASE_BACKEND_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      credentials: "include",
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(JSON.parse(errorMessage).message);
    }
    return response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const fetchPost = async (url: string, data: object) => {
  try {
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
      const errorMessage = await response.text();
      throw new Error(JSON.parse(errorMessage).message);
    }
    return response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const fetchPostForm = async (url: string, data: FormData) => {
  try {
    const response = await fetch(BASE_BACKEND_URL + url, {
      method: "POST",
      body: data,
      cache: "no-store",
      credentials: "include",
    });

    console.log("Response:", response);

    if (!response.ok) {
      const errorMessage = await response.text();
      try {
        const parsedError = JSON.parse(errorMessage);
        throw new Error(parsedError.message || "Unknown error occurred");
      } catch (e) {
        throw new Error("Failed to parse error response");
      }
    }

    return response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

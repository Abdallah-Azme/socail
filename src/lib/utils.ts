import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const BASE_BACKEND_URL =
  process.env.NEXT_PUBLIC_BASE_BACKEND_URL_DEVELOPMENT + "/api/v1";
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
  const response = await fetch(BASE_BACKEND_URL + url, {
    method: "POST",
    body: data,
    cache: "no-store",
    credentials: "include",
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    try {
      const parsedError = JSON.parse(errorMessage);
      throw new Error(parsedError.message || "Unknown error occurred");
    } catch (e: any) {
      console.error({ e });
      throw new Error(e.message);
    }
  }
  return response.json();
};

interface ErrorObject {
  path: string;
  message: string;
}

function parseError(errors: ErrorObject[]): string {
  return errors.map((error) => `${error.path}: ${error.message}`).join(", ");
}

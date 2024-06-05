import { REVALIDATE_CACHE_SECS } from "./constants";

function getDefaultHeaders() {
  return {
    'Content-Type': 'application/json'
  }
}

export async function executeFetch(url: string, method: string = "GET", body?: string) : Promise<Response> {
  return await fetch(
    url,
    {
      method,
      body: body,
      headers: getDefaultHeaders(),
      next: {
        revalidate: REVALIDATE_CACHE_SECS
      }
    });
}

export async function executeFetchNoCache(url: string, method: string = "GET", body?: string) : Promise<Response> {
  return await fetch(
    url, 
    { 
      method,
      body,
      headers: getDefaultHeaders(),
      cache: 'no-store'
    });
}

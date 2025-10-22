import { urls } from "@/constants/urls";

export async function api(endpoint: string) {
    const res = await fetch(`${urls.baseURL}${endpoint}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}

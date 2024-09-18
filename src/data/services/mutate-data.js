import { getAuthToken } from "./get-token";

export async function mutateData(method, path, payload) {
    const authToken = await getAuthToken();
    const url = new URL(path, process.env.API_URL);

    if (!authToken) throw new Error("No auth token found");

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ ...payload }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error", error);
        throw error;
    }
}
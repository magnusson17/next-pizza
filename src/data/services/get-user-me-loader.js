import { getAuthToken } from "@/data/services/get-token";
import qs from "qs";

/* se il content user ha imgs ho bisogno di fare un fetch particolare (ricorda /api/pizzas?populate=*)
in questo caso al posto di * specifico "url", "alternativeText" 

qs converte l'obj in query string:
populate[image][fields][]=url&populate[image][fields][]=alternativeText */
const query = qs.stringify({
    populate: { image: { fields: ["url", "alternativeText"] } },
});

export async function getUserMeLoader() {
    const url = new URL("/api/users/me", process.env.API_URL);
    // appendo al url una search avente come query la const "query"
    url.search = query;

    const authToken = await getAuthToken();
    if (!authToken) return { ok: false, data: null, error: null };

    try {
        // url.href vuol dire che fetcho tutto l'url, search compresa
        const response = await fetch(url.href, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
        },
            cache: "no-cache",
        });
        const data = await response.json();
        if (data.error) return { ok: false, data: null, error: data.error };
        return { ok: true, data: data, error: null };
    } catch (error) {
        console.log(error);
        return { ok: false, data: null, error: error };
    }
}
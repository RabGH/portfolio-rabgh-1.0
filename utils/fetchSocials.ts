import { Social } from "@lib/types";

export const fetchSocials = async () => {
    const baseURL = process.env.VERCEL_URL;

    const res = await fetch(`https://${baseURL}/api/getSocials/`);

    if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
        const data = await res.json();
        const socials: Social[] = data.socials;

        console.log("fetching", socials);

        return socials;
    } else {
        throw new Error(`Fetch request failed: ${res.status} ${res.statusText}`);
    }
};
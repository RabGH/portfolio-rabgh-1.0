import { Social } from "@lib/types";

export const fetchSocials = async () => {
    const baseURL =
        process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_BASE_URL_DEV
            : process.env.VERCEL_URL

    const res = await fetch(`https://${baseURL}/api/getSocials/`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    console.log("fetching", socials);

    return socials;
};

import { Skill } from "@lib/types";

export const fetchSkills = async () => {
    const baseURL = process.env.VERCEL_URL;

    const res = await fetch(`https://${baseURL}/api/getSkills/`);

    if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
        const data = await res.json();
        const skills: Skill[] = data.skills;

        console.log("fetching", skills);

        return skills;
    } else {
        throw new Error(`Fetch request failed: ${res.status} ${res.statusText}`);
    }
};
import { Experience } from "@lib/types";

export const fetchExperiences = async () => {
    const baseURL =
        process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_BASE_URL_DEV
            : process.env.NEXT_PUBLIC_BASE_URL_PROD;

    const res = await fetch(`${baseURL}/api/getExperiences`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    console.log("fetching", experiences);

    return experiences;
};

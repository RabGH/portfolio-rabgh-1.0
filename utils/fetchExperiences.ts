import { Experience } from "@lib/types";

export const fetchExperiences = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getExperiences`
    );

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    // console.log("fetching", experiences);

    return experiences;
};

import { Project } from "@lib/types";

export const fetchProjects = async () => {
    const baseURL =
        process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_BASE_URL_DEV
            : process.env.VERCEL_URL;

    const res = await fetch(`${baseURL}/api/getProjects`);

    const data = await res.json();
    const projects: Project[] = data.projects;

    console.log("fetching", projects);

    return projects;
};

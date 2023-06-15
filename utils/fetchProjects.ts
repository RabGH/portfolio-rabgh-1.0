// import { Project } from "@lib/types";

// export const fetchProjects = async () => {
//     const baseURL = process.env.VERCEL_URL;

//     const res = await fetch(`https://${baseURL}/api/getProjects/`);

//     if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
//         const data = await res.json();
//         const projects: Project[] = data.projects;

//         console.log("fetching", projects);

//         return projects;
//     } else {
//         throw new Error(`Fetch request failed: ${res.status} ${res.statusText}`);
//     }
// };
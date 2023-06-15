// import { Experience } from "@lib/types";

// export const fetchExperiences = async () => {
//     const baseURL = process.env.VERCEL_URL;

//     const res = await fetch(`https://${baseURL}/api/getExperiences/`);

//     if (res.ok && res.headers.get("content-type")?.includes("application/json")) {
//         const data = await res.json();
//         const experiences: Experience[] = data.experiences;

//         console.log("fetching", experiences);

//         return experiences;
//     } else {
//         throw new Error(`Fetch request failed: ${res.status} ${res.statusText}`);
//     }
// };
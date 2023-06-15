// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity";
// import { sanityClient } from "@lib/sanity";
// import { Project } from "@lib/types";

// const query = groq`
// *[_type == "project"]{
//   _id,
//   title,
//   summary,
//   linkToSite,
//   linkToBuild,
//   image,
//   technologies[]->{
//     _id,
//     title,
//     progress,
//     image
//   },
// }
// `;

// type Data = {
//     projects: Project[];
// };

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     const projects: Project[] = await sanityClient.fetch(query);

//     res.status(200).json({ projects });
// }

// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity";
// import { sanityClient } from "@lib/sanity";
// import { Skill } from "@lib/types";

// const query = groq`
// *[_type == "skill"]{
//     _id,
//     title,
//     progress,
//     image
// }
// `;

// type Data = {
//     skills: Skill[];
// };

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     const skills: Skill[] = await sanityClient.fetch(query);

//     res.status(200).json({ skills });
// }

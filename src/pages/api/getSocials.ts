// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity";
// import { sanityClient } from "@lib/sanity";
// import { Social } from "@lib/types";

// const query = groq`
// *[_type == "social"]{
//     _id,
//     title,
//     url
// }
// `;

// type Data = {
//     socials: Social[];
// };

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     const socials: Social[] = await sanityClient.fetch(query);

//     res.status(200).json({ socials });
// }

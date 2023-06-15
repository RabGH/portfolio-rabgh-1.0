// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity";
// import { sanityClient } from "@lib/sanity";
// import { PageInfo } from "@lib/types";

// const query = groq`
// *[_type == "pageInfo"][0]{
//   _id,
//   name,
//   role,
//   profilePic,
//   heroImage,
//   address,
//   email,
//   phoneNumber,
//   socials,
//   backgroundInformation
// }
// `;

// type Data = {
//     pageInfo: PageInfo;
// };

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     const pageInfo: PageInfo = await sanityClient.fetch(query);

//     res.status(200).json({ pageInfo });
// }

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient, urlFor } from "@lib/sanity";
import { Experience } from "@lib/types";

const query = groq`
*[_type == "experience"]
`;

type Data = {
    experiences: Experience[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const experiences: Experience[] = await sanityClient.fetch(query);

    res.status(200).json({ experiences });
}

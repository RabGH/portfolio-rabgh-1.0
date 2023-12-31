import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useNextSanityImage } from "next-sanity-image";

interface SanityConfig {
    dataset: string;
    projectId: string;
    useCdn: boolean;
    apiVersion: string;
    previewSecret: string;
}

export const config: SanityConfig = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId:
        (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string) || "2hqid2xd",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2021-03-25",
    previewSecret: process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET || "",
};
export const urlFor = (source: string): ReturnType<typeof imageUrlBuilder> =>
    imageUrlBuilder(config).image(source);

export const sanityClient = createClient(config);
export const useSanityImage = (image: string) =>
    useNextSanityImage(sanityClient, image);

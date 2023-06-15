import { PageInfo } from "@lib/types";

export const fetchPageInfo = async () => {
    const baseURL =
        process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_BASE_URL_DEV
            : process.env.VERCEL_URL;

    const res = await fetch(`${baseURL}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    console.log("fetching", pageInfo);

    return pageInfo;
};

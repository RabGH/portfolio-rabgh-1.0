import { PageInfo } from "@lib/types";

export const fetchPageInfo = async (context: any) => {
    const pid = context.params.pid;

    const res = await fetch(`${pid}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    console.log("fetching", pageInfo);

    return pageInfo;
};

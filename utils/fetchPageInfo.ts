import { PageInfo } from "@lib/types";
import { useRouter } from "next/router";

export const fetchPageInfo = async () => {
    const router = useRouter();
    const currentPath = router.asPath;

    const res = await fetch(`${currentPath}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    console.log("fetching", pageInfo);

    return pageInfo;
};

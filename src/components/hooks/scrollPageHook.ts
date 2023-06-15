import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

export function useScrollToHash() {
    const router = useRouter();
    const hash = router.asPath.split("#")[1];

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [hash]);
}

export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition;
}

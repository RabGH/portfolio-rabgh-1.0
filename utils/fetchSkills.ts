import { Skill } from "@lib/types";

export const fetchSkills = async () => {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_BASE_URL_DEV
      : process.env.NEXT_PUBLIC_BASE_URL_PROD;

  const res = await fetch(`${baseURL}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  console.log("fetching", skills);

  return skills;
};
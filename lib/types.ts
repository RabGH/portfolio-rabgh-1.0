// types.ts
export interface Experience {
    jobTitle: string;
    companyImage: any;
    company: string;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    technologies: Skill[];
    points: string[];
}

export interface PageInfo {
    name: string;
    role: string;
    heroImage: string;
    profilePic: string;
    phoneNumber: string;
    email: string;
    address: string;
    socials: Social[];
}

export interface Skill {
    title: string;
    progress: number;
    image: string;
}

export interface Project {
    title: string;
    image: string;
    summary: string;
    technologies: Skill[];
    linkToBuild: string;
    linkToSite: string;
}

export interface Social {
    title: string;
    url: string;
}

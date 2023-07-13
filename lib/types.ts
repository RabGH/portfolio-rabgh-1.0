export interface SanityBody {
    _createrAt: string;
    _id: string;
    _rev: string;
    _udpatedAt: string;
}

export interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Experience extends SanityBody {
    _type: "experience";
    jobTitle: string;
    companyImage: string;
    company: string;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    technologies: Skill[];
    points: string[];
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    name: string;
    heroImage: string;
    profilePic: string;
    phoneNumber: string;
    socials: Social[];
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    description: string;
    image: string;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: string;
    summary: string;
    linkToBuild: string;
    linkToSite: string;
    technologies: Skill[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

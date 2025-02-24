export interface BioInfo {
  short: string;
  focus: string;
  cta: string;
}

export interface ExperienceInfo {
  position: string;
  duration: string;
  company: {
    name: string;
    location: string;
    contact: readonly {
      name: string;
      phone: string;
    }[];
  };
  responsabilities: readonly string[];
}

export interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}
export interface SocialMedias {
  github: SocialMedia;
  linkedin: SocialMedia;
  hashnode: SocialMedia;
  discord: SocialMedia;
  devto: SocialMedia;
  email: SocialMedia;
  instagram: SocialMedia;
  whatsapp: SocialMedia;
  youtube: SocialMedia;
}

export type SocialMediaKey = keyof SocialMedias;

export interface PersonalInfo {
  name: string;
  title: string;
  readonly roles: readonly string[];
  yearsOfExperience: string;
  education: {
    degree: string;
    institution: string;
    location: string;
  };
  location: {
    city: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  whoYouAre: {
    shortIntroduction: string;
    background: string;
    philosophy: string;
  };
  mySkills: {
    readonly languages: readonly string[];
    readonly frameworks: readonly string[];
    readonly databases: readonly string[];
    readonly ODM: readonly string[];
    readonly ORM: readonly string[];
    readonly devTools: readonly string[];
    readonly cloudServices: readonly string[];
    readonly container: readonly string[];
    readonly teachingServices: readonly string[];
  }
  philosophyApproach: {
    usersFirstDesign: string;
    codeQuality: string;
    continuousLearning: string;
  }
  experience: readonly ExperienceInfo[];
  readonly letsConnect: {
    title: string;
    description: string;
    cta: string;
    socialMedias: SocialMedias;
  }
}

export interface WelcomeInfo {
  title: string;
  p1: string;
  p2: string;
}


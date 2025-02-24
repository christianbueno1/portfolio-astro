import type { BioInfo, PersonalInfo, SocialMedias } from "./types";

const baseInfo = {
  name: "Christian Bueno",
  title: "Software & Full Stack Web Developer & Trainer",
  roles: ["Software Developer", "Full Stack Developer", "Trainer"],
  yearsOfExperience: "6",
  education: {
    degree: "Computer Science",
    institution: "ESPOL",
    location: "Guayaquil, Ecuador"
  },
  location: {
    city: "Guayaquil",
    country: "Ecuador"
  },
  contact: {
    email: "hola@christianbueno.me",
    phone: "+593 99 028 8710"
  }
} as const;

const socialMedias: SocialMedias = {
  github: { 
    name: "GitHub",
    url: "https://github.com/christianbueno1", 
    icon: "ri:github-fill" 
  },
  linkedin: { 
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/christianbueno1/", 
    icon: "ri:linkedin-box-fill" 
  },
  hashnode: { 
    name: "Hashnode",
    url: "https://christianbueno.hashnode.dev/", 
    icon: "ri:blogger-fill" 
  },
  discord: { 
    name: "Discord",
    url: "https://discordapp.com/users/779871769938231316", 
    icon: "ri:discord-fill" 
  },
  devto: { 
    name: "DevTo",
    url: "https://dev.to/christianbueno1/", 
    icon: "ri:blogger-fill" 
  },
  email: { 
    name: "Email",
    url: "mailto:hola@christianbueno.me", 
    icon: "ri:mail-fill" 
  },
  instagram: { 
    name: "Instagram",
    url: "https://www.instagram.com/christianbueno.1/", 
    icon: "ri:instagram-line" 
  },
  whatsapp: { 
    name: "WhatsApp",
    url: "https://wa.me/593990288710", 
    icon: "ri:whatsapp-line" 
  },
  youtube: { 
    name: "YouTube",
    url: "https://youtube.com/@estudiamosec3876", 
    icon: "ri:youtube-fill" 
  }
} as const;

// About me
const whoYouAre = {
  shortIntroduction: `Hi, I'm Christian Bueno, a Software & Full Stack Web Developer and Trainer with 6 years of experience. I hold a degree in Computer Science from ESPOL in Guayaquil, Ecuador, where I currently live. Passionate about technology and problem-solving, I specialize in building intuitive, scalable, and meaningful solutions that make a real impact. Let’s create something amazing together! 🚀`,
  background: "I began my journey as a Software Developer during my school years. I have always been fascinated and deeply interested in technology, algorithms, and creating programs. This passion eventually led me to choose computer science in school and later pursue a degree in Computer Science at university. Solving real-world problems keeps me motivated every single day.",
  philosophy: "My core philosophy is simple: Build with purpose. I believe technology should be intuitive, accessible, and meaningful. Whether it's crafting clean code or designing seamless user experiences, I strive to create solutions that not only meet business goals but also enrich the lives of the people who use them."
} as const;

const skills = {
  languages: ["Python", "JavaScript/TypeScript", "Java", "Shell Script", "C/C++"],
  frameworks: ["Django", "Flask", "FastAPI", "Tailwind CSS", "Express.js", "NestJS", "Next.js", "Astro"],
  databases: ["MySQL/MariaDB", "PostgreSQL", "SQL Server", "MongoDB", "Cassandra"],
  ODM: ["Beanie"],
  ORM: ["Sequelize"],
  devTools: ["Git", "Vite", "Linux", "Node.js", "Poetry", "Pnpm"],
  cloudServices: ["AWS", "Linode", "Digital Ocean", "Google Cloud Platform", "Azure"],
  container: ["Docker", "Podman"],
  teachingServices: ["Tutoring", "Workshops", "Webinars", "Training", "Courses"]
} as const;

const philosophyApproach = {
  usersFirstDesign: "I believe the best applications are built with the end-user in mind. My focus is on creating intuitive, accessible, and fast experiences that make technology feel effortless. Whether it’s a sleek interface or a seamless interaction, I prioritize usability and performance to ensure users love what they see and use.",
  codeQuality: "Clean, maintainable, and scalable code is the backbone of every great application. I take pride in writing code that not only works but is also easy to understand, update, and expand. This ensures that the solutions I build can grow and adapt with your business needs.",
  continuousLearning: "The tech world evolves fast, and I’m committed to staying ahead of the curve. I dedicate time to learning new tools, frameworks, and best practices to ensure I’m always bringing modern, cutting-edge solutions to the table. This mindset keeps my work fresh, innovative, and future-proof."
} as const;

const experience = [
  {
    position: "Data Analyst",
    duration: "Aug 2024 -- Sept 2024",
    company: {
      name: "Nostrum",
      location: "Guayaquil, Guayas, Ecuador",
      contact: [
        { name: "Ing. Michelle Prendes", phone: "+593 99 927 9601" }
      ]
    },
    responsabilities: [
      "Developed a Python based GUI application using CustomTkinter for automation of address matching and data processing.",
      "Implemented an efficient address matching algorithm to process multiple Excel sheets with configurable similarity thresholds.",
      "Created a modular architecture to separate UI, data processing, and address matching logic for enhanced maintainability.",
      "Integrated progress tracking functionality for large datasets, providing real-time user feedback.",
      "Automated Excel file operations, reducing manual data entry time by approximately 75%.",
      "Utilized technologies including Python, Pandas, and CustomTkinter for effective data handling and user interaction."
    ]
  },
  {
    position: "Web Developer",
    duration: "Jul 2023 -- Jan 2024",
    company: {
      name: "Contabilly S.A.S.",
      location: "Guayaquil, Guayas, Ecuador",
      contact: [
        { name: "Ing. Leonardo Castro", phone: "+593 96 270 3372" },
        { name: "Ing. Leo Castro Jr.", phone: "+593 99 257 1921" }
      ]
    },
    responsabilities: [
      "Worked in a sales manager software with functions like managing telephone contacts, scheduling appointments with potential clients.",
      "Used frontend technologies such as React, Redux Toolkit, Formik, Yup, and Material UI templates.",
      "Used backend technologies such as Express.js, MySQL, and Sequelize."
    ]
  },
  {
    position: "Web Developer",
    duration: "Oct 2022 -- Dec 2022",
    company: {
      name: "High-Track",
      location: "Guayaquil, Guayas, Ecuador",
      contact: [
        { name: "Ing. Milton Villafuerte", phone: "+593 99 943 7032" },
        { name: "Ing. Jonathan Bravo", phone: "+593 99 066 0821" }
      ]
    },
    responsabilities: [
      "Implemented validations to control the student, bus, driver, school, and bus routes in a bus tracking app.",
      "Designed bus routes option of the application.",
      "Worked on the construction of a GPS - NMEA sentence using RMC or $GPRMC standard to track a car.",
      "Worked with Bootstrap, Django, jQuery, and Git.",
      "Improved the utility of the application by 10%."
    ]
  },
  {
    position: "Full Stack Developer",
    duration: "Jan 2018 -- Present",
    company: {
      name: "www.christianbueno.me",
      location: "Guayaquil, Guayas, Ecuador",
      contact: []
    },
    responsabilities: [
      "Web Design & Web Development Services.",
      "Software Development Services.",
      "Mobile App Development Services.",
      "Landing page, Business Websites, E-commerce, Online Shop.",
      "Content Creator, graphic designer, multimedia design, community manager service."
    ]
  }
] as const;

const letsConnect = {
  title: "Let's Connect",
  description: "I’m always excited to collaborate on new projects, share ideas, or simply connect with like-minded individuals. Whether you’re looking to build something amazing, discuss tech trends, or just say hello, feel free to reach out!",
  cta: "Let’s create something incredible together!",
  socialMedias
} as const;

// About me
export const PERSONAL_INFO: PersonalInfo = {
  ...baseInfo,
  whoYouAre,
  mySkills: skills,
  philosophyApproach,
  experience,
  letsConnect,
} as const;

export const BIO_INFO: BioInfo = {
  short: `👋 Hi, I’m Christian Bueno, a Software & Full Stack Web Developer with 6+ years of experience building web applications, backend systems, and seamless user experiences. Based in Guayaquil, Ecuador, I specialize in Frontend, Backend, UI/UX, Performance, and Accessibility, crafting intuitive and scalable solutions that solve real-world problems.`,
  focus: `My current focus is on modern web technologies like Astro, Next.js, TypeScript, and Python frameworks (Django, FastAPI). I believe in building with purpose—creating technology that is meaningful, accessible, and impactful.`,
  cta: `Let’s build something amazing together! 🚀`
} as const;




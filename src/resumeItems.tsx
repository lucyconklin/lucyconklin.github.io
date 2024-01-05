type ResumeSection = "work" | "projects" | "education";

export type ResumeItem = {
  title: string;
  subtitle?: string;
  detail?: string;
  years: string;
  skills?: string[];
  section: ResumeSection;
  repo?: string;
  link?: string;
};

const education: ResumeItem[] = [
  {
    title: "Turing School of Software and Design",
    years: "2016-2017",
    subtitle: "Back-end Web Development",
    skills: ["Ruby on Rails", "HTML", "CSS", "Javascript", "React"],
    section: "education",
  },
  {
    title: "California State University at Monterey Bay",
    years: "2011-2012",
    subtitle: "Science Illustration Masters Certificate",
    skills: ["Photoshop", "Illustrator", "InDesign"],
    section: "education",
  },
  {
    title: "Bucknell University",
    years: "",
    subtitle: "B.A. Physics",
    skills: [],
    section: "education",
  },
];

const work: ResumeItem[] = [
  {
    title: "Helio Home",
    years: "2022-2024",
    subtitle: "Software Engineering Lead",
    detail:
      "As part of our mission to electrify 100 million American homes, we developed software founded in building science and modelling to enable us to analyze, plan, and recommend the most efficient equipment and accurate incentives tailored to each household. By utilizing Helio's solutions, customers not only reduce their carbon footprint but also save on utility expenses and enhance the quality of indoor air, fostering healthier homes and communities. Over the course of two years we booked over $8 million in revenue and electrified 300+ homes in Colorado, removing 1300 tons of carbon per year, or the equivalent of over 3 million miles driven.",
    skills: [
      "React",
      "Typescript",
      "Apollo",
      "Python",
      "AWS",
      "Postgres",
      "GraphQL",
      "Open Studio",
    ],
    section: "work",
  },
  {
    title: "Homebound",
    years: "2019-current",
    subtitle: "Senior Software Engineer",
    detail:
      "As a full stack engineer I design new features, improve existing features and help unblock other teams so we can deliver on the promise of technology. I recently rewrote our Salesforce integration which is the primary driver of project creation, and required close coordination with the sales teams. I contribute to our open source projects, host a bi-weekly frontend guild meeting to facilitate cross team coordination for frontend development, and help onboard new engineers.",
    skills: ["GraphQL", "Typescript", "AWS", "Apollo", "Postgres", "React"],
    section: "work",
  },
  {
    title: "SingleOps",
    years: "2017-2019",
    subtitle: "Web Developer",
    detail:
      "As a full stack developer on our small team at SingleOps, I played a role in every step of our product improvement process. This involved a nice mix of developing new features as well as improving existing ones. I saw features through the entire lifecycle from gathering requirements, creating mockups, development, code review, QA, trainings, all the way to implementation with new clients. Additionally, I worked directly with our clients to build custom reports with MySQL. Many of these clients are self-taught entrepreneurs and I have quickly learned that they measure their success in a wide variety of ways. These reports help them analyze their performance to improve efficiency and inform their business decisions. This required me to develop a process for estimating, managing, and organizing these requests, as well as an internal guide for SQL best practices.",
    skills: [
      "Ruby on Rails",
      "MySQL",
      "AWS",
      "Bootstrap",
      "jQuery",
      "SASS",
      "Git",
      "CoffeeScript",
    ],
    section: "work",
  },
  {
    title: "California State University at Monterey Bay",
    years: "2013-2016",
    subtitle: "Instructor",
    detail:
      "I developed the curriculum for and taught general science illustration, digital illustration, and zoological illustration to graduate students.",
    skills: ["Adobe Creative Suite", "Photoshop", "Illustrator"],
    section: "work",
  },
];

export const resumeList: ResumeItem[] = [...work, ...education];

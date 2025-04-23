import {
  Attributions,
  Contribution,
  Description,
  Engineering,
  Experiments,
  Home,
  HumanPractices,
  Notebook,
  Results,
  Safety,
  Team,
  Education,
  Entrepreneurship,
  Hardware,
  Inclusivity,
  Measurement,
  Model,
  Plant,
  Software,
  Sustainable,
} from "./contents";

interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
  logo: string | undefined;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    component: Home,
    lead: "Welcome to IIT's iGEM 2025 submission site!! Your team has been approved and you are ready to start the iGEM season!",
    logo: ""
  },
  /*{
    name: "Team",
    folder: [
      {
        name: "Team",
        title: "Team",
        path: "/team",
        component: Team,
        lead: "On this page you can introduce your team members, instructors, and advisors.",
        logo: "/images/Team_logo"
        
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        component: Attributions,
        lead: "This page must show the attribution form of your project. This includes the work done by each of the student members on your team and any work that was done by people outside of your team, including the host labs, advisors, instructors, and individuals not on the team roster. This requirement is not about literature references - these can and should be displayed throughout your wiki.",
        logo: "/images/Attribution_logo"
      },
    ],
  },*/
  {
    name: "Project",
    folder: [
      /*{
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
        lead: "Make a useful contribution for future iGEM teams. Use this page to document that contribution.",
        logo: "/images/Contribution_logo"
      },*/
      {
        name: "Description",
        title: "Project Description",
        path: "/description",
        component: Description,
        lead: "Describe how and why you chose your iGEM project.",
        logo: "/images/Description_logo"
      },
      /*{
        name: "Engineering",
        title: "Engineering Success",
        path: "/engineering",
        component: Engineering,
        lead: "Demonstrate engineering success in a technical aspect of your project by going through at least one iteration of the engineering design cycle. This achievement should be distinct from your Contribution for Bronze.",
        logo: "/images/Engineering_logo"
      },
      {
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
        lead: "Describe the research, experiments, and protocols you used in your iGEM project.",
        logo: "/images/Experiment_logo"
      },*/
      {
        name: "Notebook",
        title: "Notebook",
        path: "/notebook",
        component: Notebook,
        lead: "Document the dates you worked on your project. This should be a detailed account of the work done each day for your project.",
        logo: "/images/Notebook_logo"
      },
      {
        name: "Results",
        title: "Results",
        path: "/results",
        component: Results,
        lead: "You can describe the results of your project and your future plans here.",
        logo: "/images/Results_logo"
      },
    ],
  },
  {
    name: "Safety",
    title: "Safety",
    path: "/safety",
    component: Safety,
    lead: "Describe all the safety issues of your project.",
    logo: ""
  },
  {
    name: "Human Practices",
    title: "Human Practices",
    path: "/human-practices",
    component: HumanPractices,
    lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
    logo: ""
  },
  /*{
    name: "Awards",
    folder: [
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
        lead: "Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.",
        logo: ""
      },
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: Entrepreneurship,
        lead: "The entrepreneurship prize recognizes exceptional effort to build a business case and commercialize an iGEM project.",
        logo: ""
      },
      {
        name: "Hardware",
        title: "Hardware",
        path: "/hardware",
        component: Hardware,
        lead: "Hardware in iGEM should make synthetic biology based on standard parts easier, faster, better, or more accessible to our community.",
        logo: ""
      },
      {
        name: "Inclusivity",
        title: "Diversity and Inclusion",
        path: "/inclusivity",
        component: Inclusivity,
        lead: "Every individual, regardless of background or experience, should have an equal opportunity to engage with scientific knowledge and technological development.",
        logo: ""
      },
      {
        name: "Measurement",
        title: "Measurement",
        path: "/measurement",
        component: Measurement,
        lead: "Synthetic Biology needs great measurement approaches for characterizing parts, and efficient new methods for characterizing many parts at once. Describe your measurement approaches on this page.",
        logo: ""
      },
      {
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
        lead: "Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.",
        logo: ""
      },
      {
        name: "Plant",
        title: "Plant",
        path: "/plant",
        component: Plant,
        lead: "This award is designed to celebrate exemplary work done in plant synthetic biology.",
        logo: ""
      },
      {
        name: "Software",
        title: "Software",
        path: "/software",
        component: Software,
        lead: "Software in iGEM should make synthetic biology based on standard parts easier, faster, better or more accessible to our community.",
        logo: ""
      },
      {
        name: "Sustainable",
        title: "Sustainable Development Goals",
        path: "/sustainable",
        component: Sustainable,
        lead: "Describe how you have evaluated your project ideas against one or more of the SDGs.",
        logo: ""
      },
    ],
  },*/
];

export default Pages;

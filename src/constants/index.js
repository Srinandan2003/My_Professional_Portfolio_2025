import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp"
export const HERO_CONTENT = `Web Developer skilled in HTML, CSS,
JavaScript, and frameworks like React,
Bootstrap, Tailwind, and Chakra UI.
Understanding of UI/UX design, version
control, and performance optimization.
Seeking a full-time position to apply my

skills in developing responsive and user-
friendly websites.`;

export const ABOUT_TEXT = `Web Developer skilled in HTML, CSS,
JavaScript, and frameworks like React,
Bootstrap, Tailwind, and Chakra UI.
Understanding of UI/UX design, version
control, and performance optimization.
Seeking a full-time position to apply my

skills in developing responsive and user-
friendly websites.`;



export const PROJECTS = [
  {
    title: "Task Management Application",
    image: project1,
    description:
      "A fully functional task management website with features like calendar scheduling, a focus timer, a Pomodoro timer, a link organizer, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Firebase"],
    text: [
      {text: "Built with modern technologies for performance and scalability."},
      {text: "Developed a Pomodoro timer feature to boost productivity and maintain focus."},
      {text: "Implemented task prioritization and goal tracking functionalities."},
      {text: "Integrated calendar for organizing schedules and tracking important dates."},
      {text: "Utilized Firebase for user authentication and real-time data storage."}
    ],
    liveLink: "https://fanciful-elf-ed4c09.netlify.app",
    githubLink: "https://github.com/Dheerajmlk/Frontend-fanatics",
  },
  {
    title: "Quick Chat",
    image: project2,
    description:
      "A real-time chat application with instant messaging, user authentication, and a modern UI design. Features include private messaging, JWT authentication, and responsive design.",
    technologies: ["React", "MongoDB", "Zustand", "Tailwind CSS", "Socket.io", "Express", "DaisyUI"],
    text: [
      {text: "Developed real-time chat functionality using Socket.io for instant communication."},
      {text: "Implemented JWT authentication for secure user login and session management."},
      {text: "Utilized Zustand for efficient global state management across the application."},
      {text: "Designed a modern and responsive UI using Tailwind CSS and DaisyUI."},
      {text: "Integrated MongoDB with Mongoose for robust database management."}
    ],
    liveLink: "https://realtime-chat-application-1-ipjp.onrender.com/", // Replace with actual URL
    githubLink: "https://github.com/Srinandan2003/Realtime_Chat_Application/tree/master", // Replace with actual URL
  },
];

export const CONTACT = {
  address: "Kerala, Kasargod",
  phoneNo: "+91 8277506766",
  email: "srinandan2003@gmail.com",
};
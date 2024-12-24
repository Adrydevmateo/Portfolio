/**
  Author: AdryDev
  Description: List of projects.
  Example:
  {
    id: 1,
    name: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    details: ["Built with React", "Responsive design"],
    repository: "https://github.com/Adrydevmateo/project-1",
    live: "https://project-1.vercel.app",
  }
*/

export default [] as Array<{
  id: number;
  name: string;
  description: string;
  details: Array<string>;
  repository: string;
  live: string;
}>;

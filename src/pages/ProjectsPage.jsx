import ProjectsSection from "../components/ProjectsSection";
import { getProjects } from "../services/apiPortfolio";

export const loader = async () => {
  const result = await getProjects();
  return { projects: result }
}

export default function ProjectsPage() {
  return (
    <ProjectsSection />
  )
}

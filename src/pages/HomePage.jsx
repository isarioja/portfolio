import { HeroSection, SkillsSection } from "../components";
import { getSkills } from "../services/apiPortfolio";

export const loader = async () => {
  const items = await getSkills();
  return {skills: items};
}

export default function HomePage() {

  return (
    <>
      <HeroSection />
      <SkillsSection />
    </>  
  )
}

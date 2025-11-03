import TitleSection from "./TitleSection"
import Project from "./Project"
import { useLoaderData } from "react-router-dom"


export default function ProjectsSection() {
  const { projects } =  useLoaderData();

  return (
    <section className="container mt-20 mb-20">
        <TitleSection title="My Recent" subtitle="Works"/>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    projects.map(value => {
                        return <Project key={value.fields.title} value={value.fields}/> 
                    })
                }
        </div>
    </section>
  )
}

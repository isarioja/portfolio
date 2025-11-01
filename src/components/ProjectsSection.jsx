import TitleSection from "./TitleSection"
import comfyImg from '../assets/confy_store_project.PNG'
import Project from "./Project"

const projects = [
    {
        name: 'ComfyStore',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        urlGitHub: '',
        urlDemo: '',
        icon: comfyImg
    },
    {
        name: 'ComfyStore',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        urlGitHub: '',
        urlDemo: '',
        icon: comfyImg
    },
    {
        name: 'ComfyStore',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ',
        urlGitHub: '',
        urlDemo: '',
        icon: comfyImg
    }
]

export default function ProjectsSection() {
  return (
    <section className="container mt-20 mb-20">
        <TitleSection title="My Recent" subtitle="Works"/>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    projects.map(value => {
                        return <Project value={value}/> 
                    })
                }
        </div>
        
    </section>
  )
}

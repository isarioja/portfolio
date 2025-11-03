
import Skill from './Skill'
import { useLoaderData } from 'react-router-dom'


export default function SkillsSection() {
  const {skills} = useLoaderData(); 

  return (
    <section className="container mb-40">
        <h2 className="text-center font-bold text-4xl tracking-widest text-mono mb-10 text-neutral"> 
            Professional <span className="text-fuchsia-600">Skillset</span></h2>

        <div className='flex flex-row gap-6 flex-wrap justify-center'>
            {
                skills.map(value => {
                    return <Skill key={value.fields.title} skill={value.fields}/>
                })
            }
        </div>
    </section>
  )
}

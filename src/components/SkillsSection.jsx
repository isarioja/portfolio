import javascriptSVG from '../assets/javascript.svg'
import css3SVG from '../assets/css-3.svg'
import gitSVG from '../assets/git.svg'
import html5SVG from '../assets/html-5.svg'
import javaSVG from '../assets/java.svg'
import mysqlSVG from '../assets/mysql.svg'
import nodeSVG from '../assets/nodejs.svg'
import reactSVG from '../assets/react.svg'
import sqlserverSVG from '../assets/sqlserver.svg'
import tailwindSVG from '../assets/tailwind.svg'
import typescriptSVG from '../assets/typescript.svg'
import Skill from './Skill'

const skills = [
    { name: 'Javascript', icon: javascriptSVG },
    { name: 'CSS3', icon: css3SVG },
    { name: 'Git', icon: gitSVG },
    { name: 'Html5', icon: html5SVG },
    { name: 'Node.Js', icon: nodeSVG },
    { name: 'React.Js', icon: reactSVG },
    { name: 'Typescript', icon: typescriptSVG },
    { name: 'Tailwind CSS', icon: tailwindSVG },
    { name: 'SQL Server', icon: sqlserverSVG },
    { name: 'MySQL', icon: mysqlSVG },
    { name: 'Java', icon: javaSVG },
];

export default function SkillsSection() {
  return (
    <section className="container mb-40">
        <h2 className="text-center font-bold text-4xl tracking-widest text-mono mb-10 text-neutral"> 
            Professional <span className="text-fuchsia-600">Skillset</span></h2>

        <div className='flex flex-row gap-6 flex-wrap justify-center'>
            {
                skills.map(value => {
                    return <Skill key={value.name} skill={value}/>
                })
            }
        </div>
    </section>
  )
}

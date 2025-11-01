
export default function Skill({skill}) {
  return (
    <div className='rounded-3xl border-2 border-fuchsia-700 px-6 py-2 flex flex-row items-center 
        justify-center text-xl gap-4 font-mono cursor-pointer shadow-md shadow-purple-300
        hover:scale-105 transition-all duration-300 ease-in'>
        <img src={skill.icon} className="h-6 w-6"/>
        {skill.name}
    </div>
  )
}

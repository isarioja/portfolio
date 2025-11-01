
export default function TitleSection({title, subtitle}) {
  return (
    <h2 className="uppercase mb-10 text-4xl text-center font-bold text-neutral">
          {title} <span className='text-fuchsia-600'>{subtitle}</span> 
    </h2>
  )
}

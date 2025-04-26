function Gadgets({src, paragraph}) {
  return (
    <div className="gap-y-4">
        <div className='w-[205px] h-[205px] bg-[#EBEAEA] rounded-[50%] flex flex-col items-center justify-center'>
        <div className="flex justify-center items-center">
            <img src={src} alt="Logo 1" className="w-[12vw] mix-blend-multiply hover:scale-[1.05]" />
        </div>
        </div>
        <h1>{paragraph}</h1>
    </div>
  )
}

export default Gadgets

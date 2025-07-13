
const InputBox = ({labelName,required,placeholder,type="text",typeTwo,height}) => {
  return (
    <>
      <label className='font-["Montserrat"] font-bold text-xl leading-7.5 text-[#303030] mb-3 mt-8 inline-block'>{labelName}{required && <span className='text-[#FF624C]'> *</span>}</label> <br />
      {
        typeTwo === "textarea"
        ?
        <textarea type="text" style={{ height: height }} className="w-full py-6 px-8 font-['Montserrat'] font-normal text-xl leading-7.5 placeholder:text-[#646464] text-black border border-[#CBCBCB] rounded-[10px]" placeholder={placeholder} />
        :
        <input type={type} className="w-full py-6 px-8 font-['Montserrat'] font-normal text-xl leading-7.5 placeholder:text-[#646464] text-black border border-[#CBCBCB] rounded-[10px]" placeholder={placeholder} />
      }
            
    </>
  )
}

export default InputBox
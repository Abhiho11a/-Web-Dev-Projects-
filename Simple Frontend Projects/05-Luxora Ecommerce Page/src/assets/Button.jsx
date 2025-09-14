import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button = ({label,align,imgUrl:Icon,color,hover,padx,txtColor,active}) => {
  return (
    <div className={`flex gap-2 group 
                    ${align === "reverse"?"flex-row-reverse":""} 
                    ${active?"bg-gray-100 border-2 border-purple-300":color?`${color} border-2 border-slate-200`:"bg-gradient-to-r from-purple-700 to-pink-600 text-white"}
                    ${hover?`${hover}`:""} 
                    ${padx?`px-${padx}`:""} rounded-xl py-2 px-3 transition-all duration-400 cursor-pointer
                    ${txtColor?`${txtColor}`:""}
                    `}>
        <h2>{label}</h2>
        <div className={`${Icon?"group-hover:translate-x-[2px] transition-all inline-block":"hidden"}`}>
            {Icon && <Icon/>}
        </div>
    </div>
  )
}

export default Button
import { useRef } from "react";

export default function Otp(){



    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    
       
    return(

        <div className="flex justify-center">
     

        <SubOtpbox  reference={ref1} onDone={()=>{ref2.current.focus()}}/>
        <SubOtpbox reference={ref2} onDone={()=>{ref3.current.focus()}}/>
        <SubOtpbox reference={ref3} onDone={()=>{ref4.current.focus()}}/>
        <SubOtpbox reference={ref4} onDone={()=>{ref5.current.focus()}}/>
        <SubOtpbox reference={ref5} onDone={()=>{ref6.current.focus()}}/>
        <SubOtpbox reference={ref6} onDone={()=>{ref6.current.focus()}}/>

    </div>

    )
}


function SubOtpbox({reference,onDone}){
       
    return(
        <input ref={reference} type="text" 

        onChange={(e)=>{

            onDone()

        }}
        
        className="m-1 w-[40px] h-[50px]  text-white rounded-2xl outline:none bg-blue-500 px-4"></input>
    )
}
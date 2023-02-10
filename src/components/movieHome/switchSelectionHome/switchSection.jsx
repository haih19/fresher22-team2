import React, { useLayoutEffect, useRef, useState } from 'react'
import './switchSelectionHome.scss'
const SwitchSection = ({ items, onToggle,  isToggle , styleSwitch}) => {
    const item1Ref = useRef();
    const item2Ref = useRef();
    const [item1Width,setItem1Width] = useState()
    const [item2Width,setItem2Width] = useState()

    useLayoutEffect(()=>{
        setItem1Width(item1Ref.current.offsetWidth)
        setItem2Width(item2Ref.current.offsetWidth)
    },[])
    const handleToggle =(toggle) =>{
        onToggle(toggle)
    }

    const toggleText =  styleSwitch[1]===''? 'color-active-1': 'switch-text-video'
    const textNoActive = styleSwitch[0] ===''? '': 'color-active-2'
    return (
        <>
            <div className={`section-item ${styleSwitch[0]}`} ref={item2Ref}>
                <div ref={item1Ref}><a onClick={() =>handleToggle(items[0])} className={` ${textNoActive} ${isToggle||toggleText}`}>{items[0]}</a></div>
                <div ><a onClick={()=>handleToggle(items[1])} className={`${textNoActive} ${isToggle&&toggleText}`}>{items[1]}</a></div>
                <span className={`section-item__cover ${styleSwitch[2]}`} style={
                    isToggle?{
                        left:`${item1Width}px`,
                        width: `${item2Width - item1Width}px`
                    }:
                    {
                        left:'0',
                        width:`${item1Width}px`
                    }
                }></span>
            </div>
        </>
    )
}

export default SwitchSection
import React, { useLayoutEffect, useRef, useState } from 'react'
import './switchSelectionHome.scss'
const SwitchSection = ({ items }) => {
    const [sectionActive,setSectionActive ] = useState(false)
    const item1Ref = useRef();
    const item2Ref = useRef();
    const [item1Width,setItem1Width] = useState()
    const [item2Width,setItem2Width] = useState()

    useLayoutEffect(()=>{
        setItem1Width(item1Ref.current.offsetWidth)
        setItem2Width(item2Ref.current.offsetWidth)
    },[])
    const handleToggle =(toggle) =>{
        setSectionActive(toggle)
    }
    const toggleText = 'color-active-1'
    return (
        <>
            <div className='section-item' ref={item2Ref}>
                <div ref={item1Ref}><a  onClick={() =>handleToggle(false)} className={`${sectionActive||toggleText}`}>{items[0]}</a></div>
                <div ><a onClick={()=>handleToggle(true)} className={`${sectionActive&&toggleText}`}>{items[1]}</a></div>
                <span className='section-item__cover' style={
                    sectionActive?{
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
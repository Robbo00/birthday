import React, { useEffect, useRef, useState } from 'react'


const Slider = ({filter}) => {

    const [style, setStyle] = useState({})

    const items = ['Upcoming', 'Today', 'This month', 'All']

    const [activeItem, setactiveItem] = useState('Upcoming')

    const menuRef = useRef(null)

    useEffect(()=>{
        const activeElement = menuRef.current?.querySelector(`button.active`)

        if(activeElement) {
        const menuPosition = menuRef.current.getBoundingClientRect()
        const itemPosition = activeElement.getBoundingClientRect()

    const space = itemPosition.left - menuPosition.left

    setStyle({
        width:`${itemPosition.width}px`,
        transform:`translateX(${space}px)`


    })
    }

    

    }, [activeItem])

    
    const click = (item => {
        filter(item)
        setactiveItem(item)
    })



  return (
    <div className='switch' ref={menuRef}>
        <div style={style} className="slide">

        </div>

        {
            items.map((x) => {
                return(
                    <button onClick={() => {click(x)}} className={activeItem === x ? 'active' : ''}>{x}</button>
                )
            })
        }

      </div>
  )
}

export default Slider
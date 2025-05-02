import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react'

const Modal:FC<{children:ReactNode, open:boolean, setOpen:Dispatch<SetStateAction<boolean>> }> = ({ children, open, setOpen }) => {
    return (
        <div onClick={(e) => (e.target as HTMLDivElement).id == "modal-wrapper" ? setOpen(false) : setOpen(true)} id='modal-wrapper' className={`${open ? "" : "scale-0"} duration-300 fixed left-0 right-0 flex items-center justify-center h-[100vh] w-full backdrop-blur bg-[#00000097] top-0 z-[999999]`}>
            <div>{children}</div>
        </div>
    )
}

export default Modal


//  onClick={(e) => (e.target as HTMLDivElement).id == "modal-wrapper" ? setOpen(false) : setOpen(true)} id='modal-wrapper' className='absolute left-0 right-0 mx-auto'
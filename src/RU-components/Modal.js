import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, btntitle }, ref) {
    const dailog = useRef()
    useImperativeHandle(
        ref,
        () => {
            return {
                disp() {
                    dailog.current.showModal()
                }
            }
        }
    )

    return createPortal(
        <dialog ref={dailog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">{children}
        <form method="dialog">
            <Button>{btntitle}</Button>
        </form>
        </dialog>,
        document.getElementById("myModal")
    )
})

export default Modal;
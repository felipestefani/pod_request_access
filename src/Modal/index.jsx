import style from "./style.module.css";
import { AiOutlineClose } from "react-icons/ai";

const Modal = (props) => {

    const { closeModal } = props

    return (
        <div className={style.modal_container} >
            <div className={style.modal_curtain} onClick={closeModal}></div>
            <div className={style.modal_content}>
                <AiOutlineClose className={style.close_icon} onClick={closeModal}/>
                <p className={style.modal_text}>Access guaranteed</p>
            </div>
        </div>
    )
}

export default Modal
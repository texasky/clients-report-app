import styles from "./ArrowButton.module.scss";
import arrowButton from "../../assets/icons/arrow-icon.svg";
import { ArrowButtonProps } from "../../types/types";
const ArrowButton = (props: ArrowButtonProps) => {
    return (
        <button
            className={`${styles.arrowButton} ${props.isOpen && styles.arrowUp}`}
            onClick={props.onClick}
        >
           <img
               src={arrowButton}
               alt="Expand"
           />
        </button>
    )
}

export default ArrowButton;
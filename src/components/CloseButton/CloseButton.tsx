import styles from "./CloseButton.module.scss";
import closeIcon from "../../assets/icons/close-icon.svg";
import { CloseButtonProps } from "../../types/types";

const CloseButton = (props:CloseButtonProps) => {
    return (
        <button className={styles.closeButton} onClick={props.onClick}>
            <img src={closeIcon} alt="Close"/>
        </button>
    )
}

export default CloseButton;
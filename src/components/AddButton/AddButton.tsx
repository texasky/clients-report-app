import styles from "./AddButton.module.scss";
import { AddButtonProps } from "../../types/types";

const AddButton = (props: AddButtonProps) => {
    return <button className={styles.button} onClick={props.onClick}>{props.text}</button>
}

export default AddButton;
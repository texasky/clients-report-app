import styles from "./ClientsHeader.module.scss";
import ArrowButton from "../ArrowButton/ArrowButton";
import CloseButton from "../CloseButton/CloseButton";
import { ClientsHeaderProps } from "../../types/types";

const ClientsHeader = (props:ClientsHeaderProps) => {
    return (
        <div className={styles.header} >
            <ArrowButton isOpen={props.isOpen} onClick={props.onOpenClick} />
            <div>{props.text}</div>
            <CloseButton onClick={props.onDeleteClick}/>
        </div>
    )
}

export default ClientsHeader;
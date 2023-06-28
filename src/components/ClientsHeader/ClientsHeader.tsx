import styles from "./ClientsHeader.module.scss";
import ArrowButton from "../ArrowButton/ArrowButton";
import CloseButton from "../CloseButton/CloseButton";

const ClientsHeader = (props:any) => {
    return (
        <div className={styles.header} onClick={props.onClick} >
            <ArrowButton isOpen={props.isOpen} />
            <div>CLIENT</div>
            <CloseButton />
        </div>
    )
}

export default ClientsHeader;
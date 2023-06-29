import styles from "./DataItem.module.scss";
import CloseButton from "../CloseButton/CloseButton";
import { DataItemProps}  from "../../types/types";

const DataItem = (props: DataItemProps) => {
    return (
        <div className={styles.dataItem}>
            <img src={`/imgDataRepresentation/${props.src}.svg`} alt="Report data item"/>
            <CloseButton onClick={() => {
                //TO-DO
            }} />
        </div>
    )
}

export default DataItem;
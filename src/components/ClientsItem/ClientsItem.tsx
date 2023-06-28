import styles from './ClientsItem.module.scss';
import {useState} from "react";
import ClientsHeader from "../ClientsHeader/ClientsHeader";
import ClientsReports from "../ClientsReports/ClientsReports";

const ClientsItem = (props: any) => {
    const [openState, setOpenState] = useState(false);

    const toggleOpenState = () => {
        setOpenState(openState => !openState);
    }

    return (
        <div className={styles.clientItem}>
            <ClientsHeader isOpen={openState} onClick={toggleOpenState} />
            {openState && <ClientsReports />}
        </div>
    )
}

export default ClientsItem;
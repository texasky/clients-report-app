import styles from "./ClientsItem.module.scss";
import { useCallback, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { deleteClient } from "../../features/clients/clientsSlice";
import { Client } from "../../types/types";
import ReportsList from "../ReportsList/ReportsList";
import ClientsHeader from "../ClientsHeader/ClientsHeader";

const ClientsItem = (props: Client) => {
    const dispatch = useAppDispatch();
    const [openState, setOpenState] = useState(false);

    const toggleOpenState = useCallback(() => {
        setOpenState(openState => !openState);
    }, [])
    const onDeleteClient = useCallback(() => {
        dispatch({type: deleteClient, payload: props.id});
    }, [dispatch, props.id])

    return (
        <div className={styles.clientItem}>
            <ClientsHeader
                isOpen={openState}
                onOpenClick={toggleOpenState}
                onDeleteClick={onDeleteClient}
                text={props.name}
            />
            {openState && <ReportsList text={props.name} clientId={props.id} />}
        </div>
    )
}

export default ClientsItem;
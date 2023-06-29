import styles from "./ClientsList.module.scss";
import ClientsItem from "../ClientsItem/ClientsItem";
import { useAppSelector } from "../../hooks";
import { ClientsListProps } from "../../types/types";

const ClientsList = (props: ClientsListProps) => {
    const searchQuery = useAppSelector((state) => state.search.searchQuery);
    const clientsList = props.clients
        .filter((client: { name: string }) => client.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((client: { [x: string]: any; }) => <ClientsItem key={client["id"]} name={client.name} id={client.id} />)

    return  (
        <div className={styles.list}>
            {clientsList}
        </div>
    )
}

export default ClientsList;
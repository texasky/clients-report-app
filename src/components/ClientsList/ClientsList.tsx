import styles from './ClientsList.module.scss';
import ClientsItem from "../ClientsItem/ClientsItem";

const ClientsList = (props: any) => {
    const clientsList = props.clients.map((el: { [x: string]: any; }) => <ClientsItem key={el["id"]} />)

    return  (
        <div className={styles.list}>
            {clientsList}
        </div>
    )
}

export default ClientsList;
import ClientsList from "./components/ClientsList/ClientsList";
import { useEffect } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import styles from './App.module.scss';
import { useAppSelector, useAppDispatch } from './hooks';
import { useGetClientsQuery } from './services/clients';
import { setClients } from "./features/clients/clientsSlice";
import Spinner from "./components/Spinner/Spinner";

function App() {
    const dispatch = useAppDispatch();
    const clients = useAppSelector((state) => state.clients.clients);

    const {data,isError,isLoading} = useGetClientsQuery(undefined, {skip:  !clients || !!clients.length});

    useEffect(() => {
        if(data) dispatch({type: setClients, payload: data})
    }, [data, dispatch])

    return (
        <div className={`${styles.app} ${styles.wrapper}`}>
            <AppHeader/>
            {isLoading && <Spinner />}
            {!!clients.length && <ClientsList clients={clients} />}
            {!clients.length && !clients && <div>No data</div>}
        </div>
    );
}

export default App;

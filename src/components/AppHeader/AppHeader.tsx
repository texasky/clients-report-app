import styles from "./AppHeader.module.scss";
import AddButton from "../AddButton/AddButton";
import SearchBar from "../SearchBar/SearchBar";
import { useAppDispatch } from "../../hooks";
import { addClient } from "../../features/clients/clientsSlice";
import generateName from "../../data/names";
import { v4 as uuid } from "uuid";
import { useCallback } from "react";

const AppHeader = () => {
    const dispatch = useAppDispatch();

    const addNewClient = useCallback(() => {
        const id = uuid();
        const name = generateName();
        dispatch({type: addClient, payload: {id, name}})
    }, [dispatch])

    return (
        <div className={styles.header}>
            <AddButton
                onClick={addNewClient}
                text="New Client"
            />
            <SearchBar />
        </div>
    )
}

export default AppHeader;
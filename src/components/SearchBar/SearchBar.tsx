import styles from "./SearchBar.module.scss";
import searchLogo from "../../assets/icons/search-icon.svg";
import { useAppDispatch } from "../../hooks";
import { setSearchQuery } from "../../features/clients/searchSlice";
import React from "react";

const SearchBar = () => {
    const dispatch = useAppDispatch();

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        dispatch({type: setSearchQuery, payload: event.target.value})
    }

    return (
        <div className={styles.searchBar}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder='Client Search'
                onChange={onInputChange}
            />
            <img
                src={searchLogo}
                className={styles.searchIcon}
                alt="Search icon"
            />
        </div>
    )
}

export default SearchBar;
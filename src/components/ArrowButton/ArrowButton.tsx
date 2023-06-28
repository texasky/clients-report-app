import styles from './ArrowButton.module.scss';
const ArrowButton = (props: any) => {
    return (
        <div className={props.isOpen ? styles.arrow : styles.arrowUp}>
            <div className="arrow-top"></div>
            <div className="arrow-bottom"></div>
        </div>
    )
}

export default ArrowButton;
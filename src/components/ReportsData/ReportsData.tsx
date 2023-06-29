import AddButton from "../AddButton/AddButton";
import styles from "./ReportsData.module.scss";
import DataItem from "../DataItem/DataItem";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "../../hooks";
import { addReportData } from "../../features/reports/reportsSlice";
import { ReportsItemProps, SingleReportsItem } from "../../types/types";
import { useCallback } from "react";

const ReportsData = (props: ReportsItemProps) => {
    const dispatch = useAppDispatch();

    const dataItems = props.data.map((data:SingleReportsItem) => <DataItem key={data.id} src={data.src} />)

    const onAddNewData = useCallback(() => {
        const newDataItem = {id: uuid(), src: "pic1"}

        dispatch({
            type: addReportData,
            payload: {
                clientId: props.clientId,
                reportId: props.reportId,
                report: newDataItem
            }
        })
    }, [dispatch, props.clientId, props.reportId])

    return (
        <div className={styles.reportData}>
            <div className={styles.header}>
                <div>Report data</div>
                <AddButton text="Add data" onClick={onAddNewData} />
            </div>
            {props.data && <div className={styles.dataList}>{dataItems}</div>}
        </div>
    )
}

export default ReportsData;
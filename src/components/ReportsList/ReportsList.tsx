import styles from './ReportsList.module.scss';
import { useAppDispatch, useAppSelector } from "../../hooks";
import AddButton from "../AddButton/AddButton";
import ReportsItem from "../ReportsItem/ReportsItem";
import { addReport, setReports } from "../../features/reports/reportsSlice";
import { v4 as uuid } from "uuid";
import { useGetReportsQuery} from "../../services/clients";
import { useCallback, useEffect } from "react";
import { ReportsListProps } from "../../types/types";
import Spinner from "../Spinner/Spinner";

const ReportsList = (props: ReportsListProps) => {
    const dispatch = useAppDispatch();
    const reports = useAppSelector((state) => state.reports.reports);

    const isNoReports = !reports || !reports.length;
    const {data,isError,isLoading} = useGetReportsQuery(undefined, {skip:  !isNoReports});

    useEffect(() => {
        if(data && isNoReports) dispatch({type: setReports, payload: data})
    }, [data, dispatch, isNoReports])

    const clientId = `userId${props.clientId}`;
    const specificReports = reports[clientId];
    const reportsItems = specificReports?.map((report: any) => {
        return (
            <ReportsItem
                key={report.reportId}
                data={report.data}
                clientId={clientId}
                reportId={report.reportId}
            />
        )
    })

    const onAddReport = useCallback(() => {
        const reportId = uuid();
        dispatch({type: addReport, payload: {clientId, reportId, data: []}})
    }, [clientId, dispatch])

    return  (
        <div className={styles.list}>
            <div className={styles.reportsListHeader}>
                <span>{`${props.text} reports`}</span>
                <AddButton
                    text="Add report"
                    onClick={onAddReport}
                />
            </div>
            {!reportsItems && isLoading ? <Spinner/> : reportsItems }
        </div>
    )
}

export default ReportsList;
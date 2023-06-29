import ClientsHeader from "../ClientsHeader/ClientsHeader";
import {useState} from "react";
import ReportsData from "../ReportsData/ReportsData";
import { useAppDispatch } from "../../hooks";
import { deleteReport } from "../../features/reports/reportsSlice";
import { ReportsItemProps } from "../../types/types";


const ReportsItem = (props: ReportsItemProps) => {
    const dispatch = useAppDispatch();
    const [openState, setOpenState] = useState(false);

    const toggleOpenState = ():void => {
        setOpenState(openState => !openState);
    }

    const onDeleteReport = ():void => {
        dispatch({
            type: deleteReport,
            payload: {clientId: props.clientId, reportId: props.reportId}
        })
    }

    return (
        <div>
            <ClientsHeader isOpen={openState} text={`Report ${props.reportId}`} onOpenClick={toggleOpenState} onDeleteClick={onDeleteReport} />
            {openState && <ReportsData data={props.data} clientId={props.clientId} reportId={props.reportId}/>}
        </div>
    )
}

export default ReportsItem;
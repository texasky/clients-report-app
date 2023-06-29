import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { ReportsItemProps, SingleReportsItem } from "../../types/types";

//TO-DO types

const initialState: any = {
    reports: {}
}

export const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        setReports: (state, action: PayloadAction<ReportsItemProps>,) => {
            state.reports = action.payload
        },
        addReport: (state, action: PayloadAction<ReportsItemProps>,) => {
            state.reports = {
                ...state.reports,
                [action.payload.clientId]:
                    [...state.reports[action.payload.clientId], {reportId: action.payload.reportId, data: action.payload.data}]
            }
        },
        deleteReport: (state, action: PayloadAction<ReportsItemProps>,) => {
            state.reports = {
                ...state.reports,
                [action.payload.clientId]:
                    [...state.reports[action.payload.clientId]
                        .filter((report:SingleReportsItem) => report.reportId !== action.payload.reportId)]
            }
        },
        addReportData: () => {
            //TO-DO
        },
    },
})

export const { setReports, addReport, deleteReport, addReportData } = reportsSlice.actions

export default reportsSlice.reducer
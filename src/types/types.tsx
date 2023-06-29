import React from "react";

export interface Client {
    id: string,
    name: string,
}

export interface DataItemProps {
    src: string
}

export interface ClientsListProps {
    clients: Client[]
}

export interface CloseButtonProps {
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export interface ArrowButtonProps extends CloseButtonProps {
    isOpen: boolean,
}


export interface ClientsHeaderProps {
    isOpen: boolean,
    text: string,
    onOpenClick: (event: React.MouseEvent<HTMLElement>) => void,
    onDeleteClick: (event: React.MouseEvent<HTMLElement>) => void
}

export interface AddButtonProps {
    text: string,
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export interface ReportsListProps {
    text: string,
    clientId: string
}

export interface SingleReportsItem {
    id: string,
    src: string,
    reportId?: string
}

export interface ReportsItemProps {
    data: SingleReportsItem[],
    clientId: string,
    reportId: string
}
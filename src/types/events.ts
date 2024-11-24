
export interface IEvent  {
    eno: number;
    ename: string;
    endDate: string;
    startDate: string;
    status: string;
    useSpace: boolean;
}

export interface IEventSearch  {
    status: string | null;
    startDate: string | null;
    endDate: string | null;
    useSpace: string | null;
    keyword: string | null;
}
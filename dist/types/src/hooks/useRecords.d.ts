import { RecordWithPlaintext, RecordsFilter } from '../messages/records.js';
type UseRecordsOptions = {
    address?: string;
    filter?: RecordsFilter;
    page?: number;
};
export declare const getFormattedRecordPlaintext: (data: any) => string;
export declare const useRecords: ({ address, filter, page }: UseRecordsOptions) => {
    fetchPage: () => void;
    records: RecordWithPlaintext[] | undefined;
    error: string | undefined;
    loading: boolean;
    page: number | undefined;
    pageCount: number;
};
export {};
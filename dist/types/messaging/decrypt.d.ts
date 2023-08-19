import { ExecuteResData } from "./execute.js";
export type DecryptReqMessage = {
    type: 'DECRYPT';
    data: {
        transactionId: string;
    };
};
export type DecryptResMessage = {
    type: 'DECRYPT_RES';
    data: ExecuteResData;
};
export type DecryptRejMessage = {
    type: 'DECRYPT_REJ';
    data: {
        error?: string;
    };
};
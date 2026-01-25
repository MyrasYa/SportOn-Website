import { fetchAPI } from "../lib/api"
import { Transaction } from "../types"

export const transactionCheckout = async (form: FormData): Promise<Transaction> => {
    const res = await fetchAPI<Transaction>("/transactions/checkout", {
        method: "POST",
        body: form,
    });
    return res;
}

export const getTransactionById = async (id: string): Promise<Transaction> => {
    const res = await fetchAPI<Transaction>(`/transactions/${id}`);
    // console.log("transactionsId: ", res)
    return res;
}
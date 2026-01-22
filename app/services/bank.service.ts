import { fetchAPI } from "../lib/api";
import { Bank } from "../types";

export const getAllBanks = async (): Promise<Bank[]> => {
    const res = await fetchAPI<Bank[]>("/banks");
    // console.log("Categories response: ", res);
    return res;
}
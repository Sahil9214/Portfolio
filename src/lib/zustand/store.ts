import { create } from "zustand";
import { contactFormStore } from "../types";
import { postApiCall } from "@/services/axiosApiCall";

type contactStoreForm = {
  result: string | null;
  postContactForm: (contactForm: contactFormStore) => Promise<void>;
};



export const useStore = create<contactStoreForm>((set) => ({
  result: null,
  postContactForm: async (payload) => {
  try {
    const response = await postApiCall(payload);
    set({ result: response?.data?.message });
  } catch (error) {
    throw error;
  }
}

}));
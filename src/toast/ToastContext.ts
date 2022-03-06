import { createContext } from "react";
import { ToastInput, ToastStats } from "./types";

type ToastContextValue = {
  stats: ToastStats | null;
  toasts: ToastInput[];
  addToast: (props: ToastInput) => void;
};

export const ToastContext = createContext<ToastContextValue>({
  stats: null,
  toasts: [],
  addToast: () => {
    throw new Error("not implemented");
  },
});

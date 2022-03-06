import { ToastContext } from "./ToastContext";
import { useState, useEffect } from "react";
import { ToastInput, ToastStats } from "./types";
import { addToastStat, getToastStat } from "./api";

type Props = {
  children: React.ReactNode;
};

// your mission: implement this component
export function ToastProvider(props: Props) {
  const [toasts, setToasts] = useState<ToastInput[]>([]);
  const [stats, setStats] = useState<ToastStats | null>(null);
  const { children } = props;
  const addToast = async (toastInput: ToastInput) => {
    setToasts((oldval) => [...oldval, toastInput]);
    try {
      const result = await addToastStat(toastInput.type);
      setStats(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await getToastStat();
        setStats(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ToastContext.Provider
      value={{
        stats,
        toasts,
        addToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

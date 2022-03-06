export type ToastType = "success" | "error" | "warning";

export type ToastInput = {
  type: ToastType;
  ttl: number | null;
  body: string;
};

export type ToastStats = {
  success: number;
  warning: number;
  error: number;
};

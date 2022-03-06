import React from "react";
import { Expire } from "../components/Expire";
import { Color } from "../components/Color";
import { Toast } from "./Toast";
import { ToastInput } from "../toast/types";
type Props = {
  toasts: ToastInput[];
};
export function ToastList(props: Props) {
  const { toasts } = props;
  return (
    <>
      <div className="toast-container">
        {toasts.map(({ type, ttl, body }, i) => (
          <Expire time={ttl}>
            <Color type={type}>
              <Toast key={i} body={body} />
            </Color>
          </Expire>
        ))}
      </div>
    </>
  );
}

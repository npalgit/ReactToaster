import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  time: number | null;
};

export function Expire(props: Props) {
  const { time, children } = props;
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if(!time) return;
    let timeOutId = setTimeout(() => setVisible(false), time);
    return () => {
      if (timeOutId) {
        clearInterval(timeOutId);
      }
    };
  }, []);

  return visible ? <>{children}</>: <></>;
}

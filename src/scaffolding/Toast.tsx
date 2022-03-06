import React from "react";

type Props = {
  body: string;
  key: number | null | undefined;
};

export function Toast(props: Props) {
  const { body, key } = props;
  return (
    <div className="flex text-center mt-5 p-4 font-bold" style={{}} key={key}>
      {body}
    </div>
  );
}

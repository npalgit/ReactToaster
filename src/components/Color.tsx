type Props = {
  children: React.ReactNode;
  type: string;
};

export function Color(props: Props) {
  const { type, children } = props;
  const getColorClass = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        '';
    }
  };
  return <div className={getColorClass()}>{children}</div>;
}

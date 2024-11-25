import { CircularProgress } from "@nextui-org/react";

interface Props {
  value: number;
  maxValue: number;
  valueLabel?: string;
  color?: "success" | "warning" | "danger" | "primary" | "secondary";
  classNames?: {
    svg?: string;
    value?: string;
  };
}

export const MyCircularProgress = ({
  value,
  maxValue,
  classNames,
  valueLabel,
  color,
}: Props) => {
  return (
    <CircularProgress
      classNames={{
        svg: classNames?.svg,
        value: classNames?.value ?? "text-xs",
      }}
      valueLabel={valueLabel}
      value={value}
      maxValue={maxValue}
      color={color}
      showValueLabel={true}
    />
  );
};

import { Button } from "@nextui-org/react";
import { Color, Size } from "../../config/types";

interface Props {
  as?: React.ElementType;
  color?: Color;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  size?: Size;
}

export const MyButton = ({
  as,
  color,
  className,
  children,
  onClick,
  size,
}: Props) => {
  return (
    <Button
      as={as}
      color={color}
      size={size}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

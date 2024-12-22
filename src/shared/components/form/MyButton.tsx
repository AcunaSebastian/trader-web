import { Button } from "@nextui-org/react";
import { Color, Size, Variant } from "../../config/types";

interface Props {
  as?: React.ElementType;
  color?: Color;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  size?: Size;
  isIconOnly?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const MyButton = ({
  as,
  color,
  className,
  children,
  onClick,
  size,
  isIconOnly,
  variant,
  startContent,
  ...props
}: Props) => {
  return (
    <Button
      as={as}
      color={color}
      {...props}
      startContent={startContent}
      variant={variant}
      isIconOnly={isIconOnly}
      size={size}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

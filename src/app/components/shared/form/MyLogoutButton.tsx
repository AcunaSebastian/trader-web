import useAuth from "../../../hooks/useAuth";
import { Color, Size } from "../../../shared/config/types";
import { MyButton } from "./MyButton";

interface Props {
  color?: Color;
  className?: string;
  size?: Size;
}

export const MyLogoutButton = ({ color, className, size }: Props) => {
  const { handleLogout } = useAuth();
  return (
    <MyButton
      color={color}
      className={className}
      onClick={handleLogout}
      size={size}
    >
      Log Out
    </MyButton>
  );
};

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import { MyLogoutButton } from "../form/MyLogoutButton";
import useAuth from "../../../features/authentication/hooks/useAuth";

export const MyAvatar = () => {
  const { user } = useAuth();

  return (
    <div>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name={user?.name}
            size="sm"
            src={user?.picture}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="logout">
            <MyLogoutButton
              key="logout"
              color="danger"
              size="sm"
              className="w-full"
            />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

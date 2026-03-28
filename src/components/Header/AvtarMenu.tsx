import { SquareUserRoundIcon } from "lucide-react";
import Link from "next/link";
import LogoutButton from "../Buttons/LogoutButton";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcnui/avatar";
import { Button } from "../shadcnui/button";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "../shadcnui/dropdown-menu";

const AvtarMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full">
            <Avatar>
              <AvatarImage
                src={"/p-avtar.png"}
                alt={"prifile icon"}
              />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
          </Button>
        }
      />

      <DropdownMenuSubContent
        align="center"
        className="mt-4">
        <DropdownMenuGroup>
          <DropdownMenuItem
            render={
              <Link
                href="/" // i wil change this on future
                className="flex cursor-pointer items-center justify-center">
                <SquareUserRoundIcon /> Account
              </Link>
            }
          />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem render={<LogoutButton />} />
        </DropdownMenuGroup>
      </DropdownMenuSubContent>
    </DropdownMenu>
  );
};

export default AvtarMenu;

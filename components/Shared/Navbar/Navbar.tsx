import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import { NavbarProps } from "./Navbar.type";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar(props: NavbarProps) {
  const { users } = props;
  return (
    <nav>
      <div className="hidden mx-auto md:block">
        <NavbarDesktop users={users} />
      </div>
      <div className="md:hidden">
        <NavbarMobile  users={users} />
      </div>
    </nav>
  );
}
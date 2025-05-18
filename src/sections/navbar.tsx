import { HamburgerMenu } from "../components/ui/humberger-menu";
const Navbar = () => {
  return (
    <div>
      <div className=" fixed top-0 right-0 p-4 z-20">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;

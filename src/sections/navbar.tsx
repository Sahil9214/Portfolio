import { HamburgerMenu } from "../components/ui/humberger-menu";
import { LanguageToggle } from "../components/ui/language-toggle";

const Navbar = () => {
  return (
    <div>
      <div className="fixed top-0 right-0 p-4 z-20 flex items-center gap-3">
        <LanguageToggle />
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;

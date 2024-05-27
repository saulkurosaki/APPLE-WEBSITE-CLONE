import { appleImg } from "../utils";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="Apple logo" width={14} height={18} />
      </nav>
    </header>
  );
};

export default Navbar;

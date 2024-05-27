import { appleImg } from "../utils";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} alt="Apple logo" width={14} height={18} />

        <div>
          {["Phones", "Macbooks", "Tablets"].map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import logo from "../assets/Logo/Logo.svg";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </nav>
    </header>
  );
}

export default Header;

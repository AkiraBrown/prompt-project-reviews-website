import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img src="/assets/prompt.webp" alt="Logo" className="header__logo" />
      <nav className="header__nav">
        <a href="/" className="header__nav-item">
          Home
        </a>
        <a href="/reviews" className="header__nav-item">
          Reviews
        </a>
        <a href="/about" className="header__nav-item">
          About
        </a>
      </nav>
    </div>
  );
}

export default Header;

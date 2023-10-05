function Navbar({ children }) {
  return (
    <div className="nav-bar">
      <div className="logo">
        <span role="img" className="emoji">
          📽
        </span>
        <h1>WANNABE CINEPHILE</h1>
      </div>
      {children}
    </div>
  );
}

export default Navbar;

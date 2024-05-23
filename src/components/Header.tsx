const Header = () => {
  return (
    <header className="rounded-sm bg-white p-3 text-black">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:flex">Box dimensions database</h1>
        <ul className="flex items-center">
          <li>
            <a
              className="hover:underline"
              href="https://github.com/kristianka/boxdb-frontend"
              target="_"
            >
              Source code
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

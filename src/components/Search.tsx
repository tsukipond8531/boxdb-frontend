interface props {
  setSearch: (search: string) => void;
}

const Search = ({ setSearch }: props) => {
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // so the page doesn't refresh if user presses enter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="relative m-1" onSubmit={handleSubmit}>
      <div className="">
        <input
          onChange={changeValue}
          type="search"
          id="default-search"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pr-10 text-sm text-gray-900"
          placeholder="Search by comment"
          required
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
        >
          <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
    </form>
  );
};

export default Search;

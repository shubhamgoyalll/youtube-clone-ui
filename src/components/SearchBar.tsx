export default function SearchBar() {
  return (
    <div>
      <div className="max-sm:hidden block w-96 flex text-gray-900 border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
        <input
          type="text"
          id="simple-search"
          className="w-full bg-slate-950 border-none text-white outline-none"
          placeholder="Search"
          required
        />
        <button
          type="submit"
          className="py-2 px-2 rounded inline-flex font-medium text-gray-400 font-bold bg-slate-950"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
}

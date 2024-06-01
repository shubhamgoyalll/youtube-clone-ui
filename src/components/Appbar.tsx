import SearchBar from "./SearchBar";

export default function Appbar() {
  return (
    <div className="flex justify-between">
      {/* <span>
        <img src="/hamburger.png" className="w-12"></img>
      </span> */}
      <div className="flex">
        <img src="/yt.png" className="w-12"></img>
        <h3 className="pl-2 pt-2 font-bold text-xl">Youtube</h3>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search goods</span>
    </label>
    <input
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search goods"
      name="s"
    />
    <button
      className="btn btn-outline-success"
      type="submit"
      style={{ margin: "0 10px" }}
      onSubmit={(e) => setSearchQuery(e.target.value)}
    >
      Search
    </button>
  </form>
);

export default SearchBar;

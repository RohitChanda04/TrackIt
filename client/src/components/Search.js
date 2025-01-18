import React, { useState } from "react";

const Search = ({
  searchField,
  setSearchField,
  searchValue,
  setSearchValue,
}) => {
  const [currentSearchField, setCurrentSearchField] = useState("");
  const [currentSearchValue, setCurrentSearchValue] = useState("");

  const handleSearch = () => {
    setSearchField(currentSearchField);
    setSearchValue(currentSearchValue);
  };

  return (
    <>
      <form className="form-inline">
        <select
          className="form-control mr-2"
          value={currentSearchField}
          onChange={(e) => setCurrentSearchField(e.target.value)}
        >
          <option value={""}>Select Search Parameter</option>
          <option value={"company"}>Company</option>
          <option value={"role"}>Role</option>
          <option value={"location"}>Location</option>
          <option value={"source"}>Source</option>
          <option value={"date"}>Date</option>
          <option value={"call"}>Call</option>
        </select>
        <input
          type={currentSearchField === "date" ? "date" : "text"}
          className="form-control mr-2"
          placeholder="Enter Search Parameter"
          name="searchValue"
          value={currentSearchValue}
          onChange={(e) => setCurrentSearchValue(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;

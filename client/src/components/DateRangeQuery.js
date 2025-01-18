import React, { useState } from "react";

const DateRangeQuery = ({
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
        <label style={{ color: "white", paddingRight: "8px" }}>
          <b>From</b>
        </label>
        <input
          type="date"
          className="form-control mr-2"
          placeholder="Enter Search Parameter"
          name="searchValue"
          value={currentSearchValue}
          onChange={(e) => setCurrentSearchValue(e.target.value)}
        />
        <label
          style={{ color: "white", paddingLeft: "1px", paddingRight: "5px" }}
        >
          <b>To</b>
        </label>
        <input
          type="date"
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

export default DateRangeQuery;

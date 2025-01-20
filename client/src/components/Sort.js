import React, { useState } from "react";

const Sort = ({ sortBy, setSortBy }) => {
  const [currentSortBy, setCurrentSortBy] = useState("default");

  const handleSort = () => {
    setSortBy(currentSortBy);
  };

  return (
    <>
      <form className="form-inline">
        <select
          className="form-control"
          value={currentSortBy}
          onChange={(e) => setCurrentSortBy(e.target.value)}
        >
          <option value={""}>Sort By</option>
          <option value={"company-asc"}>Company (A - Z)</option>
          <option value={"company-desc"}>Company (Z - A)</option>
          <option value={"date-oldest"}>Oldest</option>
          <option value={"default"}>Default</option>
        </select>
        <button
          type="button"
          className="btn btn-success ml-2"
          onClick={handleSort}
        >
          Sort
        </button>
      </form>
    </>
  );
};

export default Sort;

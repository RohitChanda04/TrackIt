import React, { useState } from "react";

const DateRangeQuery = ({ from, setFrom, to, setTo }) => {
  const [currentFrom, setCurrentFrom] = useState("");
  const [currentTo, setCurrentTo] = useState("");

  const handleSearch = () => {
    setFrom(currentFrom);
    setTo(currentTo);
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
          name="from"
          value={currentFrom}
          onChange={(e) => setCurrentFrom(e.target.value)}
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
          name="to"
          value={currentTo}
          onChange={(e) => setCurrentTo(e.target.value)}
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

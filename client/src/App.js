import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core/dist/umd/popper.min.js";
import JobApplicationTable from "./components/JobApplicationTable";
import AddModal from "./components/AddModal";
import Search from "./components/Search";
import { useState } from "react";
import DateRangeQuery from "./components/DateRangeQuery";
import Sort from "./components/Sort";

function App() {
  const [searchField, setSearchField] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sortBy, setSortBy] = useState("default");

  return (
    <>
      <nav
        class="navbar navbar-expand-sm navbar-dark"
        style={{ background: "#0a3d3f" }}
      >
        <a
          class="navbar-brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
        >
          <div className="ml-5 mr-2">
            <h5>Applications</h5>
          </div>
        </a>
        <ul class="navbar-nav">
          <li>
            <AddModal />
          </li>
          <li style={{ marginLeft: "10px" }}>
            <Search
              searchField={searchField}
              setSearchField={setSearchField}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </li>
          <li style={{ marginLeft: "50px" }}>
            <Sort sortBy={sortBy} setSortBy={setSortBy} />
          </li>
          <li style={{ marginLeft: "50px" }}>
            <DateRangeQuery
              searchField={searchField}
              setSearchField={setSearchField}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              from={from}
              setFrom={setFrom}
              to={to}
              setTo={setTo}
            />
          </li>
        </ul>
      </nav>

      <div
        className="container"
        style={{
          paddingTop: "10px",
          margin: "auto",
          borderRadius: "10px",
          maxHeight: "850px",
          maxWidth: "100%",
          overflowY: "auto",
          background: "#106569",
        }}
      >
        {/* <AddModal /> */}
        <JobApplicationTable
          searchField={searchField}
          searchValue={searchValue}
          from={from}
          to={to}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core/dist/umd/popper.min.js";
import JobApplicationTable from "./components/JobApplicationTable";
import AddModal from "./components/AddModal";
import Search from "./components/Search";
import { useState } from "react";
import DateRangeQuery from "./components/DateRangeQuery";

function App() {
  const [searchField, setSearchField] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <>
      <nav
        class="navbar navbar-expand-sm navbar-dark"
        style={{ background: "#0a3d3f" }}
      >
        <a class="navbar-brand" href="App.js">
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
          <li style={{ marginLeft: "308px" }}>
            <DateRangeQuery
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
        />
      </div>
    </>
  );
}

export default App;

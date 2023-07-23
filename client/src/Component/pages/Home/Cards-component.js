import React from "react";
import Card from "./Card";

export default function CardsComponent({ data, addToCart, search,onChangeHandler }) {
  const [filterValue, setFilteredValue] = React.useState("");

  let filteredData = data;
  if (filterValue) {
    filteredData = data.filter(
      (element) => element.categoryName === filterValue
    );
  }
  if (search) {
    filteredData = filteredData.filter((val) =>
      val.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <div>
      <div className="filter-buttons">
        <button
          onClick={() => {
            setFilteredValue("");
          }}
          className={`filter-button ${
            filterValue === "" ? "selected-button" : ""
          }`}
          type="submit"
          value="search"
        >
          All
        </button>
        <button
          onClick={() => setFilteredValue("pizza")}
          className={`filter-button ${
            filterValue === "pizza" ? "selected-button" : ""
          }`}
          type="submit"
          value="search"
        >
          Pizza
        </button>
        <button
          onClick={() => setFilteredValue("burger")}
          className={`filter-button ${
            filterValue === "burger" ? "selected-button" : ""
          }`}
          type="submit"
          value="search"
        >
          Burger
        </button>

        <button
          onClick={() => setFilteredValue("drinks")}
          className={`filter-button ${
            filterValue === "drinks" ? "selected-button" : ""
          }`}
          type="submit"
          value="search"
        >
          Drinks
        </button>
      </div>
      <br />
      <br />
      <div className="columns is-multiline">
        {filteredData.map((data) => (
          <div
            className="column is-one-third is-flex is-justify-content-space-around"
          >
            <Card data={data}  addToCart={addToCart} onChangeHandler={onChangeHandler}/>
          </div>
        ))}
      </div>
    </div>
  );
}

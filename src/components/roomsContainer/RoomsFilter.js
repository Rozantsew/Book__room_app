import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context/context";
import Title from "../title/Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breackfast,
    pets,
  } = context;
  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="Filtruj pokoje" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">typy pokoi</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-contol"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/*guests*/}
        <div className="form-group">
          <label htmlFor="type">Goście</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-contol"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests */}
        {/* room price */}

        <div className="form-group">
          <label htmlFor="price">Cena Pokoju {price}zł</label>
          <input
            type="range"
            name="price"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            className="form-contol"
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">Rozmiar Pokoju m²</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breackfast"
              checked={breackfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Śniadanie</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">Pupile</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}

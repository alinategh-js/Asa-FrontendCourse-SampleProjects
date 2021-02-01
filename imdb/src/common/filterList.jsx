import React from "react";
import PropTypes from "prop-types";

const FilterList = (props) => {
  const { items, keyField, valueField, selectedItem, onSelect } = props;

  return (
    <ul class="list-group">
      <li
        key="0"
        className={`list-group-item clickable ${
          selectedItem[keyField] === 0 ? "active" : ""
        }`}
        onClick={() => onSelect({ id: 0 })}
      >
        All
      </li>
      {items.map((item) => (
        <li
          key={item[keyField]}
          className={`list-group-item clickable ${
            selectedItem[keyField] === item[keyField] ? "active" : ""
          }`}
          onClick={() => onSelect(item)}
        >
          {item[valueField]}
        </li>
      ))}
    </ul>
  );
};

FilterList.propTypes = {
  keyField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

FilterList.defaultProps = {
  keyField: "id",
  valueField: "name",
};

export default FilterList;

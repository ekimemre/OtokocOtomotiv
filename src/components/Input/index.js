import React  from "react";
import PropTypes from "prop-types";
import "./index.css";
import SearchIcon from '../../svg/SearchIcon'

const Input = (props) => {
  const { label, type, placeholder, isSearch, ...args } = props;
  
  return (
    <div className='container'>
      <input
        type={type}
        placeholder={placeholder}
        className={"input"}
        {...args}
      />
      {isSearch && <SearchIcon /> }
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password"]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "Placeholder",
};

export default Input;
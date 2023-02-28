import React from "react";

const Select = () => {
  return (
    <select
      className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      name="animals"
    >
      <option className="p-10 bg-gray-900 my-4" value="">
        Select an option
      </option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
  );
};

export default Select;

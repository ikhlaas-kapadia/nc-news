import React from "react";

const UserDropdown = (props) => {
  const { handleInputValue, login } = props;

  return (
    <select onChange={handleInputValue} className="options">
      <option>{login ? "Select" : "None / Clear"}</option>
      <option value="jessjelly">jessjelly</option>
      <option value="happyamy2016">happyamy2016</option>
      <option value="grumpy19">grumpy19</option>
      <option value="weegembump">weegembump</option>
      <option value="tickle122">tickle122</option>
      <option value="cooljmessy">cooljmessy</option>
    </select>
  );
};

export default UserDropdown;

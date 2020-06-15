import React from "react";

const StatelessCheckbox = ({ label, checked, onChange }) => (
  <div>
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label && <label>{label}</label>}
  </div>
);

export default StatelessCheckbox;

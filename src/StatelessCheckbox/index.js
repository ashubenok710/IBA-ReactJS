import React from 'react';

const StatelessCheckbox = ({ label, checked, onChange }) =>
  <div>
    <input onChange={onChange} type="checkbox" checked={checked} />
    {label && <label>{label}</label>}
  </div>

export default StatelessCheckbox;
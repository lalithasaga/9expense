import React from 'react';

const ExpenseInput = ({ id, label, type, required, inputRef }) => {
  return (
    <div className="form-group">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input className="input" type={type} id={id} required={required} ref={inputRef} />
    </div>
  );
};

export default ExpenseInput;
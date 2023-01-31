import React from "react";

function Form(props) {
  return (
    <form className="form-wrapper">
      <h2 className="label-wrapper">
        <label htmlFor="new-bookmark-input" className="label__lg">
          Bookmark Name:
        </label>
      </h2>
      <input
        type="text"
        id="new-bookmark-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <h2 className="label-wrapper">
        <label htmlFor="new-bookmark-input" className="label__lg">
          Paste Link:
        </label>
      </h2>
      <input
        type="text"
        id="new-bookmark-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        SUBMIT
      </button>
    </form>

  );
}

export default Form;
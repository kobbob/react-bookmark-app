import React from "react";

function Form(props) {
  return (

  <form className="bookmark-form">
    <h2>Bookmark Your Favourite Sites</h2>
      <div className="form-group">
        <label htmlFor="new-bookmark-input" className="label__lg">Bookmark</label>
        <input 
          type="text"   
          id="new-bookmark-input"
          className="input input__lg"
          name="text" 
          autoComplete="off"
          placeholder="Add a memorable bookmark name..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="siteURL" className="label__lg">Site URL</label>
        <input 
          type="text" 
          id="new-bookmark-input"
          className="input input__lg"
          name="text" 
          autoComplete="off"
          placeholder="Insert bookmark url here..."
        />
      </div>
      <button type="submit" className="btn__primary btn__lg">Submit</button>
  </form>


  );
}

export default Form;
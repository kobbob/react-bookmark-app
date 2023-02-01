import React from "react";

function BookmarkList(props) {
  return (
    <div className="list-wrapper">
      <h3>Saved Bookmarks</h3>

      <div className="list_container stack-large stack-exception">

        <div className="bookmark">
          <div className="left-container">
            <div className="bookmark-data top-left-container">
            <label className="bookmark-label" htmlFor="bookmark-0">Bookmark Name 1</label>
            </div>
            <div className="bookmark-data bottom-left-container">
              <label className="bookmark-label" htmlFor="bookmark-0">Link 1</label>
            </div>
          </div>

          <div className="btn-group right-container">
            <button type="button" className="btn btn__edit">
              <span className="visually-hidden">Edit</span>
            </button>
            <button type="button" className="btn btn__delete">
              <span className="visually-hidden">Delete</span>
            </button>
          </div>
        </div> 

        <div className="bookmark">
          <div className="left-container">
            <div className="bookmark-data top-left-container">
            <label className="bookmark-label" htmlFor="bookmark-0">Bookmark Name 2</label>
            </div>
            <div className="bookmark-data bottom-left-container">
              <label className="bookmark-label" htmlFor="bookmark-0">Link 2</label>
            </div>
          </div>

          <div className="btn-group right-container">
            <button type="button" className="btn btn__edit">
              <span className="visually-hidden">Edit</span>
            </button>
            <button type="button" className="btn btn__delete">
              <span className="visually-hidden">Delete</span>
            </button>
          </div>
        </div> 

      </div>
    </div>
  );
}

export default BookmarkList;
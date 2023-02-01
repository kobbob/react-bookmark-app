import React from "react";

function BookmarkList(props) {
  return (

    <div className = "list-wrapper">
      <h3>Saved Bookmarks</h3>

        <div className="list_container stack-large stack-exception">

            <div className="bookmark stack-small-list">
            
              <div className="bookmark-data">
                <label className="bookmark-label" htmlFor="bookmark-0">
                Test 1
                </label>
              </div>
              <div className="btn-group">
                <button type="button" className="btn">
                  <span className="visually-hidden">Test 1</span>
                </button>
                <button type="button" className="btn btn__danger">
                  <span className="visually-hidden">Test 1</span>
                </button>
              </div>

            </div>
        

          <div className="bookmark_card">data</div>
          <div className="bookmark_card">data</div>

        </div>

    </div>  

  );
}

export default BookmarkList;
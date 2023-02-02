// BOOKMARK component: 
// - Defines how each bookmark will be shown in list (or other) format. Creating a Bookmark Card as it were...
// - This passes 3 props (bookmark, onDelete & onEdit) which each show the added, deleted and edited bookmarks. 

const Bookmark = ({ bookmark, onDelete, onEdit }) => {
  return (

      <div className="list_container stack-large stack-exception">
        <div className="bookmark">
          <div className="left-container">
            <div className="bookmark-data top-left-container">
            <label className="bookmark-label" htmlFor="bookmark-0">{bookmark.name}</label>
            </div>
            <div className="bookmark-data bottom-left-container">
              <label className="bookmark-label" htmlFor="bookmark-0">{bookmark.url}</label>
            </div>
          </div>

          <div className="btn-group right-container">
            <button 
            type="button" 
            className="btn btn__edit"
            onClick={() => onEdit(bookmark.id)}
            >
              <span className="visually-hidden">Edit</span>
            </button>
            <button 
            type="button" 
            className="btn btn__delete"
            onClick={() => onDelete(bookmark.id)}
            >
              <span className="visually-hidden">Delete</span>
            </button>
          </div>
        </div> 
      </div>

  );
}

export default Bookmark;
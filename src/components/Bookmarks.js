// BOOKMARKS processing component: 
// - Here the bookmarks, onDelete and onEdit props are received and mapped through all bookmarks saved. 

import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, onDelete, onEdit }) => {
  return (
    <>
      {
        bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </>
  )
}

export default Bookmarks;
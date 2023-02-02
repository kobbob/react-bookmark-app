// APP COMPONENET
// - Where all the components are rendered and CRUD operation is actioned. 
// - useState hook is used so that any new bookmarks are added to the bookmarks state array. 
// - useEffect hook is used to load app data from localStorage (and avoid losing data on browser refresh)
// - Functions: 
// (1) addBookmarks -> get data using the bookmark argument; set the bookmark state to the form data (and create a unique ID using uuid library); creates a newBookmark object with this id and spreads the bookmark argument; bookmark state mapped through and setBookmark function adds the newBookmark to the end of the array; displayed after a sweetalert2 library alert.
// (2) deleteBookmark -> in the Bookmark component, this function will be passed down through the onDelete props, originally passed from App > Bookmarks > Bookmark. delete & edit items by id. 
// (3) editBookmark ->


// Import Components
import Bookmarks from './components/Bookmarks';
import AddBookmark from './components/AddBookmark';
// Import Hooks
import { useEffect, useState } from 'react';
// Import Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";



function App() {
  // STATES:
  const [loading, setloading] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => { // Pre-loader
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, [])
  // FUNCTIONS: 
  // Fetching from Local Storage
  const getBookmarks = JSON.parse(localStorage.getItem("bookmarkAdded"));
  useEffect(() => {
    if (getBookmarks == null) {
      setBookmarks([])
    } else {
      setBookmarks(getBookmarks);
    }
  }, [])


  // Add Bookmark
  const addBookmark = (bookmark) => {
    const id = uuidv4();
    const newBookmark = { id, ...bookmark }
    setBookmarks([...bookmarks, newBookmark]);
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new task!'
    })
    localStorage.setItem("bookmarkAdded", JSON.stringify([...bookmarks, newBookmark]));
  }

  // Delete Bookmark
  const deleteBookmark = (id) => {
    const deleteBookmark = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(deleteBookmark);
    Swal.fire({
      icon: 'success',
      title: 'Oops...',
      text: 'You have successfully deleted a task!'
    })
    localStorage.setItem("bookmarkAdded", JSON.stringify(deleteBookmark));
  }

  // Edit Bookmark
  const editBookmark = (id) => {
    const name = prompt("Bookmark Name");
    const url = prompt("Site URL");
    let data = JSON.parse(localStorage.getItem('bookmarkAdded'));
    const myData = data.map(x => {
      if (x.id === id) {
        return {
          ...x,
          name: name,
          url: url,
          id: uuidv4()
        }
      }
      return x;
    })
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your bookmark has been added!'
    })
    localStorage.setItem("bookmarkAdded", JSON.stringify(myData));
    window.location.reload();
  }

  return (
    <>
      {
        loading ?
          <div className="spinnerContainer">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div> :

          <div className="container">
            {/* App Header Panel */}
            <header className="header-wrapper">
              <div className="navigation">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Blue_globe_icon.svg" alt="logo" />
              </div>
            </header>

            <main className="main-container">
              <div className="bookmarkapp stack-large">
                <h1 className="title-wrapper">kobs.world</h1>

                {/* Add Bookmark Form */}
                {<AddBookmark onSave={addBookmark} />}

                {/* Display Bookmarks */}
                <div className="list-wrapper">
                  <h3>Saved Bookmarks</h3>
                  {
                    bookmarks.length > 0 ?
                      (<Bookmarks bookmarks={bookmarks} onDelete={deleteBookmark} onEdit={editBookmark} />) :
                      ('No bookmarks found - start saving now!')
                  }
                </div>
              </div>
            </main>

          </div>

      }
    </>
  );
}


export default App;

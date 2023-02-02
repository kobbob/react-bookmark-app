// FORM component:
// - for adding bookmarks to the app.
// - Form includes 3 input tags ((1) the bookmark name, (2) for the URL and (3) for submitting the data).
// - This is a functional Component and therefore uses useState React Hook.
// - useState hook handles data that is stored and kept track over (state). If this changes, it re-renders. 
// FORM VALIDATION: 
// - onSubmit validates the form by checking if data entered meets the conditions set in the conditional statement. 
// - 'sweetalert2' library creates alerts to user if data is inputted incorrectly. (REf: https://sweetalert2.github.io/)
// - If it passes the test, we then call the onSave function (prop) within our App component and the state will be passed as an argument into the function. 
// - once the data is submitted, we need to set both states (name + url) back to an empty string. 


// IMPORTS //
import { useState } from 'react';
import Swal from "sweetalert2";


const AddBookmark = ({ onSave }) => {

  // State
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    if (!name && !url) {
        Swal.fire({
            icon: 'warning',
            title: 'Hold Up...',
            text: 'Make sure you fill in the full form!'
        })
    } else if (!name && url) {
        Swal.fire({
            icon: 'warning',
            title: 'Hold Up...',
            text: 'Make sure you give your Bookmark a name!'
        })
    } else if (name && !url) {
        Swal.fire({
            icon: 'warning',
            title: 'Hold Up...',
            text: 'Make sure you save your Bookmark URL!'
        })
    } else {
        onSave({ name, url });
    }
    setName('');
    setUrl('');
  }



  return (
    <form className="bookmark-form" onSubmit={onSubmit}>
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
            value={name} onChange={(e) => setName(e.target.value)}
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
            placeholder="https://example.com"
            pattern="https://.*"
            value={url} onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn__primary btn__lg">Submit</button>
    </form>
  );
}

export default AddBookmark;
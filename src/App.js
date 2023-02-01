
// Import Components
import BookmarkList from './components/BookmarkList';
import Form from './components/Form';


function App(props) {
  return (
    <>
      <header className="header-wrapper">
        <div className="navigation">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Blue_globe_icon.svg" alt="logo" />
        </div>
      </header>

      <main>
        <div className="bookmarkapp stack-large">
          <h1 className="title-wrapper">kobs.world</h1>
          <Form />
          <BookmarkList />

          {/* <div className="list-wrapper">
          <h2 id="list-heading">Saved Bookmarks</h2>

          <ul
            role="list"
            className="bookmark-list stack-large stack-exception"
            aria-labelledby="list-heading">
            
            <li className="bookmark stack-small">
              <div className="c-cb">
                <input id="bookmark-0" type="checkbox" defaultChecked={true} />
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
            </li>
            <li className="bookmark stack-small">
              <div className="c-cb">
                <input id="bookmark-1" type="checkbox" />
                <label className="bookmark-label" htmlFor="bookmark-1">
                  Test 2
                </label>
              </div>
              <div className="btn-group">
                <button type="button" className="btn">
                  Edit <span className="visually-hidden">Test 2</span>
                </button>
                <button type="button" className="btn btn__danger">
                  Delete <span className="visually-hidden">Test 2</span>
                </button>
              </div>
            </li>
            <li className="bookmark stack-small">
              <div className="c-cb">
                <input id="bookmark-2" type="checkbox" />
                <label className="bookmark-label" htmlFor="bookmark-2">
                  RepTest 1
                </label>
              </div>
              <div className="btn-group">
                <button type="button" className="btn">
                  Edit <span className="visually-hidden">RepTest 1</span>
                </button>
                <button type="button" className="btn btn__danger">
                  Delete <span className="visually-hidden">RepTest 1</span>
                </button>
              </div>
            </li>
          </ul>
        </div> */}


        </div>
      </main>
    </>
  );
}


export default App;

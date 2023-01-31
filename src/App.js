
function App(props) {
  return (
  <>
    <header className="header-wrapper">
      <div className="navigation">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Blue_globe_icon.svg" alt="logo"/>
      </div>
    </header>  
    
    <main>
      <div className="bookmarkapp stack-large">

        <h1 className="title-wrapper">kobs.world</h1>

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

        <div className="list-wrapper">
            <div className="list_container">
              <div className="list_item_container">data</div>
              <div className="list_item_container">data</div>
              <div className="list_item_container">data</div>
            </div>
          </div>

      </div>

    </main>  
  </>
  );
}


export default App;

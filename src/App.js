
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
        </div>
      </main>
    </>
  );
}


export default App;

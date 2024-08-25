import './App.css';
import BookList from './components/BookList/BookList';
import Filter from './components/Filter/Filter';
import BookForm from './components/BookForm/BookForm';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Libary App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
    </div>
  );
}

export default App;
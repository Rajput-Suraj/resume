import Main from './components/Main';
import Header from './components/Header';

function App() {
  return (
    <div className="text-offWhite-50 bg-customDark-600 p-6">
      <div className='container mx-auto lg:px-80 '>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;

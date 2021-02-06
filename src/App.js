import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen overflow-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  ) 
}

export default App;

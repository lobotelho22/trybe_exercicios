import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Image from './Image';

function App() {
  return (
    <div>
      <Header /> 
      <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

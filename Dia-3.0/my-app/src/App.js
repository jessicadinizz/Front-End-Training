import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrap">    
        <Header />
      <div className="wrapper-cards">
        <Card nome= "Jéssica" idade= "19" time= "Flamengo" sobrenome= "Diniz"/>
        <Card nome= "Letícia" idade= "20" time= "Vasco" sobrenome= "Bussinger" />
        <Card nome= "Pedro" idade= "19" time= "Vasco" sobrenome= "Longue"/>
        <Card nome= "Thiago" idade= "19" time= "Flamengo" sobrenome= "Bastos"/>
      </div>
        <Footer />
    </div>
  );
}

export default App;

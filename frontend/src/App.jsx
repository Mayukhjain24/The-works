import './App.css';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>App</h1>
      <Footer />
    </div>
  )
}

export default App
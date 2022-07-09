import './App.css';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

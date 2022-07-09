import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
    <div className="container header__container">
      <div className="header__logo">
        <div className="header__img"></div>
        <h1 className="header__title">Guitar-store</h1>
      </div>
      <button className="header__cart button"></button>
    </div>
  </header>
  );
};
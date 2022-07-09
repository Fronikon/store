import './Filter.css';

export const Filter: React.FC = () => {
  return (
    <section className="search">
      <form action="#">
        <div className="container search__container">
          <button className="search__settings button"></button>
          <input className="search__field" type="text" placeholder="Search guitar..."/>
          <button className="search__button button"></button>
        </div>
      </form>
    </section>
  );
};
import spinner from '../assets/spin.gif';

const Spinner = () => {
  return (
    <div className="container">
      <section className="spinner">
        <div>
          <img src={spinner} alt="spinner" />
        </div>
      </section>
    </div>
  );
};

export default Spinner;

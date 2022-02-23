import { BiError } from 'react-icons/bi';
import errimg from '../assets/404.jpg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <section className="not-found">
        <div>
          <BiError size={30} style={{ color: 'red' }} />
          <h3>Oops!!!</h3>
        </div>
        <div>
          <h1>Search not found</h1>
          <p>
            You have entered an empty search string. Please enter a valid
            address.
          </p>
        </div>
        <img src={errimg} alt="error" />
        <div>
          <button className="go-back" onClick={goBack}>
            Go Back
          </button>
          <button className="home" onClick={goHome}>
            Go Home
          </button>
        </div>
      </section>
    </div>
  );
};
export default NotFound;

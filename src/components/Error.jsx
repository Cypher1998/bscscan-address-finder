import { useContext } from 'react';
import { BscContext } from '../context/bscContext';

const Error = () => {
  const { error } = useContext(BscContext);
  if (error !== null) {
    const { expression, message, text } = error;

    return (
      <div className="container">
        <section className="error">
          <h3>
            {expression} <span>{message}</span>
          </h3>
          <p>{text}</p>
        </section>
      </div>
    );
  }
};
export default Error;

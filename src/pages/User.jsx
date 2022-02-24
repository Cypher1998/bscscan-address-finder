import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import UserAddress from '../components/UserAddress';
import { BscContext } from '../context/bscContext';

const User = () => {
  const { balance, price, transactions, loading, error, getData } =
    useContext(BscContext);
  const { text } = useParams();

  useEffect(() => {
    getData(text);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Error />;
  }

  return (
    <div className="container">
      {Object.keys(balance).length === 0 ||
      Object.keys(price).length === 0 ||
      Object.keys(transactions).length === 0 ? (
        <div className="container">Error loading results.Reload Page!</div>
      ) : (
        <>
          {transactions.message === 'NOTOK' ? (
            <>
              <section className="trx-error">
                <h2>{transactions.result}</h2>
                <p>
                  Oops! The search string you entered was: <span>{text}.</span>{' '}
                </p>
                <p>This is an invalid address. Enter a valid address.</p>
              </section>
            </>
          ) : (
            <UserAddress text={text} />
          )}
        </>
      )}
    </div>
  );
};
export default User;

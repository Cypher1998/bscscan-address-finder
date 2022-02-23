import { useContext } from 'react';
import { BscContext } from '../context/bscContext';

const Bep20Trxs = ({ text }) => {
  const { transactions } = useContext(BscContext);
  return (
    <>
      <p className="latest-details">
        Latest {transactions.result.length} Token Transfer{' '}
        {transactions.result.length > 1 ? 'Events' : 'Event'}
      </p>
      <table className="transactions-table">
        <thead>
          <tr>
            <th className="trx-add">Txn Hash</th>
            <th className="date">Age</th>
            <th className="trx-add">From</th>
            <th className="out-in"></th>
            <th className="trx-add">To</th>
            <th className="value">Value</th>
            <th>Token</th>
          </tr>
        </thead>

        {transactions.result.map((transaction) => {
          const {
            hash,
            timeStamp,
            from,
            to,
            value,
            tokenDecimal,
            tokenName,
            tokenSymbol,
          } = transaction;

          const newDate = new Date(Number(timeStamp + '000'));
          const DOT = newDate.toString().slice(4, 21);
          const newValue = (
            Number(value) / Math.pow(10, tokenDecimal)
          ).toLocaleString();

          return (
            <tbody key={hash}>
              <tr>
                <td className="trx-add">
                  <a
                    href={`https://bscscan.com/tx/${hash}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {hash}
                  </a>
                </td>
                <td className="date">{DOT}</td>
                <td className="trx-add">{from}</td>
                <td>
                  <p
                    className={
                      text.toLowerCase() === to
                        ? 'in-out-text in'
                        : 'in-out-text out'
                    }
                  >
                    {text.toLowerCase() === to ? 'IN' : 'OUT'}
                  </p>
                </td>
                <td className="trx-add">{to}</td>
                <td className="value">{newValue.toString()}</td>
                <td>
                  {tokenName} ({tokenSymbol})
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};
export default Bep20Trxs;

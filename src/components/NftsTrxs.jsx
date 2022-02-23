import { useContext } from 'react';
import { BscContext } from '../context/bscContext';

const NftsTrxs = ({ text }) => {
  const { nfts } = useContext(BscContext);
  return (
    <>
      {nfts.message === 'OK' && (
        <p className="latest-details">
          Latest {nfts.result.length} Token Transfer{' '}
          {nfts.result.length > 1 ? 'Events' : 'Event'}
        </p>
      )}
      {nfts.message === 'OK' ? (
        <>
          <table className="transactions-table">
            <thead>
              <tr>
                <th className="trx-add">Txn Hash</th>
                <th className="date">Age</th>
                <th className="trx-add">From</th>
                <th className="out-in"></th>
                <th className="trx-add">To</th>
                <th className="value">Token ID</th>
                <th>Token</th>
              </tr>
            </thead>

            {nfts.result.map((transaction) => {
              const {
                hash,
                timeStamp,
                from,
                to,
                tokenID,
                tokenName,
                tokenSymbol,
              } = transaction;

              const newDate = new Date(Number(timeStamp + '000'));

              const DOT = newDate.toString().slice(4, 21);

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
                    <td className="value">{tokenID}</td>
                    <td>
                      {tokenName} ({tokenSymbol})
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </>
      ) : (
        <>
          <p className="no-trxs">{nfts.message}</p>{' '}
        </>
      )}
    </>
  );
};
export default NftsTrxs;

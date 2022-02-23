import { useContext } from 'react';
import { SiBinance } from 'react-icons/si';
import Box from '../layout/Box';
import NftsTrxs from './NftsTrxs';
import Bep20Trxs from './Bep20Trxs';
import { BscContext } from '../context/bscContext';

const UserAddress = ({ text }) => {
  const { balance, price } = useContext(BscContext);
  const { ethusd } = price.result;
  const { result } = balance;

  const newBnbBalance = result / Math.pow(10, 18) || 0;
  const usdValue = (newBnbBalance * ethusd).toFixed(2) || 0;

  return (
    <>
      <section className="user-address">
        <Box>
          <div className="address">
            <p>Address</p>
            <span>{text}</span>
          </div>
        </Box>
        <h4>Overview</h4>
        <div className="details">
          <Box>
            <div className="balance">
              <p>Balance:</p>
              <p>
                <SiBinance size={12} /> {newBnbBalance} BNB
              </p>
            </div>
          </Box>
          <Box>
            <div className="value">
              <p>BNB Value:</p>
              <p>
                ${usdValue} (@ {price.result.ethusd}
                /BNB)
              </p>
            </div>
          </Box>
        </div>
      </section>
      <h4 className="title">BEP-20 Token Txns</h4>
      <section className="container transactions">
        <Bep20Trxs text={text} />
      </section>
      <h4 className="title">ERC-721 Token Txns</h4>
      <section className="container transactions">
        <NftsTrxs text={text} />
      </section>
    </>
  );
};
export default UserAddress;

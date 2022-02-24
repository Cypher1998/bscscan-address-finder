import { createContext } from 'react';
import { useReducer } from 'react';
import { bscReducer } from './bscReducer';

export const BscContext = createContext();

const BscState = ({ children }) => {
  const initialState = {
    balance: {},
    price: {},
    transactions: {},
    nfts: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(bscReducer, initialState);

  const getData = async (text) => {
    dispatch({ type: 'LOADING' });

    await Promise.all([
      fetch(
        `https://api.bscscan.com/api?module=account&action=balance&address=${text}&apikey=${process.env.REACT_APP_BSC_TOKEN}`
      ),

      fetch(
        `https://api.bscscan.com/api?module=account&action=tokentx&address=${text}&page=1&offset=10&startblock=0&endblock=999999999&sort=desc&apikey=${process.env.REACT_APP_BSC_TOKEN}`
      ),
      fetch(
        `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=${process.env.REACT_APP_BSC_TOKEN}`
      ),
      fetch(
        `https://api.bscscan.com/api?module=account&action=tokennfttx&address=${text}&&page=1
        &offset=100&startblock=0&endblock=999999999
        &sort=asc&apikey=${process.env.REACT_APP_BSC_TOKEN}`
      ),
    ])
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        const [bnbBalance, bep20Trx, bnbPrice, nftsTrx] = data;
        dispatch({
          type: 'GET_DATAS',
          payload: { bnbBalance, bep20Trx, bnbPrice, nftsTrx },
        });
      })
      .catch((e) => {
        dispatch({
          type: 'ERROR',
          payload: {
            expression: 'Oops!!!',
            message: 'Failed to fetch details.',
            text: 'Try reloading the page.',
          },
        });
      });
  };

  return (
    <BscContext.Provider value={{ ...state, getData }}>
      {children}
    </BscContext.Provider>
  );
};

export default BscState;

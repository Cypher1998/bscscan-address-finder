export const bscReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'GET_DATAS':
      return {
        ...state,
        loading: false,
        balance: action.payload.bnbBalance,
        price: action.payload.bnbPrice,
        transactions: action.payload.bep20Trx,
        nfts: action.payload.nftsTrx,
        error: null,
      };

    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return { state };
  }
};

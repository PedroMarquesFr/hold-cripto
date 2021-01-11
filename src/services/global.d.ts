interface Quote {
  USD: {
    last_updated: string;
    market_cap: number;
    percent_change_1h: number;
    percent_change_7d: number;
    percent_change_24h: number;
    price: number;
    volume_24h: number;
  };
}
export interface Coin {
  circulating_supply: number;
  cmc_rank: number;
  date_added: string;
  id: number;
  last_updated: string;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  platform: any;
  quote: Quote;
  slug: string;
  symbol: string;
  tags: string[];
  total_supply: number;
}


export interface CoinInfo {
  symbol: string;
  name: string;
  amountBuyed: number;
  pricePerUnit: number;
  id:string;
}
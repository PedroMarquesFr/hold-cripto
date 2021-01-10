// import axios from "axios";


export default async function handleFetchAPI() {
  // var config = {
  //   headers: { "Access-Control-Allow-Origin": "*" },
  // };
  // const resp = await axios.get(
  //   "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=2500&convert=USD&CMC_PRO_API_KEY=5d205bcb-47b9-4b1e-a8fe-15b5d54561cb",
  //   config
  // );
  // console.log(resp.data.data)
  return data;
}
const data = [
  {
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "slug": "bitcoin",
    "num_market_pairs": 9733,
    "date_added": "2013-04-28T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channels"
    ],
    "max_supply": 21000000,
    "circulating_supply": 18594450,
    "total_supply": 18594450,
    "platform": null,
    "cmc_rank": 1,
    "last_updated": "2021-01-08T12:58:02.000Z",
    "quote": {
      "USD": {
        "price": 41342.67444597589,
        "volume_24h": 98080674491.81447,
        "percent_change_1h": 1.45654346,
        "percent_change_24h": 9.60787289,
        "percent_change_7d": 40.91480635,
        "market_cap": 768744292851.9764,
        "last_updated": "2021-01-08T12:58:02.000Z"
      }
    }
  },
  {
    "id": 1027,
    "name": "Ethereum",
    "symbol": "ETH",
    "slug": "ethereum",
    "num_market_pairs": 5936,
    "date_added": "2015-08-07T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 114166716.874,
    "total_supply": 114166716.874,
    "platform": null,
    "cmc_rank": 2,
    "last_updated": "2021-01-08T12:58:02.000Z",
    "quote": {
      "USD": {
        "price": 1249.7110950373155,
        "volume_24h": 49878047826.075874,
        "percent_change_1h": -0.30035031,
        "percent_change_24h": 4.0946547,
        "percent_change_7d": 69.02262172,
        "market_cap": 142675412761.42172,
        "last_updated": "2021-01-08T12:58:02.000Z"
      }
    }
  },
  {
    "id": 825,
    "name": "Tether",
    "symbol": "USDT",
    "slug": "tether",
    "num_market_pairs": 9858,
    "date_added": "2015-02-25T00:00:00.000Z",
    "tags": [
      "store-of-value",
      "payments",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": null,
    "circulating_supply": 23456722608.66833,
    "total_supply": 24081627122.352524,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
    },
    "cmc_rank": 3,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1.00084761573848,
        "volume_24h": 145528308894.54337,
        "percent_change_1h": 0.00711137,
        "percent_change_24h": 0.018394,
        "percent_change_7d": -0.05491309,
        "market_cap": 23476604895.9246,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 52,
    "name": "XRP",
    "symbol": "XRP",
    "slug": "xrp",
    "num_market_pairs": 684,
    "date_added": "2013-08-04T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "enterprise-solutions",
      "binance-chain"
    ],
    "max_supply": 100000000000,
    "circulating_supply": 45404028640,
    "total_supply": 99990831162,
    "platform": null,
    "cmc_rank": 4,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.32202849091174,
        "volume_24h": 14100803512.392153,
        "percent_change_1h": -5.9527976,
        "percent_change_24h": -9.93536548,
        "percent_change_7d": 35.5497032,
        "market_cap": 14621390824.252623,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 2,
    "name": "Litecoin",
    "symbol": "LTC",
    "slug": "litecoin",
    "num_market_pairs": 749,
    "date_added": "2013-04-28T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "scrypt",
      "medium-of-exchange",
      "binance-chain"
    ],
    "max_supply": 84000000,
    "circulating_supply": 66245617.91134237,
    "total_supply": 66245617.91134237,
    "platform": null,
    "cmc_rank": 5,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 172.09801878132726,
        "volume_24h": 14917043489.421936,
        "percent_change_1h": 0.40982606,
        "percent_change_24h": 3.4331048,
        "percent_change_7d": 34.68241484,
        "market_cap": 11400739595.486828,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 2010,
    "name": "Cardano",
    "symbol": "ADA",
    "slug": "cardano",
    "num_market_pairs": 224,
    "date_added": "2017-10-01T00:00:00.000Z",
    "tags": [
      "mineable",
      "dpos",
      "pos",
      "platform",
      "research",
      "smart-contracts",
      "staking",
      "binance-chain"
    ],
    "max_supply": 45000000000,
    "circulating_supply": 31112484646,
    "total_supply": 45000000000,
    "platform": null,
    "cmc_rank": 6,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.30244588972935,
        "volume_24h": 4542211738.528796,
        "percent_change_1h": -3.7459451,
        "percent_change_24h": -4.41261209,
        "percent_change_7d": 68.27471463,
        "market_cap": 9409843100.45021,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 6636,
    "name": "Polkadot",
    "symbol": "DOT",
    "slug": "polkadot-new",
    "num_market_pairs": 113,
    "date_added": "2020-08-19T00:00:00.000Z",
    "tags": [
      "substrate",
      "polkadot",
      "binance-chain"
    ],
    "max_supply": null,
    "circulating_supply": 897833366.1679026,
    "total_supply": 1031892582.8588725,
    "platform": null,
    "cmc_rank": 7,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 9.57139435028852,
        "volume_24h": 2616065930.279615,
        "percent_change_1h": -0.98196976,
        "percent_change_24h": -2.75737673,
        "percent_change_7d": 6.51341088,
        "market_cap": 8593517208.439987,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1831,
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "slug": "bitcoin-cash",
    "num_market_pairs": 596,
    "date_added": "2017-07-23T00:00:00.000Z",
    "tags": [
      "mineable",
      "marketplace",
      "enterprise-solutions",
      "binance-chain"
    ],
    "max_supply": 21000000,
    "circulating_supply": 18600862.5,
    "total_supply": 18600862.5,
    "platform": null,
    "cmc_rank": 8,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 444.7789846381083,
        "volume_24h": 9053304794.194002,
        "percent_change_1h": -0.526824,
        "percent_change_24h": -0.82124338,
        "percent_change_7d": 27.71514868,
        "market_cap": 8273272736.1430645,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 512,
    "name": "Stellar",
    "symbol": "XLM",
    "slug": "stellar",
    "num_market_pairs": 337,
    "date_added": "2014-08-05T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "enterprise-solutions",
      "decentralized-exchange",
      "smart-contracts"
    ],
    "max_supply": 50001806812,
    "circulating_supply": 22002650118.90043,
    "total_supply": 50001803563.87172,
    "platform": null,
    "cmc_rank": 9,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.30523341254356,
        "volume_24h": 4483880158.94542,
        "percent_change_1h": -5.56315299,
        "percent_change_24h": -9.18305353,
        "percent_change_7d": 127.07031839,
        "market_cap": 6715943980.793944,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1975,
    "name": "Chainlink",
    "symbol": "LINK",
    "slug": "chainlink",
    "num_market_pairs": 432,
    "date_added": "2017-09-20T00:00:00.000Z",
    "tags": [
      "platform",
      "defi",
      "oracles",
      "smart-contracts",
      "substrate",
      "polkadot"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 399509556.4344445,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca"
    },
    "cmc_rank": 10,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 15.70414612355008,
        "volume_24h": 3362611317.216863,
        "percent_change_1h": -2.01554274,
        "percent_change_24h": -3.69103511,
        "percent_change_7d": 34.02345584,
        "market_cap": 6273956452.001193,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 1839,
    "name": "Binance Coin",
    "symbol": "BNB",
    "slug": "binance-coin",
    "num_market_pairs": 465,
    "date_added": "2017-07-25T00:00:00.000Z",
    "tags": [
      "marketplace",
      "payments"
    ],
    "max_supply": 176406561,
    "circulating_supply": 144406560.9,
    "total_supply": 176406560.9,
    "platform": null,
    "cmc_rank": 11,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 42.6052991611528,
        "volume_24h": 740503272.0790433,
        "percent_change_1h": -1.64492967,
        "percent_change_24h": -3.1137864,
        "percent_change_7d": 10.56145907,
        "market_cap": 6152484727.977731,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 3717,
    "name": "Wrapped Bitcoin",
    "symbol": "WBTC",
    "slug": "wrapped-bitcoin",
    "num_market_pairs": 94,
    "date_added": "2019-01-30T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "defi",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": 21000000,
    "circulating_supply": 115710.93990667,
    "total_supply": 115710.93990667,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
    },
    "cmc_rank": 12,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 41312.72101399607,
        "volume_24h": 228991121.593004,
        "percent_change_1h": 1.65455293,
        "percent_change_24h": 9.8860077,
        "percent_change_7d": 40.69047937,
        "market_cap": 4780333778.631522,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3408,
    "name": "USD Coin",
    "symbol": "USDC",
    "slug": "usd-coin",
    "num_market_pairs": 650,
    "date_added": "2018-10-08T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": null,
    "circulating_supply": 4527971505.673428,
    "total_supply": 4577883537.129227,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
    },
    "cmc_rank": 13,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.99974756990529,
        "volume_24h": 2431521148.130256,
        "percent_change_1h": -0.02421657,
        "percent_change_24h": 0.00348147,
        "percent_change_7d": -0.01948974,
        "market_cap": 4526828509.397407,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3602,
    "name": "Bitcoin SV",
    "symbol": "BSV",
    "slug": "bitcoin-sv",
    "num_market_pairs": 219,
    "date_added": "2018-11-09T00:00:00.000Z",
    "tags": [
      "mineable",
      "medium-of-exchange"
    ],
    "max_supply": 21000000,
    "circulating_supply": 18619207.89423905,
    "total_supply": 18619207.89423905,
    "platform": null,
    "cmc_rank": 14,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 173.25849149319134,
        "volume_24h": 1159601388.029534,
        "percent_change_1h": -0.49540424,
        "percent_change_24h": -5.21433287,
        "percent_change_7d": 5.47762037,
        "market_cap": 3225935872.5539775,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1765,
    "name": "EOS",
    "symbol": "EOS",
    "slug": "eos",
    "num_market_pairs": 473,
    "date_added": "2017-07-01T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "enterprise-solutions",
      "smart-contracts",
      "binance-chain"
    ],
    "max_supply": null,
    "circulating_supply": 939297411.3698,
    "total_supply": 1025997422.7369,
    "platform": null,
    "cmc_rank": 15,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 3.15140758615785,
        "volume_24h": 6417075708.244969,
        "percent_change_1h": -2.30490054,
        "percent_change_24h": -5.53950588,
        "percent_change_7d": 19.30060797,
        "market_cap": 2960108987.8492184,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 328,
    "name": "Monero",
    "symbol": "XMR",
    "slug": "monero",
    "num_market_pairs": 186,
    "date_added": "2014-05-21T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "medium-of-exchange",
      "ringct"
    ],
    "max_supply": null,
    "circulating_supply": 17807617.56387705,
    "total_supply": 17807617.56387705,
    "platform": null,
    "cmc_rank": 16,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 144.50676802387582,
        "volume_24h": 2235395610.4747767,
        "percent_change_1h": -3.60050525,
        "percent_change_24h": -3.26674321,
        "percent_change_7d": -11.9728548,
        "market_cap": 2573321260.3610773,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 1958,
    "name": "TRON",
    "symbol": "TRX",
    "slug": "tron",
    "num_market_pairs": 483,
    "date_added": "2017-09-13T00:00:00.000Z",
    "tags": [
      "media",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 71659657369.49,
    "total_supply": 100850743811.66246,
    "platform": null,
    "cmc_rank": 17,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.03068997296208,
        "volume_24h": 2090973219.8991747,
        "percent_change_1h": -1.52725401,
        "percent_change_24h": -6.12329114,
        "percent_change_7d": 13.34396573,
        "market_cap": 2199232947.141565,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 873,
    "name": "NEM",
    "symbol": "XEM",
    "slug": "nem",
    "num_market_pairs": 101,
    "date_added": "2015-04-01T00:00:00.000Z",
    "tags": [
      "poi",
      "medium-of-exchange",
      "payments",
      "smart-contracts"
    ],
    "max_supply": 8999999999,
    "circulating_supply": 8999999999,
    "total_supply": 8999999999,
    "platform": null,
    "cmc_rank": 18,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.23356557876043,
        "volume_24h": 179876130.41211605,
        "percent_change_1h": -2.23071011,
        "percent_change_24h": -7.48194037,
        "percent_change_7d": 4.32911364,
        "market_cap": 2102090208.6103044,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 2416,
    "name": "THETA",
    "symbol": "THETA",
    "slug": "theta",
    "num_market_pairs": 42,
    "date_added": "2018-01-17T00:00:00.000Z",
    "tags": [
      "media",
      "collectibles-nfts",
      "content-creation",
      "video"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 1000000000,
    "total_supply": 1000000000,
    "platform": null,
    "cmc_rank": 19,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 1.95209270803534,
        "volume_24h": 156172156.93740007,
        "percent_change_1h": -2.80313628,
        "percent_change_24h": -5.90848198,
        "percent_change_7d": -5.16145507,
        "market_cap": 1952092708.03534,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3635,
    "name": "Crypto.com Coin",
    "symbol": "CRO",
    "slug": "crypto-com-coin",
    "num_market_pairs": 102,
    "date_added": "2018-12-14T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "mobile",
      "payments"
    ],
    "max_supply": 100000000000,
    "circulating_supply": 22587214610.53881,
    "total_supply": 100000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
    },
    "cmc_rank": 20,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.08297565932995,
        "volume_24h": 182936141.03428602,
        "percent_change_1h": -1.51561989,
        "percent_change_24h": 8.28326312,
        "percent_change_7d": 41.82502323,
        "market_cap": 1874189024.7365377,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2011,
    "name": "Tezos",
    "symbol": "XTZ",
    "slug": "tezos",
    "num_market_pairs": 163,
    "date_added": "2017-10-06T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions",
      "smart-contracts",
      "binance-chain"
    ],
    "max_supply": null,
    "circulating_supply": 756097501.668454,
    "total_supply": 756097501.668454,
    "platform": null,
    "cmc_rank": 21,
    "last_updated": "2021-01-08T12:58:10.000Z",
    "quote": {
      "USD": {
        "price": 2.48203868658729,
        "volume_24h": 470677470.9754397,
        "percent_change_1h": -2.64010857,
        "percent_change_24h": -6.84819827,
        "percent_change_7d": 21.51073279,
        "market_cap": 1876663249.973101,
        "last_updated": "2021-01-08T12:58:10.000Z"
      }
    }
  },
  {
    "id": 3077,
    "name": "VeChain",
    "symbol": "VET",
    "slug": "vechain",
    "num_market_pairs": 120,
    "date_added": "2017-08-22T00:00:00.000Z",
    "tags": [
      "logistics",
      "data-provenance",
      "smart-contracts"
    ],
    "max_supply": 86712634466,
    "circulating_supply": 64315576989,
    "total_supply": 86712634466,
    "platform": null,
    "cmc_rank": 22,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.02788114956396,
        "volume_24h": 524865289.5404386,
        "percent_change_1h": -2.37561045,
        "percent_change_24h": -3.05300344,
        "percent_change_7d": 39.03864272,
        "market_cap": 1793192221.3226933,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 7083,
    "name": "Uniswap",
    "symbol": "UNI",
    "slug": "uniswap",
    "num_market_pairs": 179,
    "date_added": "2020-09-17T00:00:00.000Z",
    "tags": [
      "defi",
      "amm"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 269282952.6729438,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
    },
    "cmc_rank": 23,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 6.22219978716926,
        "volume_24h": 3458070352.654257,
        "percent_change_1h": -1.65342071,
        "percent_change_24h": 0.55995315,
        "percent_change_7d": 24.51102486,
        "market_cap": 1675532330.8099008,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 1376,
    "name": "Neo",
    "symbol": "NEO",
    "slug": "neo",
    "num_market_pairs": 273,
    "date_added": "2016-09-08T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions",
      "smart-contracts"
    ],
    "max_supply": 100000000,
    "circulating_supply": 70538831,
    "total_supply": 100000000,
    "platform": null,
    "cmc_rank": 24,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 20.9502599248476,
        "volume_24h": 1583282628.0013149,
        "percent_change_1h": -0.61576237,
        "percent_change_24h": 7.12396621,
        "percent_change_7d": 43.52391866,
        "market_cap": 1477806844.2448976,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 7278,
    "name": "Aave",
    "symbol": "AAVE",
    "slug": "aave",
    "num_market_pairs": 141,
    "date_added": "2020-10-02T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": 16000000,
    "circulating_supply": 12104734.83680274,
    "total_supply": 16000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9"
    },
    "cmc_rank": 25,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 113.87656732944087,
        "volume_24h": 508032906.87684083,
        "percent_change_1h": -2.26694086,
        "percent_change_24h": -2.96737174,
        "percent_change_7d": 29.14793569,
        "market_cap": 1378445651.6481957,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 4943,
    "name": "Dai",
    "symbol": "DAI",
    "slug": "multi-collateral-dai",
    "num_market_pairs": 350,
    "date_added": "2019-11-22T00:00:00.000Z",
    "tags": [
      "defi",
      "stablecoin"
    ],
    "max_supply": null,
    "circulating_supply": 1369302965.6088393,
    "total_supply": 1369302991.4289844,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6b175474e89094c44da98b954eedeac495271d0f"
    },
    "cmc_rank": 26,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1.00002875764144,
        "volume_24h": 591133651.8794042,
        "percent_change_1h": -0.06397217,
        "percent_change_24h": -0.04074976,
        "percent_change_7d": -0.50093814,
        "market_cap": 1369342343.532547,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 2586,
    "name": "Synthetix",
    "symbol": "SNX",
    "slug": "synthetix-network-token",
    "num_market_pairs": 152,
    "date_added": "2018-03-14T00:00:00.000Z",
    "tags": [
      "services",
      "defi",
      "yield-farming"
    ],
    "max_supply": 212424133,
    "circulating_supply": 110519344.85591938,
    "total_supply": 211692890.57050416,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f"
    },
    "cmc_rank": 27,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 12.2713185725092,
        "volume_24h": 244969184.03314543,
        "percent_change_1h": -2.72496299,
        "percent_change_24h": 1.57028327,
        "percent_change_7d": 60.0223562,
        "market_cap": 1356218089.1519926,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2700,
    "name": "Celsius",
    "symbol": "CEL",
    "slug": "celsius",
    "num_market_pairs": 23,
    "date_added": "2018-05-18T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 238863519.826,
    "total_supply": 695658160.967,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d"
    },
    "cmc_rank": 28,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 5.57947148277278,
        "volume_24h": 19746049.6972491,
        "percent_change_1h": -0.85056775,
        "percent_change_24h": -6.66103239,
        "percent_change_7d": 2.78740486,
        "market_cap": 1332732197.1438975,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3957,
    "name": "UNUS SED LEO",
    "symbol": "LEO",
    "slug": "unus-sed-leo",
    "num_market_pairs": 25,
    "date_added": "2019-05-21T00:00:00.000Z",
    "tags": [
      "marketplace",
      "discount-token",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 999498892.9,
    "total_supply": 999498892.9,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
    },
    "cmc_rank": 29,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1.33056711807615,
        "volume_24h": 19355518.44627517,
        "percent_change_1h": -0.2715825,
        "percent_change_24h": -0.46974671,
        "percent_change_7d": -1.88348375,
        "market_cap": 1329900361.4462554,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 3794,
    "name": "Cosmos",
    "symbol": "ATOM",
    "slug": "cosmos",
    "num_market_pairs": 163,
    "date_added": "2019-03-14T00:00:00.000Z",
    "tags": [
      "platform",
      "content-creation",
      "interoperability",
      "binance-chain"
    ],
    "max_supply": null,
    "circulating_supply": 208480262.337042,
    "total_supply": 266264865.337042,
    "platform": null,
    "cmc_rank": 30,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 6.17135685397898,
        "volume_24h": 697663292.642249,
        "percent_change_1h": -1.17177186,
        "percent_change_24h": -6.746222,
        "percent_change_7d": 2.57436338,
        "market_cap": 1286606095.89304,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 74,
    "name": "Dogecoin",
    "symbol": "DOGE",
    "slug": "dogecoin",
    "num_market_pairs": 279,
    "date_added": "2013-12-15T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "scrypt",
      "medium-of-exchange",
      "memes",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 127859052023.38869,
    "total_supply": 127859052023.38869,
    "platform": null,
    "cmc_rank": 31,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.00951438261226,
        "volume_24h": 444328623.3791527,
        "percent_change_1h": -2.27094695,
        "percent_change_24h": -4.9995132,
        "percent_change_7d": 94.47579374,
        "market_cap": 1216499941.391376,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 4687,
    "name": "Binance USD",
    "symbol": "BUSD",
    "slug": "binance-usd",
    "num_market_pairs": 320,
    "date_added": "2019-09-20T00:00:00.000Z",
    "tags": [
      "store-of-value",
      "stablecoin",
      "stablecoin-asset-backed",
      "binance-chain"
    ],
    "max_supply": null,
    "circulating_supply": 1100854185.04,
    "total_supply": 1100854185.04,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "BUSD-BD1"
    },
    "cmc_rank": 32,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 1.0001,
        "volume_24h": 3412418796.242123,
        "percent_change_1h": 0.030006,
        "percent_change_24h": 0.01,
        "percent_change_7d": -0.029988,
        "market_cap": 1100964270.458504,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1518,
    "name": "Maker",
    "symbol": "MKR",
    "slug": "maker",
    "num_market_pairs": 182,
    "date_added": "2017-01-29T00:00:00.000Z",
    "tags": [
      "store-of-value",
      "defi"
    ],
    "max_supply": 1005577,
    "circulating_supply": 996389.83271571,
    "total_supply": 996389.83271571,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
    },
    "cmc_rank": 33,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 1099.2049714746095,
        "volume_24h": 205416607.42515296,
        "percent_change_1h": -1.52019243,
        "percent_change_24h": 4.08813325,
        "percent_change_7d": 83.57516014,
        "market_cap": 1095236657.647863,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1720,
    "name": "IOTA",
    "symbol": "MIOTA",
    "slug": "iota",
    "num_market_pairs": 66,
    "date_added": "2017-06-13T00:00:00.000Z",
    "tags": [
      "dag",
      "medium-of-exchange",
      "iot",
      "sharing-economy"
    ],
    "max_supply": 2779530283,
    "circulating_supply": 2779530283,
    "total_supply": 2779530283,
    "platform": null,
    "cmc_rank": 34,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.377073696502,
        "volume_24h": 55302297.03801891,
        "percent_change_1h": 0.58110854,
        "percent_change_24h": -6.59450508,
        "percent_change_7d": 26.5052509,
        "market_cap": 1048087758.3500602,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 5864,
    "name": "yearn.finance",
    "symbol": "YFI",
    "slug": "yearn-finance",
    "num_market_pairs": 213,
    "date_added": "2020-07-18T00:00:00.000Z",
    "tags": [
      "defi",
      "yield-farming"
    ],
    "max_supply": 30000,
    "circulating_supply": 29968.79055082,
    "total_supply": 30000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e"
    },
    "cmc_rank": 35,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 34636.732154842786,
        "volume_24h": 1725125069.5823827,
        "percent_change_1h": 1.79095596,
        "percent_change_24h": 5.76864057,
        "percent_change_7d": 54.87577379,
        "market_cap": 1038020971.3133357,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2135,
    "name": "Revain",
    "symbol": "REV",
    "slug": "revain",
    "num_market_pairs": 21,
    "date_added": "2017-11-01T00:00:00.000Z",
    "tags": [
      "platform",
      "reputation",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 85061485689.83401,
    "total_supply": 85061485689.83401,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x2ef52Ed7De8c5ce03a4eF0efbe9B7450F2D7Edc9"
    },
    "cmc_rank": 36,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.01166655703676,
        "volume_24h": 7304152.03592574,
        "percent_change_1h": 0.05876143,
        "percent_change_24h": -0.73745812,
        "percent_change_7d": -0.06941971,
        "market_cap": 992374674.4319931,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2502,
    "name": "Huobi Token",
    "symbol": "HT",
    "slug": "huobi-token",
    "num_market_pairs": 178,
    "date_added": "2018-02-03T00:00:00.000Z",
    "tags": [
      "marketplace",
      "discount-token",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 200076194.2544121,
    "total_supply": 500000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161"
    },
    "cmc_rank": 37,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 4.91012518638855,
        "volume_24h": 256752880.46177247,
        "percent_change_1h": 0.33218364,
        "percent_change_24h": -1.77982896,
        "percent_change_7d": -0.91803156,
        "market_cap": 982399160.6053569,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 2280,
    "name": "Filecoin",
    "symbol": "FIL",
    "slug": "filecoin",
    "num_market_pairs": 78,
    "date_added": "2017-12-13T00:00:00.000Z",
    "tags": [
      "mineable",
      "distributed-computing",
      "filesharing",
      "ipfs"
    ],
    "max_supply": 2000000000,
    "circulating_supply": 44584205,
    "total_supply": 44584205,
    "platform": null,
    "cmc_rank": 38,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 22.01311081588144,
        "volume_24h": 180665370.12481716,
        "percent_change_1h": -0.27848299,
        "percent_change_24h": -2.69018152,
        "percent_change_7d": -5.29571484,
        "market_cap": 981437045.3029754,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 131,
    "name": "Dash",
    "symbol": "DASH",
    "slug": "dash",
    "num_market_pairs": 354,
    "date_added": "2014-02-14T00:00:00.000Z",
    "tags": [
      "mineable",
      "hybrid-pow-pos",
      "x11",
      "medium-of-exchange",
      "privacy",
      "masternodes"
    ],
    "max_supply": 18900000,
    "circulating_supply": 9910079.63536257,
    "total_supply": 9910079.63536257,
    "platform": null,
    "cmc_rank": 39,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 97.38337020524645,
        "volume_24h": 1257170234.1957307,
        "percent_change_1h": -2.04161367,
        "percent_change_24h": -6.62513851,
        "percent_change_7d": -4.63326562,
        "market_cap": 965076953.8939868,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 5426,
    "name": "Solana",
    "symbol": "SOL",
    "slug": "solana",
    "num_market_pairs": 28,
    "date_added": "2020-04-10T00:00:00.000Z",
    "tags": [
      "dpos",
      "platform"
    ],
    "max_supply": 488630611,
    "circulating_supply": 261901238.30670512,
    "total_supply": 488630611,
    "platform": null,
    "cmc_rank": 40,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 3.69535757154827,
        "volume_24h": 237063057.3390309,
        "percent_change_1h": 26.77698252,
        "percent_change_24h": 68.18665666,
        "percent_change_7d": 127.54124181,
        "market_cap": 967818723.9745506,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 4195,
    "name": "FTX Token",
    "symbol": "FTT",
    "slug": "ftx-token",
    "num_market_pairs": 37,
    "date_added": "2019-07-31T00:00:00.000Z",
    "tags": [
      "marketplace",
      "derivatives"
    ],
    "max_supply": null,
    "circulating_supply": 94346957.5237492,
    "total_supply": 345219293.59097695,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "FTT-F11"
    },
    "cmc_rank": 41,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 9.60015687940559,
        "volume_24h": 59110050.76796039,
        "percent_change_1h": 0.04078165,
        "percent_change_24h": 0.66920221,
        "percent_change_7d": 63.86252661,
        "market_cap": 905745593.3226079,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 1168,
    "name": "Decred",
    "symbol": "DCR",
    "slug": "decred",
    "num_market_pairs": 58,
    "date_added": "2016-02-10T00:00:00.000Z",
    "tags": [
      "mineable",
      "hybrid-pow-pos",
      "blake256",
      "medium-of-exchange",
      "store-of-value",
      "privacy",
      "dao"
    ],
    "max_supply": 21000000,
    "circulating_supply": 12460979.79821492,
    "total_supply": 12460979.79821492,
    "platform": null,
    "cmc_rank": 42,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 67.45941771328155,
        "volume_24h": 47345721.92259613,
        "percent_change_1h": 2.74908282,
        "percent_change_24h": 23.60174075,
        "percent_change_7d": 60.99665371,
        "market_cap": 840610441.3245431,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 1321,
    "name": "Ethereum Classic",
    "symbol": "ETC",
    "slug": "ethereum-classic",
    "num_market_pairs": 285,
    "date_added": "2016-07-24T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "ethash",
      "platform",
      "smart-contracts"
    ],
    "max_supply": 210700000,
    "circulating_supply": 116313299,
    "total_supply": 116313299,
    "platform": null,
    "cmc_rank": 43,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 7.02231201987682,
        "volume_24h": 1699520949.0818558,
        "percent_change_1h": -1.73433695,
        "percent_change_24h": -4.80256456,
        "percent_change_7d": 21.99583469,
        "market_cap": 816788277.6392264,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 2469,
    "name": "Zilliqa",
    "symbol": "ZIL",
    "slug": "zilliqa",
    "num_market_pairs": 115,
    "date_added": "2018-01-25T00:00:00.000Z",
    "tags": [
      "mineable",
      "platform",
      "payments"
    ],
    "max_supply": 21000000000,
    "circulating_supply": 10821617819.859886,
    "total_supply": 14113084972.859886,
    "platform": null,
    "cmc_rank": 44,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.07381630715501,
        "volume_24h": 214223074.50034112,
        "percent_change_1h": -2.60490108,
        "percent_change_24h": -8.22950159,
        "percent_change_7d": -11.20672173,
        "market_cap": 798811864.9049071,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5692,
    "name": "Compound",
    "symbol": "COMP",
    "slug": "compound",
    "num_market_pairs": 172,
    "date_added": "2020-06-16T00:00:00.000Z",
    "tags": [
      "defi",
      "yield-farming"
    ],
    "max_supply": 10000000,
    "circulating_supply": 4425677.37141616,
    "total_supply": 10000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xc00e94cb662c3520282e6f5717214004a7f26888"
    },
    "cmc_rank": 45,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 174.50131003444787,
        "volume_24h": 284919492.2722203,
        "percent_change_1h": 0.53384788,
        "percent_change_24h": 0.27183052,
        "percent_change_7d": 20.62485136,
        "market_cap": 772286499.1019316,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1437,
    "name": "Zcash",
    "symbol": "ZEC",
    "slug": "zcash",
    "num_market_pairs": 269,
    "date_added": "2016-10-29T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "equihash",
      "medium-of-exchange",
      "zero-knowledge-proofs",
      "binance-chain"
    ],
    "max_supply": 21000000,
    "circulating_supply": 10865050,
    "total_supply": 10865050,
    "platform": null,
    "cmc_rank": 46,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 65.57308103957595,
        "volume_24h": 1370187593.4785562,
        "percent_change_1h": -0.54998575,
        "percent_change_24h": -7.18876903,
        "percent_change_7d": -0.42599801,
        "market_cap": 712454804.1490448,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 6892,
    "name": "Elrond",
    "symbol": "EGLD",
    "slug": "elrond-egld",
    "num_market_pairs": 21,
    "date_added": "2020-09-04T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 31415926,
    "circulating_supply": 16633742.76707243,
    "total_supply": 20961742,
    "platform": null,
    "cmc_rank": 47,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 39.32405814189188,
        "volume_24h": 132383570.79582763,
        "percent_change_1h": -0.65826341,
        "percent_change_24h": 0.28886295,
        "percent_change_7d": 48.63669138,
        "market_cap": 654106267.6896298,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1274,
    "name": "Waves",
    "symbol": "WAVES",
    "slug": "waves",
    "num_market_pairs": 154,
    "date_added": "2016-06-02T00:00:00.000Z",
    "tags": [
      "lpos",
      "platform",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 104009332,
    "total_supply": 104009332,
    "platform": null,
    "cmc_rank": 48,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 5.66471595430467,
        "volume_24h": 149159392.98668966,
        "percent_change_1h": -3.7515374,
        "percent_change_24h": -6.45792523,
        "percent_change_7d": -6.9637912,
        "market_cap": 589183322.3769712,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 5034,
    "name": "Kusama",
    "symbol": "KSM",
    "slug": "kusama",
    "num_market_pairs": 53,
    "date_added": "2019-12-12T00:00:00.000Z",
    "tags": [
      "substrate"
    ],
    "max_supply": null,
    "circulating_supply": 8470098.05726206,
    "total_supply": 9651217.45126206,
    "platform": null,
    "cmc_rank": 49,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 69.43474699236063,
        "volume_24h": 106896926.75031365,
        "percent_change_1h": -0.01371667,
        "percent_change_24h": -2.87476381,
        "percent_change_7d": -1.10234042,
        "market_cap": 588119115.6064764,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 1567,
    "name": "Nano",
    "symbol": "NANO",
    "slug": "nano",
    "num_market_pairs": 60,
    "date_added": "2017-03-06T00:00:00.000Z",
    "tags": [
      "pow",
      "blake2b",
      "medium-of-exchange",
      "payments"
    ],
    "max_supply": 133248298,
    "circulating_supply": 133248297.197,
    "total_supply": 133248297.197,
    "platform": null,
    "cmc_rank": 50,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 4.22898372801729,
        "volume_24h": 595946630.7509863,
        "percent_change_1h": -6.06732036,
        "percent_change_24h": 18.29658898,
        "percent_change_7d": 309.67117845,
        "market_cap": 563504880.6321249,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 4030,
    "name": "Algorand",
    "symbol": "ALGO",
    "slug": "algorand",
    "num_market_pairs": 124,
    "date_added": "2019-06-20T00:00:00.000Z",
    "tags": [
      "mineable",
      "pos",
      "platform",
      "research",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 1207144363.012787,
    "total_supply": 10000000000,
    "platform": null,
    "cmc_rank": 51,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 0.46298457865011,
        "volume_24h": 286665523.4462364,
        "percent_change_1h": 0.38136563,
        "percent_change_24h": -4.02240067,
        "percent_change_7d": 25.9332378,
        "market_cap": 558889224.2793306,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 6758,
    "name": "SushiSwap",
    "symbol": "SUSHI",
    "slug": "sushiswap",
    "num_market_pairs": 122,
    "date_added": "2020-08-28T00:00:00.000Z",
    "tags": [
      "defi",
      "memes",
      "yield-farming"
    ],
    "max_supply": 0,
    "circulating_supply": 127244443,
    "total_supply": 181541045.10242528,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
    },
    "cmc_rank": 52,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 4.39976051444371,
        "volume_24h": 527838430.6961273,
        "percent_change_1h": 5.69802574,
        "percent_change_24h": 15.09035308,
        "percent_change_7d": 47.61842406,
        "market_cap": 559845075.9937834,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5617,
    "name": "UMA",
    "symbol": "UMA",
    "slug": "uma",
    "num_market_pairs": 77,
    "date_added": "2020-05-25T00:00:00.000Z",
    "tags": [
      "defi",
      "oracles"
    ],
    "max_supply": 101172570,
    "circulating_supply": 55506670.91264081,
    "total_supply": 101131301.79860722,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828"
    },
    "cmc_rank": 53,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 9.74301175241019,
        "volume_24h": 21723067.44907499,
        "percent_change_1h": -0.84228849,
        "percent_change_24h": -2.44109987,
        "percent_change_7d": 19.45193502,
        "market_cap": 540802147.0390242,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5777,
    "name": "renBTC",
    "symbol": "RENBTC",
    "slug": "renbtc",
    "num_market_pairs": 23,
    "date_added": "2020-06-28T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": 13698,
    "circulating_supply": 12363.88125245,
    "total_supply": 12363.88125245,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d"
    },
    "cmc_rank": 54,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 40454.35513491702,
        "volume_24h": 906536.74250525,
        "percent_change_1h": -0.31816192,
        "percent_change_24h": 7.56318473,
        "percent_change_7d": 37.84557524,
        "market_cap": 500172843.032555,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1808,
    "name": "OMG Network",
    "symbol": "OMG",
    "slug": "omg",
    "num_market_pairs": 267,
    "date_added": "2017-07-14T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "payments",
      "state-channels"
    ],
    "max_supply": 140245399,
    "circulating_supply": 140245398.24513277,
    "total_supply": 140245398.24513277,
    "platform": null,
    "cmc_rank": 55,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 3.43267797111733,
        "volume_24h": 426142678.73722374,
        "percent_change_1h": -1.81425468,
        "percent_change_24h": -5.22757916,
        "percent_change_7d": 31.66539003,
        "market_cap": 481417289.10664433,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 1934,
    "name": "Loopring",
    "symbol": "LRC",
    "slug": "loopring",
    "num_market_pairs": 92,
    "date_added": "2017-08-30T00:00:00.000Z",
    "tags": [
      "marketplace",
      "decentralized-exchange",
      "defi"
    ],
    "max_supply": 1374513896,
    "circulating_supply": 1209606015.5773468,
    "total_supply": 1374513861.4692945,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd"
    },
    "cmc_rank": 56,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.37973969644765,
        "volume_24h": 169714965.8023661,
        "percent_change_1h": -2.11367851,
        "percent_change_24h": -9.67594366,
        "percent_change_7d": 110.72140192,
        "market_cap": 459335421.17659307,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 2566,
    "name": "Ontology",
    "symbol": "ONT",
    "slug": "ontology",
    "num_market_pairs": 144,
    "date_added": "2018-03-08T00:00:00.000Z",
    "tags": [
      "marketplace",
      "enterprise-solutions",
      "identity",
      "binance-chain"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 805646909,
    "total_supply": 1000000000,
    "platform": null,
    "cmc_rank": 57,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.54775042493081,
        "volume_24h": 244594661.8038096,
        "percent_change_1h": -1.9259415,
        "percent_change_24h": -4.06907091,
        "percent_change_7d": 21.03852354,
        "market_cap": 441293436.7489437,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5805,
    "name": "Avalanche",
    "symbol": "AVAX",
    "slug": "avalanche",
    "num_market_pairs": 40,
    "date_added": "2020-07-13T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 720000000,
    "circulating_supply": 76937055.27646953,
    "total_supply": 360000000,
    "platform": null,
    "cmc_rank": 58,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 5.63070331043727,
        "volume_24h": 76921072.04756379,
        "percent_change_1h": 9.56097863,
        "percent_change_24h": 23.55152273,
        "percent_change_7d": 55.41204269,
        "market_cap": 433209731.8405122,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 109,
    "name": "DigiByte",
    "symbol": "DGB",
    "slug": "digibyte",
    "num_market_pairs": 107,
    "date_added": "2014-02-06T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "multiple-algorithms",
      "medium-of-exchange",
      "privacy",
      "payments"
    ],
    "max_supply": 21000000000,
    "circulating_supply": 13919950948.851622,
    "total_supply": 13919950948.851622,
    "platform": null,
    "cmc_rank": 59,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.03070986597089,
        "volume_24h": 42627561.99662949,
        "percent_change_1h": -4.6609018,
        "percent_change_24h": -3.44845058,
        "percent_change_7d": 20.04567521,
        "market_cap": 427479827.9605964,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 6719,
    "name": "The Graph",
    "symbol": "GRT",
    "slug": "the-graph",
    "num_market_pairs": 48,
    "date_added": "2020-12-17T00:00:00.000Z",
    "tags": [
      "ai-big-data",
      "enterprise-solutions"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 1245666867,
    "total_supply": 0,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xc944e90c64b2c07662a292be6244bdf05cda44a7"
    },
    "cmc_rank": 60,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.34274262507194,
        "volume_24h": 199081392.0042593,
        "percent_change_1h": -0.09920389,
        "percent_change_24h": -15.62806647,
        "percent_change_7d": -5.84797109,
        "market_cap": 426943131.9607191,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3897,
    "name": "OKB",
    "symbol": "OKB",
    "slug": "okb",
    "num_market_pairs": 62,
    "date_added": "2019-04-30T00:00:00.000Z",
    "tags": [
      "marketplace",
      "centralized-exchange",
      "discount-token"
    ],
    "max_supply": null,
    "circulating_supply": 60000000,
    "total_supply": 300000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x75231f58b43240c9718dd58b4967c5114342a86c"
    },
    "cmc_rank": 61,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 7.08416900972655,
        "volume_24h": 266695524.8189281,
        "percent_change_1h": -0.86334407,
        "percent_change_24h": -5.24599993,
        "percent_change_7d": -21.24512159,
        "market_cap": 425050140.583593,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 4172,
    "name": "Terra",
    "symbol": "LUNA",
    "slug": "terra-luna",
    "num_market_pairs": 35,
    "date_added": "2019-07-26T00:00:00.000Z",
    "tags": [
      "store-of-value",
      "defi",
      "payments",
      "stablecoin-algorithmically-stabilized"
    ],
    "max_supply": null,
    "circulating_supply": 485088828.435803,
    "total_supply": 994615409.604473,
    "platform": null,
    "cmc_rank": 62,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.86625476795709,
        "volume_24h": 36388182.03194484,
        "percent_change_1h": -2.05023373,
        "percent_change_24h": -2.42738247,
        "percent_change_7d": 35.70704126,
        "market_cap": 420210510.51523316,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3964,
    "name": "Reserve Rights",
    "symbol": "RSR",
    "slug": "reserve-rights",
    "num_market_pairs": 64,
    "date_added": "2019-05-24T00:00:00.000Z",
    "tags": [
      "store-of-value",
      "defi",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": 100000000000,
    "circulating_supply": 9349998999.99994,
    "total_supply": 100000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8762db106b2c2a0bccb3a80d1ed41273552616e8"
    },
    "cmc_rank": 63,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 0.04244990429312,
        "volume_24h": 218236691.54081893,
        "percent_change_1h": 3.64421336,
        "percent_change_24h": 10.23307984,
        "percent_change_7d": 87.79628897,
        "market_cap": 396906562.69076514,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 4847,
    "name": "Blockstack",
    "symbol": "STX",
    "slug": "blockstack",
    "num_market_pairs": 7,
    "date_added": "2019-10-28T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 2048913388,
    "circulating_supply": 739781894.219817,
    "total_supply": 973705260.219817,
    "platform": null,
    "cmc_rank": 64,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.52174293355651,
        "volume_24h": 10187870.27771435,
        "percent_change_1h": -1.09946363,
        "percent_change_24h": -3.55633883,
        "percent_change_7d": 21.85535601,
        "market_cap": 385975975.6822391,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 1697,
    "name": "Basic Attention Token",
    "symbol": "BAT",
    "slug": "basic-attention-token",
    "num_market_pairs": 257,
    "date_added": "2017-06-01T00:00:00.000Z",
    "tags": [
      "marketing",
      "content-creation",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 1493080869.4324162,
    "total_supply": 1500000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
    },
    "cmc_rank": 65,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.25607808610197,
        "volume_24h": 279732536.26270896,
        "percent_change_1h": -2.39647569,
        "percent_change_24h": -2.84605649,
        "percent_change_7d": 24.95876023,
        "market_cap": 382345291.43971854,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 4642,
    "name": "Hedera Hashgraph",
    "symbol": "HBAR",
    "slug": "hedera-hashgraph",
    "num_market_pairs": 42,
    "date_added": "2019-09-17T00:00:00.000Z",
    "tags": [
      "dag",
      "marketplace",
      "enterprise-solutions",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 6760902480,
    "total_supply": 50000000000,
    "platform": null,
    "cmc_rank": 66,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.05439890048807,
        "volume_24h": 257533514.29550663,
        "percent_change_1h": -10.84864862,
        "percent_change_24h": 38.91495029,
        "percent_change_7d": 66.91441001,
        "market_cap": 367785661.21906567,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2099,
    "name": "ICON",
    "symbol": "ICX",
    "slug": "icon",
    "num_market_pairs": 69,
    "date_added": "2017-10-27T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions",
      "interoperability"
    ],
    "max_supply": null,
    "circulating_supply": 580897921.3370082,
    "total_supply": 800460000,
    "platform": null,
    "cmc_rank": 67,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.60916995302327,
        "volume_24h": 70286428.72159745,
        "percent_change_1h": 0.04379371,
        "percent_change_24h": 3.25689934,
        "percent_change_7d": 30.83130417,
        "market_cap": 353865559.4521805,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2694,
    "name": "Nexo",
    "symbol": "NEXO",
    "slug": "nexo",
    "num_market_pairs": 44,
    "date_added": "2018-05-01T00:00:00.000Z",
    "tags": [
      "services",
      "payments"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 560000011,
    "total_supply": 1000000000,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "NEXO-A84"
    },
    "cmc_rank": 68,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.61719809399121,
        "volume_24h": 17912640.02741291,
        "percent_change_1h": 2.00339135,
        "percent_change_24h": -1.80764256,
        "percent_change_7d": 5.5207827,
        "market_cap": 345630939.4242566,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 1896,
    "name": "0x",
    "symbol": "ZRX",
    "slug": "0x",
    "num_market_pairs": 246,
    "date_added": "2017-08-16T00:00:00.000Z",
    "tags": [
      "platform",
      "decentralized-exchange",
      "defi",
      "substrate",
      "polkadot"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 749772093.9255235,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe41d2489571d322189246dafa5ebde1f4699f498"
    },
    "cmc_rank": 69,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.4477253565148,
        "volume_24h": 147283593.81331444,
        "percent_change_1h": -2.017408,
        "percent_change_24h": -6.61125444,
        "percent_change_7d": 24.28787092,
        "market_cap": 335691978.0576531,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 2539,
    "name": "Ren",
    "symbol": "REN",
    "slug": "ren",
    "num_market_pairs": 117,
    "date_added": "2018-02-21T00:00:00.000Z",
    "tags": [
      "marketplace",
      "defi"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 884917075.1867337,
    "total_supply": 999999632.80375,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x408e41876cccdc0f92210600ef50372656052a38"
    },
    "cmc_rank": 70,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.38407346960553,
        "volume_24h": 110406970.0635913,
        "percent_change_1h": 1.93877566,
        "percent_change_24h": -4.22946407,
        "percent_change_7d": 14.02227254,
        "market_cap": 339873171.3801465,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3718,
    "name": "BitTorrent",
    "symbol": "BTT",
    "slug": "bittorrent",
    "num_market_pairs": 143,
    "date_added": "2019-01-31T00:00:00.000Z",
    "tags": [
      "platform",
      "distributed-computing",
      "filesharing",
      "ipfs"
    ],
    "max_supply": null,
    "circulating_supply": 989979709103.0447,
    "total_supply": 990000000000,
    "platform": {
      "id": 1958,
      "name": "Tron",
      "symbol": "TRX",
      "slug": "tron",
      "token_address": "1002000"
    },
    "cmc_rank": 71,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.00032790919521,
        "volume_24h": 121233607.28219217,
        "percent_change_1h": -0.8098934,
        "percent_change_24h": -3.14500482,
        "percent_change_7d": 11.66814078,
        "market_cap": 324623449.6862093,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2499,
    "name": "SwissBorg",
    "symbol": "CHSB",
    "slug": "swissborg",
    "num_market_pairs": 7,
    "date_added": "2018-02-02T00:00:00.000Z",
    "tags": [
      "asset-management",
      "staking"
    ],
    "max_supply": null,
    "circulating_supply": 932687844.814276,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xba9d4199fab4f26efe3551d490e3821486f135ba"
    },
    "cmc_rank": 72,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.32932895998383,
        "volume_24h": 6258278.9814527,
        "percent_change_1h": -3.54922868,
        "percent_change_24h": -3.03737366,
        "percent_change_7d": 26.12572442,
        "market_cap": 307161117.9222453,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 4779,
    "name": "HUSD",
    "symbol": "HUSD",
    "slug": "husd",
    "num_market_pairs": 53,
    "date_added": "2019-10-15T00:00:00.000Z",
    "tags": [
      "pow",
      "medium-of-exchange",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": null,
    "circulating_supply": 304078487.9725054,
    "total_supply": 304078487.9725054,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xdf574c24545e5ffecb9a659c229253d4111d87e1"
    },
    "cmc_rank": 73,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.99998212214546,
        "volume_24h": 195338788.9530435,
        "percent_change_1h": -0.0800258,
        "percent_change_24h": 0.15016084,
        "percent_change_7d": 0.08676393,
        "market_cap": 304073051.70152867,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 6535,
    "name": "NEAR Protocol",
    "symbol": "NEAR",
    "slug": "near-protocol",
    "num_market_pairs": 19,
    "date_added": "2020-08-11T00:00:00.000Z",
    "tags": [
      "platform",
      "staking"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 196911019,
    "total_supply": 1000000000,
    "platform": null,
    "cmc_rank": 74,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 1.55073436399954,
        "volume_24h": 31191539.6080346,
        "percent_change_1h": 4.2743141,
        "percent_change_24h": -0.04607785,
        "percent_change_7d": 6.93660212,
        "market_cap": 305356683.8134663,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 1684,
    "name": "Qtum",
    "symbol": "QTUM",
    "slug": "qtum",
    "num_market_pairs": 202,
    "date_added": "2017-05-24T00:00:00.000Z",
    "tags": [
      "platform",
      "smart-contracts"
    ],
    "max_supply": 107822406,
    "circulating_supply": 97538911.6605668,
    "total_supply": 103058332,
    "platform": null,
    "cmc_rank": 75,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 2.87676219750619,
        "volume_24h": 590115014.4533774,
        "percent_change_1h": -2.15020732,
        "percent_change_24h": -3.10183557,
        "percent_change_7d": 27.60004286,
        "market_cap": 280596253.8510143,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2563,
    "name": "TrueUSD",
    "symbol": "TUSD",
    "slug": "trueusd",
    "num_market_pairs": 238,
    "date_added": "2018-03-06T00:00:00.000Z",
    "tags": [
      "store-of-value",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": null,
    "circulating_supply": 275031536.94,
    "total_supply": 275031536.94,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "TUSDB-888"
    },
    "cmc_rank": 76,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.99978694185984,
        "volume_24h": 168890724.01436192,
        "percent_change_1h": -0.03922936,
        "percent_change_24h": 0.00792964,
        "percent_change_7d": -0.02053354,
        "market_cap": 274972939.2322542,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5567,
    "name": "Celo",
    "symbol": "CELO",
    "slug": "celo",
    "num_market_pairs": 21,
    "date_added": "2020-05-22T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 1000000000,
    "circulating_supply": 124447717,
    "total_supply": 1000000000,
    "platform": null,
    "cmc_rank": 77,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 2.16330219419295,
        "volume_24h": 18561350.81025942,
        "percent_change_1h": -0.70471934,
        "percent_change_24h": -0.12414809,
        "percent_change_7d": 45.640643,
        "market_cap": 269218019.2484033,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 693,
    "name": "Verge",
    "symbol": "XVG",
    "slug": "verge",
    "num_market_pairs": 44,
    "date_added": "2014-10-25T00:00:00.000Z",
    "tags": [
      "mineable",
      "multiple-algorithms",
      "medium-of-exchange",
      "privacy"
    ],
    "max_supply": 16555000000,
    "circulating_supply": 16415867343.363379,
    "total_supply": 16415867343.363379,
    "platform": null,
    "cmc_rank": 78,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.01573019475167,
        "volume_24h": 43478528.12422542,
        "percent_change_1h": 6.74460318,
        "percent_change_24h": 4.36143375,
        "percent_change_7d": 106.91936615,
        "market_cap": 258224790.32868555,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 3330,
    "name": "Paxos Standard",
    "symbol": "PAX",
    "slug": "paxos-standard",
    "num_market_pairs": 184,
    "date_added": "2018-09-27T00:00:00.000Z",
    "tags": [
      "store-of-value",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": null,
    "circulating_supply": 244951954.49426377,
    "total_supply": 249952064.83,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
    },
    "cmc_rank": 79,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 1.00232882488563,
        "volume_24h": 312235394.2919211,
        "percent_change_1h": 0.35402823,
        "percent_change_24h": 0.19917396,
        "percent_change_7d": 0.36769407,
        "market_cap": 245522404.7016737,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 4056,
    "name": "Ampleforth",
    "symbol": "AMPL",
    "slug": "ampleforth",
    "num_market_pairs": 59,
    "date_added": "2019-06-28T00:00:00.000Z",
    "tags": [
      "defi",
      "rebase"
    ],
    "max_supply": 395345189.6,
    "circulating_supply": 219408387.17928994,
    "total_supply": 373788922.499318,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xd46ba6d942050d489dbd938a2c909a5d5039a161"
    },
    "cmc_rank": 80,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 1.11646577066694,
        "volume_24h": 33695564.59194811,
        "percent_change_1h": 1.91262732,
        "percent_change_24h": 1.43599495,
        "percent_change_7d": 16.15836824,
        "market_cap": 244961954.08291632,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 1042,
    "name": "Siacoin",
    "symbol": "SC",
    "slug": "siacoin",
    "num_market_pairs": 49,
    "date_added": "2015-08-26T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "blake2b",
      "platform",
      "distributed-computing",
      "filesharing"
    ],
    "max_supply": null,
    "circulating_supply": 45275962992,
    "total_supply": 45275962992,
    "platform": null,
    "cmc_rank": 81,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.00503892151054,
        "volume_24h": 40733520.01411887,
        "percent_change_1h": -0.40193019,
        "percent_change_24h": 0.79837367,
        "percent_change_7d": 53.50665738,
        "market_cap": 228142023.83080178,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 5268,
    "name": "Energy Web Token",
    "symbol": "EWT",
    "slug": "energy-web-token",
    "num_market_pairs": 8,
    "date_added": "2020-03-28T00:00:00.000Z",
    "tags": [
      "energy",
      "enterprise-solutions",
      "identity",
      "substrate"
    ],
    "max_supply": 100000000,
    "circulating_supply": 30062138,
    "total_supply": 48638535.4433,
    "platform": null,
    "cmc_rank": 82,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 7.59927977301203,
        "volume_24h": 1619996.13989115,
        "percent_change_1h": 3.56857471,
        "percent_change_24h": -4.24898574,
        "percent_change_7d": 20.68899044,
        "market_cap": 228450597.2368963,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 4157,
    "name": "THORChain",
    "symbol": "RUNE",
    "slug": "thorchain",
    "num_market_pairs": 26,
    "date_added": "2019-07-23T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 158432088.34333336,
    "total_supply": 500000000,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "RUNE-B1A"
    },
    "cmc_rank": 83,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 1.4300194769013,
        "volume_24h": 32479831.75946307,
        "percent_change_1h": -0.3246759,
        "percent_change_24h": -2.90556755,
        "percent_change_7d": 2.39765642,
        "market_cap": 226560972.09711412,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 1982,
    "name": "Kyber Network",
    "symbol": "KNC",
    "slug": "kyber-network",
    "num_market_pairs": 139,
    "date_added": "2017-09-24T00:00:00.000Z",
    "tags": [
      "marketplace",
      "decentralized-exchange",
      "defi"
    ],
    "max_supply": 226000000,
    "circulating_supply": 201317421.37369192,
    "total_supply": 210325273.09255603,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200"
    },
    "cmc_rank": 84,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1.12705343640267,
        "volume_24h": 95715739.38590129,
        "percent_change_1h": -0.94895787,
        "percent_change_24h": -0.61202847,
        "percent_change_7d": 36.05575407,
        "market_cap": 226895491.56694382,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 1759,
    "name": "Status",
    "symbol": "SNT",
    "slug": "status",
    "num_market_pairs": 89,
    "date_added": "2017-06-28T00:00:00.000Z",
    "tags": [
      "media",
      "content-creation",
      "privacy"
    ],
    "max_supply": null,
    "circulating_supply": 3470483788,
    "total_supply": 6804870174,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x744d70fdbe2ba4cf95131626614a1763df805b9e"
    },
    "cmc_rank": 85,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.06477031334884,
        "volume_24h": 264359665.56261843,
        "percent_change_1h": -4.55292309,
        "percent_change_24h": -4.71848447,
        "percent_change_7d": 107.0441303,
        "market_cap": 224784322.42082918,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 1104,
    "name": "Augur",
    "symbol": "REP",
    "slug": "augur",
    "num_market_pairs": 86,
    "date_added": "2015-10-27T00:00:00.000Z",
    "tags": [
      "platform",
      "defi",
      "prediction-markets",
      "reputation",
      "ipfs"
    ],
    "max_supply": null,
    "circulating_supply": 11000000,
    "total_supply": 11000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x1985365e9f78359a9B6AD760e32412f4a445E862"
    },
    "cmc_rank": 86,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 19.20081353768159,
        "volume_24h": 23935612.5316976,
        "percent_change_1h": -0.00114305,
        "percent_change_24h": -5.42453947,
        "percent_change_7d": 16.8626118,
        "market_cap": 211208948.9144975,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2083,
    "name": "Bitcoin Gold",
    "symbol": "BTG",
    "slug": "bitcoin-gold",
    "num_market_pairs": 73,
    "date_added": "2017-10-23T00:00:00.000Z",
    "tags": [
      "mineable",
      "medium-of-exchange",
      "payments"
    ],
    "max_supply": 21000000,
    "circulating_supply": 17513923.589,
    "total_supply": 17513923.589,
    "platform": null,
    "cmc_rank": 87,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 11.7146500281987,
        "volume_24h": 85285772.10700302,
        "percent_change_1h": -2.53906877,
        "percent_change_24h": 12.90857016,
        "percent_change_7d": 37.22012749,
        "market_cap": 205169485.46574873,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 3155,
    "name": "Quant",
    "symbol": "QNT",
    "slug": "quant",
    "num_market_pairs": 25,
    "date_added": "2018-08-10T00:00:00.000Z",
    "tags": [
      "platform",
      "interoperability"
    ],
    "max_supply": 14612493,
    "circulating_supply": 12072738,
    "total_supply": 14612493.08082618,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x4a220e6096b25eadb88358cb44068a3248254675"
    },
    "cmc_rank": 88,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 16.29545832497239,
        "volume_24h": 5871984.99011618,
        "percent_change_1h": 6.96562627,
        "percent_change_24h": 35.08642485,
        "percent_change_7d": 48.80675982,
        "market_cap": 196730798.94731054,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 1966,
    "name": "Decentraland",
    "symbol": "MANA",
    "slug": "decentraland",
    "num_market_pairs": 110,
    "date_added": "2017-09-17T00:00:00.000Z",
    "tags": [
      "platform",
      "collectibles-nfts",
      "gaming",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 1494082251.4557312,
    "total_supply": 2194951511.1201463,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942"
    },
    "cmc_rank": 89,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.13165844362742,
        "volume_24h": 293199782.41907024,
        "percent_change_1h": -4.72871098,
        "percent_change_24h": 24.75745683,
        "percent_change_7d": 61.43597558,
        "market_cap": 196708543.87801313,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 4679,
    "name": "Band Protocol",
    "symbol": "BAND",
    "slug": "band-protocol",
    "num_market_pairs": 104,
    "date_added": "2019-09-18T00:00:00.000Z",
    "tags": [
      "defi",
      "oracles",
      "binance-chain"
    ],
    "max_supply": null,
    "circulating_supply": 20494032.51749998,
    "total_supply": 100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55"
    },
    "cmc_rank": 90,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 9.56014309548151,
        "volume_24h": 200982337.43260446,
        "percent_change_1h": 8.55717103,
        "percent_change_24h": 8.36467744,
        "percent_change_7d": 67.19326454,
        "market_cap": 195925883.470751,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2130,
    "name": "Enjin Coin",
    "symbol": "ENJ",
    "slug": "enjin-coin",
    "num_market_pairs": 97,
    "date_added": "2017-11-01T00:00:00.000Z",
    "tags": [
      "media",
      "collectibles-nfts",
      "gaming",
      "ethereum"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 823130411.4082638,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c"
    },
    "cmc_rank": 91,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.23477843571343,
        "volume_24h": 329292464.8997165,
        "percent_change_1h": -2.21906835,
        "percent_change_24h": 33.82274547,
        "percent_change_7d": 73.37280166,
        "market_cap": 193253270.37858424,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 7129,
    "name": "TerraUSD",
    "symbol": "UST",
    "slug": "terrausd",
    "num_market_pairs": 22,
    "date_added": "2020-09-21T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 0,
    "circulating_supply": 184685758.255858,
    "total_supply": 184685758.255858,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD"
    },
    "cmc_rank": 92,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 1.00515595681912,
        "volume_24h": 16613313.79770482,
        "percent_change_1h": -0.10484561,
        "percent_change_24h": 1.08150357,
        "percent_change_7d": 0.72524244,
        "market_cap": 185637990.05053163,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 3911,
    "name": "Ocean Protocol",
    "symbol": "OCEAN",
    "slug": "ocean-protocol",
    "num_market_pairs": 44,
    "date_added": "2019-05-06T00:00:00.000Z",
    "tags": [
      "platform",
      "ai-big-data",
      "filesharing",
      "substrate",
      "ipfs"
    ],
    "max_supply": 1410000000,
    "circulating_supply": 419026836.7678136,
    "total_supply": 613099141,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x967da4048cd07ab37855c090aaf366e4ce1b9f48"
    },
    "cmc_rank": 93,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.43569119831764,
        "volume_24h": 25558620.38232686,
        "percent_change_1h": -0.8307893,
        "percent_change_24h": -7.66021425,
        "percent_change_7d": 23.90679673,
        "market_cap": 182566304.63861886,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 3662,
    "name": "HedgeTrade",
    "symbol": "HEDG",
    "slug": "hedgetrade",
    "num_market_pairs": 12,
    "date_added": "2019-01-03T00:00:00.000Z",
    "tags": [
      "asset-management",
      "marketplace",
      "discount-token"
    ],
    "max_supply": null,
    "circulating_supply": 339231468.3751734,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xF1290473E210b2108A85237fbCd7b6eb42Cc654F"
    },
    "cmc_rank": 94,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.52661690316721,
        "volume_24h": 241473.69402999,
        "percent_change_1h": 5.38703616,
        "percent_change_24h": -2.72477392,
        "percent_change_7d": 14.18649623,
        "market_cap": 178645025.33259913,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 5830,
    "name": "NXM",
    "symbol": "NXM",
    "slug": "nxm",
    "num_market_pairs": 42,
    "date_added": "2020-07-20T00:00:00.000Z",
    "tags": [
      "defi",
      "insurance"
    ],
    "max_supply": null,
    "circulating_supply": 5801350.10492685,
    "total_supply": 6707046.89776088,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b"
    },
    "cmc_rank": 95,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 29.96913723242566,
        "volume_24h": 18097274.30815425,
        "percent_change_1h": -4.30007803,
        "percent_change_24h": -7.31888065,
        "percent_change_7d": 24.204046,
        "market_cap": 173861457.42789975,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1659,
    "name": "Gnosis",
    "symbol": "GNO",
    "slug": "gnosis-gno",
    "num_market_pairs": 33,
    "date_added": "2017-05-01T00:00:00.000Z",
    "tags": [
      "services",
      "defi",
      "prediction-markets"
    ],
    "max_supply": 10000000,
    "circulating_supply": 1504589,
    "total_supply": 10000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6810e776880c02933d47db1b9fc05908e5386b96"
    },
    "cmc_rank": 96,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 114.44676380454638,
        "volume_24h": 1025994.27042329,
        "percent_change_1h": -0.70650024,
        "percent_change_24h": 7.73729038,
        "percent_change_7d": 51.2503599,
        "market_cap": 172195341.90591863,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1214,
    "name": "Lisk",
    "symbol": "LSK",
    "slug": "lisk",
    "num_market_pairs": 60,
    "date_added": "2016-04-06T00:00:00.000Z",
    "tags": [
      "dpos",
      "platform",
      "enterprise-solutions",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 126874917.2690566,
    "total_supply": 142884206,
    "platform": null,
    "cmc_rank": 97,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 1.29855432024902,
        "volume_24h": 13281672.9999247,
        "percent_change_1h": -2.84937631,
        "percent_change_24h": -5.19947647,
        "percent_change_7d": 10.14725966,
        "market_cap": 164753971.95097044,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 4023,
    "name": "Bitcoin BEP2",
    "symbol": "BTCB",
    "slug": "bitcoin-bep2",
    "num_market_pairs": 14,
    "date_added": "2019-06-18T00:00:00.000Z",
    "tags": [
      "binance-chain"
    ],
    "max_supply": null,
    "circulating_supply": 5023.07164836,
    "total_supply": 9001,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "BTCB-1DE"
    },
    "cmc_rank": 98,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 32706.705585385487,
        "volume_24h": 655515.76979166,
        "percent_change_1h": -0.07574404,
        "percent_change_24h": -12.43446209,
        "percent_change_7d": 11.66290379,
        "market_cap": 164288125.53720748,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 291,
    "name": "MaidSafeCoin",
    "symbol": "MAID",
    "slug": "maidsafecoin",
    "num_market_pairs": 4,
    "date_added": "2014-04-28T00:00:00.000Z",
    "tags": [
      "platform",
      "distributed-computing",
      "filesharing"
    ],
    "max_supply": null,
    "circulating_supply": 452552412,
    "total_supply": 452552412,
    "platform": null,
    "cmc_rank": 99,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.36192785944964,
        "volume_24h": 1336179.97702945,
        "percent_change_1h": 2.14926335,
        "percent_change_24h": 6.75422429,
        "percent_change_7d": 12.38773992,
        "market_cap": 163791325.76393157,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3437,
    "name": "ABBC Coin",
    "symbol": "ABBC",
    "slug": "abbc-coin",
    "num_market_pairs": 33,
    "date_added": "2018-10-12T00:00:00.000Z",
    "tags": [
      "mineable",
      "dpos",
      "platform",
      "payments"
    ],
    "max_supply": 1500000000,
    "circulating_supply": 844040780.4091387,
    "total_supply": 1500000000,
    "platform": null,
    "cmc_rank": 100,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.18696214863355,
        "volume_24h": 36097075.31960473,
        "percent_change_1h": 0.29780299,
        "percent_change_24h": -1.36274801,
        "percent_change_7d": -24.24272574,
        "market_cap": 157803677.83963093,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 1727,
    "name": "Bancor",
    "symbol": "BNT",
    "slug": "bancor",
    "num_market_pairs": 162,
    "date_added": "2017-06-18T00:00:00.000Z",
    "tags": [
      "marketplace",
      "decentralized-exchange",
      "defi",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 97701403.27206206,
    "total_supply": 97701403.27206206,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c"
    },
    "cmc_rank": 101,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1.59991737677186,
        "volume_24h": 53782214.26877951,
        "percent_change_1h": 0.32484398,
        "percent_change_24h": -0.13397499,
        "percent_change_7d": 23.61861481,
        "market_cap": 156314172.82996714,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 3890,
    "name": "Matic Network",
    "symbol": "MATIC",
    "slug": "matic-network",
    "num_market_pairs": 87,
    "date_added": "2019-04-28T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions",
      "state-channels"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 4860514338,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
    },
    "cmc_rank": 102,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.03206766427869,
        "volume_24h": 69590492.2792933,
        "percent_change_1h": -1.75077779,
        "percent_change_24h": -7.20386403,
        "percent_change_7d": 75.25850969,
        "market_cap": 155865342.01274315,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 1698,
    "name": "Horizen",
    "symbol": "ZEN",
    "slug": "horizen",
    "num_market_pairs": 52,
    "date_added": "2017-06-01T00:00:00.000Z",
    "tags": [
      "mineable",
      "medium-of-exchange",
      "content-creation",
      "privacy"
    ],
    "max_supply": 21000000,
    "circulating_supply": 10630581.25,
    "total_supply": 10630581.25,
    "platform": null,
    "cmc_rank": 103,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 14.61875413746728,
        "volume_24h": 15339872.07996449,
        "percent_change_1h": -0.54194675,
        "percent_change_24h": -4.79806712,
        "percent_change_7d": 8.99717137,
        "market_cap": 155405853.6321196,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2682,
    "name": "Holo",
    "symbol": "HOT",
    "slug": "holo",
    "num_market_pairs": 79,
    "date_added": "2018-04-29T00:00:00.000Z",
    "tags": [
      "platform",
      "distributed-computing",
      "filesharing"
    ],
    "max_supply": null,
    "circulating_supply": 167313361967.40842,
    "total_supply": 177619433541.14133,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2"
    },
    "cmc_rank": 104,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.00082580706597,
        "volume_24h": 16743282.01098656,
        "percent_change_1h": -2.06324858,
        "percent_change_24h": 4.2161868,
        "percent_change_7d": 30.80949728,
        "market_cap": 138168556.54388213,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1680,
    "name": "Aragon",
    "symbol": "ANT",
    "slug": "aragon",
    "num_market_pairs": 85,
    "date_added": "2017-05-18T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions",
      "dao",
      "substrate",
      "polkadot"
    ],
    "max_supply": null,
    "circulating_supply": 39609522.80952381,
    "total_supply": 39609523.80952381,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa117000000f279d81a1d3cc75430faa017fa5a2e"
    },
    "cmc_rank": 105,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 3.51954163363523,
        "volume_24h": 42299624.929378,
        "percent_change_1h": 1.83507388,
        "percent_change_24h": -5.61252509,
        "percent_change_7d": 9.60417222,
        "market_cap": 139407364.61654335,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3822,
    "name": "Theta Fuel",
    "symbol": "TFUEL",
    "slug": "theta-fuel",
    "num_market_pairs": 15,
    "date_added": "2019-03-28T00:00:00.000Z",
    "tags": [
      "media",
      "content-creation",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 4962631792,
    "total_supply": 5000000000,
    "platform": null,
    "cmc_rank": 106,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.02694542404986,
        "volume_24h": 8268784.71246129,
        "percent_change_1h": -2.91874508,
        "percent_change_24h": -8.71761029,
        "percent_change_7d": -25.7761271,
        "market_cap": 133720218.03875664,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3351,
    "name": "ZB Token",
    "symbol": "ZB",
    "slug": "zb-token",
    "num_market_pairs": 11,
    "date_added": "2018-09-27T00:00:00.000Z",
    "tags": [
      "marketplace",
      "discount-token",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 463288810,
    "total_supply": 2100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xbd0793332e9fb844a52a205a233ef27a5b34b927"
    },
    "cmc_rank": 107,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.28141465492936,
        "volume_24h": 17775808.4960699,
        "percent_change_1h": -0.83199421,
        "percent_change_24h": 1.10336591,
        "percent_change_7d": 5.64512606,
        "market_cap": 130376260.59878384,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 5728,
    "name": "Balancer",
    "symbol": "BAL",
    "slug": "balancer",
    "num_market_pairs": 140,
    "date_added": "2020-06-24T00:00:00.000Z",
    "tags": [
      "defi",
      "yield-farming"
    ],
    "max_supply": 100000000,
    "circulating_supply": 6943831,
    "total_supply": 35725000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xba100000625a3754423978a60c9317c58a424e3D"
    },
    "cmc_rank": 108,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 18.21264745946934,
        "volume_24h": 144895608.93844497,
        "percent_change_1h": -0.7164849,
        "percent_change_24h": 3.22851926,
        "percent_change_7d": 27.45504041,
        "market_cap": 126465546.02113445,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2642,
    "name": "CyberVein",
    "symbol": "CVT",
    "slug": "cybervein",
    "num_market_pairs": 14,
    "date_added": "2018-04-17T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 2147483648,
    "circulating_supply": 1060404495.6499999,
    "total_supply": 2147483648,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xbe428c3867f05dea2a89fc76a102b544eac7f772"
    },
    "cmc_rank": 109,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.11763994440745,
        "volume_24h": 7697909.29431777,
        "percent_change_1h": 0.00462114,
        "percent_change_24h": 1.25049574,
        "percent_change_7d": -3.69842997,
        "market_cap": 124745925.91767605,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1732,
    "name": "Numeraire",
    "symbol": "NMR",
    "slug": "numeraire",
    "num_market_pairs": 58,
    "date_added": "2017-06-23T00:00:00.000Z",
    "tags": [
      "asset-management",
      "ai-big-data",
      "defi",
      "payments"
    ],
    "max_supply": 11000000,
    "circulating_supply": 4465647.47778027,
    "total_supply": 10974174.9347183,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671"
    },
    "cmc_rank": 110,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 27.48821201842531,
        "volume_24h": 11497700.75056067,
        "percent_change_1h": 0.85129668,
        "percent_change_24h": -2.54879236,
        "percent_change_7d": 20.53431965,
        "market_cap": 122752664.6687703,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 2577,
    "name": "Ravencoin",
    "symbol": "RVN",
    "slug": "ravencoin",
    "num_market_pairs": 83,
    "date_added": "2018-03-10T00:00:00.000Z",
    "tags": [
      "mineable",
      "platform",
      "collectibles-nfts",
      "crowdfunding"
    ],
    "max_supply": 21000000000,
    "circulating_supply": 7866065000,
    "total_supply": 7866065000,
    "platform": null,
    "cmc_rank": 111,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.01544003925401,
        "volume_24h": 18136325.55121166,
        "percent_change_1h": 0.45937073,
        "percent_change_24h": -3.99817803,
        "percent_change_7d": 20.55896771,
        "market_cap": 121452352.37459417,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1816,
    "name": "Civic",
    "symbol": "CVC",
    "slug": "civic",
    "num_market_pairs": 57,
    "date_added": "2017-07-17T00:00:00.000Z",
    "tags": [
      "enterprise-solutions",
      "identity"
    ],
    "max_supply": null,
    "circulating_supply": 670000000,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x41e5560054824ea6b0732e656e3ad64e20e94e45"
    },
    "cmc_rank": 112,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.17710687381222,
        "volume_24h": 358872232.00517714,
        "percent_change_1h": -6.46962762,
        "percent_change_24h": 29.63057993,
        "percent_change_7d": 103.16963797,
        "market_cap": 118661605.45418741,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3701,
    "name": "RSK Infrastructure Framework",
    "symbol": "RIF",
    "slug": "rsk-infrastructure-framework",
    "num_market_pairs": 16,
    "date_added": "2019-01-16T00:00:00.000Z",
    "tags": [
      "services",
      "filesharing",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 677726677.4006133,
    "total_supply": 1000000000,
    "platform": null,
    "cmc_rank": 113,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.1693658531548,
        "volume_24h": 17930056.97171851,
        "percent_change_1h": 2.44699017,
        "percent_change_24h": -40.84746244,
        "percent_change_7d": 5.62754812,
        "market_cap": 114783756.92372277,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 4948,
    "name": "Nervos Network",
    "symbol": "CKB",
    "slug": "nervos-network",
    "num_market_pairs": 35,
    "date_added": "2019-11-19T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 23482041840.59734,
    "total_supply": 30453835183.10708,
    "platform": null,
    "cmc_rank": 114,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.0047941150441,
        "volume_24h": 7846958.59752806,
        "percent_change_1h": 2.98494039,
        "percent_change_24h": 13.88885282,
        "percent_change_7d": 17.29358684,
        "market_cap": 112575610.05419336,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 2405,
    "name": "IOST",
    "symbol": "IOST",
    "slug": "iostoken",
    "num_market_pairs": 86,
    "date_added": "2018-01-16T00:00:00.000Z",
    "tags": [
      "hardware",
      "iot"
    ],
    "max_supply": null,
    "circulating_supply": 15324121695.471115,
    "total_supply": 22252662041.94331,
    "platform": null,
    "cmc_rank": 115,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.00735185582773,
        "volume_24h": 88471176.95552662,
        "percent_change_1h": 12.61158307,
        "percent_change_24h": 16.25944348,
        "percent_change_7d": 28.82789816,
        "market_cap": 112660733.39169304,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 6538,
    "name": "Curve DAO Token",
    "symbol": "CRV",
    "slug": "curve-dao-token",
    "num_market_pairs": 84,
    "date_added": "2020-08-14T00:00:00.000Z",
    "tags": [
      "defi",
      "yield-farming"
    ],
    "max_supply": 3303030299,
    "circulating_supply": 155297960.60620522,
    "total_supply": 1389417132.0650084,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xD533a949740bb3306d119CC777fa900bA034cd52"
    },
    "cmc_rank": 116,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.71010298185724,
        "volume_24h": 83779497.0091194,
        "percent_change_1h": -1.16809304,
        "percent_change_24h": -0.92037701,
        "percent_change_7d": 11.44803026,
        "market_cap": 110277544.90281452,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 4066,
    "name": "Chiliz",
    "symbol": "CHZ",
    "slug": "chiliz",
    "num_market_pairs": 71,
    "date_added": "2019-07-01T00:00:00.000Z",
    "tags": [
      "sports",
      "content-creation",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 5429628748.660311,
    "total_supply": 8888888888,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "CHZ-ECD"
    },
    "cmc_rank": 117,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.01963414898538,
        "volume_24h": 50939086.66494813,
        "percent_change_1h": -1.44488777,
        "percent_change_24h": -6.88867239,
        "percent_change_7d": -7.70029742,
        "market_cap": 106606139.78649892,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 1817,
    "name": "Voyager Token",
    "symbol": "VGX",
    "slug": "voyager-token",
    "num_market_pairs": 11,
    "date_added": "2017-07-18T00:00:00.000Z",
    "tags": [
      "asset-management",
      "wallet"
    ],
    "max_supply": 222295209,
    "circulating_supply": 222295208,
    "total_supply": 222295208.238,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x5af2be193a6abca9c8817001f45744777db30756"
    },
    "cmc_rank": 118,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.46725371745878,
        "volume_24h": 21584759.63859786,
        "percent_change_1h": -4.50155485,
        "percent_change_24h": 97.66824289,
        "percent_change_7d": 195.07339628,
        "market_cap": 103868262.31127274,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 5026,
    "name": "Orchid",
    "symbol": "OXT",
    "slug": "orchid",
    "num_market_pairs": 41,
    "date_added": "2019-12-16T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 367584352,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb"
    },
    "cmc_rank": 119,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 0.28109457238914,
        "volume_24h": 26253824.64984836,
        "percent_change_1h": 0.92189612,
        "percent_change_24h": -0.19445486,
        "percent_change_7d": 22.61483617,
        "market_cap": 103325966.24237911,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 2758,
    "name": "Unibright",
    "symbol": "UBT",
    "slug": "unibright",
    "num_market_pairs": 24,
    "date_added": "2018-05-21T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 148799999.24349335,
    "total_supply": 150000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e"
    },
    "cmc_rank": 120,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.67732947407352,
        "volume_24h": 3686549.1573784,
        "percent_change_1h": 1.42746167,
        "percent_change_24h": -1.60749257,
        "percent_change_7d": 48.98777421,
        "market_cap": 100786625.22973552,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 213,
    "name": "MonaCoin",
    "symbol": "MONA",
    "slug": "monacoin",
    "num_market_pairs": 21,
    "date_added": "2014-03-20T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "scrypt",
      "medium-of-exchange",
      "memes"
    ],
    "max_supply": null,
    "circulating_supply": 65729674.87116792,
    "total_supply": 65729674.87116792,
    "platform": null,
    "cmc_rank": 121,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 1.53451796163049,
        "volume_24h": 24652830.04855919,
        "percent_change_1h": -2.62434024,
        "percent_change_24h": 2.83538677,
        "percent_change_7d": 13.14352536,
        "market_cap": 100863366.70193943,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 1637,
    "name": "iExec RLC",
    "symbol": "RLC",
    "slug": "rlc",
    "num_market_pairs": 36,
    "date_added": "2017-04-20T00:00:00.000Z",
    "tags": [
      "marketplace",
      "distributed-computing",
      "oracles",
      "substrate",
      "polkadot"
    ],
    "max_supply": null,
    "circulating_supply": 80070793.23876736,
    "total_supply": 86999784.9868455,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x607f4c5bb672230e8672085532f7e901544a7375"
    },
    "cmc_rank": 122,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 1.24414766911637,
        "volume_24h": 14160618.83557312,
        "percent_change_1h": 9.90805458,
        "percent_change_24h": 2.10890045,
        "percent_change_7d": 57.55861066,
        "market_cap": 99619890.7723112,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2222,
    "name": "Bitcoin Diamond",
    "symbol": "BCD",
    "slug": "bitcoin-diamond",
    "num_market_pairs": 30,
    "date_added": "2017-11-24T00:00:00.000Z",
    "tags": [
      "mineable",
      "medium-of-exchange",
      "payments"
    ],
    "max_supply": 210000000,
    "circulating_supply": 186492897.953,
    "total_supply": 189492897.953,
    "platform": null,
    "cmc_rank": 123,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.51622955841094,
        "volume_24h": 3764608.89759217,
        "percent_change_1h": -2.31635906,
        "percent_change_24h": -1.80010205,
        "percent_change_7d": 10.24466508,
        "market_cap": 96273146.35705368,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 8104,
    "name": "1inch",
    "symbol": "1INCH",
    "slug": "1inch",
    "num_market_pairs": 110,
    "date_added": "2020-12-25T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 72164169,
    "total_supply": 1500000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x111111111117dc0aa78b770fa6a738034120c302"
    },
    "cmc_rank": 124,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 1.31713805884691,
        "volume_24h": 123779825.55869918,
        "percent_change_1h": -0.34793283,
        "percent_change_24h": -9.91657222,
        "percent_change_7d": 12.31369745,
        "market_cap": 95050173.47496036,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 1993,
    "name": "Kin",
    "symbol": "KIN",
    "slug": "kin",
    "num_market_pairs": 18,
    "date_added": "2017-09-27T00:00:00.000Z",
    "tags": [
      "media",
      "content-creation",
      "smart-contracts"
    ],
    "max_supply": 10000000000000,
    "circulating_supply": 1518114145968,
    "total_supply": 10000000000000,
    "platform": null,
    "cmc_rank": 125,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.00006174937175,
        "volume_24h": 431772.37187152,
        "percent_change_1h": -0.49661567,
        "percent_change_24h": 8.36251114,
        "percent_change_7d": -7.31960551,
        "market_cap": 93742594.7583118,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 1856,
    "name": "district0x",
    "symbol": "DNT",
    "slug": "district0x",
    "num_market_pairs": 15,
    "date_added": "2017-08-03T00:00:00.000Z",
    "tags": [
      "platform",
      "payments",
      "reputation"
    ],
    "max_supply": null,
    "circulating_supply": 600000000,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0abdace70d3790235af448c88547603b945604ea"
    },
    "cmc_rank": 126,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.15589505793206,
        "volume_24h": 263517727.19182575,
        "percent_change_1h": 0.31582,
        "percent_change_24h": 70.8416495,
        "percent_change_7d": 234.11008931,
        "market_cap": 93537034.759236,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 5632,
    "name": "Arweave",
    "symbol": "AR",
    "slug": "arweave",
    "num_market_pairs": 14,
    "date_added": "2020-05-27T00:00:00.000Z",
    "tags": [
      "distributed-computing",
      "filesharing",
      "ipfs"
    ],
    "max_supply": 66000000,
    "circulating_supply": 33394701,
    "total_supply": 63190435,
    "platform": null,
    "cmc_rank": 127,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 2.75873499590821,
        "volume_24h": 3901041.06480354,
        "percent_change_1h": -4.49491115,
        "percent_change_24h": -11.34397865,
        "percent_change_7d": 5.02672446,
        "market_cap": 92127130.3265909,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1866,
    "name": "Bytom",
    "symbol": "BTM",
    "slug": "bytom",
    "num_market_pairs": 63,
    "date_added": "2017-08-08T00:00:00.000Z",
    "tags": [
      "mineable",
      "platform",
      "payments",
      "smart-contracts"
    ],
    "max_supply": 2100000000,
    "circulating_supply": 1399927431.503,
    "total_supply": 1647212362.5,
    "platform": null,
    "cmc_rank": 128,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.0659451700417,
        "volume_24h": 38192336.95178106,
        "percent_change_1h": -0.73509477,
        "percent_change_24h": -0.17816919,
        "percent_change_7d": 20.7952356,
        "market_cap": 92318452.51650567,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 4705,
    "name": "PAX Gold",
    "symbol": "PAXG",
    "slug": "pax-gold",
    "num_market_pairs": 38,
    "date_added": "2019-09-26T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 47513.188,
    "total_supply": 47513.188,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x45804880de22913dafe09f4980848ece6ecbaf78"
    },
    "cmc_rank": 129,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 1912.1922824369608,
        "volume_24h": 10792961.37333718,
        "percent_change_1h": -0.01778033,
        "percent_change_24h": -2.61644302,
        "percent_change_7d": -0.84529453,
        "market_cap": 90854351.40757643,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2320,
    "name": "Utrust",
    "symbol": "UTK",
    "slug": "utrust",
    "num_market_pairs": 31,
    "date_added": "2017-12-29T00:00:00.000Z",
    "tags": [
      "cybersecurity",
      "payments",
      "smart-contracts"
    ],
    "max_supply": 500000000,
    "circulating_supply": 449980999.543386,
    "total_supply": 500000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xdc9Ac3C20D1ed0B540dF9b1feDC10039Df13F99c"
    },
    "cmc_rank": 130,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.20213321688346,
        "volume_24h": 9022828.20472702,
        "percent_change_1h": -0.23764093,
        "percent_change_24h": -4.83563625,
        "percent_change_7d": 62.75935556,
        "market_cap": 90956106.97413936,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 5665,
    "name": "Helium",
    "symbol": "HNT",
    "slug": "helium",
    "num_market_pairs": 13,
    "date_added": "2020-06-05T00:00:00.000Z",
    "tags": [
      "mineable"
    ],
    "max_supply": 223000000,
    "circulating_supply": 64840330.2891617,
    "total_supply": 223000000,
    "platform": null,
    "cmc_rank": 131,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 1.3983499326834,
        "volume_24h": 1867155.50460396,
        "percent_change_1h": -0.86598392,
        "percent_change_24h": -1.95025575,
        "percent_change_7d": -0.30799752,
        "market_cap": 90669471.49501868,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 463,
    "name": "BitShares",
    "symbol": "BTS",
    "slug": "bitshares",
    "num_market_pairs": 53,
    "date_added": "2014-07-21T00:00:00.000Z",
    "tags": [
      "pos",
      "sha-512",
      "marketplace",
      "decentralized-exchange",
      "defi"
    ],
    "max_supply": 3600570502,
    "circulating_supply": 2994840000,
    "total_supply": 2994840000,
    "platform": null,
    "cmc_rank": 132,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.02890225044752,
        "volume_24h": 36888000.21381492,
        "percent_change_1h": -2.84101994,
        "percent_change_24h": 2.22571657,
        "percent_change_7d": 34.34491237,
        "market_cap": 86557615.7302508,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1455,
    "name": "Golem",
    "symbol": "GNT",
    "slug": "golem-network-tokens",
    "num_market_pairs": 91,
    "date_added": "2016-11-18T00:00:00.000Z",
    "tags": [
      "platform",
      "distributed-computing",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 645103861.0210488,
    "total_supply": 650653861.0210488,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429"
    },
    "cmc_rank": 133,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.13124879716091,
        "volume_24h": 8248207.76424948,
        "percent_change_1h": -2.14221855,
        "percent_change_24h": -0.2126338,
        "percent_change_7d": 17.71071793,
        "market_cap": 84669105.80287151,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 1757,
    "name": "FunFair",
    "symbol": "FUN",
    "slug": "funfair",
    "num_market_pairs": 25,
    "date_added": "2017-06-27T00:00:00.000Z",
    "tags": [
      "marketplace",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 6548879188.66342,
    "total_supply": 10999873621.398026,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x419d0d8bdd9af5e606ae2232ed285aff190e711b"
    },
    "cmc_rank": 134,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.01265692736342,
        "volume_24h": 9114919.81094109,
        "percent_change_1h": -2.00731555,
        "percent_change_24h": -2.85226671,
        "percent_change_7d": 6.2633752,
        "market_cap": 82888688.20272581,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 1320,
    "name": "Ardor",
    "symbol": "ARDR",
    "slug": "ardor",
    "num_market_pairs": 27,
    "date_added": "2016-07-23T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions",
      "state-channels"
    ],
    "max_supply": 998999495,
    "circulating_supply": 998999495,
    "total_supply": 998999495,
    "platform": null,
    "cmc_rank": 135,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.08257085388781,
        "volume_24h": 4642298.08437787,
        "percent_change_1h": -3.55883671,
        "percent_change_24h": -6.74518591,
        "percent_change_7d": 4.21100391,
        "market_cap": 82488241.33564098,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3581,
    "name": "Kleros",
    "symbol": "PNK",
    "slug": "kleros",
    "num_market_pairs": 30,
    "date_added": "2018-11-01T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 598319630.885116,
    "total_supply": 764626704,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d"
    },
    "cmc_rank": 136,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.13760705581069,
        "volume_24h": 3410067.21269815,
        "percent_change_1h": 0.65345311,
        "percent_change_24h": 4.26276069,
        "percent_change_7d": 24.04475771,
        "market_cap": 82333002.8398396,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1772,
    "name": "Storj",
    "symbol": "STORJ",
    "slug": "storj",
    "num_market_pairs": 62,
    "date_added": "2017-07-02T00:00:00.000Z",
    "tags": [
      "platform",
      "distributed-computing",
      "filesharing",
      "ipfs"
    ],
    "max_supply": null,
    "circulating_supply": 217907654.24660787,
    "total_supply": 424999998.00001335,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac"
    },
    "cmc_rank": 137,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.37321775731891,
        "volume_24h": 39002631.10865168,
        "percent_change_1h": 2.48502115,
        "percent_change_24h": 2.12649802,
        "percent_change_7d": 25.65908223,
        "market_cap": 81327006.02054344,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2087,
    "name": "KuCoin Shares",
    "symbol": "KCS",
    "slug": "kucoin-shares",
    "num_market_pairs": 13,
    "date_added": "2017-10-24T00:00:00.000Z",
    "tags": [
      "marketplace",
      "centralized-exchange",
      "discount-token"
    ],
    "max_supply": null,
    "circulating_supply": 80118638,
    "total_supply": 170118638,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x039b5649a59967e3e936d7471f9c3700100ee1ab"
    },
    "cmc_rank": 138,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 1.00554248630897,
        "volume_24h": 12574267.10142227,
        "percent_change_1h": 1.79860647,
        "percent_change_24h": 2.77519602,
        "percent_change_7d": 46.63503716,
        "market_cap": 80562694.45420831,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 6187,
    "name": "Serum",
    "symbol": "SRM",
    "slug": "serum",
    "num_market_pairs": 70,
    "date_added": "2020-08-04T00:00:00.000Z",
    "tags": [
      "decentralized-exchange",
      "defi",
      "derivatives",
      "smart-contracts",
      "staking"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 50000000,
    "total_supply": 161000001,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff"
    },
    "cmc_rank": 139,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 1.64990002637408,
        "volume_24h": 169821432.9408126,
        "percent_change_1h": 11.31538777,
        "percent_change_24h": 12.98207176,
        "percent_change_7d": 52.96933814,
        "market_cap": 82495001.318704,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 3139,
    "name": "DxChain Token",
    "symbol": "DX",
    "slug": "dxchain-token",
    "num_market_pairs": 8,
    "date_added": "2018-08-10T00:00:00.000Z",
    "tags": [
      "technology",
      "ai-big-data",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 49999999999.686195,
    "total_supply": 100000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x973e52691176d36453868D9d86572788d27041A9"
    },
    "cmc_rank": 140,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.00157679748256,
        "volume_24h": 378642.77544162,
        "percent_change_1h": -7.29841418,
        "percent_change_24h": -6.07175393,
        "percent_change_7d": -6.67994816,
        "market_cap": 78839874.1275052,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 4846,
    "name": "Kava.io",
    "symbol": "KAVA",
    "slug": "kava",
    "num_market_pairs": 48,
    "date_added": "2019-10-25T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 46876230,
    "total_supply": 114477061,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "KAVA-10C"
    },
    "cmc_rank": 141,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1.6431776030983,
        "volume_24h": 59859143.00799047,
        "percent_change_1h": -1.61232731,
        "percent_change_24h": -6.66955646,
        "percent_change_7d": 24.30609875,
        "market_cap": 77025971.25368463,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 4279,
    "name": "Swipe",
    "symbol": "SXP",
    "slug": "swipe",
    "num_market_pairs": 75,
    "date_added": "2019-08-26T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "defi",
      "payments",
      "wallet"
    ],
    "max_supply": 289266978,
    "circulating_supply": 83936975,
    "total_supply": 289612084,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9"
    },
    "cmc_rank": 142,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.91080672604175,
        "volume_24h": 118315265.79888734,
        "percent_change_1h": -3.21063566,
        "percent_change_24h": 8.74222536,
        "percent_change_7d": 24.15861909,
        "market_cap": 76450361.39359821,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 7232,
    "name": "Alpha Finance Lab",
    "symbol": "ALPHA",
    "slug": "alpha-finance-lab",
    "num_market_pairs": 16,
    "date_added": "2020-09-29T00:00:00.000Z",
    "tags": [
      "defi",
      "yield-farming",
      "binance-smart-chain"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 174136442,
    "total_supply": 1000000000,
    "platform": {
      "id": 1839,
      "name": "Binance Smart Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "0xa1faa113cbe53436df28ff0aee54275c13b40975"
    },
    "cmc_rank": 143,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.42268852272861,
        "volume_24h": 178362044.84966147,
        "percent_change_1h": 6.69608651,
        "percent_change_24h": 28.29232762,
        "percent_change_7d": 127.26788614,
        "market_cap": 73605475.42219628,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 1230,
    "name": "Steem",
    "symbol": "STEEM",
    "slug": "steem",
    "num_market_pairs": 37,
    "date_added": "2016-04-18T00:00:00.000Z",
    "tags": [
      "media",
      "content-creation"
    ],
    "max_supply": null,
    "circulating_supply": 392142112.966,
    "total_supply": 409116206.966,
    "platform": null,
    "cmc_rank": 144,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.18505798409425,
        "volume_24h": 7866150.80391713,
        "percent_change_1h": -3.79161423,
        "percent_change_24h": -4.39351622,
        "percent_change_7d": 16.04876728,
        "market_cap": 72569028.90394762,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 5957,
    "name": "DFI.Money",
    "symbol": "YFII",
    "slug": "yearn-finance-ii",
    "num_market_pairs": 91,
    "date_added": "2020-07-29T00:00:00.000Z",
    "tags": [
      "defi",
      "yield-farming",
      "binance-chain"
    ],
    "max_supply": 39375,
    "circulating_supply": 38596,
    "total_supply": 39375,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83"
    },
    "cmc_rank": 145,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1864.5055875113924,
        "volume_24h": 311819184.15073293,
        "percent_change_1h": -0.23401975,
        "percent_change_24h": -0.78060838,
        "percent_change_7d": 13.24392367,
        "market_cap": 71962457.6555897,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 2570,
    "name": "TomoChain",
    "symbol": "TOMO",
    "slug": "tomochain",
    "num_market_pairs": 51,
    "date_added": "2018-03-08T00:00:00.000Z",
    "tags": [
      "mineable",
      "platform"
    ],
    "max_supply": null,
    "circulating_supply": 76560625,
    "total_supply": 100000000,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "TOMOB-4BC"
    },
    "cmc_rank": 146,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.92203312737042,
        "volume_24h": 14010661.84158033,
        "percent_change_1h": -0.59572496,
        "percent_change_24h": -6.77674201,
        "percent_change_7d": 37.20237594,
        "market_cap": 70591432.50218396,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 7226,
    "name": "Injective Protocol",
    "symbol": "INJ",
    "slug": "injective-protocol",
    "num_market_pairs": 22,
    "date_added": "2020-09-29T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": 100000000,
    "circulating_supply": 15000178.24450002,
    "total_supply": 100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe28b3b32b6c345a34ff64674606124dd5aceca30"
    },
    "cmc_rank": 147,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 4.68166079515199,
        "volume_24h": 26821604.49523233,
        "percent_change_1h": -2.01477024,
        "percent_change_24h": 2.58930925,
        "percent_change_7d": 11.79340735,
        "market_cap": 70225746.40756756,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 1521,
    "name": "Komodo",
    "symbol": "KMD",
    "slug": "komodo",
    "num_market_pairs": 31,
    "date_added": "2017-02-05T00:00:00.000Z",
    "tags": [
      "mineable",
      "hybrid-dpow-pow",
      "equihash",
      "platform",
      "atomic-swaps",
      "enterprise-solutions"
    ],
    "max_supply": 200000000,
    "circulating_supply": 123548128.93775,
    "total_supply": 123548128.93775,
    "platform": null,
    "cmc_rank": 148,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.56564849167972,
        "volume_24h": 5710736.43615769,
        "percent_change_1h": -3.53573897,
        "percent_change_24h": -2.24196473,
        "percent_change_7d": 7.43231873,
        "market_cap": 69884812.78348985,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 7653,
    "name": "Oasis Network",
    "symbol": "ROSE",
    "slug": "oasis-network",
    "num_market_pairs": 4,
    "date_added": "2020-11-12T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 10000000000,
    "circulating_supply": 1500000000,
    "total_supply": 10000000000,
    "platform": null,
    "cmc_rank": 149,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.0468626269018,
        "volume_24h": 11473348.99667959,
        "percent_change_1h": -1.56748872,
        "percent_change_24h": -9.82755927,
        "percent_change_7d": 6.37754954,
        "market_cap": 70293940.3527,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 4191,
    "name": "Syntropy",
    "symbol": "NOIA",
    "slug": "syntropy",
    "num_market_pairs": 5,
    "date_added": "2019-07-31T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 1000000000,
    "circulating_supply": 321395830.4219282,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca"
    },
    "cmc_rank": 150,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.2160330054184,
        "volume_24h": 1627322.32842505,
        "percent_change_1h": -4.11193453,
        "percent_change_24h": -9.16392903,
        "percent_change_7d": 9.4910497,
        "market_cap": 69432107.1749916,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 4747,
    "name": "Velas",
    "symbol": "VLX",
    "slug": "velas",
    "num_market_pairs": 18,
    "date_added": "2019-10-03T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 2106296362,
    "total_supply": 2106296362,
    "platform": null,
    "cmc_rank": 151,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.03272583626298,
        "volume_24h": 1077109.18215299,
        "percent_change_1h": 1.1600917,
        "percent_change_24h": 3.61150412,
        "percent_change_7d": 10.22734276,
        "market_cap": 68930309.86412245,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 7535,
    "name": "Keep3rV1",
    "symbol": "KP3R",
    "slug": "keep3rv1",
    "num_market_pairs": 18,
    "date_added": "2020-10-28T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": 201643,
    "circulating_supply": 200001,
    "total_supply": 200001,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44"
    },
    "cmc_rank": 152,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 335.13923112087537,
        "volume_24h": 15617896.68295936,
        "percent_change_1h": -2.95981846,
        "percent_change_24h": -7.95782896,
        "percent_change_7d": 34.71868903,
        "market_cap": 67028181.363406196,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 2299,
    "name": "aelf",
    "symbol": "ELF",
    "slug": "aelf",
    "num_market_pairs": 83,
    "date_added": "2017-12-21T00:00:00.000Z",
    "tags": [
      "marketplace",
      "enterprise-solutions"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 544480199.9864658,
    "total_supply": 879999999.9864658,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e"
    },
    "cmc_rank": 153,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.12211686087508,
        "volume_24h": 24085564.17933336,
        "percent_change_1h": -1.78821194,
        "percent_change_24h": -2.1557651,
        "percent_change_7d": 14.04209191,
        "market_cap": 66490212.83098298,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 2300,
    "name": "WAX",
    "symbol": "WAXP",
    "slug": "wax",
    "num_market_pairs": 20,
    "date_added": "2017-12-21T00:00:00.000Z",
    "tags": [
      "media",
      "collectibles-nfts",
      "payments"
    ],
    "max_supply": 3770303327,
    "circulating_supply": 1477997536.8289871,
    "total_supply": 3740452107.62599,
    "platform": null,
    "cmc_rank": 154,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.04486489140017,
        "volume_24h": 1842826.95860468,
        "percent_change_1h": -0.67149971,
        "percent_change_24h": 14.85652181,
        "percent_change_7d": 23.9762286,
        "market_cap": 66310198.97955126,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3441,
    "name": "Divi",
    "symbol": "DIVI",
    "slug": "divi",
    "num_market_pairs": 10,
    "date_added": "2018-10-12T00:00:00.000Z",
    "tags": [
      "mineable",
      "asset-management",
      "masternodes",
      "wallet"
    ],
    "max_supply": null,
    "circulating_supply": 2085391174.8096156,
    "total_supply": 2085391174.8096156,
    "platform": null,
    "cmc_rank": 155,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.03098964888618,
        "volume_24h": 326343.4377894,
        "percent_change_1h": 1.83145451,
        "percent_change_24h": 8.1051937,
        "percent_change_7d": 1.60725769,
        "market_cap": 64625540.2976884,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3513,
    "name": "Fantom",
    "symbol": "FTM",
    "slug": "fantom",
    "num_market_pairs": 40,
    "date_added": "2018-10-29T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions",
      "defi",
      "research",
      "scaling",
      "smart-contracts"
    ],
    "max_supply": 3175000000,
    "circulating_supply": 2545006273,
    "total_supply": 2545006273,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "FTM-A64"
    },
    "cmc_rank": 156,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.02516815927787,
        "volume_24h": 16645328.11687559,
        "percent_change_1h": 2.10787746,
        "percent_change_24h": -5.55411008,
        "percent_change_7d": 46.76310569,
        "market_cap": 64053123.2420423,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 2424,
    "name": "SingularityNET",
    "symbol": "AGI",
    "slug": "singularitynet",
    "num_market_pairs": 12,
    "date_added": "2018-01-18T00:00:00.000Z",
    "tags": [
      "marketplace",
      "ai-big-data",
      "payments"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 854129642.5590512,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8eb24319393716668d768dcec29356ae9cffe285"
    },
    "cmc_rank": 157,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.07421332078801,
        "volume_24h": 1237331.64406779,
        "percent_change_1h": -1.50729935,
        "percent_change_24h": -10.89137576,
        "percent_change_7d": 52.51008547,
        "market_cap": 63387797.15778319,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5488,
    "name": "JUST",
    "symbol": "JST",
    "slug": "just",
    "num_market_pairs": 66,
    "date_added": "2020-05-07T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": 9900000000,
    "circulating_supply": 2260326706,
    "total_supply": 9900000000,
    "platform": {
      "id": 1958,
      "name": "Tron",
      "symbol": "TRX",
      "slug": "tron",
      "token_address": "TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9"
    },
    "cmc_rank": 158,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.02717621946929,
        "volume_24h": 102973717.68464358,
        "percent_change_1h": -2.00891414,
        "percent_change_24h": 6.24274812,
        "percent_change_7d": 19.4949802,
        "market_cap": 61427134.634553336,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 2606,
    "name": "Wanchain",
    "symbol": "WAN",
    "slug": "wanchain",
    "num_market_pairs": 22,
    "date_added": "2018-03-23T00:00:00.000Z",
    "tags": [
      "marketplace",
      "enterprise-solutions",
      "defi",
      "interoperability"
    ],
    "max_supply": 210000000,
    "circulating_supply": 169028581.17449087,
    "total_supply": 192128581.19449088,
    "platform": null,
    "cmc_rank": 159,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.3536567917372,
        "volume_24h": 5187694.68847471,
        "percent_change_1h": -1.93323269,
        "percent_change_24h": -5.88409555,
        "percent_change_7d": 8.15321655,
        "market_cap": 59778105.73006132,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3714,
    "name": "LTO Network",
    "symbol": "LTO",
    "slug": "lto-network",
    "num_market_pairs": 14,
    "date_added": "2019-02-05T00:00:00.000Z",
    "tags": [
      "pos",
      "platform",
      "enterprise-solutions"
    ],
    "max_supply": 403393276,
    "circulating_supply": 272689873.319305,
    "total_supply": 403391468.5246403,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "LTO-BDF"
    },
    "cmc_rank": 160,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.21254850085575,
        "volume_24h": 9662053.97359032,
        "percent_change_1h": -1.47467267,
        "percent_change_24h": 15.85892564,
        "percent_change_7d": 64.3404584,
        "market_cap": 57959823.77256266,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3773,
    "name": "Fetch.ai",
    "symbol": "FET",
    "slug": "fetch",
    "num_market_pairs": 39,
    "date_added": "2019-03-02T00:00:00.000Z",
    "tags": [
      "technology",
      "ai-big-data"
    ],
    "max_supply": 1152997575,
    "circulating_supply": 746113681,
    "total_supply": 1151441225.6042874,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85"
    },
    "cmc_rank": 161,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.07755674507567,
        "volume_24h": 11133499.55880095,
        "percent_change_1h": 7.22903716,
        "percent_change_24h": 2.32428175,
        "percent_change_7d": 44.64406367,
        "market_cap": 57866148.554786764,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 5829,
    "name": "TrustSwap",
    "symbol": "SWAP",
    "slug": "trustswap",
    "num_market_pairs": 25,
    "date_added": "2020-07-10T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 100000000,
    "circulating_supply": 70947539.62215744,
    "total_supply": 99997393.64241835,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xcc4304a31d09258b0029ea7fe63d032f52e44efe"
    },
    "cmc_rank": 162,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.8026619698487,
        "volume_24h": 1529876.34399012,
        "percent_change_1h": -0.6392685,
        "percent_change_24h": -13.15294612,
        "percent_change_7d": 37.70861384,
        "market_cap": 56946891.90903958,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 3783,
    "name": "Ankr",
    "symbol": "ANKR",
    "slug": "ankr",
    "num_market_pairs": 39,
    "date_added": "2019-03-06T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions",
      "filesharing",
      "substrate",
      "binance-chain"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 6496232711.125,
    "total_supply": 10000000000,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "ANKR-E97"
    },
    "cmc_rank": 163,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.00869502848844,
        "volume_24h": 7594968.01314148,
        "percent_change_1h": -2.63496487,
        "percent_change_24h": -5.80964327,
        "percent_change_7d": -2.3158793,
        "market_cap": 56484928.490767695,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2662,
    "name": "Haven Protocol",
    "symbol": "XHV",
    "slug": "haven-protocol",
    "num_market_pairs": 6,
    "date_added": "2018-04-23T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 14287021.715,
    "total_supply": 14287021.715,
    "platform": null,
    "cmc_rank": 164,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 3.91272704028356,
        "volume_24h": 538664.41462436,
        "percent_change_1h": 0.05255651,
        "percent_change_24h": 9.06760265,
        "percent_change_7d": 9.09780289,
        "market_cap": 55901216.1893989,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2496,
    "name": "Polymath",
    "symbol": "POLY",
    "slug": "polymath-network",
    "num_market_pairs": 32,
    "date_added": "2018-02-02T00:00:00.000Z",
    "tags": [
      "marketplace",
      "crowdfunding"
    ],
    "max_supply": null,
    "circulating_supply": 555670900.5449198,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec"
    },
    "cmc_rank": 165,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.10086102681141,
        "volume_24h": 2525757.80123362,
        "percent_change_1h": -6.37541592,
        "percent_change_24h": -9.69543519,
        "percent_change_7d": 0.67394152,
        "market_cap": 56045537.5981815,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1552,
    "name": "Melon",
    "symbol": "MLN",
    "slug": "melon",
    "num_market_pairs": 42,
    "date_added": "2017-02-21T00:00:00.000Z",
    "tags": [
      "asset-management",
      "defi"
    ],
    "max_supply": 1524032,
    "circulating_supply": 1477178.59404023,
    "total_supply": 1524031.89909865,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xec67005c4e498ec7f55e092bd1d35cbc47c91892"
    },
    "cmc_rank": 166,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 36.47377054086135,
        "volume_24h": 9436820.99488978,
        "percent_change_1h": -0.04331467,
        "percent_change_24h": 4.70705294,
        "percent_change_7d": 36.47029279,
        "market_cap": 53878273.086895525,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2137,
    "name": "Electroneum",
    "symbol": "ETN",
    "slug": "electroneum",
    "num_market_pairs": 29,
    "date_added": "2017-11-02T00:00:00.000Z",
    "tags": [
      "mineable",
      "medium-of-exchange",
      "wallet"
    ],
    "max_supply": 21000000000,
    "circulating_supply": 10224546625.78,
    "total_supply": 10224546625.78,
    "platform": null,
    "cmc_rank": 167,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.00527621736926,
        "volume_24h": 1237799.24145798,
        "percent_change_1h": -0.04177939,
        "percent_change_24h": 1.19020645,
        "percent_change_7d": 10.35368055,
        "market_cap": 53946930.49974916,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2273,
    "name": "Uquid Coin",
    "symbol": "UQC",
    "slug": "uquid-coin",
    "num_market_pairs": 40,
    "date_added": "2017-12-13T00:00:00.000Z",
    "tags": [
      "asset-management",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 9999999.99999999,
    "total_supply": 40000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8806926ab68eb5a7b909dcaf6fdbe5d93271d6e2"
    },
    "cmc_rank": 168,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 5.39844944114665,
        "volume_24h": 7089537.81204767,
        "percent_change_1h": 0.42960993,
        "percent_change_24h": 0.70081606,
        "percent_change_7d": 19.64250173,
        "market_cap": 53984494.41146645,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3218,
    "name": "Energi",
    "symbol": "NRG",
    "slug": "energi",
    "num_market_pairs": 15,
    "date_added": "2018-08-23T00:00:00.000Z",
    "tags": [
      "mineable",
      "marketplace",
      "masternodes",
      "research"
    ],
    "max_supply": null,
    "circulating_supply": 36438440.16100115,
    "total_supply": 36438440.16100115,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x1416946162b1c2c871a73b07e932d2fb6c932069"
    },
    "cmc_rank": 169,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 1.4620046728031,
        "volume_24h": 3484216.07972047,
        "percent_change_1h": -1.78320504,
        "percent_change_24h": 9.08221166,
        "percent_change_7d": 13.13133998,
        "market_cap": 53273169.78503983,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2467,
    "name": "OriginTrail",
    "symbol": "TRAC",
    "slug": "origintrail",
    "num_market_pairs": 9,
    "date_added": "2018-01-25T00:00:00.000Z",
    "tags": [
      "logistics",
      "enterprise-solutions",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 339849093.1167807,
    "total_supply": 500000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f"
    },
    "cmc_rank": 170,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.15004808876396,
        "volume_24h": 609354.86122395,
        "percent_change_1h": -4.76099107,
        "percent_change_24h": -7.11789808,
        "percent_change_7d": -5.09571802,
        "market_cap": 50993706.89033802,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3945,
    "name": "Harmony",
    "symbol": "ONE",
    "slug": "harmony",
    "num_market_pairs": 32,
    "date_added": "2019-06-01T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions",
      "scaling"
    ],
    "max_supply": 12600000000,
    "circulating_supply": 8234250415,
    "total_supply": 12600000000,
    "platform": null,
    "cmc_rank": 171,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.00615448572388,
        "volume_24h": 8385003.38811948,
        "percent_change_1h": -1.16451827,
        "percent_change_24h": 1.9638535,
        "percent_change_7d": 44.68766845,
        "market_cap": 50677576.62597046,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5370,
    "name": "Hive",
    "symbol": "HIVE",
    "slug": "hive-blockchain",
    "num_market_pairs": 29,
    "date_added": "2020-03-26T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 419159407.614,
    "total_supply": 419159407.614,
    "platform": null,
    "cmc_rank": 172,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.12013938337638,
        "volume_24h": 3563655.67719347,
        "percent_change_1h": -1.51882836,
        "percent_change_24h": -4.15059982,
        "percent_change_7d": 2.87611287,
        "market_cap": 50357552.76715468,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 1586,
    "name": "Ark",
    "symbol": "ARK",
    "slug": "ark",
    "num_market_pairs": 26,
    "date_added": "2017-03-22T00:00:00.000Z",
    "tags": [
      "dpos",
      "marketplace",
      "payments",
      "state-channels"
    ],
    "max_supply": null,
    "circulating_supply": 126325751.43841124,
    "total_supply": 154546648,
    "platform": null,
    "cmc_rank": 173,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.39783723371116,
        "volume_24h": 2918261.36361521,
        "percent_change_1h": -1.4065997,
        "percent_change_24h": -4.39901235,
        "percent_change_7d": 5.38283227,
        "market_cap": 50257087.49874111,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5601,
    "name": "xDai",
    "symbol": "STAKE",
    "slug": "xdai",
    "num_market_pairs": 17,
    "date_added": "2020-05-19T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": 8537500,
    "circulating_supply": 3717169.86253472,
    "total_supply": 8306385.10258195,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0Ae055097C6d159879521C384F1D2123D1f195e6"
    },
    "cmc_rank": 174,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 13.2357981650804,
        "volume_24h": 4348339.71181876,
        "percent_change_1h": 3.78465978,
        "percent_change_24h": -6.7526784,
        "percent_change_7d": 71.56110036,
        "market_cap": 49199710.04582921,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1789,
    "name": "Populous",
    "symbol": "PPT",
    "slug": "populous",
    "num_market_pairs": 21,
    "date_added": "2017-07-10T00:00:00.000Z",
    "tags": [
      "logistics"
    ],
    "max_supply": 53252246,
    "circulating_supply": 53252245.99438964,
    "total_supply": 53252246,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a"
    },
    "cmc_rank": 175,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.93478394630471,
        "volume_24h": 6719583.43970037,
        "percent_change_1h": -3.28820413,
        "percent_change_24h": 32.34730666,
        "percent_change_7d": 103.04450039,
        "market_cap": 49779344.66022473,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1343,
    "name": "Stratis",
    "symbol": "STRAX",
    "slug": "stratis",
    "num_market_pairs": 31,
    "date_added": "2016-08-12T00:00:00.000Z",
    "tags": [
      "hybrid-pow-pos",
      "x13",
      "platform",
      "enterprise-solutions"
    ],
    "max_supply": null,
    "circulating_supply": 100074480.17004512,
    "total_supply": 100074480.17004512,
    "platform": null,
    "cmc_rank": 176,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.49476067053329,
        "volume_24h": 3373055.17425533,
        "percent_change_1h": 0.68417769,
        "percent_change_24h": -3.26766456,
        "percent_change_7d": 2.55783129,
        "market_cap": 49512916.912201956,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 541,
    "name": "Syscoin",
    "symbol": "SYS",
    "slug": "syscoin",
    "num_market_pairs": 11,
    "date_added": "2014-08-20T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "scrypt",
      "platform",
      "enterprise-solutions",
      "scaling"
    ],
    "max_supply": 888000000,
    "circulating_supply": 604059877.4315093,
    "total_supply": 604059877.4315093,
    "platform": null,
    "cmc_rank": 177,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.07918499385081,
        "volume_24h": 3487598.34916241,
        "percent_change_1h": -1.70069969,
        "percent_change_24h": -0.03615427,
        "percent_change_7d": 27.16354482,
        "market_cap": 47832477.679935105,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2603,
    "name": "Pundi X",
    "symbol": "NPXS",
    "slug": "pundi-x",
    "num_market_pairs": 60,
    "date_added": "2018-03-22T00:00:00.000Z",
    "tags": [
      "medium-of-exchange"
    ],
    "max_supply": 258526640301,
    "circulating_supply": 234624488396.4478,
    "total_supply": 258526640300.57,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3"
    },
    "cmc_rank": 178,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.00020356222188,
        "volume_24h": 6308608.08507936,
        "percent_change_1h": 0.09102151,
        "percent_change_24h": 5.15316405,
        "percent_change_7d": 13.47949221,
        "market_cap": 47760682.165439196,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 4197,
    "name": "ShareToken",
    "symbol": "SHR",
    "slug": "sharetoken",
    "num_market_pairs": 16,
    "date_added": "2019-11-26T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 2128497958.96,
    "total_supply": 6434460139.8,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "SHR-DB6"
    },
    "cmc_rank": 179,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.02211308167229,
        "volume_24h": 2854212.34946851,
        "percent_change_1h": -0.56016331,
        "percent_change_24h": -6.04372271,
        "percent_change_7d": 6.04104935,
        "market_cap": 47067649.20578505,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 118,
    "name": "ReddCoin",
    "symbol": "RDD",
    "slug": "redd",
    "num_market_pairs": 11,
    "date_added": "2014-02-10T00:00:00.000Z",
    "tags": [
      "hybrid-pow-pos",
      "scrypt",
      "media",
      "content-creation"
    ],
    "max_supply": null,
    "circulating_supply": 28808713173.78866,
    "total_supply": 28808713173.78866,
    "platform": null,
    "cmc_rank": 180,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.00163182079073,
        "volume_24h": 710570.57892679,
        "percent_change_1h": 3.40199286,
        "percent_change_24h": -4.78131176,
        "percent_change_7d": 35.51201078,
        "market_cap": 47010657.111165576,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2132,
    "name": "Power Ledger",
    "symbol": "POWR",
    "slug": "power-ledger",
    "num_market_pairs": 47,
    "date_added": "2017-11-01T00:00:00.000Z",
    "tags": [
      "energy",
      "sharing-economy"
    ],
    "max_supply": null,
    "circulating_supply": 423992467.14937,
    "total_supply": 999506122.99937,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x595832f8fc6bf59c85c527fec3740a1b7a361269"
    },
    "cmc_rank": 181,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.11011631639982,
        "volume_24h": 3328692.11458515,
        "percent_change_1h": -3.42252592,
        "percent_change_24h": -3.80012962,
        "percent_change_7d": 10.88196385,
        "market_cap": 46688488.66376032,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 1298,
    "name": "LBRY Credits",
    "symbol": "LBC",
    "slug": "library-credit",
    "num_market_pairs": 8,
    "date_added": "2016-07-07T00:00:00.000Z",
    "tags": [
      "mineable",
      "marketplace",
      "content-creation"
    ],
    "max_supply": 1083202000,
    "circulating_supply": 519288046.7709169,
    "total_supply": 704570656,
    "platform": null,
    "cmc_rank": 182,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.09030732795755,
        "volume_24h": 5876409.37143199,
        "percent_change_1h": 2.51716412,
        "percent_change_24h": -0.87030109,
        "percent_change_7d": -32.82761421,
        "market_cap": 46895515.944176756,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 2588,
    "name": "Loom Network",
    "symbol": "LOOM",
    "slug": "loom-network",
    "num_market_pairs": 56,
    "date_added": "2018-03-14T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions"
    ],
    "max_supply": null,
    "circulating_supply": 970520753.7242421,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0"
    },
    "cmc_rank": 183,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.04848621640525,
        "volume_24h": 62926356.99426606,
        "percent_change_1h": -5.68552456,
        "percent_change_24h": 1.30636757,
        "percent_change_7d": 64.39503863,
        "market_cap": 47056879.29085994,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1768,
    "name": "AdEx Network",
    "symbol": "ADX",
    "slug": "adx-net",
    "num_market_pairs": 17,
    "date_added": "2017-07-01T00:00:00.000Z",
    "tags": [
      "marketing",
      "smart-contracts",
      "substrate",
      "polkadot"
    ],
    "max_supply": 150000000,
    "circulating_supply": 113064143.48413755,
    "total_supply": 120206619.82413754,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xade00c28244d5ce17d72e40330b1c318cd12b7c3"
    },
    "cmc_rank": 184,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.40082919452291,
        "volume_24h": 8955468.81280328,
        "percent_change_1h": -0.05672667,
        "percent_change_24h": 1.08339903,
        "percent_change_7d": 14.13887724,
        "market_cap": 45319409.562169574,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 2916,
    "name": "Nimiq",
    "symbol": "NIM",
    "slug": "nimiq",
    "num_market_pairs": 12,
    "date_added": "2018-07-10T00:00:00.000Z",
    "tags": [
      "mineable"
    ],
    "max_supply": 21000000000,
    "circulating_supply": 7123970760.88579,
    "total_supply": 7867720760.88579,
    "platform": null,
    "cmc_rank": 185,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.00626400881947,
        "volume_24h": 3322166.77719687,
        "percent_change_1h": -1.40509085,
        "percent_change_24h": 0.03786964,
        "percent_change_7d": 38.83338979,
        "market_cap": 44624615.675835,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 1776,
    "name": "MCO",
    "symbol": "MCO",
    "slug": "crypto-com",
    "num_market_pairs": 40,
    "date_added": "2017-07-03T00:00:00.000Z",
    "tags": [
      "medium-of-exchange"
    ],
    "max_supply": null,
    "circulating_supply": 15793831.09496254,
    "total_supply": 31587682.3632061,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d"
    },
    "cmc_rank": 186,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 2.80773507690692,
        "volume_24h": 33986890.69340784,
        "percent_change_1h": 1.64128513,
        "percent_change_24h": 13.50382685,
        "percent_change_7d": 11.52252856,
        "market_cap": 44344893.56406955,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3356,
    "name": "The Midas Touch Gold",
    "symbol": "TMTG",
    "slug": "the-midas-touch-gold",
    "num_market_pairs": 6,
    "date_added": "2018-09-27T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 8241111255.708743,
    "total_supply": 9161139666.073038,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x10086399dd8c1e3de736724af52587a2044c9fa2"
    },
    "cmc_rank": 187,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.00521246453117,
        "volume_24h": 6113702.77612376,
        "percent_change_1h": 3.90904657,
        "percent_change_24h": 8.56231284,
        "percent_change_7d": -15.75161569,
        "market_cap": 42956500.11780769,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 2776,
    "name": "Travala.com",
    "symbol": "AVA",
    "slug": "travala",
    "num_market_pairs": 32,
    "date_added": "2018-05-28T00:00:00.000Z",
    "tags": [
      "hospitality"
    ],
    "max_supply": null,
    "circulating_supply": 46409096.99783155,
    "total_supply": 61181769,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "AVA-645"
    },
    "cmc_rank": 188,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.91941382188579,
        "volume_24h": 6410396.02682043,
        "percent_change_1h": -3.25079884,
        "percent_change_24h": -1.8344915,
        "percent_change_7d": 24.07090488,
        "market_cap": 42669165.241044655,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 1414,
    "name": "Firo",
    "symbol": "XZC",
    "slug": "firo",
    "num_market_pairs": 63,
    "date_added": "2016-10-06T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "medium-of-exchange",
      "privacy"
    ],
    "max_supply": 21400000,
    "circulating_supply": 11402380.60300991,
    "total_supply": 21400000,
    "platform": null,
    "cmc_rank": 189,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 3.63143141730703,
        "volume_24h": 7285068.61332417,
        "percent_change_1h": -3.77756833,
        "percent_change_24h": 11.86378805,
        "percent_change_7d": 8.72333791,
        "market_cap": 41406963.15386246,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 5221,
    "name": "Handshake ",
    "symbol": "HNS",
    "slug": "handshake",
    "num_market_pairs": 16,
    "date_added": "2020-02-22T00:00:00.000Z",
    "tags": [
      "distributed-computing",
      "ipfs"
    ],
    "max_supply": 2040000000,
    "circulating_supply": 347071727.252931,
    "total_supply": 347071727.252931,
    "platform": null,
    "cmc_rank": 190,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.11876602275581,
        "volume_24h": 2622524.2111091,
        "percent_change_1h": 1.74684159,
        "percent_change_24h": 2.69262268,
        "percent_change_7d": 23.08527487,
        "market_cap": 41220328.65681988,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 6138,
    "name": "DIA",
    "symbol": "DIA",
    "slug": "dia",
    "num_market_pairs": 53,
    "date_added": "2020-08-04T00:00:00.000Z",
    "tags": [
      "defi",
      "oracles"
    ],
    "max_supply": 200000000,
    "circulating_supply": 28271916,
    "total_supply": 200000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419"
    },
    "cmc_rank": 191,
    "last_updated": "2021-01-08T12:58:10.000Z",
    "quote": {
      "USD": {
        "price": 1.43225644964757,
        "volume_24h": 17409311.88279138,
        "percent_change_1h": -0.95391006,
        "percent_change_24h": -5.69344772,
        "percent_change_7d": 16.17459481,
        "market_cap": 40492634.03489433,
        "last_updated": "2021-01-08T12:58:10.000Z"
      }
    }
  },
  {
    "id": 2777,
    "name": "IoTeX",
    "symbol": "IOTX",
    "slug": "iotex",
    "num_market_pairs": 24,
    "date_added": "2018-05-25T00:00:00.000Z",
    "tags": [
      "platform",
      "iot"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 5734304441,
    "total_supply": 9644304442.32,
    "platform": null,
    "cmc_rank": 192,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.00711871066416,
        "volume_24h": 8224314.84802984,
        "percent_change_1h": -1.16772333,
        "percent_change_24h": -3.49686702,
        "percent_change_7d": 7.35215571,
        "market_cap": 40820854.17568675,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3874,
    "name": "IRISnet",
    "symbol": "IRIS",
    "slug": "irisnet",
    "num_market_pairs": 31,
    "date_added": "2019-04-18T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 940547245.7237016,
    "total_supply": 2002422612.099731,
    "platform": null,
    "cmc_rank": 193,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.04171445458655,
        "volume_24h": 3682454.78266362,
        "percent_change_1h": -2.13127407,
        "percent_change_24h": -5.65175146,
        "percent_change_7d": 5.90155296,
        "market_cap": 39234415.368246034,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1996,
    "name": "SALT",
    "symbol": "SALT",
    "slug": "salt",
    "num_market_pairs": 8,
    "date_added": "2017-09-29T00:00:00.000Z",
    "tags": [
      "platform",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 78652938,
    "total_supply": 120000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x4156D3342D5c385a87D264F90653733592000581"
    },
    "cmc_rank": 194,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 0.49605394124552,
        "volume_24h": 85388.46072023,
        "percent_change_1h": -1.64237549,
        "percent_change_24h": -5.90924721,
        "percent_change_7d": 57.86786657,
        "market_cap": 39016099.88543953,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 2989,
    "name": "STASIS EURO",
    "symbol": "EURS",
    "slug": "stasis-euro",
    "num_market_pairs": 36,
    "date_added": "2018-07-30T00:00:00.000Z",
    "tags": [
      "marketplace",
      "stablecoin",
      "stablecoin-asset-backed",
      "wallet"
    ],
    "max_supply": null,
    "circulating_supply": 31979207,
    "total_supply": 31979207,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xdb25f211ab05b1c97d595516f45794528a807ad8"
    },
    "cmc_rank": 195,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1.21241364773492,
        "volume_24h": 2243903.92070384,
        "percent_change_1h": 0.38409763,
        "percent_change_24h": 0.29532333,
        "percent_change_7d": -0.13677789,
        "market_cap": 38772027.01054009,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 2930,
    "name": "Everipedia",
    "symbol": "IQ",
    "slug": "everipedia",
    "num_market_pairs": 17,
    "date_added": "2018-07-13T00:00:00.000Z",
    "tags": [
      "media",
      "loyalty",
      "content-creation"
    ],
    "max_supply": null,
    "circulating_supply": 9950194376.508,
    "total_supply": 10016007531.87,
    "platform": {
      "id": 1765,
      "name": "EOS",
      "symbol": "EOS",
      "slug": "eos",
      "token_address": "everipediaiq"
    },
    "cmc_rank": 196,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.00385123380419,
        "volume_24h": 6200761.43704411,
        "percent_change_1h": -1.51582964,
        "percent_change_24h": -5.24386679,
        "percent_change_7d": 9.18883155,
        "market_cap": 38320524.94106885,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 2062,
    "name": "Aion",
    "symbol": "AION",
    "slug": "aion",
    "num_market_pairs": 23,
    "date_added": "2017-10-18T00:00:00.000Z",
    "tags": [
      "mineable",
      "marketplace",
      "ai-big-data",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 487496874,
    "total_supply": 487496874,
    "platform": null,
    "cmc_rank": 197,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.07786369489224,
        "volume_24h": 5395691.24198356,
        "percent_change_1h": -4.87884553,
        "percent_change_24h": -2.14961915,
        "percent_change_7d": 22.01897416,
        "market_cap": 37958307.85805677,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 2840,
    "name": "QuarkChain",
    "symbol": "QKC",
    "slug": "quarkchain",
    "num_market_pairs": 29,
    "date_added": "2018-06-04T00:00:00.000Z",
    "tags": [
      "marketplace",
      "payments"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 6399906497,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664"
    },
    "cmc_rank": 198,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.00587060402207,
        "volume_24h": 5085980.99841689,
        "percent_change_1h": -0.01686911,
        "percent_change_24h": -0.47738065,
        "percent_change_7d": 9.371499,
        "market_cap": 37571316.822160125,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 4944,
    "name": "Tellor",
    "symbol": "TRB",
    "slug": "tellor",
    "num_market_pairs": 50,
    "date_added": "2019-11-19T00:00:00.000Z",
    "tags": [
      "mineable",
      "defi",
      "oracles"
    ],
    "max_supply": 1707842,
    "circulating_supply": 1637190.33214084,
    "total_supply": 1723297.06047381,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5"
    },
    "cmc_rank": 199,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 22.83981480530763,
        "volume_24h": 48208104.80308931,
        "percent_change_1h": 0.1170948,
        "percent_change_24h": -1.06037789,
        "percent_change_7d": 26.62740819,
        "market_cap": 37393123.98713687,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 1706,
    "name": "Aidos Kuneen",
    "symbol": "ADK",
    "slug": "aidos-kuneen",
    "num_market_pairs": 22,
    "date_added": "2017-06-06T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 25000000,
    "total_supply": 25000000,
    "platform": null,
    "cmc_rank": 200,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1.48609311481911,
        "volume_24h": 1579030.71262581,
        "percent_change_1h": 2.51178899,
        "percent_change_24h": 16.20840533,
        "percent_change_7d": 365.57704538,
        "market_cap": 37152327.87047775,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5015,
    "name": "HEX",
    "symbol": "HEX",
    "slug": "hex",
    "num_market_pairs": 24,
    "date_added": "2019-12-17T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 173411074413.06497,
    "total_supply": 175453179544.9985,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39"
    },
    "cmc_rank": 201,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.01363919186713,
        "volume_24h": 14930457.15546888,
        "percent_change_1h": -0.48809544,
        "percent_change_24h": 12.35397044,
        "percent_change_7d": 5.94906531,
        "market_cap": 2365186915.804951,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5186,
    "name": "ExtStock Token",
    "symbol": "XT",
    "slug": "extstock-token",
    "num_market_pairs": 1,
    "date_added": "2020-01-29T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 601588624.9999998,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xef65887a05415bf6316204b5ffb350d4d1a19bba"
    },
    "cmc_rank": 202,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 3.16973672447726,
        "volume_24h": 0,
        "percent_change_1h": -0.43487506,
        "percent_change_24h": 3.70153099,
        "percent_change_7d": 56.00613284,
        "market_cap": 1906877557.6902778,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 5482,
    "name": "Counos X",
    "symbol": "CCXX",
    "slug": "counos-x",
    "num_market_pairs": 6,
    "date_added": "2020-04-20T00:00:00.000Z",
    "tags": [
      "mineable"
    ],
    "max_supply": 21000000,
    "circulating_supply": 17710758.1349223,
    "total_supply": 18402729.795,
    "platform": null,
    "cmc_rank": 203,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 88.97864387712454,
        "volume_24h": 1554294.61636189,
        "percent_change_1h": 0.01394742,
        "percent_change_24h": -0.17509567,
        "percent_change_7d": 0.80386679,
        "market_cap": 1575879240.8811376,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3085,
    "name": "INO COIN",
    "symbol": "INO",
    "slug": "ino-coin",
    "num_market_pairs": 5,
    "date_added": "2018-08-06T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "crowdfunding"
    ],
    "max_supply": null,
    "circulating_supply": 180003180,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xc9859fccc876e6b4b3c749c5d29ea04f48acb74f"
    },
    "cmc_rank": 204,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 7.33930792157486,
        "volume_24h": 595511.6324968,
        "percent_change_1h": 0.28593704,
        "percent_change_24h": 15.67975013,
        "percent_change_7d": 44.64999498,
        "market_cap": 1321098764.8826654,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 5804,
    "name": "DeFiChain",
    "symbol": "DFI",
    "slug": "defichain",
    "num_market_pairs": 19,
    "date_added": "2020-07-03T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 1200000000,
    "circulating_supply": 389208465.1044003,
    "total_supply": 677328465.1044003,
    "platform": null,
    "cmc_rank": 205,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 2.13671148437988,
        "volume_24h": 11909084.91764386,
        "percent_change_1h": 2.7422691,
        "percent_change_24h": 21.04122579,
        "percent_change_7d": 59.0106113,
        "market_cap": 831626197.2064377,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3144,
    "name": "ThoreCoin",
    "symbol": "THR",
    "slug": "thorecoin",
    "num_market_pairs": 1,
    "date_added": "2018-08-10T00:00:00.000Z",
    "tags": [
      "store-of-value",
      "centralized-exchange",
      "ethereum",
      "waves"
    ],
    "max_supply": null,
    "circulating_supply": 86686.0215,
    "total_supply": 100000,
    "platform": null,
    "cmc_rank": 206,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 8057.687249520702,
        "volume_24h": 44211.16886954,
        "percent_change_1h": 1.45654346,
        "percent_change_24h": 9.60787289,
        "percent_change_7d": 40.55422599,
        "market_cap": 698488850.1522274,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3367,
    "name": "CryptalDash",
    "symbol": "CRD",
    "slug": "cryptaldash",
    "num_market_pairs": 4,
    "date_added": "2018-10-02T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 1000000000,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xcaaa93712bdac37f736c323c93d4d5fdefcc31cc"
    },
    "cmc_rank": 207,
    "last_updated": "2021-01-08T09:02:04.000Z",
    "quote": {
      "USD": {
        "price": 0.69169408125754,
        "volume_24h": 0,
        "percent_change_1h": 0.29528901,
        "percent_change_24h": 4.56085837,
        "percent_change_7d": -27.97587578,
        "market_cap": 691694081.25754,
        "last_updated": "2021-01-08T09:02:04.000Z"
      }
    }
  },
  {
    "id": 3116,
    "name": "Insight Chain",
    "symbol": "INB",
    "slug": "insight-chain",
    "num_market_pairs": 2,
    "date_added": "2018-08-08T00:00:00.000Z",
    "tags": [
      "asset-management",
      "distributed-computing"
    ],
    "max_supply": null,
    "circulating_supply": 349902689.08200073,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x17aa18a4b64a55abed7fa543f2ba4e91f2dce482"
    },
    "cmc_rank": 208,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 1.85707275100275,
        "volume_24h": 8424160.12337343,
        "percent_change_1h": 1.57627346,
        "percent_change_24h": 7.1032281,
        "percent_change_7d": 32.13260332,
        "market_cap": 649794749.396771,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 5677,
    "name": "IZE",
    "symbol": "IZE",
    "slug": "ize",
    "num_market_pairs": 1,
    "date_added": "2020-06-08T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 4160881000,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6944d3e38973C4831dA24E954fbD790c7E688bDd"
    },
    "cmc_rank": 209,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.11613835733029,
        "volume_24h": 22424.70998848,
        "percent_change_1h": -4.86288569,
        "percent_change_24h": -4.81958119,
        "percent_change_7d": -30.4189477,
        "market_cap": 483237884.3868144,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3873,
    "name": "botXcoin",
    "symbol": "BOTX",
    "slug": "botxcoin",
    "num_market_pairs": 6,
    "date_added": "2019-04-18T00:00:00.000Z",
    "tags": [
      "marketplace"
    ],
    "max_supply": null,
    "circulating_supply": 1632102305,
    "total_supply": 5000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xEF19F4E48830093Ce5bC8b3Ff7f903A0AE3E9Fa1"
    },
    "cmc_rank": 210,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.27940668642074,
        "volume_24h": 167040.94106036,
        "percent_change_1h": -1.4166746,
        "percent_change_24h": 5.16795909,
        "percent_change_7d": 49.31659708,
        "market_cap": 456020296.939702,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 5198,
    "name": "Creditcoin",
    "symbol": "CTC",
    "slug": "creditcoin",
    "num_market_pairs": 4,
    "date_added": "2020-01-31T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 2000000000,
    "circulating_supply": 539628940.236621,
    "total_supply": 667469781.49,
    "platform": null,
    "cmc_rank": 211,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.83282975646393,
        "volume_24h": 7529368.89263566,
        "percent_change_1h": -3.00507339,
        "percent_change_24h": -0.98520387,
        "percent_change_7d": 35.34582315,
        "market_cap": 449419038.87815374,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 7157,
    "name": "Basid Coin",
    "symbol": "BASID",
    "slug": "basid-coin",
    "num_market_pairs": 7,
    "date_added": "2020-09-24T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 567752726.000001,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe33f363351186e185470f35F6DeB94ABa44347D8"
    },
    "cmc_rank": 212,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.61599710425225,
        "volume_24h": 1706643.47146932,
        "percent_change_1h": -4.18050935,
        "percent_change_24h": -3.49101311,
        "percent_change_7d": -8.09368851,
        "market_cap": 349734035.1473217,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 7033,
    "name": "Empty Set Dollar",
    "symbol": "ESD",
    "slug": "empty-set-dollar",
    "num_market_pairs": 21,
    "date_added": "2020-09-14T00:00:00.000Z",
    "tags": [
      "rebase"
    ],
    "max_supply": null,
    "circulating_supply": 509200752.07510614,
    "total_supply": 509200752.07510614,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x36f3fd68e7325a35eb768f1aedaae9ea0689d723"
    },
    "cmc_rank": 213,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.63181216302798,
        "volume_24h": 6533453.79025678,
        "percent_change_1h": -2.8835142,
        "percent_change_24h": -5.18110866,
        "percent_change_7d": -24.88582728,
        "market_cap": 321719228.584047,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5844,
    "name": "Cipher Core Token",
    "symbol": "CIPHC",
    "slug": "cipher-core-token",
    "num_market_pairs": 4,
    "date_added": "2020-07-14T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 2000000000,
    "circulating_supply": 7376804.5232157,
    "total_supply": 200000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x83eB94cB563146a42Fe0a8b3D051F2387A7FB81f"
    },
    "cmc_rank": 214,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 43.36587098875257,
        "volume_24h": 54931.83934113,
        "percent_change_1h": 1.45047385,
        "percent_change_24h": 9.16568145,
        "percent_change_7d": -26.00907309,
        "market_cap": 319901553.2630184,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 911,
    "name": "Advanced Internet Blocks",
    "symbol": "AIB",
    "slug": "advanced-internet-blocks",
    "num_market_pairs": 3,
    "date_added": "2015-04-30T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "scrypt"
    ],
    "max_supply": null,
    "circulating_supply": 24213254182.6,
    "total_supply": 31413254179.6,
    "platform": null,
    "cmc_rank": 215,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 0.01226348939917,
        "volume_24h": 3891.1996471,
        "percent_change_1h": 2.25082958,
        "percent_change_24h": 24.87395086,
        "percent_change_7d": 34.42566521,
        "market_cap": 296938985.98772377,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 2027,
    "name": "Cryptonex",
    "symbol": "CNX",
    "slug": "cryptonex",
    "num_market_pairs": 10,
    "date_added": "2017-10-07T00:00:00.000Z",
    "tags": [
      "mineable",
      "medium-of-exchange",
      "centralized-exchange",
      "smart-contracts"
    ],
    "max_supply": 210000000,
    "circulating_supply": 55686328.96192511,
    "total_supply": 107135053.92192511,
    "platform": null,
    "cmc_rank": 216,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 5.2201450923137,
        "volume_24h": 1579201.22577893,
        "percent_change_1h": 1.48401336,
        "percent_change_24h": 9.2805373,
        "percent_change_7d": 41.70298999,
        "market_cap": 290690716.8395596,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 7686,
    "name": "Bitcoin Cash ABC",
    "symbol": "BCHA",
    "slug": "bitcoin-cash-abc-2",
    "num_market_pairs": 19,
    "date_added": "2020-11-16T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 18572921,
    "total_supply": 18572921,
    "platform": null,
    "cmc_rank": 217,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 15.59680005387298,
        "volume_24h": 3526168.13681008,
        "percent_change_1h": -0.42575243,
        "percent_change_24h": -9.84289755,
        "percent_change_7d": -10.72044392,
        "market_cap": 289678135.2533786,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5614,
    "name": "Zelwin",
    "symbol": "ZLW",
    "slug": "zelwin",
    "num_market_pairs": 14,
    "date_added": "2020-05-21T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 300000000,
    "circulating_supply": 63433009.16910002,
    "total_supply": 300000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x5319e86F0e41a06E49eb37046b8c11D78bcAd68C"
    },
    "cmc_rank": 218,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 4.37029994229538,
        "volume_24h": 252779.53803526,
        "percent_change_1h": -3.46768729,
        "percent_change_24h": -6.58961943,
        "percent_change_7d": -5.64919878,
        "market_cap": 277221276.3113401,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3358,
    "name": "Helper Search Token",
    "symbol": "HSN",
    "slug": "helper-search-token",
    "num_market_pairs": 3,
    "date_added": "2018-09-29T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 8479947437,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x567300e14f8d67e1f6720a95291dce2511a86723"
    },
    "cmc_rank": 219,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.02809330295937,
        "volume_24h": 0,
        "percent_change_1h": 1.38282384,
        "percent_change_24h": 9.23752858,
        "percent_change_7d": 43.71161847,
        "market_cap": 238229732.42717415,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 6941,
    "name": "Huobi BTC",
    "symbol": "HBTC",
    "slug": "huobi-btc",
    "num_market_pairs": 3,
    "date_added": "2020-09-08T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 6910,
    "circulating_supply": 4810.1666,
    "total_supply": 4810.1666,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0316EB71485b0Ab14103307bf65a021042c6d380"
    },
    "cmc_rank": 220,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 40951.75334474484,
        "volume_24h": 3489642.0634,
        "percent_change_1h": 0.59381799,
        "percent_change_24h": 11.50907925,
        "percent_change_7d": 42.13027068,
        "market_cap": 196984756.1503299,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3742,
    "name": "Chimpion",
    "symbol": "BNANA",
    "slug": "chimpion",
    "num_market_pairs": 6,
    "date_added": "2019-02-20T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 31727387.34575,
    "total_supply": 100000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x07ef9e82721ac16809d24dafbe1792ce01654db4"
    },
    "cmc_rank": 221,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 6.01498266131421,
        "volume_24h": 855647.14931598,
        "percent_change_1h": 11.17661368,
        "percent_change_24h": -6.36006641,
        "percent_change_7d": -12.05393784,
        "market_cap": 190839684.77348614,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 5524,
    "name": "TNC Coin",
    "symbol": "TNC",
    "slug": "tnc-coin",
    "num_market_pairs": 29,
    "date_added": "2020-05-03T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 1000000000000,
    "circulating_supply": 2310424689,
    "total_supply": 1000000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xd59ffBE33F93aA0ec95EA563c676333100d1dfE0"
    },
    "cmc_rank": 222,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.08273419596717,
        "volume_24h": 5213057.911037,
        "percent_change_1h": 0.51770869,
        "percent_change_24h": 5.18474897,
        "percent_change_7d": 11.48080047,
        "market_cap": 191151128.98711377,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5279,
    "name": "Sologenic",
    "symbol": "SOLO",
    "slug": "sologenic",
    "num_market_pairs": 16,
    "date_added": "2020-03-06T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 400000000,
    "circulating_supply": 200001808,
    "total_supply": 399996815.0459,
    "platform": null,
    "cmc_rank": 223,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.92294532958221,
        "volume_24h": 7692958.52366766,
        "percent_change_1h": -7.43903414,
        "percent_change_24h": 12.48274077,
        "percent_change_7d": 29.33231329,
        "market_cap": 184590734.60159788,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 5796,
    "name": "Doctors Coin",
    "symbol": "DRS",
    "slug": "doctors-coin",
    "num_market_pairs": 8,
    "date_added": "2020-07-01T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 10000000000,
    "circulating_supply": 229741603,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xbf13FF395D686Ed7C705A5411CC8E4E21Ff2Ceb2"
    },
    "cmc_rank": 224,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.74703332768071,
        "volume_24h": 94859.12117941,
        "percent_change_1h": 19.55784868,
        "percent_change_24h": -4.96959772,
        "percent_change_7d": -2.77073661,
        "market_cap": 171624634.1957906,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 5329,
    "name": "Largo Coin",
    "symbol": "LRG",
    "slug": "largo-coin",
    "num_market_pairs": 4,
    "date_added": "2020-03-17T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 200000000,
    "circulating_supply": 17627471.6413966,
    "total_supply": 48741079.0413966,
    "platform": null,
    "cmc_rank": 225,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 9.66297870560673,
        "volume_24h": 476183.07698769,
        "percent_change_1h": -3.47003751,
        "percent_change_24h": -3.8091821,
        "percent_change_7d": -4.54491412,
        "market_cap": 170333883.10450184,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3968,
    "name": "Elitium",
    "symbol": "EUM",
    "slug": "elitium",
    "num_market_pairs": 4,
    "date_added": "2019-05-24T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 30086253.30567463,
    "total_supply": 332200000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6aB4A7d75B0A42B6Bc83E852daB9E121F9C610Aa"
    },
    "cmc_rank": 226,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 5.5173192640588,
        "volume_24h": 485718.05978334,
        "percent_change_1h": 2.65115891,
        "percent_change_24h": 23.99642746,
        "percent_change_7d": 54.9410921,
        "market_cap": 165995464.94675142,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 5560,
    "name": "Idea Chain Coin",
    "symbol": "ICH",
    "slug": "idea-chain-coin",
    "num_market_pairs": 12,
    "date_added": "2020-05-11T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 55000000,
    "circulating_supply": 51252304,
    "total_supply": 55000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xf8483E2d6560585C02D46bF7B3186Bf154a96166"
    },
    "cmc_rank": 227,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 2.81702098575347,
        "volume_24h": 168255.61263832,
        "percent_change_1h": -10.06307195,
        "percent_change_24h": -41.24990315,
        "percent_change_7d": 25.5696192,
        "market_cap": 144378815.9362165,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 2927,
    "name": "sUSD",
    "symbol": "SUSD",
    "slug": "susd",
    "num_market_pairs": 69,
    "date_added": "2018-07-13T00:00:00.000Z",
    "tags": [
      "store-of-value",
      "defi",
      "stablecoin-algorithmically-stabilized"
    ],
    "max_supply": 142399574,
    "circulating_supply": 142399574,
    "total_supply": 142399574,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"
    },
    "cmc_rank": 228,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.99661359449449,
        "volume_24h": 18433636.33328995,
        "percent_change_1h": -0.72062037,
        "percent_change_24h": -0.22737386,
        "percent_change_7d": -1.80016746,
        "market_cap": 141917351.29862413,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 4361,
    "name": "Bitpanda Ecosystem Token",
    "symbol": "BEST",
    "slug": "bitpanda-ecosystem-token",
    "num_market_pairs": 3,
    "date_added": "2019-10-18T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 405844684,
    "total_supply": 919348514,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x1b073382e63411e3bcffe90ac1b9a43fefa1ec6f"
    },
    "cmc_rank": 229,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.34921231729723,
        "volume_24h": 495406.90175902,
        "percent_change_1h": 1.28931469,
        "percent_change_24h": -12.21088213,
        "percent_change_7d": 58.26233193,
        "market_cap": 141725962.56240204,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 5785,
    "name": "STPAY",
    "symbol": "STP",
    "slug": "stpay",
    "num_market_pairs": 3,
    "date_added": "2020-06-29T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 21000000,
    "circulating_supply": 4330437,
    "total_supply": 21000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x5c250ff9b993c6991cc4a3cc543716e53b478018"
    },
    "cmc_rank": 230,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 32.55954601478125,
        "volume_24h": 5790.41104733,
        "percent_change_1h": 0.40939745,
        "percent_change_24h": 12.94702803,
        "percent_change_7d": 66.60630549,
        "market_cap": 140997062.76561126,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 4005,
    "name": "Tratin",
    "symbol": "TRAT",
    "slug": "tratin",
    "num_market_pairs": 2,
    "date_added": "2019-06-11T00:00:00.000Z",
    "tags": [
      "platform",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 112002966735.03694,
    "total_supply": 144287391827.43582,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x3eb55d5b22ee0f9b03d59b4994c5ae7fe811be92"
    },
    "cmc_rank": 231,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 0.001240206034,
        "volume_24h": 320.4437891,
        "percent_change_1h": 1.61447451,
        "percent_change_24h": 203.11722479,
        "percent_change_7d": 441.10472597,
        "market_cap": 138906755.1706941,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 4268,
    "name": "NewYork Exchange",
    "symbol": "NYE",
    "slug": "newyork-exchange",
    "num_market_pairs": 4,
    "date_added": "2019-08-20T00:00:00.000Z",
    "tags": [
      "services"
    ],
    "max_supply": 600000000,
    "circulating_supply": 7090059.86467391,
    "total_supply": 375379190.78467387,
    "platform": null,
    "cmc_rank": 232,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 18.87032634039041,
        "volume_24h": 364945.62087287,
        "percent_change_1h": 0.28565415,
        "percent_change_24h": -9.58469009,
        "percent_change_7d": 4.51759608,
        "market_cap": 133791743.41930094,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 7096,
    "name": "Bridge Oracle",
    "symbol": "BRG",
    "slug": "bridge-oracle",
    "num_market_pairs": 6,
    "date_added": "2020-09-18T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 8002167205,
    "total_supply": 10000000000,
    "platform": null,
    "cmc_rank": 233,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 0.01571125524718,
        "volume_24h": 1997624.79774767,
        "percent_change_1h": -10.29095096,
        "percent_change_24h": -20.26830812,
        "percent_change_7d": -19.88679361,
        "market_cap": 125724091.48836796,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 5031,
    "name": "MimbleWimbleCoin",
    "symbol": "MWC",
    "slug": "mimblewimblecoin",
    "num_market_pairs": 10,
    "date_added": "2020-02-24T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 20000000,
    "circulating_supply": 10689006.6569404,
    "total_supply": 10689006.3569404,
    "platform": null,
    "cmc_rank": 234,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 11.70620561845911,
        "volume_24h": 1088311.7651424,
        "percent_change_1h": -3.71916939,
        "percent_change_24h": -22.76988511,
        "percent_change_7d": 4.70210727,
        "market_cap": 125127709.78322256,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 6726,
    "name": "YUSRA",
    "symbol": "YUSRA",
    "slug": "yusra",
    "num_market_pairs": 5,
    "date_added": "2020-08-27T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 40000000,
    "circulating_supply": 39577603.3049,
    "total_supply": 40000000,
    "platform": null,
    "cmc_rank": 235,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 3.02530583938537,
        "volume_24h": 150753.24757359,
        "percent_change_1h": -1.33513206,
        "percent_change_24h": -2.64935773,
        "percent_change_7d": 5.63758697,
        "market_cap": 119734354.38719168,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 4967,
    "name": "Joule",
    "symbol": "JUL",
    "slug": "joule",
    "num_market_pairs": 1,
    "date_added": "2019-11-26T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 1010499999,
    "total_supply": 200000000000,
    "platform": null,
    "cmc_rank": 236,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.11831565564329,
        "volume_24h": 0,
        "percent_change_1h": 1.61447451,
        "percent_change_24h": 9.91086482,
        "percent_change_7d": 37.14281784,
        "market_cap": 119557969.90922889,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 7059,
    "name": "Mobilian Coin",
    "symbol": "MBN",
    "slug": "mobilian-coin",
    "num_market_pairs": 5,
    "date_added": "2020-09-15T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 10000000000,
    "circulating_supply": 141494300,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xaf80951201a0eff85a0fd3adf4c7043db856d3e6"
    },
    "cmc_rank": 237,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.82159102782904,
        "volume_24h": 3148764.89095464,
        "percent_change_1h": -4.22969449,
        "percent_change_24h": -2.8682375,
        "percent_change_7d": -1.48933231,
        "market_cap": 116250447.36895055,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 5087,
    "name": "CRYPTOBUCKS",
    "symbol": "CBUCKS",
    "slug": "cryptobucks",
    "num_market_pairs": 8,
    "date_added": "2020-01-06T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 10000000000,
    "circulating_supply": 3932014866.54,
    "total_supply": 8534139361.3,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0d2BB9D68dD4451A09ec94C05E20Bd395022bd8e"
    },
    "cmc_rank": 238,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.02918639457433,
        "volume_24h": 0,
        "percent_change_1h": 0.69327648,
        "percent_change_24h": 6.61996911,
        "percent_change_7d": 38.62534225,
        "market_cap": 114761337.36696796,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5068,
    "name": "Neutrino USD",
    "symbol": "USDN",
    "slug": "neutrino-usd",
    "num_market_pairs": 25,
    "date_added": "2020-01-30T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 113612485.354196,
    "total_supply": 113613025.59120639,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x674C6Ad92Fd080e4004b2312b45f796a192D27a0"
    },
    "cmc_rank": 239,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.989602172491,
        "volume_24h": 4330979.63533922,
        "percent_change_1h": -0.77985013,
        "percent_change_24h": -0.08146373,
        "percent_change_7d": 0.41922787,
        "market_cap": 112431162.32861428,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 5280,
    "name": "Bloomzed Loyalty Club Ticket",
    "symbol": "BLCT",
    "slug": "bloomzed-token",
    "num_market_pairs": 13,
    "date_added": "2020-03-09T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 100000000,
    "circulating_supply": 37999999.99999994,
    "total_supply": 100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6d2c508fc4a588a41713ff59212f85489291d244"
    },
    "cmc_rank": 240,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 2.94299053008804,
        "volume_24h": 244765.73460296,
        "percent_change_1h": -0.31559688,
        "percent_change_24h": 0.91283708,
        "percent_change_7d": 29.2453841,
        "market_cap": 111833640.14334536,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 5566,
    "name": "Keep Network",
    "symbol": "KEEP",
    "slug": "keep-network",
    "num_market_pairs": 21,
    "date_added": "2020-05-13T00:00:00.000Z",
    "tags": [
      "defi",
      "privacy"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 456991514.0717795,
    "total_supply": 999848780.8,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec"
    },
    "cmc_rank": 241,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.24269429377001,
        "volume_24h": 1116093.67692266,
        "percent_change_1h": -0.37051948,
        "percent_change_24h": -3.19652816,
        "percent_change_7d": 31.30615362,
        "market_cap": 110909232.76653811,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5622,
    "name": "Darma Cash",
    "symbol": "DMCH",
    "slug": "darma-cash",
    "num_market_pairs": 8,
    "date_added": "2020-05-28T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 460000000,
    "circulating_supply": 211080330,
    "total_supply": 211080330,
    "platform": null,
    "cmc_rank": 242,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.50833987684569,
        "volume_24h": 1408088.71607424,
        "percent_change_1h": -3.0125519,
        "percent_change_24h": -12.35528603,
        "percent_change_7d": -16.34552887,
        "market_cap": 107300548.9567476,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2746,
    "name": "GreenPower",
    "symbol": "GRN",
    "slug": "greenpower",
    "num_market_pairs": 4,
    "date_added": "2018-05-21T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 3231699360.00993,
    "total_supply": 3294166500.60993,
    "platform": null,
    "cmc_rank": 243,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.03241048977834,
        "volume_24h": 48943.82276806,
        "percent_change_1h": 2.49531414,
        "percent_change_24h": 1.74671643,
        "percent_change_7d": -12.07457419,
        "market_cap": 104740959.07426976,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 6498,
    "name": "Metacoin",
    "symbol": "MTC",
    "slug": "metacoin",
    "num_market_pairs": 1,
    "date_added": "2020-08-10T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 1071281651.994976,
    "total_supply": 2000000000,
    "platform": null,
    "cmc_rank": 244,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.09136731052561,
        "volume_24h": 11842.86338373,
        "percent_change_1h": 1.45654346,
        "percent_change_24h": -10.94360328,
        "percent_change_7d": 36.58847458,
        "market_cap": 97880123.35821344,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5070,
    "name": "Tap",
    "symbol": "XTP",
    "slug": "tap",
    "num_market_pairs": 7,
    "date_added": "2019-12-24T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 1231911016.18,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6368e1E18c4C419DDFC608A0BEd1ccb87b9250fc"
    },
    "cmc_rank": 245,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.07944084610096,
        "volume_24h": 266701.99598597,
        "percent_change_1h": 6.96461149,
        "percent_change_24h": 13.61803733,
        "percent_change_7d": 29.62489464,
        "market_cap": 97864053.44643264,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 5060,
    "name": "XeniosCoin",
    "symbol": "XNC",
    "slug": "xenioscoin",
    "num_market_pairs": 7,
    "date_added": "2019-12-19T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 110000000,
    "circulating_supply": 76274958.05368,
    "total_supply": 100413374,
    "platform": null,
    "cmc_rank": 246,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1.22868924673843,
        "volume_24h": 193287.58869795,
        "percent_change_1h": 1.16819553,
        "percent_change_24h": 4.36035882,
        "percent_change_7d": 30.08343746,
        "market_cap": 93718220.75598143,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 2349,
    "name": "Mixin",
    "symbol": "XIN",
    "slug": "mixin",
    "num_market_pairs": 6,
    "date_added": "2018-01-09T00:00:00.000Z",
    "tags": [
      "marketplace",
      "content-creation",
      "wallet"
    ],
    "max_supply": 1000000,
    "circulating_supply": 529266.00421369,
    "total_supply": 1000000,
    "platform": null,
    "cmc_rank": 247,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 175.25158060696106,
        "volume_24h": 173970.52804501,
        "percent_change_1h": 0.01018965,
        "percent_change_24h": 7.6320877,
        "percent_change_7d": 35.6203963,
        "market_cap": 92754703.79997967,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 6216,
    "name": "AXEL",
    "symbol": "AXEL",
    "slug": "axel",
    "num_market_pairs": 3,
    "date_added": "2020-08-05T00:00:00.000Z",
    "tags": [
      "filesharing"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 263949585,
    "total_supply": 761619585,
    "platform": null,
    "cmc_rank": 248,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.34245826147558,
        "volume_24h": 444538.42400849,
        "percent_change_1h": 0.68333931,
        "percent_change_24h": 6.85866303,
        "percent_change_7d": 26.48755542,
        "market_cap": 90391715.99630083,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 6945,
    "name": "Amp",
    "symbol": "AMP",
    "slug": "amp",
    "num_market_pairs": 7,
    "date_added": "2020-09-08T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 92547638199,
    "circulating_supply": 9771525300.236301,
    "total_supply": 92548417154.46515,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xff20817765cb7f73d4bde2e66e067e58d11095c2"
    },
    "cmc_rank": 249,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.00918785140426,
        "volume_24h": 544876.10918251,
        "percent_change_1h": -0.00039573,
        "percent_change_24h": 1.33687478,
        "percent_change_7d": 34.98286841,
        "market_cap": 89779322.45153823,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 2634,
    "name": "XinFin Network",
    "symbol": "XDC",
    "slug": "xinfin-network",
    "num_market_pairs": 11,
    "date_added": "2018-04-12T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 37635476883,
    "circulating_supply": 12198000000,
    "total_supply": 37636242477,
    "platform": null,
    "cmc_rank": 250,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.00717494185698,
        "volume_24h": 1601571.78394616,
        "percent_change_1h": -0.53617111,
        "percent_change_24h": 1.59892376,
        "percent_change_7d": 45.60260815,
        "market_cap": 87519940.77144204,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1004,
    "name": "Hellenic Coin",
    "symbol": "HNC",
    "slug": "helleniccoin",
    "num_market_pairs": 4,
    "date_added": "2015-07-21T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "scrypt"
    ],
    "max_supply": null,
    "circulating_supply": 69910698,
    "total_supply": 69910698,
    "platform": null,
    "cmc_rank": 251,
    "last_updated": "2021-01-08T12:58:10.000Z",
    "quote": {
      "USD": {
        "price": 1.22729509222934,
        "volume_24h": 416680.47687057,
        "percent_change_1h": 0.69564742,
        "percent_change_24h": 5.42761502,
        "percent_change_7d": 34.91649962,
        "market_cap": 85801056.54972753,
        "last_updated": "2021-01-08T12:58:10.000Z"
      }
    }
  },
  {
    "id": 4748,
    "name": "Dimension Chain",
    "symbol": "EON",
    "slug": "dimension-chain",
    "num_market_pairs": 1,
    "date_added": "2019-10-04T00:00:00.000Z",
    "tags": [
      "platform"
    ],
    "max_supply": null,
    "circulating_supply": 244783561,
    "total_supply": 2000000000,
    "platform": null,
    "cmc_rank": 252,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.35009649598532,
        "volume_24h": 0,
        "percent_change_1h": 0.00513951,
        "percent_change_24h": 0.018394,
        "percent_change_7d": -0.05369013,
        "market_cap": 85697866.98090883,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3063,
    "name": "Vitae",
    "symbol": "VITAE",
    "slug": "vitae",
    "num_market_pairs": 6,
    "date_added": "2018-08-14T00:00:00.000Z",
    "tags": [
      "mineable",
      "pos",
      "medium-of-exchange",
      "masternodes"
    ],
    "max_supply": 100000000,
    "circulating_supply": 19471178.43482202,
    "total_supply": 19731055.97956864,
    "platform": null,
    "cmc_rank": 253,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 4.3466715038081,
        "volume_24h": 11123.30123825,
        "percent_change_1h": -7.24907903,
        "percent_change_24h": -13.40238197,
        "percent_change_7d": -27.74273517,
        "market_cap": 84634816.44820367,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 6929,
    "name": "Hegic",
    "symbol": "HEGIC",
    "slug": "hegic",
    "num_market_pairs": 21,
    "date_added": "2020-09-07T00:00:00.000Z",
    "tags": [
      "decentralized-exchange",
      "defi"
    ],
    "max_supply": 3012009888,
    "circulating_supply": 316470899.1958505,
    "total_supply": 3012009888,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x584bC13c7D411c00c01A62e8019472dE68768430"
    },
    "cmc_rank": 254,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.2602896412361,
        "volume_24h": 4258287.04697456,
        "percent_change_1h": -4.50951838,
        "percent_change_24h": -14.905723,
        "percent_change_7d": 84.7124743,
        "market_cap": 82374096.8133539,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3296,
    "name": "MINDOL",
    "symbol": "MIN",
    "slug": "mindol",
    "num_market_pairs": 6,
    "date_added": "2019-03-29T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 171240813.96297643,
    "total_supply": 240000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x5d64d850c8368008afb39224e92ad0dceff3cf38"
    },
    "cmc_rank": 255,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.47875170924243,
        "volume_24h": 256758.47978025,
        "percent_change_1h": -7.99722357,
        "percent_change_24h": -17.47257612,
        "percent_change_7d": -93.96519362,
        "market_cap": 81981832.37683994,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 6511,
    "name": "Strong",
    "symbol": "STRONG",
    "slug": "strong",
    "num_market_pairs": 4,
    "date_added": "2020-08-11T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 10000000,
    "circulating_supply": 3275831.38,
    "total_supply": 10000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x990f341946a3fdb507ae7e52d17851b87168017c"
    },
    "cmc_rank": 256,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 24.80486517282373,
        "volume_24h": 162877.82941235,
        "percent_change_1h": -0.31461118,
        "percent_change_24h": -4.59970428,
        "percent_change_7d": -4.45978186,
        "market_cap": 81256555.7098051,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 7192,
    "name": "Wrapped BNB",
    "symbol": "WBNB",
    "slug": "wbnb",
    "num_market_pairs": 74,
    "date_added": "2020-09-28T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 1923498.1960268,
    "total_supply": 1923498.1960268,
    "platform": {
      "id": 1839,
      "name": "Binance Smart Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
    },
    "cmc_rank": 257,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 42.21375443103316,
        "volume_24h": 37263446.760176,
        "percent_change_1h": -1.03212374,
        "percent_change_24h": -4.0942632,
        "percent_change_7d": 5.56119667,
        "market_cap": 81198080.49561061,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 4761,
    "name": "NuCypher",
    "symbol": "NU",
    "slug": "nucypher",
    "num_market_pairs": 19,
    "date_added": "2019-10-07T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 3885390082,
    "circulating_supply": 385000000,
    "total_supply": 1068984028.4060304,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x4fe83213d56308330ec302a8bd641f1d0113a4cc"
    },
    "cmc_rank": 258,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.20502256818585,
        "volume_24h": 40106583.10929703,
        "percent_change_1h": 1.47216272,
        "percent_change_24h": 0.46210255,
        "percent_change_7d": 22.19079934,
        "market_cap": 78933688.75155224,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3936,
    "name": "GNY",
    "symbol": "GNY",
    "slug": "gny",
    "num_market_pairs": 2,
    "date_added": "2019-05-14T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions"
    ],
    "max_supply": null,
    "circulating_supply": 192376657,
    "total_supply": 400000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xb1f871Ae9462F1b2C6826E88A7827e76f86751d4"
    },
    "cmc_rank": 259,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.38790267769433,
        "volume_24h": 313487.16743118,
        "percent_change_1h": 4.85542943,
        "percent_change_24h": -7.06216505,
        "percent_change_7d": 203.57858445,
        "market_cap": 74623420.37618367,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 4644,
    "name": "Poseidon Network",
    "symbol": "QQQ",
    "slug": "poseidon-network",
    "num_market_pairs": 2,
    "date_added": "2019-09-17T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 2187875407.6,
    "total_supply": 21000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x2822f6D1B2f41F93f33d937bc7d84A8Dfa4f4C21"
    },
    "cmc_rank": 260,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.03349238265018,
        "volume_24h": 1270716.06561937,
        "percent_change_1h": -0.53493143,
        "percent_change_24h": 33.15227234,
        "percent_change_7d": 0.48067865,
        "market_cap": 73277160.34225774,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3987,
    "name": "Beldex",
    "symbol": "BDX",
    "slug": "beldex",
    "num_market_pairs": 5,
    "date_added": "2019-06-07T00:00:00.000Z",
    "tags": [
      "marketplace",
      "centralized-exchange",
      "discount-token",
      "privacy"
    ],
    "max_supply": null,
    "circulating_supply": 980222595,
    "total_supply": 1400222610.4673645,
    "platform": null,
    "cmc_rank": 261,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.07678511646671,
        "volume_24h": 699964.31926961,
        "percent_change_1h": 6.14293512,
        "percent_change_24h": 0.33635624,
        "percent_change_7d": 0.27497624,
        "market_cap": 75266506.12037571,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 2319,
    "name": "Qcash",
    "symbol": "QC",
    "slug": "qcash",
    "num_market_pairs": 84,
    "date_added": "2019-12-12T00:00:00.000Z",
    "tags": [
      "stablecoin"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 460000200,
    "total_supply": 10000000000,
    "platform": null,
    "cmc_rank": 262,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.15705009751012,
        "volume_24h": 2000847947.8329103,
        "percent_change_1h": 0.22631827,
        "percent_change_24h": 0.33626228,
        "percent_change_7d": 1.69799936,
        "market_cap": 72243076.26467471,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3653,
    "name": "Baer Chain",
    "symbol": "BRC",
    "slug": "baer-chain",
    "num_market_pairs": 4,
    "date_added": "2018-12-28T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 580000000,
    "circulating_supply": 174000000,
    "total_supply": 580000000,
    "platform": null,
    "cmc_rank": 263,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.41203554636576,
        "volume_24h": 1680.66747968,
        "percent_change_1h": 0.28047969,
        "percent_change_24h": 2.36806524,
        "percent_change_7d": -0.27053163,
        "market_cap": 71694185.06764224,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3737,
    "name": "BTU Protocol",
    "symbol": "BTU",
    "slug": "btu-protocol",
    "num_market_pairs": 4,
    "date_added": "2019-02-11T00:00:00.000Z",
    "tags": [
      "marketplace",
      "enterprise-solutions"
    ],
    "max_supply": 100000000,
    "circulating_supply": 90014336.43504915,
    "total_supply": 100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xb683d83a532e2cb7dfa5275eed3698436371cc9f"
    },
    "cmc_rank": 264,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.71133466987166,
        "volume_24h": 13903.64180509,
        "percent_change_1h": -12.54948948,
        "percent_change_24h": -1.00141305,
        "percent_change_7d": 8.72594338,
        "market_cap": 64030318.29174223,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 5336,
    "name": "Homeros",
    "symbol": "HMR",
    "slug": "homeros",
    "num_market_pairs": 47,
    "date_added": "2020-03-18T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 10000000000,
    "circulating_supply": 413268600.340002,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xB1A30851E3f7d841b231B086479608e17198363A"
    },
    "cmc_rank": 265,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.15236288595753,
        "volume_24h": 375349.38930128,
        "percent_change_1h": 2.97303049,
        "percent_change_24h": 20.48393839,
        "percent_change_7d": -80.90886509,
        "market_cap": 62966796.62343177,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 5691,
    "name": "SKALE Network",
    "symbol": "SKL",
    "slug": "skale-network",
    "num_market_pairs": 15,
    "date_added": "2020-06-12T00:00:00.000Z",
    "tags": [
      "platform",
      "smart-contracts",
      "staking"
    ],
    "max_supply": 7000000000,
    "circulating_supply": 564166667,
    "total_supply": 4072194681,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7"
    },
    "cmc_rank": 266,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.11123369002098,
        "volume_24h": 2204763.1103114,
        "percent_change_1h": -2.55679633,
        "percent_change_24h": -4.68218054,
        "percent_change_7d": 37.44006128,
        "market_cap": 62754340.15724745,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 7503,
    "name": "Bithao",
    "symbol": "BHAO",
    "slug": "bithao",
    "num_market_pairs": 2,
    "date_added": "2020-10-26T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 2100000000,
    "circulating_supply": 43922587,
    "total_supply": 2100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6d7c7d764d6f1DFa256C74AbB4C4d7861d8EE64C"
    },
    "cmc_rank": 267,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 1.3454506473534,
        "volume_24h": 2599210.12001162,
        "percent_change_1h": -1.74701618,
        "percent_change_24h": 9.85277521,
        "percent_change_7d": -12.79391344,
        "market_cap": 59095673.11258604,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 6539,
    "name": "YAM v1",
    "symbol": "YAM",
    "slug": "yamv1",
    "num_market_pairs": 2,
    "date_added": "2020-08-11T00:00:00.000Z",
    "tags": [
      "defi",
      "memes",
      "yield-farming",
      "rebase"
    ],
    "max_supply": null,
    "circulating_supply": 28619369.27,
    "total_supply": 32575725,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16"
    },
    "cmc_rank": 268,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 2.08939197979289,
        "volume_24h": 12529.95607481,
        "percent_change_1h": -1.47706688,
        "percent_change_24h": -1.74519132,
        "percent_change_7d": 100.15120955,
        "market_cap": 59797080.61946909,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5115,
    "name": "TerraKRW",
    "symbol": "KRT",
    "slug": "terra-krw",
    "num_market_pairs": 5,
    "date_added": "2020-01-15T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 67889109794.92367,
    "total_supply": 67889838903.529465,
    "platform": null,
    "cmc_rank": 269,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.00085296267056,
        "volume_24h": 540565.33704382,
        "percent_change_1h": -10.77378586,
        "percent_change_24h": -6.56523967,
        "percent_change_7d": -6.93166352,
        "market_cap": 57906876.39261914,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 4257,
    "name": "Bitball Treasure",
    "symbol": "BTRS",
    "slug": "bitball-treasure",
    "num_market_pairs": 8,
    "date_added": "2019-11-04T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 1000000,
    "circulating_supply": 450000,
    "total_supply": 1000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x73c9275c3a2dd84b5741fd59aebf102c91eb033f"
    },
    "cmc_rank": 270,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 128.19923939308208,
        "volume_24h": 610833.37813526,
        "percent_change_1h": -0.21539233,
        "percent_change_24h": -6.51727493,
        "percent_change_7d": -0.83483719,
        "market_cap": 57689657.726886936,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 5616,
    "name": "MATH",
    "symbol": "MATH",
    "slug": "math",
    "num_market_pairs": 5,
    "date_added": "2020-05-21T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 200000000,
    "circulating_supply": 114356164.04,
    "total_supply": 200000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x08d967bb0134f2d07f7cfb6e246680c53927dd30"
    },
    "cmc_rank": 271,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.50277237596517,
        "volume_24h": 179783.4492037,
        "percent_change_1h": -0.0465106,
        "percent_change_24h": 0.63578678,
        "percent_change_7d": 1.3713526,
        "market_cap": 57495120.30065354,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2444,
    "name": "CRYPTO20",
    "symbol": "C20",
    "slug": "c20",
    "num_market_pairs": 3,
    "date_added": "2018-01-22T00:00:00.000Z",
    "tags": [
      "services"
    ],
    "max_supply": null,
    "circulating_supply": 40472185.21916719,
    "total_supply": 40656081.98016719,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x26e75307fc0c021472feb8f727839531f112f317"
    },
    "cmc_rank": 272,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 1.41935601240444,
        "volume_24h": 122081.45695796,
        "percent_change_1h": 0.80926684,
        "percent_change_24h": -1.86655312,
        "percent_change_7d": 39.2093009,
        "market_cap": 57444439.42597105,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 268,
    "name": "WhiteCoin",
    "symbol": "XWC",
    "slug": "whitecoin",
    "num_market_pairs": 12,
    "date_added": "2014-04-18T00:00:00.000Z",
    "tags": [
      "hybrid-pow-pos",
      "scrypt"
    ],
    "max_supply": null,
    "circulating_supply": 250183629.19257,
    "total_supply": 250183629.19257,
    "platform": null,
    "cmc_rank": 273,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.20194101220364,
        "volume_24h": 24727.56517354,
        "percent_change_1h": -0.38060823,
        "percent_change_24h": 5.22556041,
        "percent_change_7d": -9.78033002,
        "market_cap": 50522335.31592772,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 5600,
    "name": "Attila",
    "symbol": "ATT",
    "slug": "attila",
    "num_market_pairs": 5,
    "date_added": "2020-05-18T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 3000000000,
    "circulating_supply": 450382736,
    "total_supply": 3000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x89Fb927240750c1B15d4743cd58440fc5f14A11C"
    },
    "cmc_rank": 274,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.12332476180009,
        "volume_24h": 474681.4183641,
        "percent_change_1h": 0.1392227,
        "percent_change_24h": -0.16797279,
        "percent_change_7d": 0.59760711,
        "market_cap": 55543343.63607282,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 7186,
    "name": "PancakeSwap",
    "symbol": "CAKE",
    "slug": "pancakeswap",
    "num_market_pairs": 8,
    "date_added": "2020-09-25T00:00:00.000Z",
    "tags": [
      "yield-farming",
      "binance-chain"
    ],
    "max_supply": null,
    "circulating_supply": 90028325.19731748,
    "total_supply": 136427173.2827628,
    "platform": {
      "id": 1839,
      "name": "Binance Smart Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
    },
    "cmc_rank": 275,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.60495257419102,
        "volume_24h": 6221829.42229364,
        "percent_change_1h": -4.91592676,
        "percent_change_24h": -7.00234634,
        "percent_change_7d": -4.14082994,
        "market_cap": 54462867.07822348,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 5410,
    "name": "PARSIQ",
    "symbol": "PRQ",
    "slug": "parsiq",
    "num_market_pairs": 12,
    "date_added": "2020-04-02T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 500000000,
    "circulating_supply": 104586072,
    "total_supply": 500000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x362bc847A3a9637d3af6624EeC853618a43ed7D2"
    },
    "cmc_rank": 276,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.51399638785588,
        "volume_24h": 2478801.21345686,
        "percent_change_1h": -5.0089715,
        "percent_change_24h": -4.41935759,
        "percent_change_7d": -4.74415304,
        "market_cap": 53756863.22803499,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 4049,
    "name": "Bitbook Gambling",
    "symbol": "BXK",
    "slug": "bitbook-gambling",
    "num_market_pairs": 3,
    "date_added": "2019-06-24T00:00:00.000Z",
    "tags": [
      "gambling",
      "loyalty"
    ],
    "max_supply": null,
    "circulating_supply": 357687491.4,
    "total_supply": 730756054.4,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xeb6985acd6d0cbff60b88032b0b29ac1d9d66a1b"
    },
    "cmc_rank": 277,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.14454887322541,
        "volume_24h": 3044.45852652,
        "percent_change_1h": -4.48869895,
        "percent_change_24h": -26.79791569,
        "percent_change_7d": -27.21331835,
        "market_cap": 51703323.84869352,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5072,
    "name": "Rakon",
    "symbol": "RKN",
    "slug": "rakon",
    "num_market_pairs": 6,
    "date_added": "2019-12-25T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 285714286,
    "circulating_supply": 242857143,
    "total_supply": 285714286,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6e5a43db10b04701385a34afb670e404bc7ea597"
    },
    "cmc_rank": 278,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 0.20829482405695,
        "volume_24h": 3240994.91157641,
        "percent_change_1h": -0.23549023,
        "percent_change_24h": 2.81115175,
        "percent_change_7d": 56.10124498,
        "market_cap": 50585885.87215854,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 2842,
    "name": "Bankera",
    "symbol": "BNK",
    "slug": "bankera",
    "num_market_pairs": 5,
    "date_added": "2018-06-04T00:00:00.000Z",
    "tags": [
      "marketplace",
      "payments",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 24618912107.742558,
    "total_supply": 25000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xc80c5e40220172b36adee2c951f26f2a577810c5"
    },
    "cmc_rank": 279,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.0020342604626,
        "volume_24h": 17561.70337139,
        "percent_change_1h": 0.30457857,
        "percent_change_24h": 10.76378079,
        "percent_change_7d": 35.17028297,
        "market_cap": 50081279.53300512,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 5816,
    "name": "Rewardiqa",
    "symbol": "REW",
    "slug": "rewardiqa",
    "num_market_pairs": 4,
    "date_added": "2020-07-13T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 21000000000,
    "circulating_supply": 10000000,
    "total_supply": 21000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x3FFfFA8F3cc943e43f9f17a83Cbb18f4Bbb9f4AC"
    },
    "cmc_rank": 280,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 4.99166146001577,
        "volume_24h": 427254.41234462,
        "percent_change_1h": -0.44261477,
        "percent_change_24h": 4.21748249,
        "percent_change_7d": 467.33642713,
        "market_cap": 49916614.6001577,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 5604,
    "name": "Secret",
    "symbol": "SCRT",
    "slug": "secret",
    "num_market_pairs": 5,
    "date_added": "2020-05-19T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 69703477,
    "total_supply": 174409075258342,
    "platform": null,
    "cmc_rank": 281,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.68364693525129,
        "volume_24h": 638981.50354686,
        "percent_change_1h": -6.36444512,
        "percent_change_24h": -5.74819473,
        "percent_change_7d": 7.74414229,
        "market_cap": 47652568.427408785,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 7758,
    "name": "Eauric",
    "symbol": "EAURIC",
    "slug": "eauric",
    "num_market_pairs": 5,
    "date_added": "2020-11-23T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 114000000,
    "circulating_supply": 27240513,
    "total_supply": 31650114,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xc36c65693ea9e207ad35d4ee2fb6c5f6f43bdec8"
    },
    "cmc_rank": 282,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 1.67884792446362,
        "volume_24h": 3058365.68495576,
        "percent_change_1h": 0.25200498,
        "percent_change_24h": 3.49173641,
        "percent_change_7d": 38.13175531,
        "market_cap": 45732678.71137426,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 7242,
    "name": "cVault.finance",
    "symbol": "CORE",
    "slug": "cvault-finance",
    "num_market_pairs": 7,
    "date_added": "2020-09-30T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 10000,
    "total_supply": 10000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x62359ed7505efc61ff1d56fef82158ccaffa23d7"
    },
    "cmc_rank": 283,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 4442.281724998658,
        "volume_24h": 1909451.12238099,
        "percent_change_1h": -1.47609174,
        "percent_change_24h": 1.57948216,
        "percent_change_7d": 45.75372009,
        "market_cap": 44422817.24998658,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 7208,
    "name": "Polkastarter",
    "symbol": "POLS",
    "slug": "polkastarter",
    "num_market_pairs": 2,
    "date_added": "2020-09-28T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 47998123.27609367,
    "total_supply": 100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa"
    },
    "cmc_rank": 284,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.89307856154852,
        "volume_24h": 4619271.57881184,
        "percent_change_1h": -4.42637606,
        "percent_change_24h": -1.80398514,
        "percent_change_7d": 25.69996986,
        "market_cap": 42866094.89244227,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 5453,
    "name": "KardiaChain",
    "symbol": "KAI",
    "slug": "kardiachain",
    "num_market_pairs": 16,
    "date_added": "2020-04-17T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 5000000000,
    "circulating_supply": 2049800000,
    "total_supply": 5000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xD9Ec3ff1f8be459Bb9369b4E79e9Ebcf7141C093"
    },
    "cmc_rank": 285,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.021199756628,
        "volume_24h": 1527208.0922304,
        "percent_change_1h": 1.26022049,
        "percent_change_24h": 0.86154662,
        "percent_change_7d": -6.96238406,
        "market_cap": 43455261.1360744,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 7882,
    "name": "EFFORCE",
    "symbol": "WOZX",
    "slug": "efforce",
    "num_market_pairs": 18,
    "date_added": "2020-12-07T00:00:00.000Z",
    "tags": [
      "energy"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 35347688,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x34950ff2b487d9e5282c5ab342d08a2f712eb79f"
    },
    "cmc_rank": 286,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 1.21153855986392,
        "volume_24h": 22447234.45519786,
        "percent_change_1h": -1.05374776,
        "percent_change_24h": 0.124938,
        "percent_change_7d": -12.88841718,
        "market_cap": 42825087.014039166,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2090,
    "name": "LATOKEN",
    "symbol": "LA",
    "slug": "latoken",
    "num_market_pairs": 6,
    "date_added": "2017-10-25T00:00:00.000Z",
    "tags": [
      "marketplace",
      "centralized-exchange",
      "payments"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 380104462,
    "total_supply": 400000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf"
    },
    "cmc_rank": 287,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.11223501482311,
        "volume_24h": 69011.19716712,
        "percent_change_1h": 8.45508645,
        "percent_change_24h": 111.06239785,
        "percent_change_7d": 202.48631795,
        "market_cap": 42661029.92690025,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 5631,
    "name": "Orion Protocol",
    "symbol": "ORN",
    "slug": "orion-protocol",
    "num_market_pairs": 18,
    "date_added": "2020-07-16T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": 100000000,
    "circulating_supply": 16720000,
    "total_supply": 100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a"
    },
    "cmc_rank": 288,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 2.53976010545957,
        "volume_24h": 4215350.61493256,
        "percent_change_1h": 0.50739037,
        "percent_change_24h": -2.13822498,
        "percent_change_7d": 19.74531323,
        "market_cap": 42464788.963284016,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5802,
    "name": "Sora",
    "symbol": "XOR",
    "slug": "sora",
    "num_market_pairs": 9,
    "date_added": "2020-07-02T00:00:00.000Z",
    "tags": [
      "substrate",
      "polkadot"
    ],
    "max_supply": null,
    "circulating_supply": 350000,
    "total_supply": 350000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x40FD72257597aA14C7231A7B1aaa29Fce868F677"
    },
    "cmc_rank": 289,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 120.45592189434555,
        "volume_24h": 511101.3298622,
        "percent_change_1h": -0.08254334,
        "percent_change_24h": 1.40226459,
        "percent_change_7d": 19.30592125,
        "market_cap": 42159572.663020946,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3977,
    "name": "Sport and Leisure",
    "symbol": "SNL",
    "slug": "sport-and-leisure",
    "num_market_pairs": 6,
    "date_added": "2019-05-28T00:00:00.000Z",
    "tags": [
      "marketplace"
    ],
    "max_supply": null,
    "circulating_supply": 678662952.834708,
    "total_supply": 963252000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa806b3fed6891136940cf81c4085661500aa2709"
    },
    "cmc_rank": 290,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.06221446479882,
        "volume_24h": 583511.68937369,
        "percent_change_1h": 0.1625927,
        "percent_change_24h": 4.15517534,
        "percent_change_7d": 59.04841125,
        "market_cap": 42222652.38939818,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5841,
    "name": "NEST Protocol",
    "symbol": "NEST",
    "slug": "nest-protocol",
    "num_market_pairs": 41,
    "date_added": "2020-07-14T00:00:00.000Z",
    "tags": [
      "oracles"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 1748764436,
    "total_supply": 9982920000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x04abeda201850ac0124161f037efd70c74ddc74c"
    },
    "cmc_rank": 291,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.0243867524436,
        "volume_24h": 44914428.1795292,
        "percent_change_1h": 1.91288335,
        "percent_change_24h": 6.03377763,
        "percent_change_7d": 10.52756274,
        "market_cap": 42646685.38290378,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3404,
    "name": "Wixlar",
    "symbol": "WIX",
    "slug": "wixlar",
    "num_market_pairs": 6,
    "date_added": "2018-10-05T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 2393871120.94,
    "total_supply": 5330000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x7ba19b7f7d106a9a1e0985397b94f38eee0b555e"
    },
    "cmc_rank": 292,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.01705721975431,
        "volume_24h": 5198.19432973,
        "percent_change_1h": 423.23857262,
        "percent_change_24h": 14.18326339,
        "percent_change_7d": 61.30604147,
        "market_cap": 40832785.77336999,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 4121,
    "name": "Sapphire",
    "symbol": "SAPP",
    "slug": "sapphire",
    "num_market_pairs": 4,
    "date_added": "2020-03-21T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 469344201.43448865,
    "total_supply": 487490690.4336564,
    "platform": null,
    "cmc_rank": 293,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.08605900127456,
        "volume_24h": 21381.67759057,
        "percent_change_1h": 0.65463992,
        "percent_change_24h": 9.51366349,
        "percent_change_7d": 39.98235117,
        "market_cap": 40391293.229458004,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 3772,
    "name": "STEM CELL COIN",
    "symbol": "SCC",
    "slug": "stem-cell-coin",
    "num_market_pairs": 3,
    "date_added": "2019-03-01T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 5000000000,
    "circulating_supply": 320658118,
    "total_supply": 5000000000,
    "platform": {
      "id": 1376,
      "name": "Neo",
      "symbol": "NEO",
      "slug": "neo",
      "token_address": "323571cfc42a40d48d64832a7da594039fbac76a"
    },
    "cmc_rank": 294,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.12402060339967,
        "volume_24h": 41299.6780644,
        "percent_change_1h": 1.61447451,
        "percent_change_24h": 3.96731566,
        "percent_change_7d": 4.90946498,
        "market_cap": 39768213.27936258,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 5326,
    "name": "Orbit Chain",
    "symbol": "ORC",
    "slug": "orbit-chain",
    "num_market_pairs": 7,
    "date_added": "2020-03-16T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 1000000000,
    "circulating_supply": 465987647,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x662b67d00a13faf93254714dd601f5ed49ef2f51"
    },
    "cmc_rank": 295,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.08212907388331,
        "volume_24h": 680388.47657977,
        "percent_change_1h": -3.46949892,
        "percent_change_24h": 1.17249615,
        "percent_change_7d": -1.41710367,
        "market_cap": 38271133.889172785,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 6407,
    "name": "YF Link",
    "symbol": "YFL",
    "slug": "yflink",
    "num_market_pairs": 22,
    "date_added": "2020-08-10T00:00:00.000Z",
    "tags": [
      "defi",
      "yield-farming"
    ],
    "max_supply": 52000,
    "circulating_supply": 50114.73633112,
    "total_supply": 52000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x28cb7e841ee97947a86B06fA4090C8451f64c0be"
    },
    "cmc_rank": 296,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 778.151257148193,
        "volume_24h": 1418441.89113929,
        "percent_change_1h": -2.16576584,
        "percent_change_24h": -0.40047226,
        "percent_change_7d": 115.80020732,
        "market_cap": 38996845.077711254,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3519,
    "name": "Breezecoin",
    "symbol": "BRZE",
    "slug": "breezecoin",
    "num_market_pairs": 4,
    "date_added": "2018-10-29T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 200000000,
    "circulating_supply": 100000000,
    "total_supply": 200000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x77c07555af5ffdc946fb47ce15ea68620e4e7170"
    },
    "cmc_rank": 297,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.39144982409656,
        "volume_24h": 36403.78004781,
        "percent_change_1h": 7.60283918,
        "percent_change_24h": 10.03874088,
        "percent_change_7d": 43.69251067,
        "market_cap": 39144982.409655996,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2585,
    "name": "Centrality",
    "symbol": "CENNZ",
    "slug": "centrality",
    "num_market_pairs": 7,
    "date_added": "2018-03-13T00:00:00.000Z",
    "tags": [
      "marketplace",
      "enterprise-solutions"
    ],
    "max_supply": null,
    "circulating_supply": 1182720126.7463124,
    "total_supply": 1200000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x1122b6a0e00dce0563082b6e2953f3a943855c1f"
    },
    "cmc_rank": 298,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.03169639159966,
        "volume_24h": 5184401.39133667,
        "percent_change_1h": -0.62439174,
        "percent_change_24h": 18.5611025,
        "percent_change_7d": 9.08984135,
        "market_cap": 37487960.29015063,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 7206,
    "name": "TitanSwap",
    "symbol": "TITAN",
    "slug": "titanswap",
    "num_market_pairs": 6,
    "date_added": "2020-09-28T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 53404160,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x3A8cCCB969a61532d1E6005e2CE12C200caeCe87"
    },
    "cmc_rank": 299,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.69961319461747,
        "volume_24h": 3613185.47912317,
        "percent_change_1h": -0.02941481,
        "percent_change_24h": 0.87664993,
        "percent_change_7d": 0.63089993,
        "market_cap": 37362254.983462505,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 1172,
    "name": "Safex Token",
    "symbol": "SFT",
    "slug": "safex-token",
    "num_market_pairs": 5,
    "date_added": "2016-02-16T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 1885974016,
    "circulating_supply": 1885974016,
    "total_supply": 1885974016,
    "platform": null,
    "cmc_rank": 300,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.01939139632821,
        "volume_24h": 1413833.33339708,
        "percent_change_1h": -0.53393758,
        "percent_change_24h": -17.53291055,
        "percent_change_7d": -23.15912213,
        "market_cap": 36571669.608961865,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 6859,
    "name": "Harvest Finance",
    "symbol": "FARM",
    "slug": "harvest-finance",
    "num_market_pairs": 19,
    "date_added": "2020-09-02T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": 690420,
    "circulating_supply": 422981.32192,
    "total_supply": 437479.21,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa0246c9032bC3A600820415aE600c6388619A14D"
    },
    "cmc_rank": 301,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 85.68704890140268,
        "volume_24h": 1320365.7290983,
        "percent_change_1h": -2.29594145,
        "percent_change_24h": -1.47043916,
        "percent_change_7d": 12.0274233,
        "market_cap": 36244021.21573899,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3814,
    "name": "Celer Network",
    "symbol": "CELR",
    "slug": "celer-network",
    "num_market_pairs": 27,
    "date_added": "2019-03-25T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions",
      "scaling",
      "state-channels",
      "substrate"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 5304283347.03568,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667"
    },
    "cmc_rank": 302,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.00679574827567,
        "volume_24h": 5707292.54835062,
        "percent_change_1h": 2.37287801,
        "percent_change_24h": -4.83436108,
        "percent_change_7d": 50.00195884,
        "market_cap": 36046574.40928282,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3724,
    "name": "SOLVE",
    "symbol": "SOLVE",
    "slug": "solve",
    "num_market_pairs": 16,
    "date_added": "2019-02-04T00:00:00.000Z",
    "tags": [
      "health",
      "enterprise-solutions",
      "wallet"
    ],
    "max_supply": 1000000000,
    "circulating_supply": 375665821.2658376,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x446c9033e7516d820cc9a2ce2d0b7328b579406f"
    },
    "cmc_rank": 303,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.0980748118207,
        "volume_24h": 86903.45949599,
        "percent_change_1h": -1.03820437,
        "percent_change_24h": -1.93023608,
        "percent_change_7d": 7.59133406,
        "market_cap": 36843354.728115745,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 4269,
    "name": "GateToken",
    "symbol": "GT",
    "slug": "gatetoken",
    "num_market_pairs": 18,
    "date_added": "2019-08-20T00:00:00.000Z",
    "tags": [
      "marketplace",
      "centralized-exchange",
      "discount-token"
    ],
    "max_supply": null,
    "circulating_supply": 73187930.6559989,
    "total_supply": 300000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe66747a101bff2dba3697199dcce5b743b454759"
    },
    "cmc_rank": 304,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.49411158073839,
        "volume_24h": 33439841.24370783,
        "percent_change_1h": 0.34316838,
        "percent_change_24h": -2.08908649,
        "percent_change_7d": -4.05249396,
        "market_cap": 36163004.10740729,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2346,
    "name": "WaykiChain",
    "symbol": "WICC",
    "slug": "waykichain",
    "num_market_pairs": 23,
    "date_added": "2018-01-09T00:00:00.000Z",
    "tags": [
      "platform"
    ],
    "max_supply": null,
    "circulating_supply": 189000000,
    "total_supply": 210000000,
    "platform": null,
    "cmc_rank": 305,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.19032719208172,
        "volume_24h": 15312631.61294824,
        "percent_change_1h": -0.89968928,
        "percent_change_24h": 0.44578227,
        "percent_change_7d": 20.42332072,
        "market_cap": 35971839.30344508,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 5964,
    "name": "Trust Wallet Token",
    "symbol": "TWT",
    "slug": "trust-wallet-token",
    "num_market_pairs": 12,
    "date_added": "2020-07-30T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 250926200,
    "total_supply": 1000000000,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "TWT-8C2"
    },
    "cmc_rank": 306,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.14073011530719,
        "volume_24h": 1714190.08134023,
        "percent_change_1h": -1.15465572,
        "percent_change_24h": -5.63285019,
        "percent_change_7d": 8.45951587,
        "market_cap": 35312873.059595026,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 4105,
    "name": "CoinMetro Token",
    "symbol": "XCM",
    "slug": "coinmetro-token",
    "num_market_pairs": 4,
    "date_added": "2019-08-01T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 330000000,
    "circulating_supply": 303383288,
    "total_supply": 330000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x36ac219f90f5a6a3c77f2a7b660e3cc701f68e25"
    },
    "cmc_rank": 307,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.11478694582734,
        "volume_24h": 348723.29008078,
        "percent_change_1h": 2.79856368,
        "percent_change_24h": 17.48496366,
        "percent_change_7d": 137.91182167,
        "market_cap": 34824441.04457629,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 2943,
    "name": "Rocket Pool",
    "symbol": "RPL",
    "slug": "rocket-pool",
    "num_market_pairs": 8,
    "date_added": "2018-07-17T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 10279742.40418146,
    "total_supply": 17922514.60658495,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xb4efd85c19999d84251304bda99e90b92300bd93"
    },
    "cmc_rank": 308,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 3.35755551868841,
        "volume_24h": 1364670.33610487,
        "percent_change_1h": -0.9266407,
        "percent_change_24h": 8.81528707,
        "percent_change_7d": 47.75782897,
        "market_cap": 34514805.839854725,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 2143,
    "name": "Streamr",
    "symbol": "DATA",
    "slug": "streamr",
    "num_market_pairs": 35,
    "date_added": "2017-11-03T00:00:00.000Z",
    "tags": [
      "media",
      "content-creation",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 713329898.3369269,
    "total_supply": 987154514,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0cf0ee63788a0849fe5297f3407f701e122cc023"
    },
    "cmc_rank": 309,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.0483531362839,
        "volume_24h": 4384871.15880858,
        "percent_change_1h": -0.9827573,
        "percent_change_24h": 2.78190574,
        "percent_change_7d": 16.25595665,
        "market_cap": 34491737.78966596,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3748,
    "name": "Hxro",
    "symbol": "HXRO",
    "slug": "hxro",
    "num_market_pairs": 15,
    "date_added": "2019-02-15T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 179141315.8860892,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3"
    },
    "cmc_rank": 310,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.19156880520065,
        "volume_24h": 380106.02213551,
        "percent_change_1h": -0.8347052,
        "percent_change_24h": 0.93177984,
        "percent_change_7d": 8.3865279,
        "market_cap": 34317887.84637033,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 4078,
    "name": "Super Zero Protocol",
    "symbol": "SERO",
    "slug": "super-zero-protocol",
    "num_market_pairs": 18,
    "date_added": "2019-07-19T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 647367590,
    "circulating_supply": 302657107,
    "total_supply": 637793598,
    "platform": null,
    "cmc_rank": 311,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.11338382984018,
        "volume_24h": 8820925.7140884,
        "percent_change_1h": -1.49884401,
        "percent_change_24h": -4.55760925,
        "percent_change_7d": 8.19570288,
        "market_cap": 34316421.92000915,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 3840,
    "name": "1irstcoin",
    "symbol": "FST",
    "slug": "1irstcoin",
    "num_market_pairs": 4,
    "date_added": "2019-04-08T00:00:00.000Z",
    "tags": [
      "services"
    ],
    "max_supply": null,
    "circulating_supply": 34968103.099488,
    "total_supply": 100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x310c93dfc1c5e34cdf51678103f63c41762089cd"
    },
    "cmc_rank": 312,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.98556904403386,
        "volume_24h": 88862.82954092,
        "percent_change_1h": -0.4338715,
        "percent_change_24h": 3.34450851,
        "percent_change_7d": 25.83251983,
        "market_cap": 34463479.94343984,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 2492,
    "name": "Elastos",
    "symbol": "ELA",
    "slug": "elastos",
    "num_market_pairs": 25,
    "date_added": "2018-01-31T00:00:00.000Z",
    "tags": [
      "mineable",
      "platform",
      "distributed-computing",
      "filesharing",
      "state-channels"
    ],
    "max_supply": null,
    "circulating_supply": 17244539.7513,
    "total_supply": 23084773.8348,
    "platform": null,
    "cmc_rank": 313,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 1.99103156779588,
        "volume_24h": 4816841.06048849,
        "percent_change_1h": -0.94161458,
        "percent_change_24h": -2.26454687,
        "percent_change_7d": 31.62396942,
        "market_cap": 34334423.016949214,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 4200,
    "name": "ChainX",
    "symbol": "PCX",
    "slug": "chainx",
    "num_market_pairs": 11,
    "date_added": "2019-08-01T00:00:00.000Z",
    "tags": [
      "substrate",
      "polkadot"
    ],
    "max_supply": 21000000,
    "circulating_supply": 7723350,
    "total_supply": 7723350,
    "platform": null,
    "cmc_rank": 314,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 4.39067240018528,
        "volume_24h": 5954893.89867447,
        "percent_change_1h": -3.46007253,
        "percent_change_24h": 0.73679469,
        "percent_change_7d": 49.99299403,
        "market_cap": 33910699.681970984,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3640,
    "name": "Livepeer",
    "symbol": "LPT",
    "slug": "livepeer",
    "num_market_pairs": 4,
    "date_added": "2018-12-19T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 22906951,
    "circulating_supply": 21164655.33252989,
    "total_supply": 22859012.33252989,
    "platform": null,
    "cmc_rank": 315,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 1.5949049597198,
        "volume_24h": 160701.69580392,
        "percent_change_1h": -13.90726039,
        "percent_change_24h": -13.16263938,
        "percent_change_7d": 11.05552589,
        "market_cap": 33755613.76061203,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2829,
    "name": "REPO",
    "symbol": "REPO",
    "slug": "repo",
    "num_market_pairs": 1,
    "date_added": "2018-05-28T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 109958607,
    "total_supply": 356999900,
    "platform": null,
    "cmc_rank": 316,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.30448232750585,
        "volume_24h": 0,
        "percent_change_1h": -5.65217101,
        "percent_change_24h": -9.73873226,
        "percent_change_7d": 126.51156855,
        "market_cap": 33480452.588661052,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 3992,
    "name": "COTI",
    "symbol": "COTI",
    "slug": "coti",
    "num_market_pairs": 19,
    "date_added": "2019-06-04T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": 2000000000,
    "circulating_supply": 568032882.87,
    "total_supply": 2000000000,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "COTI-CBB"
    },
    "cmc_rank": 317,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.05823723003774,
        "volume_24h": 22850884.01974088,
        "percent_change_1h": 0.47718946,
        "percent_change_24h": 9.38963582,
        "percent_change_7d": 21.96484705,
        "market_cap": 33080661.66870081,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5007,
    "name": "TROY",
    "symbol": "TROY",
    "slug": "troy",
    "num_market_pairs": 13,
    "date_added": "2019-12-06T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 10000000000,
    "total_supply": 10000000000,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "TROY-9B8"
    },
    "cmc_rank": 318,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.00334785486624,
        "volume_24h": 1567562.7445543,
        "percent_change_1h": 1.92577266,
        "percent_change_24h": 6.6240356,
        "percent_change_7d": 39.81322401,
        "market_cap": 33478548.6624,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 7424,
    "name": "Hermez Network",
    "symbol": "HEZ",
    "slug": "hermez-network",
    "num_market_pairs": 4,
    "date_added": "2020-10-15T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 100000000,
    "circulating_supply": 4700000,
    "total_supply": 100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xeef9f339514298c6a857efcfc1a762af84438dee"
    },
    "cmc_rank": 319,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 7.00538298901825,
        "volume_24h": 2207388.38915009,
        "percent_change_1h": -2.16428259,
        "percent_change_24h": 1.2009404,
        "percent_change_7d": 43.60047533,
        "market_cap": 32925300.048385777,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 1903,
    "name": "HyperCash",
    "symbol": "HC",
    "slug": "hypercash",
    "num_market_pairs": 27,
    "date_added": "2017-08-20T00:00:00.000Z",
    "tags": [
      "mineable",
      "marketplace",
      "payments",
      "state-channels"
    ],
    "max_supply": 84000000,
    "circulating_supply": 44970692.545052,
    "total_supply": 44970692.545052,
    "platform": null,
    "cmc_rank": 320,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.73437091936885,
        "volume_24h": 15855299.1845077,
        "percent_change_1h": -2.18891971,
        "percent_change_24h": 0.29240638,
        "percent_change_7d": 18.19205162,
        "market_cap": 33025168.828963727,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 3666,
    "name": "Ultiledger",
    "symbol": "ULT",
    "slug": "ultiledger",
    "num_market_pairs": 9,
    "date_added": "2019-01-07T00:00:00.000Z",
    "tags": [
      "services"
    ],
    "max_supply": null,
    "circulating_supply": 2344828293.7869,
    "total_supply": 4500000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe884cc2795b9c45beeac0607da9539fd571ccf85"
    },
    "cmc_rank": 321,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.01382819602977,
        "volume_24h": 133939.39718161,
        "percent_change_1h": 2.967324,
        "percent_change_24h": 5.09010052,
        "percent_change_7d": 7.9402997,
        "market_cap": 32424745.302636374,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 7737,
    "name": "API3",
    "symbol": "API3",
    "slug": "api3",
    "num_market_pairs": 23,
    "date_added": "2020-11-21T00:00:00.000Z",
    "tags": [
      "oracles"
    ],
    "max_supply": 100000000,
    "circulating_supply": 13847549,
    "total_supply": 100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x0b38210ea11411557c13457D4dA7dC6ea731B88a"
    },
    "cmc_rank": 322,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 2.36991486378138,
        "volume_24h": 8235911.0381244,
        "percent_change_1h": -1.20330945,
        "percent_change_24h": 0.79250482,
        "percent_change_7d": 28.9065565,
        "market_cap": 32817512.20204098,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 4189,
    "name": "Ultra",
    "symbol": "UOS",
    "slug": "ultra",
    "num_market_pairs": 11,
    "date_added": "2019-07-30T00:00:00.000Z",
    "tags": [
      "platform",
      "collectibles-nfts",
      "gaming",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 282510439.1606,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c"
    },
    "cmc_rank": 323,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.11581294904172,
        "volume_24h": 559082.02945002,
        "percent_change_1h": 0.91872347,
        "percent_change_24h": -3.54583602,
        "percent_change_7d": -5.66918055,
        "market_cap": 32718367.094260506,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 6783,
    "name": "Axie Infinity",
    "symbol": "AXS",
    "slug": "axie-infinity",
    "num_market_pairs": 16,
    "date_added": "2020-08-31T00:00:00.000Z",
    "tags": [
      "collectibles-nfts",
      "gaming"
    ],
    "max_supply": 270000000,
    "circulating_supply": 53937510,
    "total_supply": 270000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xf5d669627376ebd411e34b98f19c868c8aba5ada"
    },
    "cmc_rank": 324,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.6133333950477,
        "volume_24h": 12318430.52706968,
        "percent_change_1h": -0.33186606,
        "percent_change_24h": -10.21487217,
        "percent_change_7d": 16.7388927,
        "market_cap": 33081676.12871927,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1700,
    "name": "Aeternity",
    "symbol": "AE",
    "slug": "aeternity",
    "num_market_pairs": 44,
    "date_added": "2017-06-01T00:00:00.000Z",
    "tags": [
      "mineable",
      "medium-of-exchange",
      "privacy"
    ],
    "max_supply": null,
    "circulating_supply": 328774900.5,
    "total_supply": 374595844.49932,
    "platform": null,
    "cmc_rank": 325,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.09815244178892,
        "volume_24h": 34860664.01892288,
        "percent_change_1h": -1.46686971,
        "percent_change_24h": 27.15538826,
        "percent_change_7d": 21.05458067,
        "market_cap": 32270059.282984216,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2363,
    "name": "Zap",
    "symbol": "ZAP",
    "slug": "zap",
    "num_market_pairs": 11,
    "date_added": "2018-01-11T00:00:00.000Z",
    "tags": [
      "defi",
      "oracles"
    ],
    "max_supply": null,
    "circulating_supply": 236144465,
    "total_supply": 520000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104"
    },
    "cmc_rank": 326,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.13779759800431,
        "volume_24h": 1801740.02535368,
        "percent_change_1h": -1.28657097,
        "percent_change_24h": -2.53064056,
        "percent_change_7d": 29.13939076,
        "market_cap": 32540140.05901285,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 5117,
    "name": "Origin Protocol",
    "symbol": "OGN",
    "slug": "origin-protocol",
    "num_market_pairs": 34,
    "date_added": "2020-01-09T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 201359109.02,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26"
    },
    "cmc_rank": 327,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.15865948032947,
        "volume_24h": 20919655.96914406,
        "percent_change_1h": -0.80670219,
        "percent_change_24h": -4.03900759,
        "percent_change_7d": 36.17602437,
        "market_cap": 31947531.596718296,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 5747,
    "name": "mStable USD",
    "symbol": "MUSD",
    "slug": "mstable-usd",
    "num_market_pairs": 6,
    "date_added": "2020-06-28T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 31872925.15808636,
    "total_supply": 31872925.15808636,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe2f2a5c287993345a840db3b0845fbc70f5935a5"
    },
    "cmc_rank": 328,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.9985947895655,
        "volume_24h": 2122417.89776607,
        "percent_change_1h": -1.2014996,
        "percent_change_24h": -0.26230643,
        "percent_change_7d": -0.60646864,
        "market_cap": 31828136.99107618,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 4228,
    "name": "Ferrum Network",
    "symbol": "FRM",
    "slug": "ferrum-network",
    "num_market_pairs": 11,
    "date_added": "2019-08-08T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": 331718750,
    "circulating_supply": 145200099.61178952,
    "total_supply": 329218749,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe5caef4af8780e59df925470b050fb23c43ca68c"
    },
    "cmc_rank": 329,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.22379813669324,
        "volume_24h": 2341297.3416023,
        "percent_change_1h": 4.41006148,
        "percent_change_24h": 12.07507732,
        "percent_change_7d": 59.50622343,
        "market_cap": 32495511.740791336,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2748,
    "name": "Loki",
    "symbol": "LOKI",
    "slug": "loki",
    "num_market_pairs": 8,
    "date_added": "2018-05-21T00:00:00.000Z",
    "tags": [
      "pos",
      "technology",
      "defi",
      "privacy",
      "masternodes"
    ],
    "max_supply": null,
    "circulating_supply": 52451031,
    "total_supply": 52451031,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "LOKI-6A9"
    },
    "cmc_rank": 330,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.60558811522486,
        "volume_24h": 37408.58703152,
        "percent_change_1h": 0.24688146,
        "percent_change_24h": 1.66741928,
        "percent_change_7d": 11.43466237,
        "market_cap": 31763721.004890703,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3664,
    "name": "AgaveCoin",
    "symbol": "AGVC",
    "slug": "agavecoin",
    "num_market_pairs": 8,
    "date_added": "2019-01-04T00:00:00.000Z",
    "tags": [
      "commodities",
      "discount-token"
    ],
    "max_supply": null,
    "circulating_supply": 390619593,
    "total_supply": 35000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8b79656FC38a04044E495e22fAD747126ca305C4"
    },
    "cmc_rank": 331,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.08132361773978,
        "volume_24h": 25391.51470594,
        "percent_change_1h": -0.32528482,
        "percent_change_24h": 4.97835693,
        "percent_change_7d": 22.0442591,
        "market_cap": 31766598.462800443,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 6990,
    "name": "SUN",
    "symbol": "SUN",
    "slug": "sun",
    "num_market_pairs": 40,
    "date_added": "2020-09-11T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 19900730,
    "circulating_supply": 4644723,
    "total_supply": 19900730,
    "platform": null,
    "cmc_rank": 332,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 6.84994395524252,
        "volume_24h": 82093384.51131748,
        "percent_change_1h": -0.52402917,
        "percent_change_24h": -1.66571301,
        "percent_change_7d": 9.62443643,
        "market_cap": 31816092.237625904,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5810,
    "name": "bZx Protocol",
    "symbol": "BZRX",
    "slug": "bzx-protocol",
    "num_market_pairs": 50,
    "date_added": "2020-07-06T00:00:00.000Z",
    "tags": [
      "defi",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 140610067,
    "total_supply": 1030000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x56d811088235F11C8920698a204A5010a788f4b3"
    },
    "cmc_rank": 333,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.22638845196714,
        "volume_24h": 21613243.06439508,
        "percent_change_1h": 4.55436883,
        "percent_change_24h": 2.07006237,
        "percent_change_7d": 38.97637411,
        "market_cap": 31832495.399125837,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 7133,
    "name": "Ducato Protocol Token",
    "symbol": "DUCATO",
    "slug": "ducato-protocol-token",
    "num_market_pairs": 5,
    "date_added": "2020-09-22T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 1270000,
    "total_supply": 50000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa117ea1c0c85CEf648df2b6f40e50bb5475C228d"
    },
    "cmc_rank": 334,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 24.75311585477843,
        "volume_24h": 725742.88672064,
        "percent_change_1h": 1.96267648,
        "percent_change_24h": 4.17921926,
        "percent_change_7d": -5.50639835,
        "market_cap": 31436457.135568604,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 4281,
    "name": "BHEX Token",
    "symbol": "BHT",
    "slug": "bhex-token",
    "num_market_pairs": 6,
    "date_added": "2019-08-25T00:00:00.000Z",
    "tags": [
      "marketplace",
      "centralized-exchange",
      "discount-token"
    ],
    "max_supply": null,
    "circulating_supply": 195639532.11163217,
    "total_supply": 1357691032.1116323,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xfc29b6e626b67776675fff55d5bc0452d042f434"
    },
    "cmc_rank": 335,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.1596230749452,
        "volume_24h": 0,
        "percent_change_1h": 0.02815083,
        "percent_change_24h": -8.71619891,
        "percent_change_7d": -3.65959396,
        "market_cap": 31228583.696498923,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 6981,
    "name": "New Year Bull",
    "symbol": "NYB",
    "slug": "new-year-bull",
    "num_market_pairs": 4,
    "date_added": "2020-09-09T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 210000000,
    "circulating_supply": 210000000,
    "total_supply": 210000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x798A9055a98913835bBFb45a0BbC209438dcFD97"
    },
    "cmc_rank": 336,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.14780872285254,
        "volume_24h": 0,
        "percent_change_1h": -0.41696344,
        "percent_change_24h": 2.78682611,
        "percent_change_7d": 64.29681214,
        "market_cap": 31039831.799033396,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 258,
    "name": "Groestlcoin",
    "symbol": "GRS",
    "slug": "groestlcoin",
    "num_market_pairs": 33,
    "date_added": "2014-04-11T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "groestl",
      "medium-of-exchange"
    ],
    "max_supply": 105000000,
    "circulating_supply": 76681688.88736624,
    "total_supply": 76681688.88736624,
    "platform": null,
    "cmc_rank": 337,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.40587473265529,
        "volume_24h": 22618522.37088782,
        "percent_change_1h": -4.59408362,
        "percent_change_24h": -11.57416813,
        "percent_change_7d": 7.41653496,
        "market_cap": 31123159.976715893,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 7857,
    "name": "Mirror Protocol",
    "symbol": "MIR",
    "slug": "mirror-protocol",
    "num_market_pairs": 7,
    "date_added": "2020-12-04T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 20369348.796194,
    "total_supply": 370575000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x09a3EcAFa817268f77BE1283176B946C4ff2E608"
    },
    "cmc_rank": 338,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 1.52496153850461,
        "volume_24h": 4953263.85947749,
        "percent_change_1h": -3.55437217,
        "percent_change_24h": -7.95787307,
        "percent_change_7d": 40.31394658,
        "market_cap": 31062473.478581026,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 4067,
    "name": "Cryptoindex.com 100",
    "symbol": "CIX100",
    "slug": "cryptoindex-com-100",
    "num_market_pairs": 2,
    "date_added": "2019-07-04T00:00:00.000Z",
    "tags": [
      "services",
      "ai-big-data"
    ],
    "max_supply": null,
    "circulating_supply": 62409479.63226125,
    "total_supply": 300000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x6393e822874728f8afa7e1c9944e417d37ca5878"
    },
    "cmc_rank": 339,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.49412965511179,
        "volume_24h": 9214.70458809,
        "percent_change_1h": 0.09382412,
        "percent_change_24h": 10.31105193,
        "percent_change_7d": 5.58481313,
        "market_cap": 30838374.646395534,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 1229,
    "name": "DigixDAO",
    "symbol": "DGD",
    "slug": "digixdao",
    "num_market_pairs": 11,
    "date_added": "2016-04-18T00:00:00.000Z",
    "tags": [
      "platform",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": null,
    "circulating_supply": 129249.77795405,
    "total_supply": 129249.77795405,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a"
    },
    "cmc_rank": 340,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 238.50689713724475,
        "volume_24h": 209308.06345661,
        "percent_change_1h": -1.48296917,
        "percent_change_24h": 3.61913274,
        "percent_change_7d": 65.74774076,
        "market_cap": 30826963.49549833,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2982,
    "name": "MVL",
    "symbol": "MVL",
    "slug": "mvl",
    "num_market_pairs": 9,
    "date_added": "2018-07-27T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 10676388856.738487,
    "total_supply": 30000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa849eaae994fb86afa73382e9bd88c2b6b18dc71"
    },
    "cmc_rank": 341,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.00283149633167,
        "volume_24h": 9457188.23759237,
        "percent_change_1h": -0.03097505,
        "percent_change_24h": 8.99564418,
        "percent_change_7d": 1.17356865,
        "market_cap": 30230155.88333749,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 372,
    "name": "Bytecoin",
    "symbol": "BCN",
    "slug": "bytecoin-bcn",
    "num_market_pairs": 13,
    "date_added": "2014-06-17T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "cryptonight",
      "medium-of-exchange",
      "privacy",
      "payments"
    ],
    "max_supply": 184470000000,
    "circulating_supply": 184066828814.05887,
    "total_supply": 184066828814.05887,
    "platform": null,
    "cmc_rank": 342,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.0001649594098,
        "volume_24h": 42234.61614632,
        "percent_change_1h": 0.77184972,
        "percent_change_24h": 12.2692458,
        "percent_change_7d": -1.60591586,
        "market_cap": 30363555.444924787,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 6950,
    "name": "Perpetual Protocol",
    "symbol": "PERP",
    "slug": "perpetual-protocol",
    "num_market_pairs": 10,
    "date_added": "2020-09-08T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 17780298.40495304,
    "total_supply": 150000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xbc396689893d065f41bc2c6ecbee5e0085233447"
    },
    "cmc_rank": 343,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 1.70967116291958,
        "volume_24h": 2162591.58294511,
        "percent_change_1h": 5.49562722,
        "percent_change_24h": 6.47614864,
        "percent_change_7d": 57.00686627,
        "market_cap": 30398463.451053217,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2633,
    "name": "Stakenet",
    "symbol": "XSN",
    "slug": "stakenet",
    "num_market_pairs": 4,
    "date_added": "2018-04-11T00:00:00.000Z",
    "tags": [
      "tpos",
      "x11"
    ],
    "max_supply": null,
    "circulating_supply": 110959831.43838307,
    "total_supply": 113043350.43796907,
    "platform": null,
    "cmc_rank": 344,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.27257403240241,
        "volume_24h": 133694.99904734,
        "percent_change_1h": 1.63422199,
        "percent_change_24h": 18.4800939,
        "percent_change_7d": 13.79566795,
        "market_cap": 30244768.68985178,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2620,
    "name": "Switcheo",
    "symbol": "SWTH",
    "slug": "switcheo",
    "num_market_pairs": 11,
    "date_added": "2018-03-31T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 1157585553.7299733,
    "total_supply": 1234458702.0291317,
    "platform": {
      "id": 1376,
      "name": "Neo",
      "symbol": "NEO",
      "slug": "neo",
      "token_address": "ab38352559b8b203bde5fddfa0b07d8b2525e132"
    },
    "cmc_rank": 345,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.02571130190049,
        "volume_24h": 90900.29893198,
        "percent_change_1h": -6.2471908,
        "percent_change_24h": -3.14581271,
        "percent_change_7d": 2.6520068,
        "market_cap": 29763031.647597235,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3704,
    "name": "v.systems",
    "symbol": "VSYS",
    "slug": "v-systems",
    "num_market_pairs": 41,
    "date_added": "2019-03-05T00:00:00.000Z",
    "tags": [
      "platform",
      "discount-token",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 2177841694,
    "total_supply": 4101450158,
    "platform": null,
    "cmc_rank": 346,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.0138034010661,
        "volume_24h": 5726459.34615329,
        "percent_change_1h": -1.90797206,
        "percent_change_24h": -6.77704067,
        "percent_change_7d": 9.20421214,
        "market_cap": 30061622.360756632,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3845,
    "name": "VIDT Datalink",
    "symbol": "VIDT",
    "slug": "vidt-datalink",
    "num_market_pairs": 13,
    "date_added": "2019-04-05T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 58501137,
    "circulating_supply": 49428303.18412282,
    "total_supply": 57386799,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xfeF4185594457050cC9c23980d301908FE057Bb1"
    },
    "cmc_rank": 347,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.60904129687795,
        "volume_24h": 1653915.36407528,
        "percent_change_1h": 3.72319513,
        "percent_change_24h": -3.85496789,
        "percent_change_7d": 6.91433808,
        "market_cap": 30103877.873734668,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 4113,
    "name": "UNI COIN",
    "symbol": "UNI",
    "slug": "uni-coin",
    "num_market_pairs": 1,
    "date_added": "2019-07-17T00:00:00.000Z",
    "tags": [
      "medium-of-exchange"
    ],
    "max_supply": null,
    "circulating_supply": 60009414.2366823,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe6877ea9c28fbdec631ffbc087956d0023a76bf2"
    },
    "cmc_rank": 348,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.49842211263776,
        "volume_24h": 0,
        "percent_change_1h": 0.00513951,
        "percent_change_24h": 0.00835545,
        "percent_change_7d": -0.05369013,
        "market_cap": 29910019.022001665,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 8100,
    "name": "ankrETH",
    "symbol": "aEth",
    "slug": "ankreth",
    "num_market_pairs": 2,
    "date_added": "2020-12-23T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 0,
    "circulating_supply": 29330,
    "total_supply": 29330.034,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xe95a203b1a91a908f9b9ce46459d101078c2c3cb"
    },
    "cmc_rank": 349,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 1009.1194915027007,
        "volume_24h": 286109.96309184,
        "percent_change_1h": -1.16899392,
        "percent_change_24h": -2.55278723,
        "percent_change_7d": 53.71707659,
        "market_cap": 29597474.68577421,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 7288,
    "name": "Venus",
    "symbol": "XVS",
    "slug": "venus",
    "num_market_pairs": 9,
    "date_added": "2020-10-05T00:00:00.000Z",
    "tags": [
      "defi",
      "binance-smart-chain"
    ],
    "max_supply": 30000000,
    "circulating_supply": 7563343,
    "total_supply": 30000000,
    "platform": {
      "id": 1839,
      "name": "Binance Smart Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63"
    },
    "cmc_rank": 350,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 3.93481915939153,
        "volume_24h": 7127747.65841425,
        "percent_change_1h": -4.093496,
        "percent_change_24h": -2.14268171,
        "percent_change_7d": 9.21476836,
        "market_cap": 29760386.94544981,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 6375,
    "name": "ASTA",
    "symbol": "ASTA",
    "slug": "asta",
    "num_market_pairs": 3,
    "date_added": "2020-08-07T00:00:00.000Z",
    "tags": [
      "ethereum"
    ],
    "max_supply": 3000000000,
    "circulating_supply": 774434801,
    "total_supply": 3000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xf2ddae89449b7d26309a5d54614b1fc99c608af5"
    },
    "cmc_rank": 351,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.03800182201028,
        "volume_24h": 3637559.0378588,
        "percent_change_1h": -4.1182335,
        "percent_change_24h": -4.74405923,
        "percent_change_7d": 169.15537756,
        "market_cap": 29429933.46616861,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 789,
    "name": "Nexus",
    "symbol": "NXS",
    "slug": "nexus",
    "num_market_pairs": 2,
    "date_added": "2015-01-25T00:00:00.000Z",
    "tags": [
      "mineable",
      "hybrid-pow-npos",
      "platform",
      "staking"
    ],
    "max_supply": 78000000,
    "circulating_supply": 69361659.612427,
    "total_supply": 69361659.612427,
    "platform": null,
    "cmc_rank": 352,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.41988839905637,
        "volume_24h": 865544.05694195,
        "percent_change_1h": 9.47234007,
        "percent_change_24h": 29.81924901,
        "percent_change_7d": 108.74974819,
        "market_cap": 29124156.21055485,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3835,
    "name": "Orbs",
    "symbol": "ORBS",
    "slug": "orbs",
    "num_market_pairs": 17,
    "date_added": "2019-04-03T00:00:00.000Z",
    "tags": [
      "services",
      "enterprise-solutions"
    ],
    "max_supply": null,
    "circulating_supply": 2229950518.201359,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa"
    },
    "cmc_rank": 353,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.01310637149344,
        "volume_24h": 1294339.5374269,
        "percent_change_1h": -1.33121719,
        "percent_change_24h": 1.8522547,
        "percent_change_7d": 2.64967861,
        "market_cap": 29226559.903536044,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 1788,
    "name": "Metal",
    "symbol": "MTL",
    "slug": "metal",
    "num_market_pairs": 24,
    "date_added": "2017-07-09T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "payments"
    ],
    "max_supply": 66588888,
    "circulating_supply": 65588845.12,
    "total_supply": 66588888,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xF433089366899D83a9f26A773D59ec7eCF30355e"
    },
    "cmc_rank": 354,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.44444245823077,
        "volume_24h": 21440717.76836298,
        "percent_change_1h": -3.29312368,
        "percent_change_24h": 3.59207577,
        "percent_change_7d": 13.60870977,
        "market_cap": 29150467.55765004,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3673,
    "name": "BitMax Token",
    "symbol": "BTMX",
    "slug": "bitmax-token",
    "num_market_pairs": 7,
    "date_added": "2019-01-08T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 660615274,
    "total_supply": 780615274,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xcca0c9c383076649604ee31b20248bc04fdf61ca"
    },
    "cmc_rank": 355,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.04347911022815,
        "volume_24h": 1922544.00177302,
        "percent_change_1h": 3.59810658,
        "percent_change_24h": 10.26957146,
        "percent_change_7d": 19.33117233,
        "market_cap": 28722964.316645514,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2763,
    "name": "Morpheus.Network",
    "symbol": "MRPH",
    "slug": "morpheus-network",
    "num_market_pairs": 10,
    "date_added": "2018-05-22T00:00:00.000Z",
    "tags": [
      "logistics",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 47180013.8588,
    "total_supply": 47897218,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x7b0c06043468469967dba22d1af33d77d44056c8"
    },
    "cmc_rank": 356,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.61016614463844,
        "volume_24h": 1529849.16629856,
        "percent_change_1h": 1.91337636,
        "percent_change_24h": 11.19757815,
        "percent_change_7d": 19.04501529,
        "market_cap": 28787647.160212167,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 4064,
    "name": "USDK",
    "symbol": "USDK",
    "slug": "usdk",
    "num_market_pairs": 38,
    "date_added": "2019-07-29T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": null,
    "circulating_supply": 28600072,
    "total_supply": 28600072,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x1c48f86ae57291f7686349f12601910bd8d470bb"
    },
    "cmc_rank": 357,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 1.00150110916382,
        "volume_24h": 368790483.0376709,
        "percent_change_1h": 0.52473793,
        "percent_change_24h": 0.74090888,
        "percent_change_7d": 0.26615541,
        "market_cap": 28643003.83016511,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 6210,
    "name": "The Sandbox",
    "symbol": "SAND",
    "slug": "the-sandbox",
    "num_market_pairs": 42,
    "date_added": "2020-08-05T00:00:00.000Z",
    "tags": [
      "collectibles-nfts",
      "content-creation",
      "gaming",
      "ethereum"
    ],
    "max_supply": 3000000000,
    "circulating_supply": 621771683.7133226,
    "total_supply": 3000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0"
    },
    "cmc_rank": 358,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.04596355872227,
        "volume_24h": 14320060.19614255,
        "percent_change_1h": -0.55824274,
        "percent_change_24h": 2.70325549,
        "percent_change_7d": 24.01878815,
        "market_cap": 28578839.296201997,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 2638,
    "name": "Cortex",
    "symbol": "CTXC",
    "slug": "cortex",
    "num_market_pairs": 25,
    "date_added": "2018-04-16T00:00:00.000Z",
    "tags": [
      "mineable",
      "platform",
      "iot",
      "smart-contracts"
    ],
    "max_supply": 299792458,
    "circulating_supply": 249938725.35,
    "total_supply": 299792458,
    "platform": null,
    "cmc_rank": 359,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.11478663672246,
        "volume_24h": 19578241.2182261,
        "percent_change_1h": 10.50342819,
        "percent_change_24h": 30.67576574,
        "percent_change_7d": 41.22622362,
        "market_cap": 28689625.669625156,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2071,
    "name": "Request",
    "symbol": "REQ",
    "slug": "request",
    "num_market_pairs": 25,
    "date_added": "2017-10-20T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "defi",
      "payments",
      "smart-contracts"
    ],
    "max_supply": 999983984,
    "circulating_supply": 999966001.2411803,
    "total_supply": 999966002.0851803,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8f8221afbb33998d8584a2b05749ba73c37a938a"
    },
    "cmc_rank": 360,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.02851396614388,
        "volume_24h": 580385.71456548,
        "percent_change_1h": 2.47704875,
        "percent_change_24h": 1.14614435,
        "percent_change_7d": -3.18247054,
        "market_cap": 28512996.704422083,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 3951,
    "name": "Pirate Chain",
    "symbol": "ARRR",
    "slug": "pirate-chain",
    "num_market_pairs": 12,
    "date_added": "2019-05-22T00:00:00.000Z",
    "tags": [
      "mineable"
    ],
    "max_supply": 200000000,
    "circulating_supply": 173140983,
    "total_supply": 173140983,
    "platform": null,
    "cmc_rank": 361,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.16530209633799,
        "volume_24h": 4768621.43512125,
        "percent_change_1h": -7.67085734,
        "percent_change_24h": -7.69311549,
        "percent_change_7d": -13.5065974,
        "market_cap": 28620567.45192029,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 7725,
    "name": "TrueFi",
    "symbol": "TRU",
    "slug": "trusttoken",
    "num_market_pairs": 5,
    "date_added": "2020-11-19T00:00:00.000Z",
    "tags": [
      "ethereum"
    ],
    "max_supply": 1450000000,
    "circulating_supply": 140608485,
    "total_supply": 1446312655,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784"
    },
    "cmc_rank": 362,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.20100204496783,
        "volume_24h": 614688.95852224,
        "percent_change_1h": -1.11574882,
        "percent_change_24h": 1.93545068,
        "percent_change_7d": 46.10145736,
        "market_cap": 28262593.02482845,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 6951,
    "name": "Reef",
    "symbol": "REEF",
    "slug": "reef",
    "num_market_pairs": 6,
    "date_added": "2020-09-08T00:00:00.000Z",
    "tags": [
      "substrate",
      "polkadot"
    ],
    "max_supply": null,
    "circulating_supply": 3026721973,
    "total_supply": 3965900953,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xfe3e6a25e6b192a42a44ecddcd13796471735acf"
    },
    "cmc_rank": 363,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.00938165492789,
        "volume_24h": 5445172.43204109,
        "percent_change_1h": -2.41413893,
        "percent_change_24h": -6.02299045,
        "percent_change_7d": -32.19256823,
        "market_cap": 28395661.113348395,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 3930,
    "name": "Thunder Token",
    "symbol": "TT",
    "slug": "thunder-token",
    "num_market_pairs": 13,
    "date_added": "2019-05-10T00:00:00.000Z",
    "tags": [
      "platform"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 5887903652.667712,
    "total_supply": 10000000000,
    "platform": null,
    "cmc_rank": 364,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.00475243883799,
        "volume_24h": 3576708.13910478,
        "percent_change_1h": -2.13233663,
        "percent_change_24h": -0.57527377,
        "percent_change_7d": -5.53959218,
        "market_cap": 27981901.99328122,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 3607,
    "name": "VestChain",
    "symbol": "VEST",
    "slug": "vestchain",
    "num_market_pairs": 2,
    "date_added": "2018-11-15T00:00:00.000Z",
    "tags": [
      "platform",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 3945951380.8970037,
    "total_supply": 3945951380.8970037,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x37f04d2c3ae075fad5483bb918491f656b12bdb6"
    },
    "cmc_rank": 365,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.00702783419265,
        "volume_24h": 56824.34936424,
        "percent_change_1h": 1.61447451,
        "percent_change_24h": 9.91086482,
        "percent_change_7d": -35.25923257,
        "market_cap": 27731492.037202448,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 6651,
    "name": "USDX [Kava]",
    "symbol": "USDX",
    "slug": "usdx-kava",
    "num_market_pairs": 1,
    "date_added": "2020-08-20T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 15645182,
    "circulating_supply": 31660907,
    "total_supply": 31660907,
    "platform": null,
    "cmc_rank": 366,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.87434047710914,
        "volume_24h": 166356.08824698,
        "percent_change_1h": -2.17837882,
        "percent_change_24h": -2.79561714,
        "percent_change_7d": -2.99622675,
        "market_cap": 27682412.53208811,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 4090,
    "name": "Wirex Token",
    "symbol": "WXT",
    "slug": "wirex-token",
    "num_market_pairs": 13,
    "date_added": "2019-07-09T00:00:00.000Z",
    "tags": [
      "asset-management",
      "payments"
    ],
    "max_supply": null,
    "circulating_supply": 3300500000.4848256,
    "total_supply": 10000000000,
    "platform": null,
    "cmc_rank": 367,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 0.00844721257956,
        "volume_24h": 426823.87332999,
        "percent_change_1h": -1.2358621,
        "percent_change_24h": -0.43517886,
        "percent_change_7d": -5.20329787,
        "market_cap": 27880025.122933205,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 2276,
    "name": "Ignis",
    "symbol": "IGNIS",
    "slug": "ignis",
    "num_market_pairs": 15,
    "date_added": "2017-12-13T00:00:00.000Z",
    "tags": [
      "platform",
      "payments",
      "state-channels"
    ],
    "max_supply": 999449694,
    "circulating_supply": 761143950,
    "total_supply": 999449694,
    "platform": null,
    "cmc_rank": 368,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.03620203702648,
        "volume_24h": 3861733.89678597,
        "percent_change_1h": -1.86668824,
        "percent_change_24h": -2.36879403,
        "percent_change_7d": 7.75843502,
        "market_cap": 27554961.46038124,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 6777,
    "name": "YEP COIN",
    "symbol": "YEP",
    "slug": "yep-coin",
    "num_market_pairs": 3,
    "date_added": "2020-09-28T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 70000000,
    "circulating_supply": 5625293.8975545,
    "total_supply": 12368093.18274026,
    "platform": null,
    "cmc_rank": 369,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 4.79889565191064,
        "volume_24h": 0,
        "percent_change_1h": -0.94915164,
        "percent_change_24h": -0.54581012,
        "percent_change_7d": 60.31127605,
        "market_cap": 26995198.425693747,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3928,
    "name": "IDEX",
    "symbol": "IDEX",
    "slug": "idex",
    "num_market_pairs": 13,
    "date_added": "2019-05-09T00:00:00.000Z",
    "tags": [
      "defi"
    ],
    "max_supply": null,
    "circulating_supply": 563671326.06647,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae"
    },
    "cmc_rank": 370,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.04701262467493,
        "volume_24h": 3429517.47889453,
        "percent_change_1h": 1.71383493,
        "percent_change_24h": 25.85551662,
        "percent_change_7d": 42.71650228,
        "market_cap": 26499668.49238304,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 2096,
    "name": "Ripio Credit Network",
    "symbol": "RCN",
    "slug": "ripio-credit-network",
    "num_market_pairs": 19,
    "date_added": "2017-10-26T00:00:00.000Z",
    "tags": [
      "services"
    ],
    "max_supply": null,
    "circulating_supply": 508404745.75,
    "total_supply": 999942647.353,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6"
    },
    "cmc_rank": 371,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.05247236933687,
        "volume_24h": 4072796.54912797,
        "percent_change_1h": -2.17988979,
        "percent_change_24h": 9.48029753,
        "percent_change_7d": 44.68393255,
        "market_cap": 26677201.59161149,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 5234,
    "name": "Metaverse Dualchain Network Architecture",
    "symbol": "DNA",
    "slug": "metaverse-dualchain-network-architecture",
    "num_market_pairs": 16,
    "date_added": "2020-02-15T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 20143656744,
    "total_supply": 100000000000,
    "platform": null,
    "cmc_rank": 372,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.00130794534885,
        "volume_24h": 472226.4263041,
        "percent_change_1h": -1.4041801,
        "percent_change_24h": 0.42158871,
        "percent_change_7d": 5.55570639,
        "market_cap": 26346802.147145733,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3801,
    "name": "BORA",
    "symbol": "BORA",
    "slug": "bora",
    "num_market_pairs": 7,
    "date_added": "2019-03-18T00:00:00.000Z",
    "tags": [
      "marketplace",
      "gaming",
      "wallet"
    ],
    "max_supply": null,
    "circulating_supply": 786994246.7790345,
    "total_supply": 1205750000,
    "platform": null,
    "cmc_rank": 373,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.03331126215341,
        "volume_24h": 17441494.95800229,
        "percent_change_1h": -3.06795471,
        "percent_change_24h": 9.46965165,
        "percent_change_7d": 12.45219895,
        "market_cap": 26215771.66768186,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 6952,
    "name": "Frax",
    "symbol": "FRAX",
    "slug": "frax",
    "num_market_pairs": 4,
    "date_added": "2020-09-08T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 26036651,
    "total_supply": 26036651,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x853d955acef822db058eb8505911ed77f175b99e"
    },
    "cmc_rank": 374,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.99520698088237,
        "volume_24h": 9023271.71653921,
        "percent_change_1h": -0.63761158,
        "percent_change_24h": 0.33657621,
        "percent_change_7d": -1.76090101,
        "market_cap": 25911856.83399794,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 3091,
    "name": "Sapien",
    "symbol": "SPN",
    "slug": "sapien",
    "num_market_pairs": 1,
    "date_added": "2018-08-06T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 221794159.673352,
    "total_supply": 500000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a"
    },
    "cmc_rank": 375,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.11720910555706,
        "volume_24h": 0,
        "percent_change_1h": -0.29259954,
        "percent_change_24h": 4.01998407,
        "percent_change_7d": 70.11173237,
        "market_cap": 25996295.073093336,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 2896,
    "name": "Mainframe",
    "symbol": "MFT",
    "slug": "mainframe",
    "num_market_pairs": 14,
    "date_added": "2018-07-05T00:00:00.000Z",
    "tags": [
      "platform",
      "content-creation",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 10000000000,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xdf2c7238198ad8b389666574f2d8bc411a4b7428"
    },
    "cmc_rank": 376,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.00260579977551,
        "volume_24h": 2212745.3868583,
        "percent_change_1h": -2.24708921,
        "percent_change_24h": 1.0723537,
        "percent_change_7d": 0.16465888,
        "market_cap": 26057997.7551,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 7431,
    "name": "Akash Network",
    "symbol": "AKT",
    "slug": "akash-network",
    "num_market_pairs": 2,
    "date_added": "2020-10-16T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 30334469.17024,
    "total_supply": 115370730.003597,
    "platform": null,
    "cmc_rank": 377,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.83929770866846,
        "volume_24h": 967502.60878368,
        "percent_change_1h": -1.2645022,
        "percent_change_24h": -1.17783691,
        "percent_change_7d": 6.15346418,
        "market_cap": 25459650.468256474,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3628,
    "name": "MXC",
    "symbol": "MXC",
    "slug": "mxc",
    "num_market_pairs": 13,
    "date_added": "2018-12-06T00:00:00.000Z",
    "tags": [
      "iot",
      "substrate"
    ],
    "max_supply": null,
    "circulating_supply": 2466238083.3783226,
    "total_supply": 2642132373,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x5ca381bbfb58f0092df149bd3d243b08b9a8386e"
    },
    "cmc_rank": 378,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.01035222593406,
        "volume_24h": 2447500.14177297,
        "percent_change_1h": -0.7527507,
        "percent_change_24h": -3.14820584,
        "percent_change_7d": -3.18655295,
        "market_cap": 25531053.846315503,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2092,
    "name": "NULS",
    "symbol": "NULS",
    "slug": "nuls",
    "num_market_pairs": 46,
    "date_added": "2017-10-25T00:00:00.000Z",
    "tags": [
      "mineable",
      "platform",
      "enterprise-solutions"
    ],
    "max_supply": 210000000,
    "circulating_supply": 99620739.3123732,
    "total_supply": 111697638.27680597,
    "platform": null,
    "cmc_rank": 379,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.25462366322843,
        "volume_24h": 19153481.14094364,
        "percent_change_1h": 0.66192077,
        "percent_change_24h": -8.76834497,
        "percent_change_7d": 19.92479566,
        "market_cap": 25365797.577240933,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 5798,
    "name": "Darwinia Network",
    "symbol": "RING",
    "slug": "darwinia-network",
    "num_market_pairs": 24,
    "date_added": "2020-07-02T00:00:00.000Z",
    "tags": [
      "gaming",
      "interoperability",
      "substrate"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 469149243.2702972,
    "total_supply": 2022439108.564209,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x9469d013805bffb7d3debe5e7839237e535ec483"
    },
    "cmc_rank": 380,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.05356624490253,
        "volume_24h": 4497700.5283519,
        "percent_change_1h": 0.12676189,
        "percent_change_24h": -6.48457273,
        "percent_change_7d": 22.82698571,
        "market_cap": 25130563.260853365,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 3012,
    "name": "VeThor Token",
    "symbol": "VTHO",
    "slug": "vethor-token",
    "num_market_pairs": 26,
    "date_added": "2018-07-30T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 31208269963,
    "total_supply": 31208269963,
    "platform": null,
    "cmc_rank": 381,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.00080131477565,
        "volume_24h": 3099968.20249173,
        "percent_change_1h": -0.28075433,
        "percent_change_24h": -0.98661407,
        "percent_change_7d": 13.46062192,
        "market_cap": 25007647.843825977,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 4134,
    "name": "Akropolis",
    "symbol": "AKRO",
    "slug": "akropolis",
    "num_market_pairs": 50,
    "date_added": "2019-07-19T00:00:00.000Z",
    "tags": [
      "defi",
      "substrate"
    ],
    "max_supply": null,
    "circulating_supply": 2349619035.714286,
    "total_supply": 4000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7"
    },
    "cmc_rank": 382,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.01064131966457,
        "volume_24h": 6766272.74292328,
        "percent_change_1h": -1.86803498,
        "percent_change_24h": -7.99240018,
        "percent_change_7d": 14.54799268,
        "market_cap": 25003047.24899443,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 3709,
    "name": "Grin",
    "symbol": "GRIN",
    "slug": "grin",
    "num_market_pairs": 46,
    "date_added": "2019-01-27T00:00:00.000Z",
    "tags": [
      "mineable",
      "medium-of-exchange",
      "privacy"
    ],
    "max_supply": null,
    "circulating_supply": 62254920,
    "total_supply": 62254920,
    "platform": null,
    "cmc_rank": 383,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.39911735819374,
        "volume_24h": 15554219.22270871,
        "percent_change_1h": -5.62027195,
        "percent_change_24h": -3.09864241,
        "percent_change_7d": 14.45679776,
        "market_cap": 24847019.20496263,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 5514,
    "name": "The Transfer Token",
    "symbol": "TTT",
    "slug": "the-transfer-token",
    "num_market_pairs": 4,
    "date_added": "2020-04-29T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 2000000000,
    "circulating_supply": 44458111,
    "total_supply": 2000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x2494a68C1484376fEf880b4c24D91f049d29B02A"
    },
    "cmc_rank": 384,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.55743129499411,
        "volume_24h": 678828.85747669,
        "percent_change_1h": -7.05039076,
        "percent_change_24h": -12.49891169,
        "percent_change_7d": -43.86007504,
        "market_cap": 24782342.38772189,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3702,
    "name": "Beam",
    "symbol": "BEAM",
    "slug": "beam",
    "num_market_pairs": 43,
    "date_added": "2019-01-17T00:00:00.000Z",
    "tags": [
      "mineable",
      "medium-of-exchange",
      "defi",
      "privacy",
      "mimble-wimble",
      "lelantusmw"
    ],
    "max_supply": 262800000,
    "circulating_supply": 78400440,
    "total_supply": 78400440,
    "platform": null,
    "cmc_rank": 385,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.31706119033917,
        "volume_24h": 9845161.20461356,
        "percent_change_1h": -0.06977122,
        "percent_change_24h": -5.67617538,
        "percent_change_7d": 9.19123659,
        "market_cap": 24857736.82951468,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1762,
    "name": "Ergo",
    "symbol": "ERG",
    "slug": "ergo",
    "num_market_pairs": 12,
    "date_added": "2017-06-29T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "platform",
      "dapp"
    ],
    "max_supply": 97739924,
    "circulating_supply": 26703103,
    "total_supply": 30006825,
    "platform": null,
    "cmc_rank": 386,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.91335572742102,
        "volume_24h": 1567543.39366352,
        "percent_change_1h": 8.59545954,
        "percent_change_24h": -8.79603904,
        "percent_change_7d": 34.43620264,
        "market_cap": 24389432.064963423,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 7617,
    "name": "saffron.finance",
    "symbol": "SFI",
    "slug": "saffron-finance",
    "num_market_pairs": 15,
    "date_added": "2020-11-09T00:00:00.000Z",
    "tags": [
      "defi",
      "yield-farming"
    ],
    "max_supply": null,
    "circulating_supply": 71073.00906013,
    "total_supply": 79533.60534965,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xb753428af26e81097e7fd17f40c88aaa3e04902c"
    },
    "cmc_rank": 387,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 339.6098113165235,
        "volume_24h": 2665935.54941487,
        "percent_change_1h": -1.34835537,
        "percent_change_24h": 1.15931437,
        "percent_change_7d": 79.90208904,
        "market_cap": 24137091.196608316,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 4206,
    "name": "WINk",
    "symbol": "WIN",
    "slug": "wink",
    "num_market_pairs": 23,
    "date_added": "2019-08-01T00:00:00.000Z",
    "tags": [
      "gambling"
    ],
    "max_supply": null,
    "circulating_supply": 313607571387,
    "total_supply": 994855928116.2562,
    "platform": {
      "id": 1958,
      "name": "Tron",
      "symbol": "TRX",
      "slug": "tron",
      "token_address": "TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7"
    },
    "cmc_rank": 388,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.00007668248548,
        "volume_24h": 2875581.53455097,
        "percent_change_1h": -0.7266076,
        "percent_change_24h": -0.90287879,
        "percent_change_7d": 26.29146893,
        "market_cap": 24048208.03930169,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3415,
    "name": "Buggyra Coin Zero",
    "symbol": "BCZERO",
    "slug": "buggyra-coin-zero",
    "num_market_pairs": 1,
    "date_added": "2018-10-09T00:00:00.000Z",
    "tags": [
      "transport"
    ],
    "max_supply": null,
    "circulating_supply": 2010775988.46,
    "total_supply": 10000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xd45247c07379d94904e0a87b4481f0a1ddfa0c64"
    },
    "cmc_rank": 389,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.01190908577967,
        "volume_24h": 0,
        "percent_change_1h": 0.0051395,
        "percent_change_24h": 0.00835545,
        "percent_change_7d": -0.05369013,
        "market_cap": 23946503.730270874,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 1925,
    "name": "Waltonchain",
    "symbol": "WTC",
    "slug": "waltonchain",
    "num_market_pairs": 40,
    "date_added": "2017-08-27T00:00:00.000Z",
    "tags": [
      "logistics",
      "iot"
    ],
    "max_supply": 100000000,
    "circulating_supply": 72133493,
    "total_supply": 100000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74"
    },
    "cmc_rank": 390,
    "last_updated": "2021-01-08T12:58:09.000Z",
    "quote": {
      "USD": {
        "price": 0.33030660154459,
        "volume_24h": 4176740.83409126,
        "percent_change_1h": 0.06921177,
        "percent_change_24h": -8.99546148,
        "percent_change_7d": 17.30547188,
        "market_cap": 23826168.930370472,
        "last_updated": "2021-01-08T12:58:09.000Z"
      }
    }
  },
  {
    "id": 3916,
    "name": "ThoreNext",
    "symbol": "THX",
    "slug": "thorenext",
    "num_market_pairs": 1,
    "date_added": "2019-05-17T00:00:00.000Z",
    "tags": [
      "medium-of-exchange",
      "payments"
    ],
    "max_supply": 210000000,
    "circulating_supply": 47950305,
    "total_supply": 210000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xf08c68bd5f4194d994fd70726746bf529ee5a617"
    },
    "cmc_rank": 391,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.49608241359869,
        "volume_24h": 7092.15147755,
        "percent_change_1h": -28.27213564,
        "percent_change_24h": -53.02800759,
        "percent_change_7d": 23.53108659,
        "market_cap": 23787303.037193332,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 4707,
    "name": "Nexxo",
    "symbol": "NEXXO",
    "slug": "nexxo",
    "num_market_pairs": 3,
    "date_added": "2019-09-27T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 214654883.5999756,
    "total_supply": 99999999999.99998,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xd98BD7bbd9cA9b4323448388AEC1f7c67F733980"
    },
    "cmc_rank": 392,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.10447448405019,
        "volume_24h": 2075.14988624,
        "percent_change_1h": 330.55836104,
        "percent_change_24h": 374.77290459,
        "percent_change_7d": 516.82948893,
        "market_cap": 22425958.21296104,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 5475,
    "name": "GHOSTPRISM",
    "symbol": "GHOST",
    "slug": "ghostprism",
    "num_market_pairs": 5,
    "date_added": "2020-04-17T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 175000000,
    "circulating_supply": 3412256.82166846,
    "total_supply": 3412256.82166846,
    "platform": null,
    "cmc_rank": 393,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 6.95729940386712,
        "volume_24h": 216426.23758071,
        "percent_change_1h": 1.47903675,
        "percent_change_24h": 8.419852,
        "percent_change_7d": 37.47598195,
        "market_cap": 23740092.35123549,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3829,
    "name": "Nash Exchange",
    "symbol": "NEX",
    "slug": "nash-exchange",
    "num_market_pairs": 5,
    "date_added": "2019-04-01T00:00:00.000Z",
    "tags": [
      "marketplace",
      "decentralized-exchange",
      "defi"
    ],
    "max_supply": 50000000,
    "circulating_supply": 29166201,
    "total_supply": 50000000,
    "platform": {
      "id": 1376,
      "name": "Neo",
      "symbol": "NEO",
      "slug": "neo",
      "token_address": "3a4acd3647086e7c44398aac0349802e6a171129"
    },
    "cmc_rank": 394,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.78635002163015,
        "volume_24h": 285790.05726493,
        "percent_change_1h": -2.01346285,
        "percent_change_24h": -4.8212996,
        "percent_change_7d": 0.08412554,
        "market_cap": 22934842.7872193,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5481,
    "name": "BASIC",
    "symbol": "BASIC",
    "slug": "basic",
    "num_market_pairs": 4,
    "date_added": "2020-04-20T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 10000000000,
    "circulating_supply": 3561833961.234081,
    "total_supply": 8326258166.69,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xf25c91c87e0b1fd9b4064af0f427157aab0193a7"
    },
    "cmc_rank": 395,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.00665351989907,
        "volume_24h": 1798346.28549498,
        "percent_change_1h": -0.44098398,
        "percent_change_24h": 0.62332036,
        "percent_change_7d": -1.0966083,
        "market_cap": 23698733.13825428,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 4217,
    "name": "BOSAGORA",
    "symbol": "BOA",
    "slug": "bosagora",
    "num_market_pairs": 5,
    "date_added": "2019-08-05T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 297595030.7367921,
    "total_supply": 450000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x746dda2ea243400d5a63e0700f190ab79f06489e"
    },
    "cmc_rank": 396,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.07911459437039,
        "volume_24h": 1522385.18572729,
        "percent_change_1h": -2.55241152,
        "percent_change_24h": 2.50191342,
        "percent_change_7d": -7.25005785,
        "market_cap": 23544110.143385053,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 6735,
    "name": "Nexalt",
    "symbol": "XLT",
    "slug": "nexalt",
    "num_market_pairs": 3,
    "date_added": "2020-08-28T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 100800000,
    "circulating_supply": 19875997.75013277,
    "total_supply": 19875997.75013277,
    "platform": null,
    "cmc_rank": 397,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 1.18530691261539,
        "volume_24h": 447336.41842043,
        "percent_change_1h": 4.23069591,
        "percent_change_24h": -19.9794871,
        "percent_change_7d": -41.9645047,
        "market_cap": 23559157.528360307,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2882,
    "name": "0Chain",
    "symbol": "ZCN",
    "slug": "0chain",
    "num_market_pairs": 4,
    "date_added": "2018-07-02T00:00:00.000Z",
    "tags": [
      "platform",
      "ai-big-data",
      "distributed-computing",
      "filesharing",
      "iot"
    ],
    "max_supply": 400000000,
    "circulating_supply": 48400982,
    "total_supply": 200000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xb9ef770b6a5e12e45983c5d80545258aa38f3b78"
    },
    "cmc_rank": 398,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.48315971684864,
        "volume_24h": 315894.5825973,
        "percent_change_1h": 0.54349898,
        "percent_change_24h": -1.77659454,
        "percent_change_7d": 31.55992307,
        "market_cap": 23385404.758316122,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 6588,
    "name": "Etherisc DIP Token",
    "symbol": "DIP",
    "slug": "etherisc",
    "num_market_pairs": 6,
    "date_added": "2020-08-14T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 1000000000,
    "circulating_supply": 172510488.6008212,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xc719d010b63e5bbf2c0551872cd5316ed26acd83"
    },
    "cmc_rank": 399,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.13326562503618,
        "volume_24h": 901181.73119873,
        "percent_change_1h": -4.67682152,
        "percent_change_24h": 1.60350617,
        "percent_change_7d": 15.12626703,
        "market_cap": 22989718.08868524,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 4033,
    "name": "Native Utility Token",
    "symbol": "NUT",
    "slug": "native-utility-token",
    "num_market_pairs": 5,
    "date_added": "2020-08-17T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 982854,
    "total_supply": 9998686,
    "platform": {
      "id": 1765,
      "name": "EOS",
      "symbol": "EOS",
      "slug": "eos",
      "token_address": "eosdtnutoken"
    },
    "cmc_rank": 400,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 23.90295663149025,
        "volume_24h": 313.40136368,
        "percent_change_1h": 0.05407957,
        "percent_change_24h": -0.2177327,
        "percent_change_7d": 0.25639261,
        "market_cap": 23493116.53708672,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5906,
    "name": "NerveNetwork",
    "symbol": "NVT",
    "slug": "nervenetwork",
    "num_market_pairs": 6,
    "date_added": "2020-07-27T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 2100000000,
    "circulating_supply": 268744661.3255158,
    "total_supply": 1119698463.428516,
    "platform": null,
    "cmc_rank": 401,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.08530664141354,
        "volume_24h": 283906.38614694,
        "percent_change_1h": -2.59169692,
        "percent_change_24h": -0.83178234,
        "percent_change_7d": 0.35307764,
        "market_cap": 22925704.455499027,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 7824,
    "name": "Vai",
    "symbol": "VAI",
    "slug": "vai",
    "num_market_pairs": 1,
    "date_added": "2020-12-01T00:00:00.000Z",
    "tags": [
      "defi",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": 0,
    "circulating_supply": 24085545,
    "total_supply": 24085545,
    "platform": null,
    "cmc_rank": 402,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.95416695958744,
        "volume_24h": 465341.40710711,
        "percent_change_1h": -1.54316487,
        "percent_change_24h": -1.37409623,
        "percent_change_7d": -3.83397512,
        "market_cap": 22981631.24265647,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 8085,
    "name": "stETH (Lido)",
    "symbol": "STETH",
    "slug": "steth",
    "num_market_pairs": 1,
    "date_added": "2020-12-23T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 0,
    "circulating_supply": 18932.24870315,
    "total_supply": 18932.24870315,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"
    },
    "cmc_rank": 403,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 1197.4362675623368,
        "volume_24h": 47484.701388,
        "percent_change_1h": -4.27508798,
        "percent_change_24h": 2.5939921,
        "percent_change_7d": 63.38447251,
        "market_cap": 22670161.223661825,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 5815,
    "name": "BitcoinPoS",
    "symbol": "BPS",
    "slug": "bitcoinpos",
    "num_market_pairs": 10,
    "date_added": "2020-07-07T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 21000000,
    "circulating_supply": 3965308.1300042,
    "total_supply": 4176762,
    "platform": null,
    "cmc_rank": 404,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 5.75207302335711,
        "volume_24h": 3306240.49547102,
        "percent_change_1h": -12.26873488,
        "percent_change_24h": -20.22845069,
        "percent_change_7d": -34.68698712,
        "market_cap": 22808741.923895787,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 2873,
    "name": "Metronome",
    "symbol": "MET",
    "slug": "metronome",
    "num_market_pairs": 10,
    "date_added": "2018-06-26T00:00:00.000Z",
    "tags": [
      "platform",
      "defi",
      "payments",
      "wallet"
    ],
    "max_supply": null,
    "circulating_supply": 11339308.61847411,
    "total_supply": 12673257.61847411,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e"
    },
    "cmc_rank": 405,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 2.00784570849579,
        "volume_24h": 79502.70275178,
        "percent_change_1h": 0.05305384,
        "percent_change_24h": -0.20768916,
        "percent_change_7d": 57.68361972,
        "market_cap": 22767582.146912567,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 5049,
    "name": "VerusCoin",
    "symbol": "VRSC",
    "slug": "veruscoin",
    "num_market_pairs": 6,
    "date_added": "2020-06-12T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 60106344.80592461,
    "total_supply": 60106344.80592461,
    "platform": null,
    "cmc_rank": 406,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.39193521049171,
        "volume_24h": 87334.75530465,
        "percent_change_1h": 8.78346395,
        "percent_change_24h": -2.51953011,
        "percent_change_7d": 21.3774534,
        "market_cap": 23557792.903397363,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 89,
    "name": "Mooncoin",
    "symbol": "MOON",
    "slug": "mooncoin",
    "num_market_pairs": 4,
    "date_added": "2014-01-06T00:00:00.000Z",
    "tags": [
      "mineable",
      "pow",
      "scrypt"
    ],
    "max_supply": null,
    "circulating_supply": 227355894940.76654,
    "total_supply": 227355894940.76654,
    "platform": null,
    "cmc_rank": 407,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.0000999768876,
        "volume_24h": 102.73590936,
        "percent_change_1h": -0.30035031,
        "percent_change_24h": 4.0946547,
        "percent_change_7d": 125.37074641,
        "market_cap": 22730334.753690425,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 4807,
    "name": "CertiK",
    "symbol": "CTK",
    "slug": "certik",
    "num_market_pairs": 6,
    "date_added": "2019-10-19T00:00:00.000Z",
    "tags": [
      "cybersecurity",
      "enterprise-solutions",
      "interoperability",
      "scaling",
      "smart-contracts",
      "cosmos"
    ],
    "max_supply": null,
    "circulating_supply": 25268707.361456,
    "total_supply": 100756259.257929,
    "platform": {
      "id": 1839,
      "name": "Binance Smart Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929"
    },
    "cmc_rank": 408,
    "last_updated": "2021-01-08T12:58:06.000Z",
    "quote": {
      "USD": {
        "price": 0.89647720646373,
        "volume_24h": 8158841.65228991,
        "percent_change_1h": -0.56415985,
        "percent_change_24h": -4.77175013,
        "percent_change_7d": 1.33779648,
        "market_cap": 22652820.186347563,
        "last_updated": "2021-01-08T12:58:06.000Z"
      }
    }
  },
  {
    "id": 1169,
    "name": "PIVX",
    "symbol": "PIVX",
    "slug": "pivx",
    "num_market_pairs": 23,
    "date_added": "2016-02-13T00:00:00.000Z",
    "tags": [
      "pos",
      "medium-of-exchange",
      "store-of-value",
      "privacy",
      "zero-knowledge-proofs",
      "masternodes",
      "staking",
      "dao"
    ],
    "max_supply": null,
    "circulating_supply": 65106342.20612069,
    "total_supply": 65106342.20612069,
    "platform": null,
    "cmc_rank": 409,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.34759255710781,
        "volume_24h": 581462.63886709,
        "percent_change_1h": -0.52268328,
        "percent_change_24h": 0.63812495,
        "percent_change_7d": 4.04545201,
        "market_cap": 22630479.971361626,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 1750,
    "name": "GXChain",
    "symbol": "GXC",
    "slug": "gxchain",
    "num_market_pairs": 26,
    "date_added": "2017-06-25T00:00:00.000Z",
    "tags": [
      "platform",
      "decentralized-exchange"
    ],
    "max_supply": 100000000,
    "circulating_supply": 70000000,
    "total_supply": 99889860.27341,
    "platform": null,
    "cmc_rank": 410,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.32065687795678,
        "volume_24h": 11301305.5708733,
        "percent_change_1h": -1.67749289,
        "percent_change_24h": -6.84110462,
        "percent_change_7d": 8.50338316,
        "market_cap": 22445981.4569746,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2447,
    "name": "Crypterium",
    "symbol": "CRPT",
    "slug": "crpt",
    "num_market_pairs": 8,
    "date_added": "2018-01-22T00:00:00.000Z",
    "tags": [
      "services",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 84430267,
    "total_supply": 99427818,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x08389495D7456E1951ddF7c3a1314A4bfb646d8B"
    },
    "cmc_rank": 411,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.25972006688702,
        "volume_24h": 363373.0953048,
        "percent_change_1h": 0.06556098,
        "percent_change_24h": 9.20834914,
        "percent_change_7d": -8.29882877,
        "market_cap": 21928234.592528958,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2907,
    "name": "Karatgold Coin",
    "symbol": "KBC",
    "slug": "karatgold-coin",
    "num_market_pairs": 12,
    "date_added": "2018-07-06T00:00:00.000Z",
    "tags": [
      "store-of-value",
      "stablecoin",
      "stablecoin-asset-backed"
    ],
    "max_supply": null,
    "circulating_supply": 4728252687.008605,
    "total_supply": 12000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xf3586684107ce0859c44aa2b2e0fb8cd8731a15a"
    },
    "cmc_rank": 412,
    "last_updated": "2021-01-08T12:58:07.000Z",
    "quote": {
      "USD": {
        "price": 0.00465463353263,
        "volume_24h": 0,
        "percent_change_1h": 472.05592557,
        "percent_change_24h": 514.56672627,
        "percent_change_7d": 44.07245955,
        "market_cap": 22008283.507698152,
        "last_updated": "2021-01-08T12:58:07.000Z"
      }
    }
  },
  {
    "id": 201,
    "name": "Einsteinium",
    "symbol": "EMC2",
    "slug": "einsteinium",
    "num_market_pairs": 4,
    "date_added": "2014-04-09T00:00:00.000Z",
    "tags": [
      "mineable",
      "technology",
      "crowdfunding",
      "research"
    ],
    "max_supply": null,
    "circulating_supply": 221142208.49999923,
    "total_supply": 221142208.49999923,
    "platform": null,
    "cmc_rank": 413,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.09880274852236,
        "volume_24h": 7372818.62344489,
        "percent_change_1h": -2.787287,
        "percent_change_24h": -6.78975311,
        "percent_change_7d": 8.24286588,
        "market_cap": 21849458.014104724,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3626,
    "name": "RSK Smart Bitcoin",
    "symbol": "RBTC",
    "slug": "rsk-smart-bitcoin",
    "num_market_pairs": 4,
    "date_added": "2018-12-05T00:00:00.000Z",
    "tags": [
      "mineable"
    ],
    "max_supply": null,
    "circulating_supply": 550.40083933,
    "total_supply": 20999763.5577,
    "platform": null,
    "cmc_rank": 414,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 39580.84726124301,
        "volume_24h": 84091.23248656,
        "percent_change_1h": -0.27611356,
        "percent_change_24h": 4.6345269,
        "percent_change_7d": 37.506404,
        "market_cap": 21785331.55398069,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 7150,
    "name": "Flamingo",
    "symbol": "FLM",
    "slug": "flamingo",
    "num_market_pairs": 15,
    "date_added": "2020-09-29T00:00:00.000Z",
    "tags": [
      "dao",
      "yield-farming",
      "binance-chain"
    ],
    "max_supply": null,
    "circulating_supply": 150000000,
    "total_supply": 150000000,
    "platform": {
      "id": 1376,
      "name": "Neo",
      "symbol": "NEO",
      "slug": "neo",
      "token_address": "4d9eab13620fe3569ba3b0e56e2877739e4145e3"
    },
    "cmc_rank": 415,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.14397620721542,
        "volume_24h": 10575550.41172527,
        "percent_change_1h": -1.41827842,
        "percent_change_24h": -5.36403614,
        "percent_change_7d": 13.91654515,
        "market_cap": 21596431.082313,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 7455,
    "name": "Audius",
    "symbol": "AUDIO",
    "slug": "audius",
    "num_market_pairs": 10,
    "date_added": "2020-10-20T00:00:00.000Z",
    "tags": [
      "music"
    ],
    "max_supply": null,
    "circulating_supply": 120000000,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x18aaa7115705e8be94bffebde57af9bfc265b998"
    },
    "cmc_rank": 416,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.18119453361158,
        "volume_24h": 2795567.63075964,
        "percent_change_1h": -2.62734227,
        "percent_change_24h": 4.6120325,
        "percent_change_7d": 17.4017048,
        "market_cap": 21743344.033389598,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 3344,
    "name": "Ecoreal Estate",
    "symbol": "ECOREAL",
    "slug": "ecoreal-estate",
    "num_market_pairs": 2,
    "date_added": "2018-09-25T00:00:00.000Z",
    "tags": [
      "real-estate",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 208951604.6268015,
    "total_supply": 1000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xb052f8a33d8bb068414eade06af6955199f9f010"
    },
    "cmc_rank": 417,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.10368781299051,
        "volume_24h": 1555.32090507,
        "percent_change_1h": 0.58967707,
        "percent_change_24h": -0.02985414,
        "percent_change_7d": 119.7461312,
        "market_cap": 21665734.904610775,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 5548,
    "name": "Massnet",
    "symbol": "MASS",
    "slug": "massnet",
    "num_market_pairs": 5,
    "date_added": "2020-05-18T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 206438400,
    "circulating_supply": 88501067.84578633,
    "total_supply": 88501067.84578633,
    "platform": null,
    "cmc_rank": 418,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.2423095693219,
        "volume_24h": 981001.18847208,
        "percent_change_1h": -0.63888974,
        "percent_change_24h": 7.69157142,
        "percent_change_7d": 115.17963299,
        "market_cap": 21444655.63424074,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3115,
    "name": "Maximine Coin",
    "symbol": "MXM",
    "slug": "maximine-coin",
    "num_market_pairs": 1,
    "date_added": "2018-08-07T00:00:00.000Z",
    "tags": [
      "platform",
      "distributed-computing",
      "staking"
    ],
    "max_supply": null,
    "circulating_supply": 1649000000,
    "total_supply": 16000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x8e766f57f7d16ca50b4a0b90b88f6468a09b0439"
    },
    "cmc_rank": 419,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.0130110190046,
        "volume_24h": 0,
        "percent_change_1h": 0.00513951,
        "percent_change_24h": 0.00835545,
        "percent_change_7d": -0.05491309,
        "market_cap": 21455170.3385854,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 4039,
    "name": "ARPA Chain",
    "symbol": "ARPA",
    "slug": "arpa-chain",
    "num_market_pairs": 40,
    "date_added": "2019-07-15T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 937826306.2857141,
    "total_supply": 1500000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xba50933c268f567bdc86e1ac131be072c6b0b71a"
    },
    "cmc_rank": 420,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.02279382908157,
        "volume_24h": 15892006.76741446,
        "percent_change_1h": -1.63400029,
        "percent_change_24h": -8.76470145,
        "percent_change_7d": -8.05595765,
        "market_cap": 21376652.533676684,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 1886,
    "name": "Dent",
    "symbol": "DENT",
    "slug": "dent",
    "num_market_pairs": 32,
    "date_added": "2017-08-12T00:00:00.000Z",
    "tags": [
      "services"
    ],
    "max_supply": null,
    "circulating_supply": 87475941182.73587,
    "total_supply": 100000000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x3597bfd533a99c9aa083587b074434e61eb0a258"
    },
    "cmc_rank": 421,
    "last_updated": "2021-01-08T12:58:08.000Z",
    "quote": {
      "USD": {
        "price": 0.00024603740596,
        "volume_24h": 1000884.54085449,
        "percent_change_1h": 2.41827263,
        "percent_change_24h": 5.48184087,
        "percent_change_7d": 24.89910376,
        "market_cap": 21522353.65250987,
        "last_updated": "2021-01-08T12:58:08.000Z"
      }
    }
  },
  {
    "id": 2212,
    "name": "Quantstamp",
    "symbol": "QSP",
    "slug": "quantstamp",
    "num_market_pairs": 8,
    "date_added": "2017-11-21T00:00:00.000Z",
    "tags": [
      "cybersecurity",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 713801946.7046682,
    "total_supply": 976442388.321185,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d"
    },
    "cmc_rank": 422,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.02991746732095,
        "volume_24h": 549873.43284441,
        "percent_change_1h": 1.48065963,
        "percent_change_24h": 1.86281027,
        "percent_change_7d": 9.45571589,
        "market_cap": 21355146.414167404,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2538,
    "name": "Nectar",
    "symbol": "NEC",
    "slug": "nectar",
    "num_market_pairs": 7,
    "date_added": "2018-02-21T00:00:00.000Z",
    "tags": [
      "marketplace",
      "defi",
      "payments",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 157517509.91455707,
    "total_supply": 618133330.1078719,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xcc80c051057b774cd75067dc48f8987c4eb97a5e"
    },
    "cmc_rank": 423,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.13316176143097,
        "volume_24h": 35108.43943295,
        "percent_change_1h": -1.71782945,
        "percent_change_24h": -1.2852591,
        "percent_change_7d": 98.0386788,
        "market_cap": 20975309.0764427,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2297,
    "name": "StormX",
    "symbol": "STMX",
    "slug": "stormx",
    "num_market_pairs": 13,
    "date_added": "2017-12-20T00:00:00.000Z",
    "tags": [
      "media",
      "loyalty"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 7882689847.712538,
    "total_supply": 9566788815.922813,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xbE9375C6a420D2eEB258962efB95551A5b722803"
    },
    "cmc_rank": 424,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.00266260307743,
        "volume_24h": 2753121.47018456,
        "percent_change_1h": -0.01855078,
        "percent_change_24h": -1.49856269,
        "percent_change_7d": 11.34721772,
        "market_cap": 20988474.24694562,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 5354,
    "name": "PEAKDEFI",
    "symbol": "PEAK",
    "slug": "peakdefi",
    "num_market_pairs": 7,
    "date_added": "2020-03-23T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 0,
    "circulating_supply": 76645077,
    "total_supply": 480565359,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x630d98424efe0ea27fb1b3ab7741907dffeaad78"
    },
    "cmc_rank": 425,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.27159951105771,
        "volume_24h": 338939.8601241,
        "percent_change_1h": -0.50576414,
        "percent_change_24h": 3.0579471,
        "percent_change_7d": 2.83172628,
        "market_cap": 20816765.438180536,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 7576,
    "name": "HARD Protocol",
    "symbol": "HARD",
    "slug": "hard-protocol",
    "num_market_pairs": 15,
    "date_added": "2020-11-02T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 40000000,
    "total_supply": 200000000,
    "platform": null,
    "cmc_rank": 426,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.52044687289931,
        "volume_24h": 7988602.47574507,
        "percent_change_1h": -3.00166358,
        "percent_change_24h": -6.78611411,
        "percent_change_7d": 8.12710789,
        "market_cap": 20817874.9159724,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 1159,
    "name": "SaluS",
    "symbol": "SLS",
    "slug": "salus",
    "num_market_pairs": 3,
    "date_added": "2016-01-22T00:00:00.000Z",
    "tags": [
      "hybrid-pow-pos",
      "scrypt",
      "marketplace",
      "staking"
    ],
    "max_supply": null,
    "circulating_supply": 1012265.2714843,
    "total_supply": 1012265.2714843,
    "platform": null,
    "cmc_rank": 427,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 20.55723144151705,
        "volume_24h": 7137.43450709,
        "percent_change_1h": 1.34784241,
        "percent_change_24h": -10.65927035,
        "percent_change_7d": 69.75186741,
        "market_cap": 20809371.466112845,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 2505,
    "name": "Bluzelle",
    "symbol": "BLZ",
    "slug": "bluzelle",
    "num_market_pairs": 28,
    "date_added": "2018-02-06T00:00:00.000Z",
    "tags": [
      "platform",
      "distributed-computing",
      "filesharing",
      "smart-contracts"
    ],
    "max_supply": null,
    "circulating_supply": 256401415.07717365,
    "total_supply": 500000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x5732046a883704404f284ce41ffadd5b007fd668"
    },
    "cmc_rank": 428,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 0.08115631863067,
        "volume_24h": 8106684.43141356,
        "percent_change_1h": 1.61673414,
        "percent_change_24h": -9.69119226,
        "percent_change_7d": 21.24426428,
        "market_cap": 20808594.93935778,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 3721,
    "name": "Huobi Pool Token",
    "symbol": "HPT",
    "slug": "huobi-pool-token",
    "num_market_pairs": 10,
    "date_added": "2019-02-01T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 5718813592.433937,
    "total_supply": 9748870538.406,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xa66daa57432024023db65477ba87d4e7f5f95213"
    },
    "cmc_rank": 429,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.00363043284669,
        "volume_24h": 1158226.87603006,
        "percent_change_1h": 0.10401321,
        "percent_change_24h": -0.89425681,
        "percent_change_7d": 0.79608403,
        "market_cap": 20761768.710069403,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 7236,
    "name": "Celo Dollar",
    "symbol": "CUSD",
    "slug": "celo-dollar",
    "num_market_pairs": 4,
    "date_added": "2020-09-29T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 1000000000000000,
    "circulating_supply": 20662338.13803686,
    "total_supply": 20662338.13803686,
    "platform": null,
    "cmc_rank": 430,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 0.99833590095311,
        "volume_24h": 298008.95517882,
        "percent_change_1h": -0.35825036,
        "percent_change_24h": -0.78848684,
        "percent_change_7d": 0.0406987,
        "market_cap": 20627953.96083483,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 7202,
    "name": "OctoFi",
    "symbol": "OCTO",
    "slug": "octofi",
    "num_market_pairs": 6,
    "date_added": "2020-09-28T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": null,
    "circulating_supply": 570363.91122234,
    "total_supply": 800000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x7240aC91f01233BaAf8b064248E80feaA5912BA3"
    },
    "cmc_rank": 431,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 35.89199152045321,
        "volume_24h": 2052879.21480436,
        "percent_change_1h": -0.1182172,
        "percent_change_24h": 15.68753383,
        "percent_change_7d": 32.8049126,
        "market_cap": 20471496.665164754,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },
  {
    "id": 5320,
    "name": "Bonorum",
    "symbol": "BONO",
    "slug": "bonorum",
    "num_market_pairs": 3,
    "date_added": "2020-03-16T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 35000000,
    "circulating_supply": 669149.48660298,
    "total_supply": 722539.50642113,
    "platform": null,
    "cmc_rank": 432,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 30.63230791900216,
        "volume_24h": 4805.88190858,
        "percent_change_1h": -4.75806388,
        "percent_change_24h": -71.54187646,
        "percent_change_7d": -44.54994882,
        "market_cap": 20497593.11746469,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 5228,
    "name": "Galatasaray Fan Token",
    "symbol": "GAL",
    "slug": "galatasaray-fan-token",
    "num_market_pairs": 2,
    "date_added": "2020-06-08T00:00:00.000Z",
    "tags": [
      "fan-token"
    ],
    "max_supply": null,
    "circulating_supply": 3507572,
    "total_supply": 10000000,
    "platform": {
      "id": 4066,
      "name": "Chiliz",
      "symbol": "CHZ",
      "slug": "chiliz",
      "token_address": "0x73f309e94d836bab473b1ebc0103a3dcd7daeaa9"
    },
    "cmc_rank": 433,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 5.80766746610598,
        "volume_24h": 5508596.96831637,
        "percent_change_1h": -0.83809994,
        "percent_change_24h": -1.2085763,
        "percent_change_7d": -13.8943426,
        "market_cap": 20370811.789424285,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 1492,
    "name": "Obyte",
    "symbol": "GBYTE",
    "slug": "obyte",
    "num_market_pairs": 5,
    "date_added": "2016-12-27T00:00:00.000Z",
    "tags": [
      
    ],
    "max_supply": 1000000,
    "circulating_supply": 753680.68743692,
    "total_supply": 1000000,
    "platform": null,
    "cmc_rank": 434,
    "last_updated": "2021-01-08T12:59:05.000Z",
    "quote": {
      "USD": {
        "price": 26.72952757273835,
        "volume_24h": 44382.15792134,
        "percent_change_1h": 0.11599936,
        "percent_change_24h": -4.68124705,
        "percent_change_7d": 10.05188009,
        "market_cap": 20145528.715885546,
        "last_updated": "2021-01-08T12:59:05.000Z"
      }
    }
  },
  {
    "id": 2243,
    "name": "Dragonchain",
    "symbol": "DRGN",
    "slug": "dragonchain",
    "num_market_pairs": 12,
    "date_added": "2017-12-03T00:00:00.000Z",
    "tags": [
      "platform",
      "enterprise-solutions"
    ],
    "max_supply": 433494437,
    "circulating_supply": 369997646.115273,
    "total_supply": 433494437,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e"
    },
    "cmc_rank": 435,
    "last_updated": "2021-01-08T12:59:03.000Z",
    "quote": {
      "USD": {
        "price": 0.05435810574617,
        "volume_24h": 157354.96504729,
        "percent_change_1h": -1.70654267,
        "percent_change_24h": -1.18739921,
        "percent_change_7d": 0.13509247,
        "market_cap": 20112371.173367996,
        "last_updated": "2021-01-08T12:59:03.000Z"
      }
    }
  },
  {
    "id": 3657,
    "name": "Lambda",
    "symbol": "LAMB",
    "slug": "lambda",
    "num_market_pairs": 53,
    "date_added": "2019-01-02T00:00:00.000Z",
    "tags": [
      "platform",
      "ai-big-data",
      "distributed-computing",
      "filesharing"
    ],
    "max_supply": 10000000000,
    "circulating_supply": 1261297570.9903326,
    "total_supply": 6000000000,
    "platform": {
      "id": 1839,
      "name": "Binance Chain",
      "symbol": "BNB",
      "slug": "binance-coin",
      "token_address": "LAMB-46C"
    },
    "cmc_rank": 436,
    "last_updated": "2021-01-08T12:59:06.000Z",
    "quote": {
      "USD": {
        "price": 0.01575712467177,
        "volume_24h": 11606952.44318338,
        "percent_change_1h": -3.1745573,
        "percent_change_24h": -1.0212918,
        "percent_change_7d": 10.45550972,
        "market_cap": 19874423.074295346,
        "last_updated": "2021-01-08T12:59:06.000Z"
      }
    }
  },
  {
    "id": 2298,
    "name": "Dynamic Trading Rights",
    "symbol": "DTR",
    "slug": "dynamic-trading-rights",
    "num_market_pairs": 7,
    "date_added": "2017-12-20T00:00:00.000Z",
    "tags": [
      "marketplace"
    ],
    "max_supply": null,
    "circulating_supply": 1523057143,
    "total_supply": 1900000000,
    "platform": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "token_address": "0xd234bf2410a0009df9c3c63b610c09738f18ccd7"
    },
    "cmc_rank": 437,
    "last_updated": "2021-01-08T12:59:04.000Z",
    "quote": {
      "USD": {
        "price": 0.01304642172283,
        "volume_24h": 175450.73056626,
        "percent_change_1h": 0.62386594,
        "percent_change_24h": 6.00846918,
        "percent_change_7d": 10.17267315,
        "market_cap": 19870445.7955466,
        "last_updated": "2021-01-08T12:59:04.000Z"
      }
    }
  },
  {
    "id": 4122,
    "name": "Counos Coin",
    "symbol": "CCA",
    "slug": "counos-coin",
    "num_market_pairs": 4,
    "date_added": "2019-12-10T00:00:00.000Z",
    "tags": [
      "mineable"
    ],
    "max_supply": 21000000,
    "circulating_supply": 14848323.5467,
    "total_supply": 16986059.7247,
    "platform": null,
    "cmc_rank": 438,
    "last_updated": "2021-01-08T12:59:02.000Z",
    "quote": {
      "USD": {
        "price": 1.33239289583078,
        "volume_24h": 623790.08220723,
        "percent_change_1h": 0.01601904,
        "percent_change_24h": -10.76061638,
        "percent_change_7d": -9.74858321,
        "market_cap": 19783800.808619972,
        "last_updated": "2021-01-08T12:59:02.000Z"
      }
    }
  },]
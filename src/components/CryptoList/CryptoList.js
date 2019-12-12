import CoinCapService from "../../services/CoinCapService.js";
import CryptoCoin from "../CryptoCoin/CryptoCoin.vue";
import EventBusService from "../../services/EventBusService";

export default {
  components: {
    CryptoCoin
  },
  data: () => {
    return {
      cryptos: EventBusService.cryptos
    };
  },
  computed: {
    subscribedCryptos() {
      return this.cryptos.filter(crypto => crypto.subscribed);
    }
  },
  updated() {
    CoinCapService.listenToMarket(
      this.subscribedCryptos,
      this.onMarketResponse
    );
  },
  methods: {
    onMarketResponse(updates) {
      for (const update of updates) {
        const updatedCrypto = this.cryptos.find(
          crypto => crypto.id === update.id
        );
        updatedCrypto.price = update.price;
      }
    }
  }
};

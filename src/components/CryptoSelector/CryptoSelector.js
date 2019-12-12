import CoinCapService from "../../services/CoinCapService.js";
import EventBusService from "../../services/EventBusService.js";

export default {
  data: () => {
    return {
      selection: "",
      cryptos: EventBusService.cryptos
    };
  },
  computed: {
    nonSubscribedCryptos() {
      return this.cryptos.filter(crypto => !crypto.subscribed);
    }
  },
  async mounted() {
    const cryptos = await CoinCapService.loadAssetList();
    this.cryptos.push(...cryptos);
  },
  methods: {
    addCrypto() {
      if (this.selection) {
        const crypto = this.selection;
        crypto.subscribed = true;

        this.selection = "";
      }
    }
  }
};

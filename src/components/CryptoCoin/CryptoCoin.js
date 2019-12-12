export default {
  props: [
    "crypto"
  ],
  methods: {
    clickRemove(crypto) {
      crypto.subscribed = false;
    }
  },
  filters: {
    toUSD(value) {
      const options = {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: value < 10 ? 4 : 2,
        maximumFractionDigits: value < 10 ? 4 : 2
      };

      return value.toLocaleString(undefined, options);
    }
  }
};

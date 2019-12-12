import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import CryptoCoin from "@/components/CryptoCoin/CryptoCoin.vue";

describe("CryptoCoin.vue", () => {
  describe("When passed a coin", () => {
    let coin, wrapper;    

    beforeEach(() => {
      coin = {
        name: "Albin Coin",
        symbol: "AC",
        price: 100,
        subscribed: true
      };

       wrapper = shallowMount(CryptoCoin, { propsData: { crypto: coin } });
    });
  
    it("renders details when passed a coin", () => {
      expect(wrapper.find(".name").text()).to.equal("Albin Coin");
      expect(wrapper.find(".symbol").text()).to.equal("(AC)");
    });
  
    it("renders the price as USD", () => {
      const options = {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      };

      const priceAsLocal = coin.price.toLocaleString(undefined, options);

      expect(wrapper.find(".price").text()).to.equal(priceAsLocal);
    });
  
    it("unsubscribes when clicked", () => {
      wrapper.trigger("click");
  
      expect(coin.subscribed).to.equal(false);
    });
  })
  
});

describe("CryptoSelector.vue", () => {
  it("lists all the unsubscribed cryptos", () => {   
    /*
      I have not figured out how to mock dependencies so I am
      unable to properly test this. I have tried to work out an
      example of what I want to do below:

      PSEUDO EXAMPLE:

        const mockCoinCapService = { loadAssetList };
        const mockCoinResponse = [
          { name: "coin-1", subscribed: false },
          { name: "coin-2", subscribed: false },
          { name: "coin-3", subscribed: true }
        ];

        const wrapper = shallowMount(CryptoSelector);

        // Resolve mockCoinCapService.loadAssetList with mockCoinResponse

        const options = wrapper.findAll("option");
        
        // 2 unsubscribed + 1 default text option
        expect(options.length).to.equal(2 + 1);      
    */   
  });

  it("should set the selected crypto as subscribed", () => {
    /*
      This test cannot be done due to the same reason as above
      but it should end up something along these lines:

      PSEUDO EXAMPLE:

        const mockCoinCapService = { loadAssetList };
        const mockCoinResponse = [
          { name: "coin-1", subscribed: false },
          { name: "coin-2", subscribed: false }
        ];

        const wrapper = shallowMount(CryptoSelector);

        // Resolve mockCoinCapService.loadAssetList with mockCoinResponse

        wrapper.find("select option:nth-child(3)").trigger("click");

        expect(mockCoinResponse[1].subscribed).to.be.true; 
    */   
  })
});

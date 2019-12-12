import { expect } from "chai";
import CoinCapService from "@/services/CoinCapService.js"

describe("CoinCapService.js", () => {
    describe("loadAssetList", () => {
        it("resolves a list of transformed assets", async () => {
            // This test calls the external API, but I'm not 
            // sure how to mock the external dependency (axios)
            const assets = await CoinCapService.loadAssetList();

            expect(assets.length).to.equal(500);
        })
    })

    describe("listenToMarket", () => {
        it("calls the callback with price updates", () => {
            /*
                I'm not sure how to mock WebSocket and with a mock I am
                not able to write a stable test. I've tried to outline an
                example of how I want the test to look if I knew how to
                mock WebSockets

                PSEUDO EXAMPLE:

                    const mockWebSocket = { onmessage };
                    const cryptos = [{ id: 'bitcoin' }];
                    const cbFn = () => {};

                    CoinCapService.listenToMarket(cryptos, cbFn);

                    // Invoke mockWebSocket's onmessage(response)

                    expect(cbFn).to.have been called; 
                
                Other tests could verify that the response from the 
                WebSocket is transformed when passed to the callback
            */            
        })
    })
})
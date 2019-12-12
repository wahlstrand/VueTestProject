import axios from "axios";

let websocket = null;

function loadAssetList() {
  return new Promise(async (resolve) => {
    try {
      const response = await axios.get("https://api.coincap.io/v2/assets?limit=500");
      const transformedResponse = transformAssetListResponse(response);
      resolve(transformedResponse);      
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Unable to connect to coincap api. Error: ${error.message}`);
    }
  })
}

function transformAssetListResponse(response) {
  const assets = response.data.data;

  return assets.map(asset => ({
    id: asset.id,
    symbol: asset.symbol,
    name: asset.name,
    price: parseFloat(asset.priceUsd),
    subscribed: false
  }));
}

function listenToMarket(cryptos, onMessage) {
  if (websocket) {
    websocket.close();
    websocket = null;
  }

  if (cryptos.length) {
    const assets = cryptos.map(crypto => crypto.id).join(",");

    websocket = new WebSocket("wss://ws.coincap.io/prices?assets=" + assets);
    websocket.onmessage = response => {
      const transformedResponse = transformMarketResponse(response);
      onMessage(transformedResponse);
    };
    websocket.onclose = onWebsocketClose;
  }
}

function transformMarketResponse(response) {
  const cryptos = JSON.parse(response.data);
  const updates = [];

  for (const id in cryptos) {
    updates.push({
      id,
      price: parseFloat(cryptos[id])
    });
  }

  return updates;
}

function onWebsocketClose(event) {
  if (!event.wasClean) {
    // eslint-disable-next-line no-console
    console.error(`Websocket unexpectedly closed - Reason: ${event.reason}`)
  }
}

export default { loadAssetList, listenToMarket };

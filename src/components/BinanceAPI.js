/** @format */
let ws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");

const BinanceAPI = () => {
  let stockPriceElement = document.getElementById("stock-price");

  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    stockPriceElement.innerText = parseFloat(stockObject.p).toFixed(2);
  };

  return (
    <div>
      <h1 id="stock-price">---</h1>
    </div>
  );
};

export default BinanceAPI;

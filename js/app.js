import "../css/style.css";
import "../plugins";
import api from "./apiService";

const container = document.querySelector(".table-body");

const data = api.coinsData(100);

data.then((result) => renderData(result));

function renderData(result) {
  const fragment = document.createDocumentFragment();

  result.forEach((coin) => {
    const row = document.createElement("tr");
    const number = document.createElement("td");
    number.textContent = coin.rank;
    const name = document.createElement("td");
    name.textContent = coin.name;
    const price = document.createElement("td");
    price.textContent = coin.quotes.USD.price.toFixed(2) + " $";
    const market_cap = document.createElement("td");
    market_cap.textContent = coin.quotes.USD.market_cap + " $";

    const change_24h = document.createElement("td");
    change_24h.textContent = coin.quotes.USD.percent_change_24h + "%";
    change_24h.classList.add(getColor(coin.quotes.USD.percent_change_24h));

    const change_7d = document.createElement("td");
    change_7d.textContent = coin.quotes.USD.percent_change_7d + "%";
    change_7d.classList.add(getColor(coin.quotes.USD.percent_change_7d));

    const change_30d = document.createElement("td");
    change_30d.textContent = coin.quotes.USD.percent_change_30d + "%";
    change_30d.classList.add(getColor(coin.quotes.USD.percent_change_30d));

    row.appendChild(number);
    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(market_cap);
    row.appendChild(change_24h);
    row.appendChild(change_7d);
    row.appendChild(change_30d);

    fragment.appendChild(row);
  });

  function getColor(pr) {
    if (+pr > 0) {
      return "green-text";
    } else if (+pr < 0) {
      return "red-text";
    }
  }

  container.appendChild(fragment);
}

renderData();

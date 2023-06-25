import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [price, setPrice] = useState("");

  const handleChange = (e) => {
    let { value } = e.target;

    const regex = /[^\d]/g;

    value = value.replaceAll(regex, "");

    setPrice(formatPrice(value));
  };

  const formatPrice = (value) => {
    if (value.length <= 3) {
      return value;
    }

    var start = value.length - 1;
    var res = "";
    var cnt = 1;

    for (var i = value.length - 1; i > 0; i--) {
      console.log(cnt);

      if (cnt % 3 === 0) {
        res = res + "," + value.slice(i, start + 1);

        console.log(value.slice(i, start + 1));
        start = i - 1;
      }
      cnt++;
    }

    return value.slice(0, start + 1) + res;
  };

  return (
    <>
      <input type={"text"} onChange={handleChange} value={price} />
    </>
  );
}

export default App;

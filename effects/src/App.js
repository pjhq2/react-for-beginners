import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time.");
  useEffect(() => {
    console.log("i run only once.");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("i run when 'keyword' changes and keyword.length > 5.");
    }
  }, [keyword]);
  useEffect(() => {
    if (counter > 0) {
      console.log("i run when 'counter' changes.");
    }
  }, [counter]);
  useEffect(() => {
    if (keyword !== "" || counter > 0) {
      console.log("i run when 'keyword or counter' changes.");
    }
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

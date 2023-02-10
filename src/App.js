import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const items = JSON.parse(localStorage.getItem('note'));
  const [text, setText] = useState(items)

  const update = (e) => {
    setText(e.target.value)
  }

  const saveToLS = () => {
    localStorage.setItem('note', JSON.stringify(text));
  }

  const reset =()=> {
    setText("");
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('note'));
    if (items) {
      saveToLS()
      setText(text);
    }
  }, []);

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea value={text} onChange={update} className="textarea is-large" placeholder="Notes..." />
          </div>
        </div>
        <button className="button is-large is-primary is-active" onClick={saveToLS.bind(this)}>Save</button>
        <button className="button is-large" onClick={reset.bind(this)}>Clear</button>
      </div>
    </div>
  );
}

export default App;


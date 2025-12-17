import { useState } from "react";

import QueueForm from "./component/QueueForm";

import "./App.css";
function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {};

  const updateStatus = (id, newStatus) => {};

  const removeFormQueue = (id) => {};

  return (
    <div className="app bg-black h-screen flex flex-col items-center">
      <header className="w-full flex flex-col gap-1.5 justify-center items-center p-4">
        <h1 className="text-white text-3xl">Queue Management System</h1>
        <p className="text-white">Management Your Customers Efficiently</p>
      </header>
      <main>
        <QueueForm  onAdd={addToQueue}/>
      </main>
    </div>
  );
}

export default App;

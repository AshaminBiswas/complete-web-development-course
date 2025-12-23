import { useState } from "react";

import QueueForm from "./component/QueueForm";
import QueueDisplay from "./component/QueueDisplay";

import "./App.css";
function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, {...customer, id:Date.now(), status:"waiting"}])
  };

  const updateStatus = (id, newStatus) => {
    setQueue(queue.map((customer)=>{
       return customer.id === id ? {...customer, status:newStatus} : customer
    }))
  };

  const removeFormQueue = (id) => {
    setQueue(queue.filter((customer)=>{
      customer.id !== id
    }))
  };

  return (
    <div className="app bg-black h-screen flex flex-col items-center w-full">
      <header className="w-full flex flex-col gap-1.5 justify-center items-center p-4 mb-10">
        <h1 className="text-white text-3xl">Queue Management System</h1>
        <p className="text-white">Management Your Customers Efficiently</p>
      </header>
      <main className="flex justify-around w-full">
        <QueueForm  onAdd={addToQueue}/>
        <QueueDisplay queue={queue} update={updateStatus} remove={removeFormQueue}/>
      </main>
    </div>
  );
}

export default App;

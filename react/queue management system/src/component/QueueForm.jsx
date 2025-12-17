import React, { useState } from "react";
import {FaUser, FaUserPlus} from "react-icons/fa"
function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };

  return (
    <div className="bg-zinc-900 p-6 ">
      <h1 className="text-white text-2xl font-semibold">Queue Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-2 mt-4"
      >
        <input
          className="py-2 px-6 w-full border rounded-xl outline-0 focus:bg-black transition "
          type="text"
          placeholder="Enter Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="py-2 px-6 w-full border rounded-xl outline-0 focus:bg-black transition-all ease-in "
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          <option value="Support">Support</option>
          <option value="Payment">Payment</option>
          <option value="Consultation">Consultation</option>
        </select>

        <button
          className="py-2 px-6 w-full border rounded-xl outline-0 bg-black flex items-center justify-around font-bold cursor-pointer"
          type="submit"
        >
          <FaUserPlus/> Add Customer
        </button>
      </form>
    </div>
  );
}

export default QueueForm;

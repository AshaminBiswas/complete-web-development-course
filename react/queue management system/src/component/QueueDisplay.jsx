

function QueueDisplay({queue, update, remove }) {

    const getStatusColor = (status) =>{
        switch (ststus) {
            case "waiting": return 'yellow';
            case "serving": return 'blue';
            case "complete": return "green";
            default:
                return "text-white"
        }
    }

  return (
    <div className="bg-zinc-900 p-6 border rounded-2xl ">
      <h1 className="text-2xl font-semibold" >Display Customer Status</h1>
      <div className="w-full p-4">
        {queue.length === 0 ? (<p className="text-gray-50">No Customer Data</p>)
         : (<div className="flex items-center flex-col gap-4">
            {queue.map((customer)=>(
                <div className="flex gap-10  bg-black p-4 rounded-xl border" key={customer.id}>
                    <h3>{customer.name}</h3>
                    <p>{customer.service}</p>
                    <span className="">{customer.status}</span>
                    <div className="action flex gap-4 items-baseline-last">
                        {customer.status === "waiting" && (
                            <button className="bg-green-700 py-0.5 px-2 rounded-sm cursor-pointer"
                            onClick={()=>update(customer.id, "serving")}
                            >Serve</button>
                        )}
                        {customer.status === "serving" && (
                            <button className=" bg-blue-700 py-0.5 px-2 rounded-sm cursor-pointer"
                            onClick={()=>update(customer.id, "completed")}
                            >Serve</button>
                        )}
                        
                        <button
                        className="bg-red-700 py-0.5 px-2 rounded-sm cursor-pointer"
                        onClick={()=>remove(customer.id)}
                        >Remove</button>
                    </div>
                </div>
            ))}
         </div>)}
      </div>
    </div>
  )
}

export default QueueDisplay

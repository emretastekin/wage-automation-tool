import React from "react";
import Card from "../UI/Card";

const WorkerList = (props) => {
  const { workers, setWorkers } = props;


  if(workers.length < 1){
    return;
  }

  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };

  return (
    <Card className="mt-7">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">Name</span>
          <span className="font-bold">Wage</span>
        </li>
        {workers.map((worker) => (
          <li
            className="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow"
            key={worker.id}
            onClick={() => deleteWorker(worker.id)}
          >
            <span>{worker.name}</span>
            <span className="text-teal-700 font-medium">{worker.wage}₺</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;

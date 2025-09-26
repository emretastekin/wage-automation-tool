import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddWorker = (props) => {

    const [enteredWorkerName, setEnteredWorkerName] = useState("");
    const [enteredWage, setEnteredWage] = useState("");
    const minimumWage = 5000;

    const addWorkerHandler = (event) => {
        event.preventDefault();

        if(enteredWorkerName.trim().length === 0 || enteredWage.trim().length === 0){
            return;
        }
        
        if(+enteredWage < minimumWage){
            return;
        }

        setEnteredWorkerName("");
        setEnteredWage("");
        props.setWorkers((prevState) => [
            {
                id: Math.floor(Math.random() * 1000),
                name: enteredWorkerName,
                wage: enteredWage,
            },
            ...prevState,
        ]);


        console.log(enteredWorkerName, enteredWage);
    };

  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-1"
          placeholder="Çalışan ismi giriniz"
          id="name"
          onChange={(event) => setEnteredWorkerName(event.target.value)}
          value={enteredWorkerName}
        ></input>
        <label htmlFor="wage" className="font-medium">
          Maaş Miktarı
        </label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Maaş miktarı giriniz"
          id="wage"
          onChange={(event) => setEnteredWage(event.target.value)}
          value={enteredWage}
        ></input>
        <Button className="mt-5 bg-blue-600" type="submit">
            Ekle
        </Button>
      </form>
    </Card>
  );
};

export default AddWorker;

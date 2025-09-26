import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error, setError] = useState();

  const minimumWage = 5000;

  const addWorkerHandler = (event) => {
    event.preventDefault();

    if (
      enteredWorkerName.trim().length === 0 
    ) {
      setError({
        title: "Namespace is required",
        message: "Please enter a name"
      })
      return;
    }

    if (+enteredWage < minimumWage) {
      setError({
        title: "Wagespace is required",
        message: `Please enter a wage greater than ${minimumWage}`
      })
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


  const errorHandler = () => {
    setError(null);
  }


  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
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
    </div>
  );
};

export default AddWorker;

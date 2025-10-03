import React, { Fragment, useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {

  const [error, setError] = useState();
  const nameInputRef = useRef();
  const wageInputRef = useRef();

  
  // useEffect(() => {
  //   console.log("worked");
  // }, []);


  const minimumWage = 5000;

  const addWorkerHandler = (event) => {

    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredWage = wageInputRef.current.value;

    if (nameInputRef.current.value.trim().length === 0) {
      setError({
        title: "Namespace is required",
        message: "Please enter a name",
      });
      return;
    }

    if (+wageInputRef.current.value < minimumWage) {
      setError({
        title: "Wagespace is required",
        message: `Please enter a wage greater than ${minimumWage}`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredName,
        wage: enteredWage,
      },
      ...prevState,
    ]);

    nameInputRef.current.value = "";
    wageInputRef.current.value = "";

  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && <ErrorModal setWorkers={props.setWorkers} onConfirm={errorHandler} error={error} />}
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
            ref={nameInputRef}
          ></input>
          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş miktarı giriniz"
            id="wage"
            ref={wageInputRef}
          ></input>
          <Button className="mt-5 bg-blue-600" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddWorker;

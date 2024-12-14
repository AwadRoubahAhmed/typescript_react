import { Children } from "react";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Oscar } from "./components/Oscar";

export default function App() {
  const personName = {
    firstName: "John",
    lastName: "Doe",
  };

  const nameList = [
    { First: "Lionel", last: "Messi" },
    { First: "Andres", last: "Iniesta" },
    { First: "Xavi", last: "Hernandez" },
    { First: "Sergio", last: "Busquez" },
  ];

  return (
    <div className="max-w-full min-h-svh bg-slate-900 text-black text-center">
      <h1 className="text-3xl text-center text-white font-bold underline">
        Begin React with TypeScript !
      </h1>
      <Greet name="Alice" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="complete" />
      <Heading>
        <h2>Placeholder text !</h2>
      </Heading>
      <Oscar>
        <Heading>Oscar goes to Scott Adkins !</Heading>
      </Oscar>
    </div>
  );
}

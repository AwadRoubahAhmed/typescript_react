import { useState } from "react";
import { User } from "./User";

export const LoggedIn = () => {
  //State;
  const [loggedIn, setLoggedIn] = useState(true);

  //Comportement;
  const handleLoggedIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  };

  //Affichage(render);
  return (
    <div>
      <div className="bg-neutral-200 py-6">
        <button onClick={handleLoggedIn} className="btn btn-accent mr-6">
          LoggedIn
        </button>
        <button onClick={handleLogOut} className="btn btn-neutral">
          LogOut
        </button>
        <div>
          <h2 className="my-6 font-semibold text-lg">
            User is {loggedIn ? "LoggedIn" : "LogOut"} !{" "}
          </h2>
        </div>
      </div>
      <User />
    </div>
  );
};

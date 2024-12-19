import { useState } from "react";

type AuthentUser = {
  name: string;
  email: string;
};

export const User = () => {
  //State;
  const [user, setUser] = useState<AuthentUser | null>(null);

  //Comportement;
  const handleLoggedIn = () => {
    setUser({
      name: "John Smith",
      email: "john.smith@gmail.com",
    });
  };

  const handleLogOut = () => {
    setUser(null);
  };

  //Affichage(render);
  return (
    <div className="bg-sky-500 my-6 py-6">
      <button onClick={handleLoggedIn} className="btn btn-accent mr-6">
        LoggedIn
      </button>
      <button onClick={handleLogOut} className="btn btn-neutral">
        LogOut
      </button>
      <div className="py-4">
        <h2>User name is {user?.name}</h2>
        <h2>User email is {user?.email}</h2>
      </div>
    </div>
  );
};

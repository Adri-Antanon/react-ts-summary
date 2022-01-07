import { useState } from "react";

interface UserInterface {
  uid: string;
  name: string;
}
// const initialState: UserInterface = {
//   uid: "ABC",
//   name: "Adri",
// };

export const User = () => {
  const [user, setUser] = useState<UserInterface>();

  const loginHandler = () => {
    setUser({ uid: "AIKI", name: "Andrea" });
  };

  return (
    <div>
      <h3>Usuario</h3>

      <button className="btn btn-outline-primary" onClick={loginHandler}>
        Login
      </button>
      {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};

export default User;

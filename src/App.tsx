import { useState } from "react";
import User from "./models/User";
import DisplayUser from "./components/displayUser";

export default function App() {
  const [user, setUser] = useState(new User("John", 30));

  return (
    <main className="max-w-[800px] m-auto">
      <DisplayUser user={user} setUser={setUser} />
    </main>
  );
}

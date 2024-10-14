import User from "../models/User";

export default function DisplayUser(props: {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}) {
  return (
    <div className="grid m-2 shadow-lg p-2 bg-white rounded gap-2 border-1 border-gray-300">
      <div className="flex justify-between gap-2">
        <p className="text-3xl">{props.user.name ? props.user.name : "No name"}</p>
        <p className="text-3xl">{props.user.age ? props.user.age : "No age"}</p>
      </div>
      <div className="grid gap-2">
        <input
          className="px-2 py-1 border-2 border-gray-300 rounded"
          onChange={(e) => props.setUser(new User(e.target.value, props.user.age))}
          type="text"
          value={props.user.name}
          placeholder="Name"
        />
        <input
          className="px-2 py-1 border-2 border-gray-300 rounded"
          onChange={(e) => props.setUser(new User(props.user.name, parseInt(e.target.value)))}
          type="number"
          value={props.user.age}
          placeholder="Age"
        />
      </div>
    </div>
  );
}

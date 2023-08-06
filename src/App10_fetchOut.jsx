// App10_fetchOut.jsx
import ReactDOM from "react-dom/client";
import useFetch from "./useFetch.jsx";

export const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.id} {item.name}</p>;
        })}
    </>
  );
};

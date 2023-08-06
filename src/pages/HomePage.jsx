import { Button, Stack, responsiveFontSizes } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllUsers } from "../api/http";
import { TableUsers } from "../components/TableUsers";

export const HomePage = ({ name }) => {
  const [numero, setNumero] = useState(21);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersList = listUsers();
    setUsers(usersList);
  }, [])

  const onClick = () => {
    setNumero(prev => prev + 1);
  };

  const listUsers =  async () => {
    const response = await getAllUsers();
    console.log(response)
    return response;
  }

  return (
    <>
      <Stack>
        <h1>Right were you left me {name}</h1>
        <Button variant="contained" onClick={onClick}>All too well</Button>
        <h2>its supposed to be fun turning {numero}</h2>
      </Stack>
      <TableUsers />
    </>
  );
};

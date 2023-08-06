import { useEffect, useState } from "react";
import { getAllCities } from "../api/http";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { CardDisplay } from "../components/CardDisplay";

export const CiudadesPage = () => {
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    getCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCities = async () => {
    const citiesRes = await getAllCities();
    setCitiesList(citiesRes);
  };

  return (
    <>
      <CardDisplay />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">IdCiudad</TableCell>
              <TableCell align="center">Gobernador</TableCell>
              <TableCell align="center">Partido</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Capital</TableCell>
              <TableCell align="center">Total Municipios</TableCell>
              <TableCell align="center">Hombres</TableCell>
              <TableCell align="center">Mujeres</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {citiesList.map((row) => (
              <TableRow
                key={row.IdCiudad}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.IdCiudad}</TableCell>
                <TableCell align="center">{row.Gobernador}</TableCell>
                <TableCell align="center">{row.Partido}</TableCell>
                <TableCell align="center">{row.Nombre}</TableCell>
                <TableCell align="center">{row.Capital}</TableCell>
                <TableCell align="center">{row.Tot_mun}</TableCell>
                <TableCell align="center">{row.Hombres}</TableCell>
                <TableCell align="center">{row.Mujeres}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

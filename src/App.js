import { useState } from "react";
import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'

export default function App() {
  const [nome, setNome] = useState("Labenu");

  const [automovel, setAutomovel] = useState({
    modelo: "Palio",
    cor: "Rosa",
    ano: 2022,
    adicionadoPor: "Labenu",
    flex: true
  });

  const carroGol = {
    modelo: "Gol",
    cor: "Prata",
    ano: 2006,
    adicionadoPor: "Wyl",
    flex: true
  };

  const carroMonza = {
    modelo: "Monza",
    cor: "Vermelho",
    ano: 1998,
    adicionadoPor: "José",
    flex: false
  };

  const carroPolo = {
    modelo: "Polo",
    cor: "Branco",
    ano: 2019,
    adicionadoPor: "Ady",
    flex: true
  };

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem
        nomeGaragem={nome}
        setNome={setNome}
        automovel={automovel}
        novoAutomovel={carroGol}
        setAutomovel={setAutomovel}
      />
    </div>
  );
}

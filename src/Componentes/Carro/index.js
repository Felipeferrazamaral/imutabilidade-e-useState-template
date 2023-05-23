import { CarroContainer } from './styles'

export function Carro({
  modelo,
  cor,
  ano,
  flex,
  adicionadoPor,
  novoAutomovel,
  setAutomovel
}) {
  const alterarAutomovel = () => {
    setAutomovel(novoAutomovel);
  };

  return (
    <CarroContainer>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? "Sim" : "Não"}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
      <button onClick={alterarAutomovel}>Alterar Carro</button>
    </CarroContainer>
  );
}
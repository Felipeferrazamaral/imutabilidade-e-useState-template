import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem(props) {
  const {
    nomeGaragem,
    setNome,
    automovel,
    novoAutomovel,
    setAutomovel
  } = props;
  const { modelo, ano, cor, adicionadoPor, flex } = automovel;

  const alterarNome = () => {
    setNome("Easley");
  };

  return (
    <GaragemContainer>
      <h1>Garagem da {nomeGaragem}</h1>
      <Botao onClick={alterarNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={modelo}
          cor={cor}
          ano={ano}
          adicionadoPor={adicionadoPor}
          flex={flex}
          novoAutomovel={novoAutomovel}
          setAutomovel={setAutomovel}
        />
      </Estacionamento>
    </GaragemContainer>
  );
}

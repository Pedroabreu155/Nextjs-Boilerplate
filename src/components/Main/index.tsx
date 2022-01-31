import * as Styled from './styles';

export const Main = () => (
  <Styled.Container>
    <Styled.Logo
      src="/images/logo.svg"
      alt="Imagem de um átomo (logo do React) e título React avançado ao lado da imagem."
    />
    <Styled.Title>React Avançado</Styled.Title>
    <Styled.Description>
      Typescript, NextJS e Styled Components
    </Styled.Description>
    <Styled.Illustration
      src="/images/hero-illustration.svg"
      alt="Ilustração de um programador"
    />
  </Styled.Container>
);

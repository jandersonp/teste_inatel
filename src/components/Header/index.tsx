import logoInatel from '../../assets/logo-inatel.png';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <h1>Teste de conhecimentos</h1>
        <img src={logoInatel} alt="Logo inatel" />
      </Content>
    </Container>
  );
}

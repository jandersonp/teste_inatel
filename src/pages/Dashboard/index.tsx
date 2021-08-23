import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <h1>Conhecimentos em  Matemática</h1>

      <div>
        <p>01. Quando é 2+2?</p>
        <label>
          <input type="checkbox" />4
        </label>
        <label>
          <input type="checkbox" />5
        </label>
        <label>
          <input type="checkbox" />8
        </label>
        <hr />
      </div>

      <div>
        <p>01. Quando é 10-2?</p>
        <label>
          <input type="checkbox" />8
        </label>
        <label>
          <input type="checkbox" />5
        </label>
        <label>
          <input type="checkbox" />3
        </label>
        <hr />
      </div>

      <div>
        <p>01. Quando é 10*2?</p>
        <label>
          <input type="checkbox" />20
        </label>
        <label>
          <input type="checkbox" />24
        </label>
        <label>
          <input type="checkbox" />21
        </label>
        <hr />
      </div>

      <h1>Conhecimentos em  História</h1>


      <div>
        <p>01. Quem descobriu o Brasil?</p>
        <label>
          <input type="checkbox" />Pero Vaz de Caminha
        </label>
        <label>
          <input type="checkbox" />Machado de assis
        </label>
        <label>
          <input type="checkbox" />Pedro Álvares Cabral
        </label>
        <hr />
      </div>

      <div>
        <p>01. Qual é a capital do Brasil?</p>
        <label>
          <input type="checkbox" />Brasília
        </label>
        <label>
          <input type="checkbox" />Cabul
        </label>
        <label>
          <input type="checkbox" />Tóquio
        </label>
        <hr />
      </div>


    </Container>
  )
}
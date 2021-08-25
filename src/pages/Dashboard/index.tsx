import { FormHandles, SubmitHandler } from '@unform/core';

import { Form } from '@unform/web';

import { useRef } from 'react';

import { Checkbox } from '../../components/Form/Checkbox';

import { Container } from './styles';

interface FormData {
  privacy: true | false;
}

export function Dashboard() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log('Hello');
  };

  return (
    <Container>
      <h1>Conhecimentos em Matemática.</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        01. Quanto é 2+2?
        <Checkbox name="2" value="2" label=" 2" />
        <Checkbox name="privacy" value="1" label=" 1" />
        <Checkbox name="privacy" value="3" label=" 3" />
        <hr />
        02. Quanto é 5+2?
        <Checkbox name="privacy" value="consent" label=" 2" />
        <Checkbox name="privacy" value="consent" label=" 5" />
        <Checkbox name="privacy" value="consent" label=" 7" />
        <hr />
        <button type="submit">Cancelar</button>
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

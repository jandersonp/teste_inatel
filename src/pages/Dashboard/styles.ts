import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2.5rem 1rem;

  Form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    input {
      margin-top: 2rem;
    }

    button {
      font-size: 1rem;
      color: #fff;
      background: var(--blue);
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;

      margin-top: 2rem;
      margin-right: 25rem;
      margin-left: 25rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

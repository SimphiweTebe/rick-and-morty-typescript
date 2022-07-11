import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 90%;
    max-width: 1200px;
    margin: 100px auto 0;
    height: 100vh;
`;

type Props = { children: ReactNode }

function Container({ children }: Props) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Container
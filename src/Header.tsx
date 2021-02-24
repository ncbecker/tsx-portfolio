import styled from "styled-components/macro";

const Blur = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  display: flex;
  backdrop-filter: blur(2.5rem);
`;

const GitHubTag = styled.h1`
  margin: 1rem;
`;

export const Header = (): JSX.Element => {
  return (
    <Blur>
      <GitHubTag>
        <a
          href="https://github.com/ncbecker"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ncbecker
        </a>
      </GitHubTag>
    </Blur>
  );
};

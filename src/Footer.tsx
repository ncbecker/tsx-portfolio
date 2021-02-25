import styled from "styled-components/macro";

const Blur = styled.div`
  position: relative;
  bottom: 0;
  z-index: 99;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  backdrop-filter: blur(2.5rem);
`;

export const Footer = (): JSX.Element => {
  return (
    <Blur>
      <span>
        Background photo by{" "}
        <a
          href="https://unsplash.com/@eberhardgross?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
        >
          eberhard grossgasteiger
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </Blur>
  );
};

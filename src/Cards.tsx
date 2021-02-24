import { useCallback, useRef, useState } from "react";
import styled from "styled-components/macro";

interface Card {
  isVisible: boolean;
}

const Card = styled.div<Card>`
  position: relative;
  width: 90%;
  max-width: 720px;
  min-height: 200px;
  border-radius: 1rem;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(1.5rem);
  ${(props) =>
    props.isVisible
      ? "transition: opacity 250ms ease-in, transform 350ms ease-in; opacity: 1; transform: translateX(0);"
      : "opacity: 0; transform: translateX(-50%);"}
`;

export const AboutCard = (): JSX.Element => {
  const observer = useRef<IntersectionObserver | null>(null);

  const [card, setCard] = useState(false);

  if (card) observer.current?.disconnect();

  const cardsRef = useCallback((node) => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !card) {
          setCard(true);
        }
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "0px",
      }
    );
    if (node) observer.current.observe(node);
  }, []);

  return (
    <Card ref={cardsRef} isVisible={card}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque nobis
        eos suscipit nam tempora vel iure omnis, quas maiores in amet laborum
        obcaecati non fuga, quisquam explicabo odit, illum accusamus!
      </p>
    </Card>
  );
};

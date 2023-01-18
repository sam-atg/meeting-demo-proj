import styled from '@emotion/styled';
import type { MantineColor } from '@mantine/core';
import { Button, keyframes } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { Prism } from '@mantine/prism';
import { useEffect, useRef } from 'react';
import { LineFlasher } from '~/components/LineFlasher';

const flashFrame = keyframes({
  // from: { backgroundColor: 'rgba(43, 138, 62, 0.8)' },
  from: { backgroundColor: 'rgba(43, 138, 62, 1)' },
  to: { backgroundColor: 'rgba(43, 138, 62, 0.25)' }
});

const Container = styled.div`
  .deleted {
    /* animation: ${flashFrame} 1s cubic-bezier(0.65, 0.05, 0.36, 1); */
    animation: ${flashFrame} 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
`;

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

const altCode = `
import { Button } from '@mantine/core';

export type PrismStylesNames = Selectors<typeof useStyles>;

function Demo() {
  return <Button>Hello</Button>
}`;

type HighlightEntry = { color: MantineColor; label?: string };
const added: HighlightEntry = { color: 'green', label: '+' };

export function Demo() {
  const [value, toggle] = useToggle([1, 2] as const);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentNode = ref.current;
    if (parentNode) {
      const nodes = Array.from(parentNode.querySelectorAll('.token-line > div.mantine-Prism-lineNumber')).filter(
        x => x.textContent === '+'
      );

      for (const node of nodes) {
        node.parentElement?.classList.add('deleted');
      }
    }
    return () => {
      parentNode?.querySelectorAll('.deleted').forEach(node => node.classList.remove('deleted'));
    };
  });

  return (
    <>
      <Button onClick={() => toggle()}>toggle</Button>
      <LineFlasher flashContent={['+']} language="tsx" withLineNumbers highlightLines={value === 1 ? { 1: added } : {}}>
        {value === 1 ? demoCode : altCode}
      </LineFlasher>
    </>
  );
}

export function DemoAlt() {
  const [value, toggle] = useToggle([1, 2] as const);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentNode = ref.current;
    if (parentNode) {
      const nodes = Array.from(parentNode.querySelectorAll('.token-line > div.mantine-Prism-lineNumber')).filter(
        x => x.textContent === '+'
      );

      for (const node of nodes) {
        node.parentElement?.classList.add('deleted');
      }
    }
    return () => {
      parentNode?.querySelectorAll('.deleted').forEach(node => node.classList.remove('deleted'));
    };
  });

  return (
    <Container>
      <Button onClick={() => toggle()}>toggle</Button>
      <Prism ref={ref} language="tsx" withLineNumbers highlightLines={value === 1 ? { 1: added } : {}}>
        {value === 1 ? demoCode : altCode}
      </Prism>
    </Container>
  );
}

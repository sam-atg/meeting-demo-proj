import styled from '@emotion/styled';
import type { MantineColor } from '@mantine/core';
import { keyframes } from '@mantine/core';
import type { PrismProps } from '@mantine/prism';
import { Prism } from '@mantine/prism';
import { useEffect, useRef } from 'react';

const flashFrame = keyframes({
  // from: { backgroundColor: 'rgba(43, 138, 62, 0.8)' },
  from: { backgroundColor: 'rgba(43, 138, 62, 1)' },
  to: { backgroundColor: 'rgba(43, 138, 62, 0.25)' }
});

const Container = styled.div`
  .deleted {
    /* animation: ${flashFrame} 1s cubic-bezier(0.65, 0.05, 0.36, 1); */
    animation: ${flashFrame} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
`;

export type HighlightEntry = { color: MantineColor; label?: string };
export const ADDED: HighlightEntry = { color: 'green', label: '+' };
export const REMOVED: HighlightEntry = { color: 'red', label: '-' };

export function useLineFlasher(strIncludes: string[]) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentNode = ref.current;
    if (parentNode) {
      const nodes = Array.from(parentNode.querySelectorAll('.token-line > div.mantine-Prism-lineNumber')).filter(
        x => x.textContent && strIncludes.includes(x.textContent)
      );

      for (const node of nodes) {
        node.parentElement?.classList.add('deleted');
      }
    }
    return () => {
      parentNode?.querySelectorAll('.deleted').forEach(node => node.classList.remove('deleted'));
    };
  });

  return ref;
}

interface LineFlasherProps extends PrismProps {
  flashContent: string[];
}

export function LineFlasher({ flashContent, ...props }: LineFlasherProps) {
  const ref = useLineFlasher(flashContent);
  return (
    <Container>
      <Prism {...props} ref={ref} />
    </Container>
  );
}

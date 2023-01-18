import { useResizeObserver } from '@mantine/hooks';
import { useEffect } from 'react';
import { MainContent } from '~/components/Layout';
import Tester from '~/docs/test.mdx';

export default function Docs() {
  const [ref, rect] = useResizeObserver<HTMLDivElement>();
  useEffect(() => {
    const node = ref.current as HTMLDivElement | null;
    if (node != null) {
      node.querySelectorAll<HTMLAnchorElement>('a.playground-link').forEach(node => {
        const parent = node.parentElement?.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        if (parent) {
          node.style.bottom = 'unset';
          node.style.right = 'unset';
          node.style.top = `${parent.top + parent.height - nodeRect.height}px`;
          node.style.left = `${parent.right - nodeRect.width}px`;
        }
      });
    }
  }, [ref]);

  return (
    <MainContent>
      <div className="shiki-wrapper" ref={ref}>
        <Tester />
      </div>
    </MainContent>
  );
}

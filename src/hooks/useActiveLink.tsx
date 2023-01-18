import type { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { useDebugValue, useEffect, useState } from 'react';

type LinkUrl = LinkProps['href'];

export function useActiveLink(href: LinkUrl, as?: LinkUrl) {
  const { asPath, isReady } = useRouter();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL((as ?? href) as string, location.href).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;
      setActive(linkPathname === activePathname);
    }
    setActive(false);
  }, [as, asPath, href, isReady]);

  useDebugValue({ href, as, active });
  return active;
}

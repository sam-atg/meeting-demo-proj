import { Box, NavLink as MNavLink } from '@mantine/core';
import { IconBook, IconHome } from '@tabler/icons';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { useActiveLink } from '~/hooks/useActiveLink';

interface NavLinksProps {
  children?: React.ReactNode;
}

const data: NavLinkProps[] = [
  { icon: <IconHome size={16} />, label: 'Home', href: '/' },
  { icon: <IconBook size={16} />, label: 'Docs', href: '/docs' }
  // { icon: <IconAlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
  // { icon: <IconMessages size={16} />, color: 'violet', label: 'Discussions' },
  // { icon: <IconDatabase size={16} />, color: 'grape', label: 'Databases' }
];

interface NavLinkProps extends Pick<LinkProps, 'as' | 'href'> {
  icon: React.ReactNode;
  color?: string;
  label: string;
}

export function NavLink({ color, icon, label, ...props }: NavLinkProps) {
  const isActive = useActiveLink(props.href, props.as);
  return <MNavLink label={label} icon={icon} color={color} component={Link} {...props} active={isActive} />;
}

export function NavbarLinks({ links }: { links?: NavLinkProps[] }) {
  return (
    <Box py="md">
      {(links ?? data).map(link => (
        <NavLink {...link} key={link.label} />
      ))}
    </Box>
  );
}

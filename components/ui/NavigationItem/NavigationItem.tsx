import Link from 'next/link';
import styles from './NavigationItem.module.scss';

interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export function NavigationItem({ href, children, isActive }: NavigationItemProps) {
  return (
    <Link href={href} className={`${styles.item} ${isActive ? styles.active : ''}`}>
      {children}
    </Link>
  );
}

import { Link, NavLink } from 'react-router-dom';
import type { LinkProps, NavLinkProps } from 'react-router-dom';
import { useLocalePath } from './useLocale';
import type { RouteId } from './routes';

interface LocalizedTarget {
  routeId: RouteId;
  query?: string;
  hash?: string;
}

/**
 * Links name their destination by route id rather than by path, so a typo is a
 * tsc error instead of a dead link, and the locale prefix is never forgotten.
 */
export function LocalizedLink({
  routeId,
  query,
  hash,
  ...rest
}: Omit<LinkProps, 'to'> & LocalizedTarget) {
  return <Link to={useLocalePath()(routeId, { query, hash })} {...rest} />;
}

export function LocalizedNavLink({
  routeId,
  query,
  hash,
  ...rest
}: Omit<NavLinkProps, 'to'> & LocalizedTarget) {
  return <NavLink to={useLocalePath()(routeId, { query, hash })} {...rest} />;
}

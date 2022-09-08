import Link from 'next/link';

const Header = ({ currentUser }) => {
  // rendering the links based on a condition.
  const links = [
    !currentUser && { label: 'Sign up', href: '/auth/signup' },
    !currentUser && { label: 'Sign in', href: '/auth/signin' },
    currentUser && { label: 'Sell Tickets', href: '/tickets/new' },
    currentUser && { label: 'My Orders', href: '/orders' },
    currentUser && { label: 'Sign out', href: '/auth/singout' }
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => (
      <>
        <li className="nav-item" key={href}>
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      </>
    ));
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand px-2">Tickets LA</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};

export default Header;

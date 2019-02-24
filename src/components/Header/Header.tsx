import * as React from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './Header.scss';

const Header = React.memo(() => (
  <div className="header">
    <Logo className="header_logo" style={{ height: 60 }} />
  </div>
));

export default Header;

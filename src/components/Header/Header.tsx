import React, { memo } from 'react';
import { ReactComponent as Logo } from './Logo.svg';
import './Header.scss';

const Header = memo(() => (
  <div className="header">
    <Logo className="header_logo" style={{ height: 60 }} />
  </div>
));

export default Header;

import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElem';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/pages' activeStyle>
			Home
		</NavLink>
		<NavLink to='/aboutMe' activeStyle>
			About Me
		</NavLink>
		<NavLink to='/soloWork' activeStyle>
			Solo Projects
		</NavLink>
		<NavLink to='/group' activeStyle>
			Group Projects
		</NavLink>
		<NavLink to='/repos' activeStyle>
			User Repos
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact Me
		</NavLink>
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;

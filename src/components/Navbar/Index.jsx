import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';

const Navbar = (menuOpen, size, menuHandler) => {
	return (
		
		<nav
			className={`${style.nav} ${menuOpen ? 'not' : 'hola'}`}
		>
		{
			menuOpen ? 'text' : 'test'
		}
			<ul>
				<li>
					{/* Use slash before # couse not affect another components */}
					<Link to='/' onClick={menuHandler}>
						Home
					</Link>
				</li>
				<li>
					<Link to='/about-me' onClick={menuHandler}>
						Skills
					</Link>
				</li>
				<li>
					{/* Use slash before # couse not affect another components */}
					<Link to='/projects' onClick={menuHandler}>
						Projects
					</Link>
				</li>
				<li>
					<Link to='/contact-me' onClick={menuHandler}>
						Contact me
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { Navbar };
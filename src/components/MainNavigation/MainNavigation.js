import React from 'react'
import styles from './MainNavigation.module.css'
import MainNavLink from './MainNavLink'
import logo from '../../assets/images/logo.svg'

const MainNavigation = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Logo" />
			<nav className={styles.nav}>
				<ul>
					<MainNavLink link={'#'} content={'Home'} />
					<MainNavLink link={'#'} content={'New'} />
					<MainNavLink link={'#'} content={'Popular'} />
					<MainNavLink link={'#'} content={'Trending'} />
					<MainNavLink link={'#'} content={'Categories'} />
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation

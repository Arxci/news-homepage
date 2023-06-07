import React, { useEffect, useState } from 'react'
import styles from './MainNavigation.module.css'
import MainNavLink from './MainNavLink'
import logo from '../../assets/images/logo.svg'
import Hamburger from '../Hamburger/Hamburger'
import Sidebar from '../Sidebar/Sidebar'

const MainNavigation = () => {
	const [isMobile, setIsMobile] = useState(false)
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

	const resizeHandler = (e) => {
		const windowSize = e.target.outerWidth
		const mobileBreakpoint = 640
		if (windowSize <= mobileBreakpoint) {
			setIsMobile(true)
			return
		}
		setIsMobile(false)
		setSidebarIsOpen(false)
	}

	const openSideBarHandler = () => {
		setSidebarIsOpen(true)
	}

	const closeSideBarHandler = () => {
		setSidebarIsOpen(false)
	}

	useEffect(() => {
		window.addEventListener('resize', resizeHandler)

		return () => window.removeEventListener('resize', resizeHandler)
	}, [])

	return (
		<header className={styles.header}>
			<img src={logo} alt="Logo" />
			{!isMobile && (
				<nav className={styles.nav}>
					<ul>
						<MainNavLink link={'#'} content={'Home'} />
						<MainNavLink link={'#'} content={'New'} />
						<MainNavLink link={'#'} content={'Popular'} />
						<MainNavLink link={'#'} content={'Trending'} />
						<MainNavLink link={'#'} content={'Categories'} />
					</ul>
				</nav>
			)}
			{isMobile && <Hamburger onPressed={openSideBarHandler} />}
			{sidebarIsOpen && <Sidebar onClose={closeSideBarHandler} />}
		</header>
	)
}

export default MainNavigation

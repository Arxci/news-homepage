import React from 'react'
import styles from './Sidebar.module.css'
import ReactDOM from 'react-dom'
import SidebarLink from './SidebarLink'
import close from '../../assets/images/icon-menu-close.svg'

const Backdrop = () => {
	return <div className={styles.backdrop}></div>
}

const Sidebar = ({ onClose }) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
			{ReactDOM.createPortal(
				<div className={styles.sidebar}>
					<div className={styles.container}>
						<div className={styles.actions}>
							<button onClick={onClose} type="button" className={styles.button}>
								<img src={close} alt="close" />
							</button>
						</div>
						<nav className={styles.nav}>
							<ul>
								<SidebarLink onPressed={onClose} link={'#'} content={'Home'} />
								<SidebarLink onPressed={onClose} link={'#'} content={'New'} />
								<SidebarLink
									onPressed={onClose}
									link={'#'}
									content={'Popular'}
								/>
								<SidebarLink
									onPressed={onClose}
									link={'#'}
									content={'Trending'}
								/>
								<SidebarLink
									onPressed={onClose}
									link={'#'}
									content={'Categories'}
								/>
							</ul>
						</nav>
					</div>
				</div>,
				document.getElementById('sidebar')
			)}
		</>
	)
}

export default Sidebar

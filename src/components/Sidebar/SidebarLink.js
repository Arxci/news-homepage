import React from 'react'
import styles from './SidebarLink.module.css'

const SidebarLink = ({ link, content, onPressed }) => {
	return (
		<li className={styles.link}>
			<a onClick={onPressed} href={link}>
				{content}
			</a>
		</li>
	)
}

export default SidebarLink

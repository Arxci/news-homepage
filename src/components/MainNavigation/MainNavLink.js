import React from 'react'
import styles from './MainNavLink.module.css'

const MainNavLink = ({ link, content }) => {
	return (
		<li className={styles.link}>
			<a href={link}>{content}</a>
		</li>
	)
}

export default MainNavLink

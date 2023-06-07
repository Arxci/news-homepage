import React from 'react'
import styles from './Hamburger.module.css'
import hamburger from '../../assets/images/icon-menu.svg'

const Hamburger = ({ onPressed }) => {
	return (
		<button type="button" onClick={onPressed} className={styles.button}>
			<img src={hamburger} alt="hamburger" />
		</button>
	)
}

export default Hamburger

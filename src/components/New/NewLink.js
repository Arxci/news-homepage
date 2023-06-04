import React from 'react'
import styles from './NewLink.module.css'

const NewLink = ({ content, link, summary }) => {
	return (
		<li className={styles.link}>
			<a href={link}>{content}</a>
			<p>{summary}</p>
		</li>
	)
}

export default NewLink

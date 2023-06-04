import React from 'react'
import styles from './AdditionalArticle.module.css'

const AdditionalArticle = ({ image, index, title, subtext, link }) => {
	return (
		<li className={styles.article}>
			<div className={styles.image}>
				<img src={image} alt="article" />
			</div>
			<div className={styles.content}>
				<h2 className={styles.index}>{index}</h2>
				<a href={link} className={styles.title}>
					{title}
				</a>
				<p className={styles.subtext}>{subtext}</p>
			</div>
		</li>
	)
}

export default AdditionalArticle

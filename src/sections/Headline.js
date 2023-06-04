import React from 'react'
import styles from './Headline.module.css'
import Banner from '../assets/images/image-web-3-desktop.jpg'

const Headline = () => {
	return (
		<section className={styles.section}>
			<div className={styles.banner}>
				<img src={Banner} alt="" />
			</div>
			<div className={styles.content}>
				<h1 className={styles.title}>The Bright Future of Web 3.0?</h1>
				<div>
					<p className={styles.paragraph}>
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<button type="button" className={styles.button}>
						READ MORE
					</button>
				</div>
			</div>
		</section>
	)
}

export default Headline

import React, { useEffect, useState } from 'react'
import styles from './Headline.module.css'
import Banner from '../assets/images/image-web-3-desktop.jpg'
import BannerMobile from '../assets/images/image-web-3-mobile.jpg'

const Headline = () => {
	const [bannerImg, setBannerImg] = useState(Banner)

	const resizeHandler = (e) => {
		const windowSize = e.target.outerWidth
		const mobileBreakpoint = 640
		if (windowSize <= mobileBreakpoint) {
			setBannerImg(BannerMobile)
			return
		}
		setBannerImg(Banner)
	}

	useEffect(() => {
		window.addEventListener('resize', resizeHandler)

		return () => window.removeEventListener('resize', resizeHandler)
	}, [])

	return (
		<section className={styles.section}>
			<div className={styles.banner}>
				<img src={bannerImg} alt="" />
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

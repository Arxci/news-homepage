import React from 'react'
import styles from './AdditionalArticles.module.css'
import AdditionalArticle from '../components/AdditionalArticle/AdditionalArticle'
import firstImage from '../assets/images/image-retro-pcs.jpg'
import secondImage from '../assets/images/image-top-laptops.jpg'
import thirdImage from '../assets/images/image-gaming-growth.jpg'

const AdditionalArticles = () => {
	return (
		<section className={styles.section}>
			<ul className={styles.list}>
				<AdditionalArticle
					image={firstImage}
					title="Reviving Retro PCs"
					link="#"
					index="01"
					subtext="What happens when old PCs are given modern upgrades"
				/>
				<AdditionalArticle
					image={secondImage}
					title="Top 10 Laptops of 2023"
					link="#"
					index="02"
					subtext="Our best picks for various needs and budgets"
				/>
				<AdditionalArticle
					image={thirdImage}
					title="The Growth of Gaming"
					link="#"
					index="03"
					subtext="How the pandemic has sparked fresh opportunities"
				/>
			</ul>
		</section>
	)
}

export default AdditionalArticles

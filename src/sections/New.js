import React from 'react'
import styles from './New.module.css'
import NewLink from '../components/New/NewLink'

const New = () => {
	return (
		<section className={styles.section}>
			<h1 className={styles.title}>New</h1>
			<ul className={styles.list}>
				<NewLink
					link={'#'}
					content={'Hydrogen VS Electric Cars'}
					summary={'Will hydrogen-fueled cars ever catch up to EVs?'}
				/>
				<li className={styles.divider} />
				<NewLink
					link={'#'}
					content={'The Downsides Of AI Artistry'}
					summary={
						'What are the possible adverse effects of on-demand AI image generation?'
					}
				/>
				<li className={styles.divider} />
				<NewLink
					link={'#'}
					content={'Is VC Funding Drying Up?'}
					summary={
						'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
					}
				/>
			</ul>
		</section>
	)
}

export default New

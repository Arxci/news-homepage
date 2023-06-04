import MainNavigation from './components/MainNavigation/MainNavigation'
import Container from './components/UI/Container'
import Headline from './sections/Headline'
import New from './sections/New'
import AdditionalArticles from './sections/AdditionalArticles'
import styles from './App.module.css'

const App = () => {
	return (
		<div className={styles.root}>
			<Container>
				<MainNavigation />
				<main className={styles.main}>
					<Headline />
					<New />
					<AdditionalArticles />
				</main>
			</Container>
		</div>
	)
}

export default App

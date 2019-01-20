import * as React from 'react'

import Player from 'components/Player'

import styles from './App.pcss'
import 'styles/global.pcss'

import test from './assets/test.mp3'
import avenger from './assets/avenger.jpg'

const App = () => (
	<div className={styles.root}>
		<div className={styles.songInfo}>
			<img className={styles.albumPhoto} src={avenger} alt="image"/>
			<div className={styles.songName}>the toxic avenger - my only chance</div>
		</div>
		<div className={styles.player}>
			<Player sound={test}/>
		</div>
	</div>
)

export default App

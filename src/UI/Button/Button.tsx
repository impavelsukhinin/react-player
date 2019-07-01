import React, { memo, useState, useRef } from 'react'
import classnames from 'classnames/bind'

import styles from './Button.pcss'

import { IButtonComponentType } from './Button.d'

const cx = classnames.bind(styles)

const Button: IButtonComponentType = ({ children, className, onClick }) => {
	const buttonRef = useRef<HTMLDivElement>(null)
	const [withRipple, setWithRipple] = useState<boolean>(false)

	const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
		const { current: button } = buttonRef
		const rect = button.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top

		button.style.setProperty('--ripple-position-top', `${y}px`)
		button.style.setProperty('--ripple-position-left', `${x}px`)

		if (!withRipple) {
			setWithRipple(true)

			setTimeout(() => {
				setWithRipple(false)
			}, 500)
		}

		if (onClick) {
			onClick(e)
		}
	}

	return (
		<div ref={buttonRef} onClick={onClickHandler} className={cx('button', className, { withRipple })}>
			<div className={styles.children}>{children}</div>
		</div>
	)
}

export default memo<IButtonComponentType>(Button)

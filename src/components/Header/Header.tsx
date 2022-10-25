import { FC } from 'react';

import s from './Header.module.scss';

const Header: FC = () => {
	return (
		<header className={s.header}>
			<div className={s.header__leftBar}>
				<span className="material-icons-outlined">monetization_on</span>
				<h2 className={s.header__title}>Сurrency Exchange</h2>
			</div>
			<div className={s.header__rightBar}>
				<div>1 UAH = USD</div>
				<div>1 UAH = EUR</div>
			</div>
		</header>
	);
};

export default Header;

import { FC, useContext } from 'react';
import { RatesContext } from '../../App';
import s from './Header.module.scss';

const Header: FC = () => {
	const rates = useContext(RatesContext);

	return (
		<header className={s.header}>
			<div className={s.header__leftBar}>
				<span className="material-icons-outlined">monetization_on</span>
				<h2 className={s.header__title}>Сurrency Exchange</h2>
			</div>
			<div className={s.header__rightBar}>
				{rates && (
					<>
						<div className={s.header__rightBar_currency}>
							<span>1 USD: </span>
							{(1 / rates.USD).toFixed(2)} UAH
						</div>
						<div className={s.header__rightBar_currency}>
							<span>1 EUR: </span>
							{(1 / rates.EUR).toFixed(2)} UAH
						</div>
					</>
				)}
			</div>
		</header>
	);
};

export default Header;

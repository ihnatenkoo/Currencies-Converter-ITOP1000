import { FC } from 'react';
import { ICurrenciesRates } from '../../types';
import s from './Header.module.scss';

interface IHeaderProps {
	rates: ICurrenciesRates | null;
}

const Header: FC<IHeaderProps> = ({ rates }) => {
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

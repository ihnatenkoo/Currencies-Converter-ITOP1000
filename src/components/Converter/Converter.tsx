import { FC, useEffect, useState, MouseEvent } from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { Currencies, ICurrenciesRates } from '../../types';
import ConverterItem from '../ConverterItem/ConverterItem';
import s from './Converter.module.scss';

interface IConverterProps {
	rates: ICurrenciesRates | null;
}

const Converter: FC<IConverterProps> = ({ rates }) => {
	const [fromCurrency, setFromCurrency] = useState<string>(Currencies.UAH);
	const [toCurrency, setToCurrency] = useState<string>(Currencies.USD);

	const [amount, setAmount] = useState<number>(1);
	const [fromAmount, setFromAmount] = useState<number>(0);
	const [toAmount, setToAmount] = useState<number>(0);

	const [rate, setRate] = useState<number>(0);
	const [isFromAmountChanged, setIsFromAmountChanged] = useState<boolean>(true);

	const onChangeFromAmount = (value: number): void => {
		if (!isNaN(value)) {
			setAmount(value);
			setIsFromAmountChanged(true);
		}
	};

	const onChangeToAmount = (value: number): void => {
		if (!isNaN(value)) {
			setAmount(value);
			setIsFromAmountChanged(false);
		}
	};

	const handleSwitchCurrency = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setFromCurrency(toCurrency);
		setToCurrency(fromCurrency);
	};

	useEffect(() => {
		if (isFromAmountChanged) {
			setFromAmount(amount);
			setToAmount(rate * amount);
		} else {
			setFromAmount((1 / rate) * amount);
			setToAmount(amount);
		}
	}, [isFromAmountChanged, amount, rate]);

	useEffect(() => {
		if (rates) {
			setRate(rates[toCurrency] / rates[fromCurrency]);
		}
	}, [rates, fromCurrency, toCurrency]);

	return (
		<section className={s.converter}>
			<Paper elevation={2} className={s.converter__wrapper}>
				<Box
					component="form"
					noValidate
					autoComplete="off"
					className={s.converter__form}
				>
					<ConverterItem
						value={fromAmount}
						onChangeAmount={onChangeFromAmount}
						selectedCurrency={fromCurrency}
						onChangeCurrency={setFromCurrency}
					/>
					<ConverterItem
						value={toAmount}
						onChangeAmount={onChangeToAmount}
						selectedCurrency={toCurrency}
						onChangeCurrency={setToCurrency}
					/>

					<button
						className={s.converter__switchBtn}
						onClick={handleSwitchCurrency}
					>
						<span className="material-icons-outlined">currency_exchange</span>
					</button>
				</Box>
				{rates ? (
					<Typography
						variant="overline"
						display="block"
						className={s.converter__rate}
					>
						1 {fromCurrency} = {rate} {toCurrency}
					</Typography>
				) : (
					<p className={s.converter__loading}>Exchange rates loading...</p>
				)}
			</Paper>
		</section>
	);
};

export default Converter;

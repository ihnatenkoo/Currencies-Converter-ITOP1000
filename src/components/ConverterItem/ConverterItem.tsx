import { FC, useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import s from './ConverterItem.module.scss';
import { Currencies } from '../../types';

interface IConverterItemProps {
	initialCurrency: string;
}

const ConverterItem: FC<IConverterItemProps> = ({ initialCurrency }) => {
	const [currentCurrency, setCurrentCurrency] = useState<string>(initialCurrency);

	const onChangeCurrency = (currency: string) => {
		setCurrentCurrency(currency);
	};

	return (
		<div className={s.item}>
			<TextField
				id="outlined-basic"
				label="Enter amount"
				variant="outlined"
				inputProps={{
					min: 0,
					maxLength: 12,
				}}
			/>
			<TextField
				select
				id="demo-simple-select"
				value={currentCurrency}
				label="Currency"
				onChange={(e) => onChangeCurrency(e.target.value)}
			>
				<MenuItem value={Currencies.UAH}>₴ UAH</MenuItem>
				<MenuItem value={Currencies.EUR}>€ EUR</MenuItem>
				<MenuItem value={Currencies.USD}>$ USD</MenuItem>
			</TextField>
		</div>
	);
};
export default ConverterItem;

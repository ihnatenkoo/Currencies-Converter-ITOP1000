import { Dispatch, FC, SetStateAction, useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import s from './ConverterItem.module.scss';
import { Currencies } from '../../types';

interface IConverterItemProps {
	value: number;
	selectedCurrency: string;
	onChangeCurrency: Dispatch<SetStateAction<string>>;
	onChangeAmount: (value: number) => void;
}

const ConverterItem: FC<IConverterItemProps> = ({
	value,
	selectedCurrency,
	onChangeCurrency,
	onChangeAmount,
}) => {
	return (
		<div className={s.item}>
			<TextField
				value={value}
				id="outlined-basic"
				label="Enter amount"
				variant="outlined"
				inputProps={{
					maxLength: 14,
				}}
				onChange={(e) => onChangeAmount(+e.target.value)}
			/>
			<TextField
				select
				id="demo-simple-select"
				value={selectedCurrency}
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

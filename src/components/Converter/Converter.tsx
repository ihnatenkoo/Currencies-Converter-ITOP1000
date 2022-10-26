import { FC } from 'react';
import { Paper, Box, Typography } from '@mui/material';
import s from './Converter.module.scss';
import ConverterItem from '../ConverterItem/ConverterItem';
import { Currencies } from '../../types';

const Converter: FC = () => {
	return (
		<section className={s.converter}>
			<Paper elevation={2} className={s.converter__wrapper}>
				<Box component="form" className={s.converter__form} noValidate autoComplete="off">
					<ConverterItem initialCurrency={Currencies.UAH} />
					<ConverterItem initialCurrency={Currencies.USD} />
				</Box>
				<Typography variant="overline">rate</Typography>
			</Paper>
		</section>
	);
};
export default Converter;

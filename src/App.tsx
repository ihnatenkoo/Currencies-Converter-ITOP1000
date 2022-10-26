import { FC, useEffect, useState, createContext } from 'react';
import { ICurrenciesRates } from './types';
import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';

export const RatesContext = createContext<ICurrenciesRates | null>(null);

const App: FC = () => {
	const [rates, setRates] = useState<ICurrenciesRates | null>(null);

	const getRates = async (): Promise<void> => {
		try {
			const res = await fetch(
				`https://v6.exchangerate-api.com/v6/${
					import.meta.env.VITE_API_KEY
				}/latest/UAH`
			);
			const rates = await res.json();
			setRates({
				UAH: rates.conversion_rates.UAH,
				USD: rates.conversion_rates.USD,
				EUR: rates.conversion_rates.EUR,
			});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getRates();
	}, []);

	return (
		<RatesContext.Provider value={rates}>
			<Header />
			<Converter />
		</RatesContext.Provider>
	);
};

export default App;

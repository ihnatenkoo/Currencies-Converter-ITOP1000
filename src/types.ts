export interface ICurrenciesRates {
	UAH: number;
	USD: number;
	EUR: number;
	[index: string]: number;
}

export enum Currencies {
	UAH = 'UAH',
	USD = 'USD',
	EUR = 'EUR',
}

export type DelayBand = '15-29'|'30-59'|'60-119'|'120+';
export type TicketType =
	| 'single' | 'return'
	| 'season_weekly' | 'season_monthly' | 'season_annual' | 'season_flexi';

export const DEFAULT_RULES: Record<TicketType, Record<DelayBand, number>> = {
	single:        {'15-29':25, '30-59':50, '60-119':100, '120+':100},
	return:        {'15-29':12.5,'30-59':25, '60-119':50,  '120+':100},
	season_weekly: {'15-29':25, '30-59':50, '60-119':100, '120+':100},
	season_monthly:{'15-29':25, '30-59':50, '60-119':100, '120+':100},
	season_annual: {'15-29':25, '30-59':50, '60-119':100, '120+':200},
	season_flexi:  {'15-29':25, '30-59':50, '60-119':100, '120+':100},
};

// weekly ÷10, monthly ÷40, annual ÷464, flexi ÷16
export function toPerJourney(ticket: TicketType, price: number) {
	switch (ticket) {
		case 'season_weekly':  return price / 10;
		case 'season_monthly': return price / 40;
		case 'season_annual':  return price / 464;
		case 'season_flexi':   return price / 16;
		default:               return price; // single/return
	}
}

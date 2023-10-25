const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'ARS',
  style: 'currency'
})

export function formatCurrency (number: number): string {
  return CURRENCY_FORMATTER.format(number)
}

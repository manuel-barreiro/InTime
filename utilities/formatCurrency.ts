const CURRENCY_FORMATTER = new Intl.NumberFormat('es-ar', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 2
});

export function formatCurrency (number: number): string {
  return CURRENCY_FORMATTER.format(number)
}

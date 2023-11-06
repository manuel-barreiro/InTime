export function formatDate(inputDate: string) {
  const originalDate = new Date(inputDate);
  const formattedDate = originalDate.toLocaleString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    timeZone: 'America/Argentina/Buenos_Aires' // Especifica la zona horaria que desees utilizar
  });
  
  return formattedDate;
}

export function formatHour(inputDate: string) {
  const originalDate = new Date(inputDate);
  const formattedDate = originalDate.toLocaleString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Argentina/Buenos_Aires' // Especifica la zona horaria que desees utilizar
  });
  
  return formattedDate;
}
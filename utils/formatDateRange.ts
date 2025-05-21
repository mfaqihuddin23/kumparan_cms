export function formatDateRange(start: string, end: string) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' } as const;
  const startDate = new Date(start);
  const endDate = new Date(end);

  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const sameYear = startDate.getFullYear() === endDate.getFullYear();

  if (start === end || startDate.getTime() === endDate.getTime()) {
    return startDate.toLocaleDateString('id-ID', options); // 24 Juli 2025
  }

  if (sameMonth && sameYear) {
    return `${startDate.getDate()}–${endDate.getDate()} ${startDate.toLocaleDateString('id-ID', {
      month: 'long',
      year: 'numeric'
    })}`;
  }

  if (sameYear) {
    return `${startDate.getDate()} ${startDate.toLocaleDateString('id-ID', {
      month: 'long'
    })} – ${endDate.getDate()} ${endDate.toLocaleDateString('id-ID', {
      month: 'long',
      year: 'numeric'
    })}`;
  }

  return `${startDate.toLocaleDateString('id-ID', options)} – ${endDate.toLocaleDateString('id-ID', options)}`;
}

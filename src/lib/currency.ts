export const convertCurrency = (num: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0, // Menampilkan tanpa desimal
    }).format(num);
  };
  
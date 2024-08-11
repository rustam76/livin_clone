export const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Selamat Pagi';
    } else if (hour < 18) {
      return 'Selamat Siang';
    } else if (hour < 21) {
      return 'Selamat Sore';
    } else {
      return 'Selamat Malam';
    }
  };

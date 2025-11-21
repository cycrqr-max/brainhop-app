export type TrainingVideo = {
  title: string;
  link: string;
  additionalInfo?: string;
};

export type TrainingDay = {
  id: string;
  label: string;
  instructions: TrainingVideo;
  exercise: TrainingVideo;
};

export const trainings: TrainingDay[] = [
  {
    id: 'day-1',
    label: 'Tag 1',
    instructions: {
      title: 'Tag eins Instruktionen',
      link: 'https://edef5.pcloud.com/cBZeS3hwmZpcDKTB7Z4AS5Z8ZXcCu0kZ2ZZ0RXZkZupjmrZx4ZkRZNRZ44ZXRZ98Z2RZs4Z6RZxRZELZPzZS8Z2LZeceOZajQPntfbkxFXFfxcy0bHumYzNCwk/erledigt%20FHD%20INSTRUKTION%20%20Achter%20Wo1%20Vorw%C3%A4rts%20Moderiert%20LEG%C3%9C.mp4',
      additionalInfo: 'Dies ist das Instruktions-Video für Tag 1.',
    },
    exercise: {
      title: 'Tag eins Übung',
      link: 'https://edef8.pcloud.com/cBZQGMeFjZbgvKTB7Z4AS5Z8ZDoCu0kZ2ZZ0RXZkZUH4blZ5JZIpZxLZT8ZE0Zt7ZLHZvHZu4Zl0Z05Zt4Zg4ZxRZeceOZwlSCc6VIpwHTlDpV3SKD6L9eN2wX/E_PPP%208er-Gang%20Wo1%20Kurzf.%20%2B%20Mod.%20A.Schwab%20%27A%20Day%20Full%20Of%20Joy%27%20Arr.Musicfox%20FHD.mp4',
      additionalInfo: 'Dies ist das Übungs-Video für Tag 1.',
    },
  },
  {
    id: 'day-2',
    label: 'Tag 2',
    instructions: {
      title: 'Tag zwei Instruktionen',
      link: 'https://edef2.pcloud.com/cfZgt5ojLZYi8qTB7Z4AS5Z8ZJn9u0kZY5ZZBU0ZZFTUCFZIkZZR0ZRFZtkZakZ2XZZTVZy7ZkXZ6ZOXZQ0ZDnhxejmQzABTjpxLRvKmr0owlcp7/E_Instruktion%20Farb-Wort-Lesen%20Basic%20W1%C3%9C2.mov',
      additionalInfo: 'Instruktionen für die Farb-Wort-Lesen Übung (Tag 2).',
    },
    exercise: {
      title: 'Tag zwei Übung',
      link: 'https://edef2.pcloud.com/cfZdk0qxYZBi8qTB7Z4AS5Z8Zfn9u0kZQ5ZZBU0ZZxKVjRZVpZsVZvkZekZiJZVVZN0ZL0ZZlVZd0Z00ZS4Z20ZfX8oGXSumNm07mnnw3bYD5CTNiBV/E_MACH%20MIT%21%20-%C3%9C2%20Farb-Wort-Lesen%20FHD.mp4',
      additionalInfo: 'Dies ist das Übungs-Video für Tag 2 (Farb-Wort-Lesen).',
    },
  },
  {
    id: 'day-3',
    label: 'Tag 3',
    instructions: {
      title: 'Tag drei Instruktionen',
      link: 'https://edef5.pcloud.com/cfZeS3hwmZpcDKTB7Z4AS5Z8ZFInu0kZQ5ZZBU0ZZupjmrZx4ZkRZNRZ44ZXRZ98Z2RZs4Z6RZxRZELZPzZS8Z2LZXkGphIAbMD4sIgglTBddCkCf6Xo7/erledigt%20FHD%20INSTRUKTION%20%20Achter%20Wo1%20Vorw%C3%A4rts%20Moderiert%20LEG%C3%9C.mp4',
      additionalInfo: 'Instruktionen für Tag 3.',
    },
    exercise: {
      title: 'Tag drei Übung',
      link: 'https://edef9.pcloud.com/cfZLtohNEZIlHX6B7Z4AS5Z8Zj99u0kZQ5ZZBU0ZZrQtMIZb0ZzzZnJZQXZAzZS0ZEFZXVZo0ZNzZxHZjRZEkZKzZhBNzzby530hnyOfVG9of8uMXcf7k/ACHTERGANG%200925%20Kreativ.mp4',
      additionalInfo: 'Übung zum Thema Kreativität (Achtergang).',
    },
  },
  {
    id: 'day-4',
    label: 'Tag 4',
    instructions: {
      title: 'Tag vier Instruktionen',
      link: 'https://edef3.pcloud.com/cfZBvThuLZzcqKgB7Z4AS5Z8Z399u0kZY5ZZBU0ZZ6fT31Z60Zh7Z2FZq8ZV4ZfJZeJZx8Zd8ZBRZa4Z48ZuzZh8ZKbK3dcUkgpJTJWi2TBqS8VNs7JRV/E_Instruktion%20Thumb%20Drum%20Basic%20W2%C3%9C2.mov',
      additionalInfo: 'Instruktionen für die Thumb Drum Übung.',
    },
    exercise: {
      title: 'Tag vier Übung',
      link: 'https://edef7.pcloud.com/cfZqV69LjZRoqKgB7Z4AS5Z8ZmM9u0kZQ5ZZBU0ZZ67swgZepZOHZQzZ98ZE8Z4RZzJZwpZk8Z4HZDHZxLZI8ZPzZCMuh06twq3uQRFSI2gbVA8ACvb47/E_PPP%20WO2-%C3%9C2-Thumb%20Drum%20%28Fingertrommel%29%20FHD.mp4',
      additionalInfo: 'Thumb Drum (Fingertrommel) Übung für Tag 4.',
    },
  },
  {
    id: 'day-5',
    label: 'Tag 5',
    instructions: {
      title: 'Tag fünf Instruktionen',
      link: 'https://edef8.pcloud.com/cfZuIzrLWZhQnlgB7Z4AS5Z8ZqM9u0kZQ5ZZBU0ZZsL0pYZO0ZLLZBVZIJZWZT0Z55Zh0Zv0ZX0ZfVZ5FZ8JZm5Z5tTOorSuDlkNng4PCgNO0mk1cF1V/E_Instruktion%20Achtergang%20Wo2%20FHD.mp4',
      additionalInfo: 'Instruktionen für den Achtergang (Woche 2).',
    },
    exercise: {
      title: 'Tag fünf Übung',
      link: 'https://edef12.pcloud.com/cfZAfCnFjZRcXdgB7Z4AS5Z8ZrM9u0kZQ5ZZBU0ZZB68CwZd8Zp8ZURZUHZm8Zb4ZtzZCLZa8ZEpZ28Z5JZR8ZvLZPM94z5G1wWRoogMAKVF4gSUS34VX/EPPP%208er-Gang%20Wo2%2C%20V1%20%20Reinhold%20P%C3%B6hnl%20-%20%27CARE%20FREE%27%20%20Arr.%20Musicfox%20FHD.mp4',
      additionalInfo: 'Achtergang-Übung (Woche 2).',
    },
  },
  {
    id: 'day-6',
    label: 'Tag 6',
    instructions: {
      title: 'Tag sechs Instruktionen',
      link: 'https://edef9.pcloud.com/cfZrSOuSLZ8YVqgB7Z4AS5Z8ZmT9u0kZY5ZZBU0ZZD8rDSZbRZURZ25ZLpZg8ZN4ZFFZkLZwLZjVZh5ZYpZ1LZmzZTzBkNonesdB3UqxlB9aLjzofnLiy/E_Instruktion%20Luftschiff%20Basic%20W6%C3%9C1.mov',
      additionalInfo: 'Instruktion zur Übung Luftschiff.',
    },
    exercise: {
      title: 'Tag sechs Übung',
      link: 'https://edef5.pcloud.com/cfZHzmJYmZ4D4qgB7Z4AS5Z8ZdT9u0kZQ5ZZBU0ZZKRNVb7Zq8ZH8ZKzZc5ZKJZLRZjVZB4Zm4ZfJZo7ZoRZJFZv7Z5brirTkuggpYmYSd6bjbVj7CkmV0/E_MACH%20MIT%21%20-%C3%9C1%20Luftschiff%20FHD.mp4',
      additionalInfo: 'Luftschiff Übung (Mach mit! – Ü1).',
    },
  },
  {
    id: 'day-7',
    label: 'Tag 7',
    instructions: {
      title: 'Tag sieben Instruktionen',
      link: 'https://edef8.pcloud.com/cfZuIzrLWZRtstgB7Z4AS5Z8ZSg9u0kZQ5ZZBU0ZZsL0pYZO0ZLLZBVZIJZWZT0Z55Zh0Zv0ZX0ZfVZ5FZ8JZm5ZUN6aFCyjpW8fO22GHffoRHgwWLty/E_Instruktion%20Achtergang%20Wo2%20FHD.mp4',
      additionalInfo: 'Instruktionen für den Achtergang (weitere Variante).',
    },
    exercise: {
      title: 'Tag sieben Übung',
      link: 'https://edef6.pcloud.com/cfZ9dCdImZs0Q6gB7Z4AS5Z8Z9g9u0kZQ5ZZBU0ZZvsaS57Zl4ZX8ZJ8ZI8Z1RZc8ZULZp4Zn8Zs4Zv4ZR8ZM4Z3LZt9lNbhrUCVXil96jF5Ry970C84DX/E_Wo4%20mit%20Moderation%20Vor-Stop-R%C3%BCckw.%20Musikang.%20Michael%20Heger%20Dance%20Monkey%20%20FHD.mp4',
      additionalInfo: 'Vor-Stop-Rückwärts Übung mit Musik (Dance Monkey).',
    },
  },
  {
    id: 'day-8',
    label: 'Tag 8',
    instructions: {
      title: 'Tag acht Instruktionen',
      link: 'https://edef5.pcloud.com/cfZfJfEV4ZXD5EgB7Z4AS5Z8ZkP9u0kZY5ZZBU0ZZXm0t4ZxzZu0ZSZ3XZyVZbHZwVZZW0ZW5ZqVZxkZWFZ2VZGAcYGtxU2QJTrUM8ImsKFLjLp2U7/E_Instruktion%20Fingertreppe%20Basic%20W9%C3%9C1.mov',
      additionalInfo: 'Instruktionen zur Fingertreppe.',
    },
    exercise: {
      title: 'Tag acht Übung',
      link: 'https://edef4.pcloud.com/cfZRyL6pmZUy8EgB7Z4AS5Z8ZuP9u0kZQ5ZZBU0ZZhaeR47Zl8Zw4Z9XZV8Zm4Z28ZMzZULZz8ZgRZU4ZALZ7QZo7ZYsixckmRobRl73GcAC08ekuAue0X/E_MACH%20MIT%21%20-%20%C3%9C1%20-%20Fingertreppe%20FHD.mp4',
      additionalInfo: 'Fingertreppe Übung (Mach mit! – Ü1).',
    },
  },
  {
    id: 'day-9',
    label: 'Tag 9',
    instructions: {
      title: 'Keine Instruktionen',
      link: '',
      additionalInfo: 'Für Tag 9 gibt es keine separaten Instruktionen.',
    },
    exercise: {
      title: 'Tag neun Übung',
      link: 'https://edef8.pcloud.com/cfZzJgLGEZ2M0X6B7Z4AS5Z8ZlP9u0kZQ5ZZBU0ZZLUyPUZ80ZyzZVzZckZsHZqJZxzZSkZzpZk0ZgHZLzZR5ZXXZ8FFqXuNfQafw113nSbFEqhaoGmgX/ACHTERGANG%200925%20Rechnungen%20VB.mp4',
      additionalInfo: 'Achtergang – Rechnungen (VB).',
    },
  },
  {
    id: 'day-10',
    label: 'Tag 10',
    instructions: {
      title: 'Tag zehn Instruktionen',
      link: 'https://edef2.pcloud.com/cfZ664m61Z6ShUgB7Z4AS5Z8ZPC9u0kZY5ZZBU0ZZA9zrYZ0JZbHZyzZOXZjFZCpZCFZTZpJZEJZekZiJZh4Zf0Z49yfHGpYelQhMbUvshwHSbFpJmH7/E_Instruktion%20Smiley%20Dance%20mit%20Intro.mov',
      additionalInfo: 'Instruktionen für den Smiley Dance mit Intro.',
    },
    exercise: {
      title: 'Tag zehn Übung',
      link: 'https://edef7.pcloud.com/cfZcw8Y28Z07xUgB7Z4AS5Z8Z7x9u0kZY5ZZBU0ZZ5faCVZO8Zx7ZUkZfkZ1VZNVZvVZyXZJVZGXZSXZgkZAkZp0ZYP6kmc7c3BVAeAN04HK7TRpdrWi7/E_Mach-Mit%20Smiley%20Tanz%20Vor%C3%BCbung.mov',
      additionalInfo: 'Smiley Dance Vorübung.',
    },
  },
];

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
      link: 'https://e.pcloud.link/publink/show?code=XZtgLAZRij8z4XspazUqNV2ec6MtJov9FtVs',
      additionalInfo: 'Dies ist das Instruktions-Video für Tag 1.',
    },
    exercise: {
      title: 'Tag eins Übung',
      link: 'https://e.pcloud.link/publink/show?code=XZATLAZj27jCmDgwAum4sLp3SO215cpVQr7',
      additionalInfo: 'Dies ist das Übungs-Video für Tag 1.',
    },
  },
  {
    id: 'day-2',
    label: 'Tag 2',
    instructions: {
      title: 'Tag zwei Instruktionen',
      link: 'https://edef2.pcloud.com/cBZgt5ojLZYi8qTB7Z4AS5Z8ZHexu0kZ2ZZ0RXZkZFTUCFZIkZZR0ZRFZtkZakZ2XZZTVZy7ZkXZ6ZOXZQ0ZeceOZ1zNMDWoLE64ROS2HmenlKX8j6ihX/E_Instruktion%20Farb-Wort-Lesen%20Basic%20W1%C3%9C2.mov',
      additionalInfo: 'Instruktionen für die Farb-Wort-Lesen Übung (Tag 2).',
    },
    exercise: {
      title: 'Tag zwei Übung',
      link: 'https://edef2.pcloud.com/cBZdk0qxYZBi8qTB7Z4AS5Z8ZDexu0kZ2ZZ0RXZkZxKVjRZVpZsVZvkZekZiJZVVZN0ZL0ZZlVZd0Z00ZS4Z20ZeceOZKtwCJEh5Obb25xPg8uUoD06eO9nV/E_MACH%20MIT%21%20-%C3%9C2%20Farb-Wort-Lesen%20FHD.mp4',
      additionalInfo: 'Dies ist das Übungs-Video für Tag 2 (Farb-Wort-Lesen).',
    },
  },
  {
    id: 'day-3',
    label: 'Tag 3',
    instructions: {
      title: 'Keine Instruktionen',
      link: '',
      additionalInfo: 'Für Tag 3 gibt es keine separaten Instruktionen.',
    },
    exercise: {
      title: 'Tag drei Übung',
      link: 'https://edef9.pcloud.com/cBZLtohNEZIlHX6B7Z4AS5Z8Zcexu0kZ2ZZ0RXZkZrQtMIZb0ZzzZnJZQXZAzZS0ZEFZXVZo0ZNzZxHZjRZEkZKzZeceOZlJ3j4hOBY5Rqxw8r6rq3XFC65MeV/ACHTERGANG%200925%20Kreativ.mp4',
      additionalInfo: 'Übung zum Thema Kreativität (Achtergang).',
    },
  },
  {
    id: 'day-4',
    label: 'Tag 4',
    instructions: {
      title: 'Tag vier Instruktionen',
      link: 'https://edef3.pcloud.com/cBZBvThuLZzcqKgB7Z4AS5Z8Z2nxu0kZ2ZZ0RXZkZ6fT31Z60Zh7Z2FZq8ZV4ZfJZeJZx8Zd8ZBRZa4Z48ZuzZh8ZeceOZjuuHiPs06wpM0PsIg04wzFqsqyh7/E_Instruktion%20Thumb%20Drum%20Basic%20W2%C3%9C2.mov',
      additionalInfo: 'Instruktionen für die Thumb Drum Übung.',
    },
    exercise: {
      title: 'Tag vier Übung',
      link: 'https://edef7.pcloud.com/cBZqV69LjZRoqKgB7Z4AS5Z8Zwnxu0kZ2ZZ0RXZkZ67swgZepZOHZQzZ98ZE8Z4RZzJZwpZk8Z4HZDHZxLZI8ZPzZeceOZEJUqoB9LIXfmqLe9XziD3h84t25X/E_PPP%20WO2-%C3%9C2-Thumb%20Drum%20%28Fingertrommel%29%20FHD.mp4',
      additionalInfo: 'Thumb Drum (Fingertrommel) Übung für Tag 4.',
    },
  },
  {
    id: 'day-5',
    label: 'Tag 5',
    instructions: {
      title: 'Tag fünf Instruktionen',
      link: 'https://edef8.pcloud.com/cBZuIzrLWZhQnlgB7ZZZk9xu0kZ2ZZ0RXZkZsL0pYZO0ZLLZBVZIJZWZT0Z55Zh0Zv0ZX0ZfVZ5FZ8JZm5ZeceOZlRXKfU0rMNkrJUp40x3UjLAhlCPX/E_Instruktion%20Achtergang%20Wo2%20FHD.mp4',
      additionalInfo: 'Instruktionen für den Achtergang (Woche 2).',
    },
    exercise: {
      title: 'Tag fünf Übung',
      link: 'https://edef12.pcloud.com/cBZAfCnFjZRcXdgB7Z4AS5Z8Zm9xu0kZ2ZZ0RXZkZB68CwZd8Zp8ZURZUHZm8Zb4ZtzZCLZa8ZEpZ28Z5JZR8ZvLZeceOZEKM1sfy57USQsLvERJviEb6ERQrV/EPPP%208er-Gang%20Wo2%2C%20V1%20%20Reinhold%20P%C3%B6hnl%20-%20%27CARE%20FREE%27%20%20Arr.%20Musicfox%20FHD.mp4',
      additionalInfo: 'Achtergang-Übung (Woche 2).',
    },
  },
  {
    id: 'day-6',
    label: 'Tag 6',
    instructions: {
      title: 'Tag sechs Instruktionen',
      link: 'https://edef9.pcloud.com/cBZrSOuSLZ8YVqgB7Z4AS5Z8ZK9xu0kZ2ZZ0RXZkZD8rDSZbRZURZ25ZLpZg8ZN4ZFFZkLZwLZjVZh5ZYpZ1LZmzZeceOZpKh99V8YNgXps3Jwp1bqGpvyr0HV/E_Instruktion%20Luftschiff%20Basic%20W6%C3%9C1.mov',
      additionalInfo: 'Instruktion zur Übung Luftschiff.',
    },
    exercise: {
      title: 'Tag sechs Übung',
      link: 'https://edef5.pcloud.com/cBZHzmJYmZ4D4qgB7Z4AS5Z8ZG9xu0kZ2ZZ0RXZkZKRNVb7Zq8ZH8ZKzZc5ZKJZLRZjVZB4Zm4ZfJZo7ZoRZJFZv7ZeceOZVUVo9crYgvQuL1tnVHNpzkAwoHwk/E_MACH%20MIT%21%20-%C3%9C1%20Luftschiff%20FHD.mp4',
      additionalInfo: 'Luftschiff Übung (Mach mit! - Ü1).',
    },
  },
  {
    id: 'day-7',
    label: 'Tag 7',
    instructions: {
      title: 'Tag sieben Instruktionen',
      link: 'https://edef8.pcloud.com/cBZuIzrLWZRtstgB7Z4AS5Z8ZRMxu0kZ2ZZ0RXZkZsL0pYZO0ZLLZBVZIJZWZT0Z55Zh0Zv0ZX0ZfVZ5FZ8JZm5ZeceOZt16UMYLzPxY7vUGpNW5xR5apOnlk/E_Instruktion%20Achtergang%20Wo2%20FHD.mp4',
      additionalInfo: 'Instruktionen für den Achtergang (weitere Variante).',
    },
    exercise: {
      title: 'Tag sieben Übung',
      link: 'https://edef6.pcloud.com/cBZ9dCdImZs0Q6gB7Z4AS5Z8ZjMxu0kZ2ZZ0RXZkZvsaS57Zl4ZX8ZJ8ZI8Z1RZc8ZULZp4Zn8Zs4Zv4ZR8ZM4Z3LZeceOZSvC7N9INwKJEXPBAGS1bnQcxhh0y/E_Wo4%20mit%20Moderation%20Vor-Stop-R%C3%BCckw.%20Musikang.%20Michael%20Heger%20Dance%20Monkey%20%20FHD.mp4',
      additionalInfo: 'Vor-Stop-Rückwärts Übung mit Musik (Dance Monkey).',
    },
  },
  {
    id: 'day-8',
    label: 'Tag 8',
    instructions: {
      title: 'Tag acht Instruktionen',
      link: 'https://edef5.pcloud.com/cBZfJfEV4ZXD5EgB7Z4AS5Z8ZtMxu0kZ2ZZ0RXZkZXm0t4ZxzZu0ZSZ3XZyVZbHZwVZZW0ZW5ZqVZxkZWFZ2VZeceOZpWHYEjev1CfMMNVHPaI2IbDQnhcX/E_Instruktion%20Fingertreppe%20Basic%20W9%C3%9C1.mov',
      additionalInfo: 'Instruktionen zur Fingertreppe.',
    },
    exercise: {
      title: 'Tag acht Übung',
      link: 'https://edef4.pcloud.com/cBZRyL6pmZUy8EgB7Z4AS5Z8ZkTxu0kZ2ZZ0RXZkZhaeR47Zl8Zw4Z9XZV8Zm4Z28ZMzZULZz8ZgRZU4ZALZ7QZo7ZeceOZKPcvOORVXLXCtIjbrI2EWYIMCzAV/E_MACH%20MIT%21%20-%20%C3%9C1%20-%20Fingertreppe%20FHD.mp4',
      additionalInfo: 'Fingertreppe Übung (Mach mit! - Ü1).',
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
      link: 'https://edef8.pcloud.com/cBZzJgLGEZ2M0X6B7Z4AS5Z8ZbTxu0kZ2ZZ0RXZkZLUyPUZ80ZyzZVzZckZsHZqJZxzZSkZzpZk0ZgHZLzZR5ZXXZeceOZPk1S8uKzSq7js3vcg8P9shm8XasV/ACHTERGANG%200925%20Rechnungen%20VB.mp4',
      additionalInfo: 'Achtergang - Rechnungen (VB).',
    },
  },
  {
    id: 'day-10',
    label: 'Tag 10',
    instructions: {
      title: 'Tag zehn Instruktionen',
      link: 'https://edef2.pcloud.com/cBZ664m61Z6ShUgB7Z4AS5Z8Z7gxu0kZ2ZZ0RXZkZA9zrYZ0JZbHZyzZOXZjFZCpZCFZTZpJZEJZekZiJZh4Zf0ZeceOZpS5AWHNbFhRriX76rVymAVk30vmV/E_Instruktion%20Smiley%20Dance%20mit%20Intro.mov',
      additionalInfo: 'Instruktionen für den Smiley Dance mit Intro.',
    },
    exercise: {
      title: 'Tag zehn Übung',
      link: 'https://edef7.pcloud.com/cBZcw8Y28Z07xUgB7Z4AS5Z8ZLgxu0kZ2ZZ0RXZkZ5faCVZO8Zx7ZUkZfkZ1VZNVZvVZyXZJVZGXZSXZgkZAkZp0ZeceOZwcCnNe5NdoFRfzF6qyBkRm0lQ1UX/E_Mach-Mit%20Smiley%20Tanz%20Vor%C3%BCbung.mov',
      additionalInfo: 'Smiley Dance Vorübung.',
    },
  },
  {
    id: 'day-11',
    label: 'Tag 11',
    instructions: {
      title: 'Tag elf Instruktionen',
      link: 'https://edef1.pcloud.com/cBZSWEhwmZi6jAgB7Z4AS5Z8Zegxu0kZ2ZZ0RXZkZ19WsxZOLZe0ZeRZHRZBRZdRZx8ZQLZxLZM8ZgRZiLZeFZn4ZeceOZUR5lRBSOPH8Pk7EVXMYX38Avsg3V/E_INSTRUKTION%20%20Achter%20Wo3%20Blick%20fixieren%20Moderiert%20LEG%C3%9C.mp4',
      additionalInfo: 'Instruktionen: Achter Wo3 - Blick fixieren.',
    },
    exercise: {
      title: 'Tag elf Übung',
      link: 'https://edef11.pcloud.com/cBZnGqBhWZOARAgB7Z4AS5Z8Zlgxu0kZ2ZZ0RXZkZeUh3z7ZqLZT4ZI8ZpLZlRZV8Zm4ZG8ZH8Z3zZj4ZO4ZBpZIRZeceOZP5USRJznmyj8gcfJDTmPNXqjKn1X/Achter%20WO3%20Hans-Peter%20Sorger%20%27Grasshopper%27%20Chris%20Baca%20Band%20%20KOR%20%2CFHD.mp4',
      additionalInfo: 'Achtergang Wo3 - „Grasshopper“ (Hans-Peter Sorger).',
    },
  },
  {
    id: 'day-12',
    label: 'Tag 12',
    instructions: {
      title: 'Tag zwölf Instruktionen',
      link: 'https://edef4.pcloud.com/cBZGCjuV4ZYDjagB7Z4AS5Z8Zcgxu0kZ2ZZ0RXZkZn9GPjZW4ZeFZuHZORZSLZ3zZpLZVpZALZiLZ6FZX8ZLLZh7ZeceOZgUUkpJBhAtRGb8iH7G7XSV2V6Sdy/E_Instruktion%20Crossing%20Master%20W7%C3%9C1.mov',
      additionalInfo: 'Instruktionen für „Crossing Master“ (W7 Ü1).',
    },
    exercise: {
      title: 'Tag zwölf Übung',
      link: 'https://edef10.pcloud.com/cBZDr3gmmZEJeagB7Z4AS5Z8Z4Pxu0kZ2ZZ0RXZkZxx1bm7ZG4Z9RZC8ZVpZfJZcVZO8Z68Z9XZRJZkQZp8ZV8Zo7ZeceOZUufPrOe0Bl5ly0EzFHSHLBOJdiOX/MACH%20MIT%21%20-%20%C3%9C1%20Crossing%20Master%20FHD.mp4',
      additionalInfo: 'Crossing Master Übung (Mach mit! - Ü1).',
    },
  },
  {
    id: 'day-13',
    label: 'Tag 13',
    instructions: {
      title: 'Tag dreizehn Instruktionen',
      link: 'https://edef6.pcloud.com/cBZgMvTlLZrPQGgB7Z4AS5Z8ZCPxu0kZ2ZZ0RXZkZxoBiLZcHZHXZKpZWkZ2JZMkZpHZwzZ4JZ80ZdJZ7XZfzZGXZeceOZTQPcrn5IRpR0vguru80bI5UxKkhX/FHD%20INSTRUKTION%20Achterlauf%20Woche%205%20MORGEN.mov',
      additionalInfo: 'Instruktionen: Achterlauf - Woche 5 (Morgen).',
    },
    exercise: {
      title: 'Tag dreizehn Übung',
      link: 'https://edef12.pcloud.com/cBZOuMRF1Z2Uf3gB7Z4AS5Z8ZaPxu0kZ2ZZ0RXZkZkoy9R7ZxJZs4ZuFZq4Z08ZMLZa8Z2pZtzZp0ZKLZB5Z68ZTRZeceOZywHgcjy0KHf2qUdST77pemeu8OvX/Achter%20WO5%20%20%27Adlerflug%27%20-%20Vorw%C3%A4rts%20mit%20Finger%C3%BCbung%20-%20LEG%C3%9C%20%2C%20FHD.mp4',
      additionalInfo: 'Achter Wo5 „Adlerflug“ - vorwärts mit Fingerübung.',
    },
  },
  {
    id: 'day-14',
    label: 'Tag 14',
    instructions: {
      title: 'Tag vierzehn Instruktionen',
      link: 'https://edef4.pcloud.com/cBZBJDxRTZjrtGgB7Z4AS5Z8ZqCxu0kZ2ZZ0RXZkZKsXrHZxHZ4JZkJZtVZ3FZ15ZN0Z9zZjXZmRZ55ZXVZDkZPZeceOZDnRruRn5P3ztM8Ail5BxFBIP4QwV/E_INSTRUKTION%20Advanced%20Table%20Drums%20Bas.%20FHD.mp4',
      additionalInfo: 'Instruktionen für Advanced Table Drums (Basic).',
    },
    exercise: {
      title: 'Tag vierzehn Übung',
      link: 'https://edef10.pcloud.com/cBZQX7mITZDrtGgB7Z4AS5Z8ZiCxu0kZ2ZZ0RXZkZu1IrPZuRZ00ZL4ZBzZQHZKHZX0ZH8ZQRZlzZC4ZxJZ05ZO0ZeceOZpdrNjT7QY3mNscrJLlHfBpjX3q3X/E_WO22-%C3%9C2-Tabel%20%20Drums%20%27%27Trevor%20Lyttleton%27s%20Light%20Music%27%27%20Korrektur%20FHD.mp4',
      additionalInfo: 'Table Drums Übung - „Trevor Lyttleton’s Light Music“.',
    },
  },
  {
    id: 'day-15',
    label: 'Tag 15',
    instructions: {
      title: 'Keine Instruktionen',
      link: '',
      additionalInfo: 'Für Tag 15 gibt es keine separaten Instruktionen.',
    },
    exercise: {
      title: 'Tag fünfzehn Übung',
      link: 'https://edef10.pcloud.com/cBZbb1dQMZIs1vgB7Z4AS5Z8Z9xxu0kZ2ZZ0RXZkZ7YYxUZtXZRHZ3FZwzZz8ZoRZjVZhVZXLZXXZgJZ78ZC8ZjzZeceOZ6W8M5p612DHnzJecdeBI1zyl03zy/E_Modul1-Mach%20mit-Koknitivachter%20%27%27R.P%C3%B6hnl%2C%20Care%20and%20Free%27%27%20FHD.mp4',
      additionalInfo: 'Modul 1 - Mach mit! Kognitivachter „Care and Free“.',
    },
  },
  {
    id: 'day-16',
    label: 'Tag 16',
    instructions: {
      title: 'Tag sechzehn Instruktionen',
      link: 'https://edef10.pcloud.com/cBZaKPHalZNdQigB7Z4AS5Z8ZVwxu0kZ2ZZ0RXZkZuxm28ZXFZpFZbzZXLZdJZSzZqzZBFZdRZOpZRFZhVZQ5ZURZeceOZ5Sxc5FXlydRKJUpSeBPkwhPUyITV/E_INSTRUKTION%20Advanced%20WO28%20Copy%20Me%21%20LeG%C3%BC.%20FHD.mp4',
      additionalInfo: 'Instruktionen für Advanced „Copy Me!“ (WO28).',
    },
    exercise: {
      title: 'Tag sechzehn Übung',
      link: 'https://edef12.pcloud.com/cBZUuOVzMZcdQigB7Z4AS5Z8Z4wxu0kZ2ZZ0RXZkZ5JXFtZ6LZO8ZK8Z48Zu5Zi0Zq8Z2LZCLZIzZvRZf4ZILZB4ZeceOZNcSlCajVsL7uSoBmtXsmmuXDqCLy/E_COPY%20ME%20Teil1%20%27Breathtaker%27%20Uppbeat%20%27%27neu%27%27%20%20FHD.mp4',
      additionalInfo: 'Copy Me - Teil 1 „Breathtaker“ (Uppbeat).',
    },
  },
  {
    id: 'day-17',
    label: 'Tag 17',
    instructions: {
      title: 'Keine Instruktionen',
      link: '',
      additionalInfo: 'Für Tag 17 gibt es keine separaten Instruktionen.',
    },
    exercise: {
      title: 'Tag siebzehn Übung',
      link: 'https://edef3.pcloud.com/cBZrCakYxZflArgB7Z4AS5Z8ZDwxu0kZ2ZZ0RXZkZ1DhOIZ9JZR4Zm8Zu4Z4LZ8RZ58ZyQZA8ZdzZELZWzZoLZtRZeceOZ6UAc18YSWK0SQsTRDgvYs5HUDUpy/Modul10-Entspannungsachter%20Stockbus%20%27%27T.Lyttletons%20L.M.%27%27.mp4',
      additionalInfo: 'Modul 10 - Entspannungsachter (Stockbus).',
    },
  },
  {
    id: 'day-18',
    label: 'Tag 18',
    instructions: {
      title: 'Tag achtzehn Instruktionen',
      link: 'https://edef5.pcloud.com/cBZghOEHTZ6O8yPB7Z4AS5Z8ZQKxu0kZ2ZZ0RXZkZGuFK5ZaVZSpZdzZuzZQ0ZzFZLRZYJZpFZJpZ5RZs5Zz0Zu5ZeceOZCYYJRzQDRlJ43k30QRTrWHGgchnk/E_INSTRUKTION%20Advanced%20Four%20and%20One%20FHD.mp4',
      additionalInfo: 'Instruktionen: Advanced „Four and One“.',
    },
    exercise: {
      title: 'Tag achtzehn Übung',
      link: 'https://edef12.pcloud.com/cBZ5wtPn2ZX6CyPB7Z4AS5Z8ZsKxu0kZ2ZZ0RXZkZQhwAlZ8RZB8ZtLZv4ZALZ5LZSzZM8Zs4ZQ8Z04Z3RZvLZn4ZeceOZHKxRsWG00C0FM7kvTGywxBrdLM0k/E_WO20%20Finger%C3%BCbungen%20Catch%20me%2C%204%2B1%20%27A.Kluten-Hasenjagt%2C%20Trevor%20Lyttleton%27s%20Light%20Music%27%20KOR.%20FHD.mp4',
      additionalInfo: 'WO20 Fingerübungen „Catch me, 4+1“.',
    },
  },
  {
    id: 'day-19',
    label: 'Tag 19',
    instructions: {
      title: 'Tag neunzehn Instruktionen',
      link: 'https://edef1.pcloud.com/cBZfWi75lZULlXPB7Z4AS5Z8ZdKxu0kZ2ZZ0RXZkZBBkfRZmFZFFZXJZLJZpzZgJZQkZAzZnLZFLZ7LZeFZtzZ7FZeceOZplPWb7mIh77HvBTUMRPIcFxGHdfk/E_INSTRUKTION%20ACHTERGANG%20MODUL%2015%20FHD%20Leg%C3%BC.mp4',
      additionalInfo: 'Instruktionen: Achtergang Modul 15.',
    },
    exercise: {
      title: 'Tag neunzehn Übung',
      link: 'https://edef3.pcloud.com/cBZjFDoLlZ94lXPB7Z4AS5Z8ZNKxu0kZ2ZZ0RXZkZs01zNZHRZb8Zu4ZezZd8ZoLZVpZQ5ZuRZo8ZCFZJLZt8Zp4ZeceOZsKuBDhqH7zfMBPuqd9k5dzhifBzy/E_Modul15-Mach%20mit%21%20%28Basic%29%20%27%27Orch.Addy%20Flor%27%27%20FHD.mp4',
      additionalInfo: 'Modul 15 - Mach mit! (Basic) „Orch. Addy Flor“.',
    },
  },
  {
    id: 'day-20',
    label: 'Tag 20',
    instructions: {
      title: 'Tag zwanzig Instruktionen',
      link: 'https://edef8.pcloud.com/cBZdWnPRTZAVUVPB7Z4AS5Z8ZXlxu0kZ2ZZ0RXZkZ8b6gzZApZd0Z05ZuVZmJZQpZm0Zk0ZmFZyJZeHZ0pZ7RZhJZeceOZtutSTVkAqMV6uSHO7fJ6p7gmxVuy/E_INSTRUKTION%20Advanced%20Jonglieren%20Vor%C3%BCb.%20FHD.mp4',
      additionalInfo: 'Instruktionen: Advanced Jonglieren (Vorübung).',
    },
    exercise: {
      title: 'Tag zwanzig Übung',
      link: 'https://edef12.pcloud.com/cBZc9yKaTZiVUVPB7Z4AS5Z8ZLlxu0kZ2ZZ0RXZkZ4Y9jxZb8Z58ZizZQLZwRZhzZPJZ3RZUHZopZg8Z9pZ84ZbpZeceOZxINmEOaxux5p6qkr9pP3eQEhLxty/E_MODUL14%20Juggling%20Balls%20%20%27%27Jonny%20Boyle-Quelle%20Surprise-UPPBEAT%27%27%20Kor.%20FHD.mp4',
      additionalInfo: 'Modul 14 - Juggling Balls „Quelle Surprise“ (Uppbeat).',
    },
  },
  {
    id: 'day-21',
    label: 'Tag 21',
    instructions: {
      title: 'Keine Instruktionen',
      link: '',
      additionalInfo: 'Für Tag 21 gibt es keine separaten Instruktionen.',
    },
    exercise: {
      title: 'Tag einundzwanzig Übung',
      link: 'https://edef9.pcloud.com/cBZHBKWnlZ6BqHPB7Z4AS5Z8ZBlxu0kZ2ZZ0RXZkZQ82wAZG8ZEFZu8ZU4ZCRZApZaLZa4ZNzZxJZb4ZT4ZuRZF8ZeceOZWoaNDNe2boyi2yRRNWF0dhkhuhrk/E_Modul15-Entspannungsachter%20Trance%20%27%27Gerhard%20Narholz%20-%20Air%27%27%20FHD.mp4',
      additionalInfo: 'Modul 15 - Entspannungsachter Trance „Air“ (Gerhard Narholz).',
    },
  },
];

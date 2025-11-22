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
      link: '/0-21-Tage-Programm/TAG-1_8vw-moderiert-(BM1)/Tag1-8erLauf-Instruktion.mp4',
      additionalInfo: 'Dies ist das Instruktions-Video für Tag 1.',
    },
    exercise: {
      title: 'Tag eins Übung',
      link: '/0-21-Tage-Programm/TAG-1_8vw-moderiert-(BM1)/Tag1-8erLauf-MachMit.mp4',
      additionalInfo: 'Dies ist das Übungs-Video für Tag 1.',
    },
  },
  {
    id: 'day-2',
    label: 'Tag 2',
    instructions: {
      title: 'Tag zwei Instruktionen',
      link: '/0-21-Tage-Programm/TAG-2_Farb-Wort-Lesen-(BM1)/E_Instruktion-Farb-Wort-Lesen-Basic-W1Ü2.mov',
      additionalInfo: 'Instruktionen für die Farb-Wort-Lesen Übung (Tag 2).',
    },
    exercise: {
      title: 'Tag zwei Übung',
      link: '/0-21-Tage-Programm/TAG-2_Farb-Wort-Lesen-(BM1)/E_MACH-MIT!-Ü2-Farb-Wort-Lesen-FHD.mp4',
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
      link: '/0-21-Tage-Programm/TAG-3_8vw_Kreativität-(NEU)/ACHTERGANG-0925-Kreativ.mp4',
      additionalInfo: 'Übung zum Thema Kreativität (Achtergang).',
    },
  },
  {
    id: 'day-4',
    label: 'Tag 4',
    instructions: {
      title: 'Tag vier Instruktionen',
      link: '/0-21-Tage-Programm/TAG-4_ThumbDrum-(BM2)/E_Instruktion-Thumb-Drum-Basic-W2Ü2.mov',
      additionalInfo: 'Instruktionen für die Thumb Drum Übung.',
    },
    exercise: {
      title: 'Tag vier Übung',
      link: '/0-21-Tage-Programm/TAG-4_ThumbDrum-(BM2)/E_PPP-WO2-Ü2-Thumb-Drum-(Fingertrommel)-FHD.mp4',
      additionalInfo: 'Thumb Drum (Fingertrommel) Übung für Tag 4.',
    },
  },
  {
    id: 'day-5',
    label: 'Tag 5',
    instructions: {
      title: 'Tag fünf Instruktionen',
      link: '/0-21-Tage-Programm/TAG-5_8rw moderiert-(BM2)/E_Instruktion-Achtergang-Wo2-FHD.mp4',
      additionalInfo: 'Instruktionen für den Achtergang (Woche 2).',
    },
    exercise: {
      title: 'Tag fünf Übung',
      link: '/0-21-Tage-Programm/TAG-5_8rw moderiert-(BM2)/EPPP-8er-Gang-Wo2-V1 -Reinhold-Pöhnl-CARE-FREE-Arr-Musicfox-FHD.mp4',
      additionalInfo: 'Achtergang-Übung (Woche 2).',
    },
  },
  {
    id: 'day-6',
    label: 'Tag 6',
    instructions: {
      title: 'Tag sechs Instruktionen',
      link: '/0-21-Tage-Programm/TAG-6_Luftschiff-(BM6)/E_Instruktion-Luftschiff-Basic-W6Ü1.mov',
      additionalInfo: 'Instruktion zur Übung Luftschiff.',
    },
    exercise: {
      title: 'Tag sechs Übung',
      link: '/0-21-Tage-Programm/TAG-6_Luftschiff-(BM6)/E_MACH-MIT!-Ü1-Luftschiff-FHD.mp4',
      additionalInfo: 'Luftschiff Übung (Mach mit! - Ü1).',
    },
  },
  {
    id: 'day-7',
    label: 'Tag 7',
    instructions: {
      title: 'Tag sieben Instruktionen',
      link: '/0-21-Tage-Programm/TAG-7_8rw-(BM4)/E_Instruktion-Achtergang-Wo2-FHD.mp4',
      additionalInfo: 'Instruktionen für den Achtergang (weitere Variante).',
    },
    exercise: {
      title: 'Tag sieben Übung',
      link: '/0-21-Tage-Programm/TAG-7_8rw-(BM4)/E_Mach-Mit-Achtergang-Wo2-FHD.mp4',
      additionalInfo: 'Vor-Stop-Rückwärts Übung mit Musik (Dance Monkey).',
    },
  },
  {
    id: 'day-8',
    label: 'Tag 8',
    instructions: {
      title: 'Tag acht Instruktionen',
      link: '/0-21-Tage-Programm/TAG-8_Fingertreppe-(BM9)/E_Instruktion-Fingertreppe-Basic-W9Ü1.mov',
      additionalInfo: 'Instruktionen zur Fingertreppe.',
    },
    exercise: {
      title: 'Tag acht Übung',
      link: '/0-21-Tage-Programm/TAG-8_Fingertreppe-(BM9)/E_MACH-MIT!-Ü1-Fingertreppe-FHD.mp4',
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
      link: '/0-21-Tage-Programm/TAG-9_8rw_rechnen-(NEU)/ACHTERGANG-0925-Rechnungen-VB.mp4',
      additionalInfo: 'Achtergang - Rechnungen (VB).',
    },
  },
  {
    id: 'day-10',
    label: 'Tag 10',
    instructions: {
      title: 'Tag zehn Instruktionen',
      link: '/0-21-Tage-Programm/TAG-10_SmileyDance-(BM14)/E_Instruktion-Smiley-Dance-mit-Intro.mov',
      additionalInfo: 'Instruktionen für den Smiley Dance mit Intro.',
    },
    exercise: {
      title: 'Tag zehn Übung',
      link: '/0-21-Tage-Programm/TAG-10_SmileyDance-(BM14)/E_Mach-Mit-Smiley-Tanz-Vorübung.mov',
      additionalInfo: 'Smiley Dance Vorübung.',
    },
  },
  {
    id: 'day-11',
    label: 'Tag 11',
    instructions: {
      title: 'Tag elf Instruktionen',
      link: '/0-21-Tage-Programm/TAG-11_8Blick-(BM3)/E_INSTRUKTION-Achter-Wo3-Blick-fixieren-Moderiert-LEGÜ.mp4',
      additionalInfo: 'Instruktionen: Achter Wo3 - Blick fixieren.',
    },
    exercise: {
      title: 'Tag elf Übung',
      link: '/0-21-Tage-Programm/TAG-11_8Blick-(BM3)/Achter-WO3-Hans-Peter-Sorger-Grasshopper-Chris-Baca-Band-KOR-FHD.mp4',
      additionalInfo: 'Achtergang Wo3 - „Grasshopper“ (Hans-Peter Sorger).',
    },
  },
  {
    id: 'day-12',
    label: 'Tag 12',
    instructions: {
      title: 'Tag zwölf Instruktionen',
      link: '/0-21-Tage-Programm/TAG-12_Crossing-Master-(BM7)/E_Instruktion-Crossing-Master-W7Ü1.mov',
      additionalInfo: 'Instruktionen für „Crossing Master“ (W7 Ü1).',
    },
    exercise: {
      title: 'Tag zwölf Übung',
      link: '/0-21-Tage-Programm/TAG-12_Crossing-Master-(BM7)/MACH-MIT!-Ü1-Crossing-Master-FHD.mp4',
      additionalInfo: 'Crossing Master Übung (Mach mit! - Ü1).',
    },
  },
  {
    id: 'day-13',
    label: 'Tag 13',
    instructions: {
      title: 'Tag dreizehn Instruktionen',
      link: '/0-21-Tage-Programm/TAG-13_8ThumbDr-(BM5)/Tag13-intro.mov',
      additionalInfo: 'Instruktionen: Achterlauf - Woche 5 (Morgen).',
    },
    exercise: {
      title: 'Tag dreizehn Übung',
      link: '/0-21-Tage-Programm/TAG-13_8ThumbDr-(BM5)/Tag13-ex.mp4',
      additionalInfo: 'Achter Wo5 „Adlerflug“ - vorwärts mit Fingerübung.',
    },
  },
  {
    id: 'day-14',
    label: 'Tag 14',
    instructions: {
      title: 'Tag vierzehn Instruktionen',
      link: '/0-21-Tage-Programm/TAG-14_TableDrums-(AM6)/Tag14-intro.mp4',
      additionalInfo: 'Instruktionen für Advanced Table Drums (Basic).',
    },
    exercise: {
      title: 'Tag vierzehn Übung',
      link: '/0-21-Tage-Programm/TAG-14_TableDrums-(AM6)/Tag14-ex.mp4',
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
      link: '/0-21-Tage-Programm/TAG-15_8kog_REIM-(AM1)/Tag15-ex.mp4',
      additionalInfo: 'Modul 1 - Mach mit! Kognitivachter „Care and Free“.',
    },
  },
  {
    id: 'day-16',
    label: 'Tag 16',
    instructions: {
      title: 'Tag sechzehn Instruktionen',
      link: '/0-21-Tage-Programm/TAG-16_CopyMe-(AM12)/tag16-intro.mp4',
      additionalInfo: 'Instruktionen für Advanced „Copy Me!“ (WO28).',
    },
    exercise: {
      title: 'Tag sechzehn Übung',
      link: '/0-21-Tage-Programm/TAG-16_CopyMe-(AM12)/tag16-ex.mp4',
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
      link: '/0-21-Tage-Programm/TAG-17_8lebhafte-Entspannung_(AM10)/Tag17-ex.mp4',
      additionalInfo: 'Modul 10 - Entspannungsachter (Stockbus).',
    },
  },
  {
    id: 'day-18',
    label: 'Tag 18',
    instructions: {
      title: 'Tag achtzehn Instruktionen',
      link: '/0-21-Tage-Programm/TAG-18_Fingerübungen-(AM4)/tag18-intro-1.mp4',
      additionalInfo: 'Instruktionen: Advanced „Four and One“.',
    },
    exercise: {
      title: 'Tag achtzehn Übung',
      link: '/0-21-Tage-Programm/TAG-18_Fingerübungen-(AM4)/Tag18-ex.mp4',
      additionalInfo: 'WO20 Fingerübungen „Catch me, 4+1“.',
    },
  },
  {
    id: 'day-19',
    label: 'Tag 19',
    instructions: {
      title: 'Tag neunzehn Instruktionen',
      link: '/0-21-Tage-Programm/TAG-19_8Zahlenwörter-(AM15)/tag19-intro.mp4',
      additionalInfo: 'Instruktionen: Achtergang Modul 15.',
    },
    exercise: {
      title: 'Tag neunzehn Übung',
      link: '/0-21-Tage-Programm/TAG-19_8Zahlenwörter-(AM15)/Tag19-ex.mp4',
      additionalInfo: 'Modul 15 - Mach mit! (Basic) „Orch. Addy Flor“.',
    },
  },
  {
    id: 'day-20',
    label: 'Tag 20',
    instructions: {
      title: 'Tag zwanzig Instruktionen',
      link: '/0-21-Tage-Programm/TAG-20_Jonglieren-(AM14)/tag20-intro.mp4',
      additionalInfo: 'Instruktionen: Advanced Jonglieren (Vorübung).',
    },
    exercise: {
      title: 'Tag zwanzig Übung',
      link: '/0-21-Tage-Programm/TAG-20_Jonglieren-(AM14)/tag20-ex.mp4',
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
      link: '/0-21-Tage-Programm/TAG-21_8Trance-(AM15)/tag21-ex.mp4',
      additionalInfo: 'Modul 15 - Entspannungsachter Trance „Air“ (Gerhard Narholz).',
    },
  },
];

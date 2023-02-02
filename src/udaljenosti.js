var IDMap = {
  Adaševci: 43,
  Aleksinac: 28,
  'Aleksinački Rudnici': 27,
  Batočina: 21,
  'Bačka Topola': 2,
  'Bela Palanka': 58,
  Beograd: 11,
  Beška: 8,
  Brestovac: 31,
  'Bujanovac jug': 39,
  'Bujanovac sever': 38,
  Dimitrovgrad: 41,
  Doljevac: 30,
  Feketić: 3,
  Grdelica: 34,
  Inđija: 10,
  Jagodina: 22,
  Kolari: 15,
  Kovilj: 7,
  Kuzmin: 44,
  Lajkovac: 52,
  Lapovo: 20,
  'Leskovac centar': 32,
  'Leskovac jug': 33,
  Ljig: 53,
  'Mali Požarevac': 12,
  Maradik: 9,
  Markovac: 19,
  Merošina: 54,
  Morović: 61,
  'Niš Malča': 57,
  'Niš istok': 56,
  'Niš jug': 29,
  'Niš sever': 55,
  'Novi Sad': 6,
  Obrenovac: 50,
  Pakovraće: 62,
  Paraćin: 24,
  Pećinci: 47,
  'Pirot istok': 60,
  'Pirot zapad': 59,
  Pojate: 25,
  Požarevac: 17,
  Predejane: 35,
  Preljina: 49,
  Preševo: 40,
  Ražanj: 26,
  Ruma: 46,
  Smederevo: 16,
  'Sremska Mitrovica': 45,
  Subotica: 0,
  Takovo: 48,
  Ub: 51,
  Umčari: 13,
  'Velika Plana': 18,
  'Vladičin Han': 36,
  Vodanj: 14,
  Vranje: 37,
  Vrbas: 4,
  Zmajevo: 5,
  Ćuprija: 23,
  Šid: 42,
  Žednik: 1,
};

var удаљености = [];

for (var i = 0; i < 62; i++) {
  удаљености.push([]);

  for (var j = 0; j < 62; j++) {
    удаљености[i].push(i === j ? 0 : null);
  }
}

// Niš istok - Niš Malča
удаљености[IDMap['Niš istok']][IDMap['Niš Malča']] = 7.8;
удаљености[IDMap['Niš Malča']][IDMap['Niš istok']] = 8.2;

// Niš istok - Niš sever
удаљености[IDMap['Niš istok']][IDMap['Niš sever']] = 7.1;
удаљености[IDMap['Niš sever']][IDMap['Niš istok']] = 8.8;

// Niš istok - Niš jug
удаљености[IDMap['Niš istok']][IDMap['Niš jug']] = 14.7;
удаљености[IDMap['Niš jug']][IDMap['Niš istok']] = 13.1;

// Niš istok - Doljevac
удаљености[IDMap['Niš istok']][IDMap['Doljevac']] = 30.1;
удаљености[IDMap['Doljevac']][IDMap['Niš istok']] = 29.5;

// Niš istok - Subotica
удаљености[IDMap['Niš istok']][IDMap['Subotica']] = 411;
удаљености[IDMap['Subotica']][IDMap['Niš istok']] = 413;

// Niš istok - Beograd
удаљености[IDMap['Niš istok']][IDMap['Beograd']] = 215;
удаљености[IDMap['Beograd']][IDMap['Niš istok']] = 216;

// Niš istok - Aleksinac
удаљености[IDMap['Niš istok']][IDMap['Aleksinac']] = 31.8;
удаљености[IDMap['Aleksinac']][IDMap['Niš istok']] = 31.1;

// Niš istok - Aleksinački rudnici
удаљености[IDMap['Niš istok']][IDMap['Aleksinački Rudnici']] = 35.6;
удаљености[IDMap['Aleksinački Rudnici']][IDMap['Niš istok']] = 36.8;

// Niš istok - Batočina
удаљености[IDMap['Niš istok']][IDMap['Batočina']] = 126;
удаљености[IDMap['Batočina']][IDMap['Niš istok']] = 127;

// Niš istok - Bela Palanka
удаљености[IDMap['Niš istok']][IDMap['Bela Palanka']] = 37;
удаљености[IDMap['Bela Palanka']][IDMap['Niš istok']] = 37;

// Niš istok - Brestovac
удаљености[IDMap['Niš istok']][IDMap['Brestovac']] = 36.3;
удаљености[IDMap['Brestovac']][IDMap['Niš istok']] = 35.8;

// Niš istok - Preševo
удаљености[IDMap['Niš istok']][IDMap['Preševo']] = 154;
удаљености[IDMap['Preševo']][IDMap['Niš istok']] = 153;

// Niš istok - Dimitrovgrad
удаљености[IDMap['Niš istok']][IDMap['Dimitrovgrad']] = 86.3;
удаљености[IDMap['Dimitrovgrad']][IDMap['Niš istok']] = 86.2;

// Niš istok - Grdelica
удаљености[IDMap['Niš istok']][IDMap['Grdelica']] = 71.1;
удаљености[IDMap['Grdelica']][IDMap['Niš istok']] = 69.9;

// Niš istok - Jagodina
удаљености[IDMap['Niš istok']][IDMap['Jagodina']] = 105;
удаљености[IDMap['Jagodina']][IDMap['Niš istok']] = 105;

// Niš istok - Kolari
удаљености[IDMap['Niš istok']][IDMap['Kolari']] = 184;
удаљености[IDMap['Kolari']][IDMap['Niš istok']] = 184;

// Niš istok - Kuzmin
удаљености[IDMap['Niš istok']][IDMap['Kuzmin']] = 327;
удаљености[IDMap['Kuzmin']][IDMap['Niš istok']] = 328;

// Niš istok - Leskovac centar
удаљености[IDMap['Niš istok']][IDMap['Leskovac centar']] = 43.6;
удаљености[IDMap['Leskovac centar']][IDMap['Niš istok']] = 42.9;

// Niš istok - Leskovac jug
удаљености[IDMap['Niš istok']][IDMap['Leskovac jug']] = 59.8;
удаљености[IDMap['Leskovac jug']][IDMap['Niš istok']] = 59.8;

// Niš istok - Mali Požarevac
удаљености[IDMap['Niš istok']][IDMap['Mali Požarevac']] = 203;
удаљености[IDMap['Mali Požarevac']][IDMap['Niš istok']] = 203;

// Niš istok - Markovac
удаљености[IDMap['Niš istok']][IDMap['Markovac']] = 137;
удаљености[IDMap['Markovac']][IDMap['Niš istok']] = 137;

// Niš istok - Merošina
удаљености[IDMap['Niš istok']][IDMap['Merošina']] = 19.6;
удаљености[IDMap['Merošina']][IDMap['Niš istok']] = 19;

// Niš istok - Paraćin
удаљености[IDMap['Niš istok']][IDMap['Paraćin']] = 81.1;
удаљености[IDMap['Paraćin']][IDMap['Niš istok']] = 84.8;

// Niš istok - Pirot istok
удаљености[IDMap['Niš istok']][IDMap['Pirot istok']] = 61.1;
удаљености[IDMap['Pirot istok']][IDMap['Niš istok']] = 60.8;

// Niš istok - Pirot zapad
удаљености[IDMap['Niš istok']][IDMap['Pirot zapad']] = 71.7;
удаљености[IDMap['Pirot zapad']][IDMap['Niš istok']] = 71.2;

// Niš istok - Pojate
удаљености[IDMap['Niš istok']][IDMap['Pojate']] = 69.3;
удаљености[IDMap['Pojate']][IDMap['Niš istok']] = 69.2;

// Niš istok - Požarevac
удаљености[IDMap['Niš istok']][IDMap['Požarevac']] = 177;
удаљености[IDMap['Požarevac']][IDMap['Niš istok']] = 178;

// Niš istok - Predejane
удаљености[IDMap['Niš istok']][IDMap['Predejane']] = 81.3;
удаљености[IDMap['Predejane']][IDMap['Niš istok']] = 80.3;

// Niš istok - Ražanj
удаљености[IDMap['Niš istok']][IDMap['Ražanj']] = 55.7;
удаљености[IDMap['Ražanj']][IDMap['Niš istok']] = 57.1;

// Niš istok - Smederevo
удаљености[IDMap['Niš istok']][IDMap['Smederevo']] = 179;
удаљености[IDMap['Smederevo']][IDMap['Niš istok']] = 180;

// Niš istok - Umčari
удаљености[IDMap['Niš istok']][IDMap['Umčari']] = 196;
удаљености[IDMap['Umčari']][IDMap['Niš istok']] = 197;

// Niš istok - Velika Plana
удаљености[IDMap['Niš istok']][IDMap['Velika Plana']] = 149;
удаљености[IDMap['Velika Plana']][IDMap['Niš istok']] = 149;

// Niš istok - Vladičin Han
удаљености[IDMap['Niš istok']][IDMap['Vladičin Han']] = 95.1;
удаљености[IDMap['Vladičin Han']][IDMap['Niš istok']] = 94.8;

// Niš istok - Vranje
удаљености[IDMap['Niš istok']][IDMap['Vranje']] = 118;
удаљености[IDMap['Vranje']][IDMap['Niš istok']] = 117;

// Niš istok - Vodanj
удаљености[IDMap['Niš istok']][IDMap['Vodanj']] = 190;
удаљености[IDMap['Vodanj']][IDMap['Niš istok']] = 191;

// Niš istok - Ćuprija
удаљености[IDMap['Niš istok']][IDMap['Ćuprija']] = 91.7;
удаљености[IDMap['Ćuprija']][IDMap['Niš istok']] = 91.7;

// Niš istok - Bujanovac sever
удаљености[IDMap['Niš istok']][IDMap['Bujanovac sever']] = 132;
удаљености[IDMap['Bujanovac sever']][IDMap['Niš istok']] = 131;

// Niš istok - Bujanovac jug
удаљености[IDMap['Niš istok']][IDMap['Bujanovac jug']] = 135;
удаљености[IDMap['Bujanovac jug']][IDMap['Niš istok']] = 135;

// Niš sever - Niš Malča
удаљености[IDMap['Niš sever']][IDMap['Niš Malča']] = 15.6;
удаљености[IDMap['Niš Malča']][IDMap['Niš sever']] = 14.4;

// Niš sever - Niš jug
удаљености[IDMap['Niš sever']][IDMap['Niš jug']] = 8.1;
удаљености[IDMap['Niš jug']][IDMap['Niš sever']] = 6.2;

// Niš sever - Merošina
удаљености[IDMap['Niš sever']][IDMap['Merošina']] = 13;
удаљености[IDMap['Merošina']][IDMap['Niš sever']] = 12;

// Niš sever - Doljevac
удаљености[IDMap['Niš sever']][IDMap['Doljevac']] = 23.6;
удаљености[IDMap['Doljevac']][IDMap['Niš sever']] = 22.6;

// Niš sever - Brestovac
удаљености[IDMap['Niš sever']][IDMap['Brestovac']] = 29.6;
удаљености[IDMap['Brestovac']][IDMap['Niš sever']] = 28.6;

// Niš sever - Aleksinac
удаљености[IDMap['Niš sever']][IDMap['Aleksinac']] = 24.6;
удаљености[IDMap['Aleksinac']][IDMap['Niš sever']] = 24.8;

// Niš sever - Aleksinački rudnici
удаљености[IDMap['Niš sever']][IDMap['Aleksinački Rudnici']] = 29.1;
удаљености[IDMap['Aleksinački Rudnici']][IDMap['Niš sever']] = 29.8;

// Niš sever - Batočina
удаљености[IDMap['Niš sever']][IDMap['Batočina']] = 120;
удаљености[IDMap['Batočina']][IDMap['Niš sever']] = 120;

// Niš sever - Bela Palanka
удаљености[IDMap['Niš sever']][IDMap['Bela Palanka']] = 44.4;
удаљености[IDMap['Bela Palanka']][IDMap['Niš sever']] = 43.6;

// Niš sever - Beograd
удаљености[IDMap['Niš sever']][IDMap['Beograd']] = 209;
удаљености[IDMap['Beograd']][IDMap['Niš sever']] = 209;

// Niš sever - Bujanovac jug
удаљености[IDMap['Niš sever']][IDMap['Bujanovac jug']] = 129;
удаљености[IDMap['Bujanovac jug']][IDMap['Niš sever']] = 128;

// Niš sever - Bujanovac sever
удаљености[IDMap['Niš sever']][IDMap['Bujanovac sever']] = 125;
удаљености[IDMap['Bujanovac sever']][IDMap['Niš sever']] = 124;

// Niš sever - Dimitrovgrad
удаљености[IDMap['Niš sever']][IDMap['Dimitrovgrad']] = 93.7;
удаљености[IDMap['Dimitrovgrad']][IDMap['Niš sever']] = 92.8;

// Niš sever - Grdelica
удаљености[IDMap['Niš sever']][IDMap['Grdelica']] = 64.5;
удаљености[IDMap['Grdelica']][IDMap['Niš sever']] = 62.9;

// Niš sever - Jagodina
удаљености[IDMap['Niš sever']][IDMap['Jagodina']] = 98.8;
удаљености[IDMap['Jagodina']][IDMap['Niš sever']] = 97.9;

// Niš sever - Kolari
удаљености[IDMap['Niš sever']][IDMap['Kolari']] = 177;
удаљености[IDMap['Kolari']][IDMap['Niš sever']] = 177;

// Niš sever - Lapovo
удаљености[IDMap['Niš sever']][IDMap['Lapovo']] = 123;
удаљености[IDMap['Lapovo']][IDMap['Niš sever']] = 124;

// Niš sever - Leskovac centar
удаљености[IDMap['Niš sever']][IDMap['Leskovac centar']] = 37;
удаљености[IDMap['Leskovac centar']][IDMap['Niš sever']] = 35.9;

// Niš sever - Leskovac jug
удаљености[IDMap['Niš sever']][IDMap['Leskovac jug']] = 53.3;
удаљености[IDMap['Leskovac jug']][IDMap['Niš sever']] = 52.8;

// Niš sever - Mali Požarevac
удаљености[IDMap['Niš sever']][IDMap['Mali Požarevac']] = 197;
удаљености[IDMap['Mali Požarevac']][IDMap['Niš sever']] = 196;

// Niš sever - Markovac
удаљености[IDMap['Niš sever']][IDMap['Markovac']] = 130;
удаљености[IDMap['Markovac']][IDMap['Niš sever']] = 130;

// Niš sever - Paraćin
удаљености[IDMap['Niš sever']][IDMap['Paraćin']] = 74.4;
удаљености[IDMap['Paraćin']][IDMap['Niš sever']] = 74.1;

// Niš sever - Pirot istok
удаљености[IDMap['Niš sever']][IDMap['Pirot istok']] = 79.8;
удаљености[IDMap['Pirot istok']][IDMap['Niš sever']] = 77.6;

// Niš sever - Pirot zapad
удаљености[IDMap['Niš sever']][IDMap['Pirot zapad']] = 68.5;
удаљености[IDMap['Pirot zapad']][IDMap['Niš sever']] = 67.4;

// Niš sever - Pojate
удаљености[IDMap['Niš sever']][IDMap['Pojate']] = 62.8;
удаљености[IDMap['Pojate']][IDMap['Niš sever']] = 62.2;

// Niš sever - Požarevac
удаљености[IDMap['Niš sever']][IDMap['Požarevac']] = 170;
удаљености[IDMap['Požarevac']][IDMap['Niš sever']] = 171;

// Niš sever - Predejane
удаљености[IDMap['Niš sever']][IDMap['Predejane']] = 74.8;
удаљености[IDMap['Predejane']][IDMap['Niš sever']] = 73.2;

// Niš sever - Preševo
удаљености[IDMap['Niš sever']][IDMap['Preševo']] = 148;
удаљености[IDMap['Preševo']][IDMap['Niš sever']] = 146;

// Niš sever - Ražanj
удаљености[IDMap['Niš sever']][IDMap['Ražanj']] = 49.2;
удаљености[IDMap['Ražanj']][IDMap['Niš sever']] = 50.1;

// Niš sever - Smederevo
удаљености[IDMap['Niš sever']][IDMap['Smederevo']] = 172;
удаљености[IDMap['Smederevo']][IDMap['Niš sever']] = 173;

// Niš sever - Umčari
удаљености[IDMap['Niš sever']][IDMap['Umčari']] = 190;
удаљености[IDMap['Umčari']][IDMap['Niš sever']] = 190;

// Niš sever - Velika Plana
удаљености[IDMap['Niš sever']][IDMap['Velika Plana']] = 142;
удаљености[IDMap['Velika Plana']][IDMap['Niš sever']] = 142;

// Niš sever - Vladičin Han
удаљености[IDMap['Niš sever']][IDMap['Vladičin Han']] = 88.6;
удаљености[IDMap['Vladičin Han']][IDMap['Niš sever']] = 87.8;

// Niš sever - Vodanj
удаљености[IDMap['Niš sever']][IDMap['Vodanj']] = 184;
удаљености[IDMap['Vodanj']][IDMap['Niš sever']] = 184;

// Niš sever - Vranje
удаљености[IDMap['Niš sever']][IDMap['Vranje']] = 112;
удаљености[IDMap['Vranje']][IDMap['Niš sever']] = 111;

// Niš sever - Ćuprija
удаљености[IDMap['Niš sever']][IDMap['Ćuprija']] = 85.1;
удаљености[IDMap['Ćuprija']][IDMap['Niš sever']] = 84.7;

// Doljevac - Beograd
удаљености[IDMap['Doljevac']][IDMap['Beograd']] = 226;
удаљености[IDMap['Beograd']][IDMap['Doljevac']] = 226;

// Doljevac - Mali Požarevac
удаљености[IDMap['Doljevac']][IDMap['Mali Požarevac']] = 214;
удаљености[IDMap['Mali Požarevac']][IDMap['Doljevac']] = 213;

// Doljevac - Umčari
удаљености[IDMap['Doljevac']][IDMap['Umčari']] = 207;
удаљености[IDMap['Umčari']][IDMap['Doljevac']] = 207;

// Doljevac - Vodanj
удаљености[IDMap['Doljevac']][IDMap['Vodanj']] = 201;
удаљености[IDMap['Vodanj']][IDMap['Doljevac']] = 200;

// Doljevac - Kolari
удаљености[IDMap['Doljevac']][IDMap['Kolari']] = 195;
удаљености[IDMap['Kolari']][IDMap['Doljevac']] = 194;

// Doljevac - Smederevo
удаљености[IDMap['Doljevac']][IDMap['Smederevo']] = 190;
удаљености[IDMap['Smederevo']][IDMap['Doljevac']] = 189;

// Doljevac - Požarevac
удаљености[IDMap['Doljevac']][IDMap['Požarevac']] = 188;
удаљености[IDMap['Požarevac']][IDMap['Doljevac']] = 188;

// Doljevac - Velika Plana
удаљености[IDMap['Doljevac']][IDMap['Velika Plana']] = 159;
удаљености[IDMap['Velika Plana']][IDMap['Doljevac']] = 159;

// Doljevac - Markovac
удаљености[IDMap['Doljevac']][IDMap['Markovac']] = 147;
удаљености[IDMap['Markovac']][IDMap['Doljevac']] = 147;

// Doljevac - Lapovo
удаљености[IDMap['Doljevac']][IDMap['Lapovo']] = 141;
удаљености[IDMap['Lapovo']][IDMap['Doljevac']] = 141;

// Doljevac - Batočina
удаљености[IDMap['Doljevac']][IDMap['Batočina']] = 137;
удаљености[IDMap['Batočina']][IDMap['Doljevac']] = 137;

// Doljevac - Jagodina
удаљености[IDMap['Doljevac']][IDMap['Jagodina']] = 116;
удаљености[IDMap['Jagodina']][IDMap['Doljevac']] = 115;

// Doljevac - Ćuprija
удаљености[IDMap['Doljevac']][IDMap['Ćuprija']] = 102;
удаљености[IDMap['Ćuprija']][IDMap['Doljevac']] = 102;

// Doljevac - Paraćin
удаљености[IDMap['Doljevac']][IDMap['Paraćin']] = 91.6;
удаљености[IDMap['Paraćin']][IDMap['Doljevac']] = 91;

// Doljevac - Pojate
удаљености[IDMap['Doljevac']][IDMap['Pojate']] = 80;
удаљености[IDMap['Pojate']][IDMap['Doljevac']] = 79.1;

// Doljevac - Ražanj
удаљености[IDMap['Doljevac']][IDMap['Ražanj']] = 66.4;
удаљености[IDMap['Ražanj']][IDMap['Doljevac']] = 66.9;

// Doljevac - Aleksinački rudnici
удаљености[IDMap['Doljevac']][IDMap['Aleksinački Rudnici']] = 46.2;
удаљености[IDMap['Aleksinački Rudnici']][IDMap['Doljevac']] = 46.7;

// Doljevac - Aleksinac
удаљености[IDMap['Doljevac']][IDMap['Aleksinac']] = 41.8;
удаљености[IDMap['Aleksinac']][IDMap['Doljevac']] = 41.7;

// Doljevac - Niš jug
удаљености[IDMap['Doljevac']][IDMap['Niš jug']] = 16.8;
удаљености[IDMap['Niš jug']][IDMap['Doljevac']] = 16.9;

// Doljevac - Brestovac
удаљености[IDMap['Doljevac']][IDMap['Brestovac']] = 6.3;
удаљености[IDMap['Brestovac']][IDMap['Doljevac']] = 7.1;

// Doljevac - Leskovac centar
удаљености[IDMap['Doljevac']][IDMap['Leskovac centar']] = 13.8;
удаљености[IDMap['Leskovac centar']][IDMap['Doljevac']] = 14.4;

// Doljevac - Leskovac jug
удаљености[IDMap['Doljevac']][IDMap['Leskovac jug']] = 29.9;
удаљености[IDMap['Leskovac jug']][IDMap['Doljevac']] = 31.2;

// Doljevac - Grdelica
удаљености[IDMap['Doljevac']][IDMap['Grdelica']] = 41.3;
удаљености[IDMap['Grdelica']][IDMap['Doljevac']] = 41.4;

// Doljevac - Predejane
удаљености[IDMap['Doljevac']][IDMap['Predejane']] = 51.6;
удаљености[IDMap['Predejane']][IDMap['Doljevac']] = 51.7;

// Doljevac - Vladičin Han
удаљености[IDMap['Doljevac']][IDMap['Vladičin Han']] = 65.3;
удаљености[IDMap['Vladičin Han']][IDMap['Doljevac']] = 66.3;

// Doljevac - Vranje
удаљености[IDMap['Doljevac']][IDMap['Vranje']] = 88.3;
удаљености[IDMap['Vranje']][IDMap['Doljevac']] = 89;

// Doljevac - Bujanovac sever
удаљености[IDMap['Doljevac']][IDMap['Bujanovac sever']] = 102;
удаљености[IDMap['Bujanovac sever']][IDMap['Doljevac']] = 103;

// Doljevac - Bujanovac jug
удаљености[IDMap['Doljevac']][IDMap['Bujanovac jug']] = 105;
удаљености[IDMap['Bujanovac jug']][IDMap['Doljevac']] = 107;

// Doljevac - Preševo
удаљености[IDMap['Doljevac']][IDMap['Preševo']] = 124;
удаљености[IDMap['Preševo']][IDMap['Doljevac']] = 125;

// Doljevac - Dimitrovgrad
удаљености[IDMap['Doljevac']][IDMap['Dimitrovgrad']] = 115;
удаљености[IDMap['Dimitrovgrad']][IDMap['Doljevac']] = 116;

// Doljevac - Merošina
удаљености[IDMap['Doljevac']][IDMap['Merošina']] = 11.8;
удаљености[IDMap['Merošina']][IDMap['Doljevac']] = 11;

// Doljevac - Niš Malča
удаљености[IDMap['Doljevac']][IDMap['Niš Malča']] = 36.7;
удаљености[IDMap['Niš Malča']][IDMap['Doljevac']] = 36.7;

// Doljevac - Bela Palanka
удаљености[IDMap['Doljevac']][IDMap['Bela Palanka']] = 65.5;
удаљености[IDMap['Bela Palanka']][IDMap['Doljevac']] = 66.7;

// Doljevac - Pirot zapad
удаљености[IDMap['Doljevac']][IDMap['Pirot zapad']] = 89.6;
удаљености[IDMap['Pirot zapad']][IDMap['Doljevac']] = 90.6;

// Doljevac - Pirot istok
удаљености[IDMap['Doljevac']][IDMap['Pirot istok']] = 101;
удаљености[06][IDMap['Doljevac']] = 101;

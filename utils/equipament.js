export const CALIDADES = [
  'Gris', // 0 
  'Verde', // 1
  'Azul', // 2
  'Morado', // 3
  'Dorado', // 4
  'Rojo', // 5
]
export const MAPAS = [
  {
    name: 'Zero Dam',
    dificultad: 'Easy',
    image: '../img/maps/map1.png',
  },
  {
    name: 'Zero Dam',
    dificultad: 'Normal',
    image: '../img/maps/map2.png',
  },
  {
    name: 'Layali',
    dificultad: 'Easy',
    image: '../img/maps/map3.png',
  },
  {
    name: 'Layali',
    dificultad: 'Normal',
    image: '../img/maps/map4.png',
  },
  {
    name: 'Prision',
    dificultad: 'Hard',
    image: '../img/maps/map5.png',
    hora: ["2", "3", "6", "7", "10", "11", "14", "15", "18", "19", "22", "23"]
  },
  {
    name: 'Space City',
    dificultad: 'Normal',
    image: '../img/maps/map6.png',
    hora: ["0", "1", "3", "6", "7", "12", "13", "14", "15", "18", "19"]
  },
  {
    name: 'Space City',
    dificultad: 'Hard',
    image: '../img/maps/map7.png',
    hora: ["0", "1", "4", "5", "8", "9", "12", "13", "16", "17", "20", "21"]
  },
  {
    name: 'Brakesh',
    dificultad: 'Normal',
    image: '../img/maps/map8.png',
    hora: ["4", "5", "10", "11", "16", "17", "22", "23"]
  },
  {
    name: 'Zero Dam Night',
    dificultad: 'Night',
    image: '../img/maps/map9.png',
    hora: ["8", "9", "20", "21"]
  },
]
export const CHALECOS = [
  {
    name: 'Heavy Asault',
    image: '../img/chest/chest1.png',
    calidad: CALIDADES[4],
  },
  {
    name: 'FS Composite',
    image: '../img/chest/chest2.png',
    calidad: CALIDADES[4],
  },
  {
    name: 'HVK-2',
    image: '../img/chest/chest3.png',
    calidad: CALIDADES[4],
  },
  {
    name: 'Elite',
    image: '../img/chest/chest4.png',
    calidad: CALIDADES[4],
  },
  {
    name: 'MK-2 Tactical',
    image: '../img/chest/chest5.png',
    calidad: CALIDADES[3],
  },
  {
    name: 'DT-AVS',
    image: '../img/chest/chest6.png',
    calidad: CALIDADES[3],
  },
  {
    name: 'Assault',
    image: '../img/chest/chest7.png',
    calidad: CALIDADES[3],
  },
  {
    name: 'Warrior',
    image: '../img/chest/chest8.png',
    calidad: CALIDADES[3],
  },
  {
    name: 'HMP Special Ops',
    image: '../img/chest/chest9.png',
    calidad: CALIDADES[3],
  },
  {
    name: 'Marksman TAC',
    image: '../img/chest/chest10.png',
    calidad: CALIDADES[2],
  },
  {
    name: 'TG-H',
    image: '../img/chest/chest11.png',
    calidad: CALIDADES[2],
  },
  {
    name: 'HVK QR',
    image: '../img/chest/chest12.png',
    calidad: CALIDADES[2],
  },
  {
    name: 'Standar Isue',
    image: '../img/chest/chest13.png',
    calidad: CALIDADES[2],
  },
  {
    name: 'Universal Tactical',
    image: '../img/chest/chest14.png',
    calidad: CALIDADES[1],
  },
  {
    name: 'TG Tactical',
    image: '../img/chest/chest15.png',
    calidad: CALIDADES[1],
  },
  {
    name: 'HT Tactical',
    image: '../img/chest/chest16.png',
    calidad: CALIDADES[1],
  },
  {
    name: 'Basic Stab',
    image: '../img/chest/chest17.png',
    calidad: CALIDADES[1],
  },
  {
    name: 'Light',
    image: '../img/chest/chest18.png',
    calidad: CALIDADES[0],
  },
  {
    name: 'Nylon',
    image: '../img/chest/chest19.png',
    calidad: CALIDADES[0],
  },
  {
    name: 'Security',
    image: '../img/chest/chest20.png',
    calidad: CALIDADES[0],
  },
  {
    name: 'Mororcycle',
    image: '../img/chest/chest21.png',
    calidad: CALIDADES[0],
  },

]
export const AGENTES = [
  {
    name: 'D-WOLF',
    image: '../img/agents/agent1.jpg'
  },
  {
    name: 'NOX',
    image: '../img/agents/agent2.jpg'
  },
  {
    name: 'VYRON',
    image: '../img/agents/agent3.jpg'
  },
  {
    name: 'STINGER',
    image: '../img/agents/agent4.jpg'
  },
  {
    name: 'HACKCLAW',
    image: '../img/agents/agent5.jpg'
  },
  {
    name: 'LUNA',
    image: '../img/agents/agent6.jpg'
  },
  {
    name: 'SHEPERD',
    image: '../img/agents/agent7.jpg'
  },
  {
    name: 'ULURU',
    image: '../img/agents/agent8.jpg'
  },
  {
    name: 'TOXIC',
    image: '../img/agents/agent9.jpg'
  },
  {
    name: 'SINEVA',
    image: '../img/agents/agent10.jpg'
  },
  {
    name: 'TEMPEST',
    image: '../img/agents/agent11.jpg'
  },
  {
    name: 'RAPTOR',
    image: '../img/agents/agent12.jpg'
  },
]
export const CASCOS = [
  {
    name: 'GN Heavy NV',
    calidad: CALIDADES[4],
    image: '../img/helmets/casco1.png',
  },
  {
    name: 'DICH-1 Tactical',
    calidad: CALIDADES[4],
    image: '../img/helmets/casco2.png',
  },
  {
    name: 'GN Heavy',
    calidad: CALIDADES[4],
    image: '../img/helmets/casco3.png',
  },
  {
    name: 'H09 Anti-Riot',
    calidad: CALIDADES[4],
    image: '../img/helmets/casco4.png',
  },
  {
    name: 'GN Endurance Heavy NV',
    calidad: CALIDADES[4],
    image: '../img/helmets/casco5.png',
  },
  {
    name: 'Mask-1 Iron (Cheater)',
    calidad: CALIDADES[4],
    image: '../img/helmets/casco6.png',
  },
  {
    name: 'DICH Training',
    calidad: CALIDADES[3],
    image: '../img/helmets/casco7.png',
  },
  {
    name: 'GT1 Tactical',
    calidad: CALIDADES[3],
    image: '../img/helmets/casco8.png',
  },
  {
    name: 'MHS Tactical',
    calidad: CALIDADES[3],
    image: '../img/helmets/casco9.png',
  },
  {
    name: 'D6 Tactical',
    calidad: CALIDADES[3],
    image: '../img/helmets/casco10.png',
  },
  {
    name: 'MC201',
    calidad: CALIDADES[2],
    image: '../img/helmets/casco11.png',
  },
  {
    name: 'DAS',
    calidad: CALIDADES[2],
    image: '../img/helmets/casco12.png',
  },
  {
    name: 'H07 Tactical',
    calidad: CALIDADES[2],
    image: '../img/helmets/casco13.png',
  },
  {
    name: 'Anti-Riot',
    calidad: CALIDADES[2],
    image: '../img/helmets/casco14.png',
  },
  {
    name: 'MC',
    calidad: CALIDADES[1],
    image: '../img/helmets/casco15.png',
  },
  {
    name: 'Retro Motorcycle',
    calidad: CALIDADES[1],
    image: '../img/helmets/casco16.png',
  },
  {
    name: 'DRO Tactical',
    calidad: CALIDADES[1],
    image: '../img/helmets/casco17.png',
  },
  {
    name: 'H01 Tactical',
    calidad: CALIDADES[1],
    image: '../img/helmets/casco18.png',
  },
  {
    name: 'Outdoor Baseball Cap',
    calidad: CALIDADES[0],
    image: '../img/helmets/casco19.png',
  },
  {
    name: 'Boonie Hat',
    calidad: CALIDADES[0],
    image: '../img/helmets/casco20.png',
  },
  {
    name: 'Security',
    calidad: CALIDADES[0],
    image: '../img/helmets/casco19.png',
  },
  {
    name: 'Steel',
    calidad: CALIDADES[0],
    image: '../img/helmets/casco19.png',
  },
]
export const ARMAS = [
  {
    name: 'M7',
    image: '../img/weapons/wp1.png'
  },
  {
    name: 'K437',
    image: '../img/weapons/wp2.png'
  },
  {
    name: 'ASh-12',
    image: '../img/weapons/wp3.png'
  },
  {
    name: 'K416',
    image: '../img/weapons/wp4.png'
  },
  {
    name: 'KC17',
    image: '../img/weapons/wp5.png'
  },
  {
    name: 'AS Val',
    image: '../img/weapons/wp6.png'
  },
  {
    name: 'M4A1',
    image: '../img/weapons/wp7.png'
  },
  {
    name: 'AUG',
    image: '../img/weapons/wp8.png'
  },
  {
    name: 'AK-12',
    image: '../img/weapons/wp9.png'
  },
  {
    name: 'SCAR-H',
    image: '../img/weapons/wp10.png'
  },
  {
    name: 'AKM',
    image: '../img/weapons/wp11.png'
  },
  {
    name: 'CI-19',
    image: '../img/weapons/wp12.png'
  },
  {
    name: 'SG 552',
    image: '../img/weapons/wp13.png'
  },
  {
    name: 'G3',
    image: '../img/weapons/wp14.png'
  },
  {
    name: 'QBZ-95-1',
    image: '../img/weapons/wp15.png'
  },
  {
    name: 'PTR-32',
    image: '../img/weapons/wp16.png'
  },
  {
    name: 'CAR-15',
    image: '../img/weapons/wp17.png'
  },
  {
    name: 'M16A4',
    image: '../img/weapons/wp18.png'
  },
  {
    name: 'AKS-74',
    image: '../img/weapons/wp19.png'
  },
  {
    name: 'Vector',
    image: '../img/weapons/wp20.png'
  },
  {
    name: 'MP7',
    image: '../img/weapons/wp21.png'
  },
  {
    name: 'P90',
    image: '../img/weapons/wp22.png'
  },
  {
    name: 'SR-3M',
    image: '../img/weapons/wp23.png'
  },
  {
    name: 'QCQ171',
    image: '../img/weapons/wp24.png'
  },
  {
    name: 'MP5',
    image: '../img/weapons/wp25.png'
  },
  {
    name: 'SMG-45',
    image: '../img/weapons/wp26.png'
  },
  {
    name: 'Vityaz',
    image: '../img/weapons/wp27.png'
  },
  {
    name: 'Bizon',
    image: '../img/weapons/wp28.png'
  },
  {
    name: 'UZI',
    image: '../img/weapons/wp29.png'
  },
  {
    name: 'AWM',
    image: '../img/weapons/wp30.png'
  },
  {
    name: 'M700',
    image: '../img/weapons/wp31.png'
  },
  {
    name: 'R93',
    image: '../img/weapons/wp32.png'
  },
  {
    name: 'SV-98',
    image: '../img/weapons/wp33.png'
  },
  {
    name: 'Two barrels 725',
    image: '../img/weapons/wp34.png'
  },
  {
    name: 'S12K',
    image: '../img/weapons/wp35.png'
  },
  {
    name: 'M1014',
    image: '../img/weapons/wp36.png'
  },
  {
    name: 'M870',
    image: '../img/weapons/wp37.png'
  },
  {
    name: 'SR-25',
    image: '../img/weapons/wp38.png'
  },
  {
    name: 'M14',
    image: '../img/weapons/wp39.png'
  },
  {
    name: 'SVD',
    image: '../img/weapons/wp40.png'
  },
  {
    name: 'PSG-1',
    image: '../img/weapons/wp41.png'
  },
  {
    name: 'VSS',
    image: '../img/weapons/wp42.png'
  },
  {
    name: 'Mini-14',
    image: '../img/weapons/wp43.png'
  },
  {
    name: 'SKS',
    image: '../img/weapons/wp44.png'
  },
  {
    name: 'SR9',
    image: '../img/weapons/wp45.png'
  },
  {
    name: 'M250',
    image: '../img/weapons/wp46.png'
  },
  {
    name: 'M249',
    image: '../img/weapons/wp47.png'
  },
  {
    name: 'PKM',
    image: '../img/weapons/wp48.png'
  },
  {
    name: 'QJB-201',
    image: '../img/weapons/wp49.png'
  },
  {
    name: 'Compound bow',
    image: '../img/weapons/wp50.png'
  },
  {
    name: 'MK47',
    image: '../img/weapons/wp51.png'
  },
  {
    name: 'Marlin Lever',
    image: '../img/weapons/wp52.png'
  },
  {
    name: 'KC17',
    image: '../img/weapons/wp53.png'
  },
]
export const USUARIOS =[
  {
    name: "Campaso",
    password: "Q2FtcGFzbzEyMzQ=",
  },
  {
    name: "Hygge",
    password: "SmFpbWVzaXRvbG9vdA==",
  },
  {
    name: "Knarito13",
    password: "UGFvbGFfMjAwOA==",
  }
]
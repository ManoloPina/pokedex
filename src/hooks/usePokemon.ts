export const usePokemon = () => {
  const typeColors: Record<string, string> = {
    grass: '#73B861',
    poison: '#AC6ACA',
    fire: '#F66D6D',
    water: '#88A3D4',
    electric: '#EED967',
    ice: '#8BCEC1',
    fighting: '#C44D61',
    ground: '#CE8056',
    flying: '#A890F0',
    psychic: '#EB8B85',
    bug: '#9BBA48',
    rock: '#8BCEC1',
    ghost: '#616EB7',
    dark: '#595761',
    dragon: '#2C6AC1',
    steel: '#6594A1',
    fairy: '#E296E1',
    normal: '#A0A29F',
  };

  return { typeColors };
};

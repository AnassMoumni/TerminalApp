import pokemon from './pokemon.json';
import abilities from './abilities.json';

// Lees de inhoud van Pokemon.json en Abilities.json
const pokemonData: Pokemon[] = JSON.parse(pokemon.readFileSync('Pokemon.json', 'utf8'));
const abilitiesData: Ability[] = JSON.parse(abilities.readFileSync('Abilities.json', 'utf8'));

interface Pokemon {
    id: number;
    name: string;
    description: string;
    height: number;
    isCaught: boolean;
    catchDate: string | null;
    imageUrl: string;
    types: string[];
    abilities: Ability[];
}

interface Ability {
    id: number;
    name: string;
    description: string;
    abilityUrl: string;
    isHidden: boolean;
}
console.log('Welcome to the JSON data viewer!');
console.log('1. View all data');
console.log('2. Filter by ID');
console.log('3. Exit');

for (let index = 0; index < pokemonData.length; index++) {
    console.log(`- ${pokemon[i].name} (${pokemon[i].id})`);

}









console.log();
export{}
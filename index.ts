import * as readline from 'readline-sync';
const fs = require('fs');

const pokemon = require('./pokemon.json');
const abilities = require('./abilities.json');

// Lees de inhoud van Pokemon.json en Abilities.json
const pokemonData: Pokemon[] = JSON.parse(fs.readFileSync('pokemon.json', 'utf8'));
const abilitiesData: Ability[] = JSON.parse(fs.readFileSync('abilities.json', 'utf8'));

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
let indexChoice : number 

do {
    const choices : string[] = ["View all data", "Filter by ID", "Exit"];
indexChoice = readline.keyInSelect(choices, "Choose an option:");
switch (indexChoice) {
    case 0:
        viewAllData();
        break;
    case 1:
        FilterOnID();
        break;
    case 2:
        console.log("Exiting the application...");
        break;
    default:
        console.log("Invalid choice.");
        break;
    }
} while (indexChoice!== 2 );


// Functie om alle Pokémon-data weer te geven
function viewAllData() {
    console.log("You chose to view all data.");
    for (let index = 0; index < pokemonData.length; index++) {  
        console.log(`- ${pokemonData[index].name} (${pokemonData[index].id})`);
    }
}

// Functie om te filteren op id
function FilterOnID() {
    let filterid: number= parseInt(readline.question("Please enter the ID you want to filter by:"));
    const filteredPokemon: Pokemon | undefined = pokemonData.find(pokemon => pokemon.id === filterid);
    if (filteredPokemon) {
        console.log(`- ${filteredPokemon.name} (${filteredPokemon.id})`);
        console.log(`  - Description: ${filteredPokemon.description}`);
        console.log(`  - Height: ${filteredPokemon.height}`);
        console.log(`  - is Caught: ${filteredPokemon.isCaught}`);
        console.log(`  - Catchdate: ${filteredPokemon.catchDate}`);
        console.log(`  - Image: ${filteredPokemon.imageUrl}`);
        console.log(`  - Types: ${filteredPokemon.types.join(', ')}`);
        filteredPokemon.abilities.forEach(ability => {
            console.log(`      - Name: ${ability.name}`);
            console.log(`      - Description: ${ability.description}`);
            console.log(`      - Ability URL: ${ability.abilityUrl}`);
            console.log(`      - Hidden: ${ability.isHidden}`);
        });
    } 
    else {
        console.log(`No Pokémon found with ID: ${filterid}`);
    }
}

console.log();
export{}
import * as readline from 'readline-sync';

// Lees de inhoud van Pokemon.json en Abilities.json
const pokemonData = "https://github.com/AnassMoumni/TerminalApp/blob/main/pokemon.json";
const abilitiesData = "https://github.com/AnassMoumni/TerminalApp/blob/main/abilities.json";

//Interfaces
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

//Console App
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
async function viewAllData() {
    try {
        console.log("You chose to view all data.");

    const pokemonResponse = await fetch(pokemonData);
    const pokemonParsed : Pokemon[] = await pokemonResponse.json();
    
    for (let index = 0; index < pokemonData.length; index++) {  
        console.log(`- ${pokemonData[index].name} (${pokemonData[index].id})`);
    }
    } catch (error: any) {
        console.log(error);
    }
    
}

// Functie om te filteren op id
async function FilterOnID() {
    try {
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
    } catch (error: any) {
        console.log(error);
    }
    
}

console.log();
export{}
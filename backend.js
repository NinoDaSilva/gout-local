import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

// Events //

// Retourne tous les évènements
export async function allEvents() {
    const records = await pb.collection('events').getFullList() ;
    return records ;
}

// Retourne un évènement par son id
export async function OneEvent(id) {
    const record = await pb.collection('events').getOne(id) ;
    return record ;
}


// Produits //

// Retourne tous les produits
export async function allProduits() {
    const records = await pb.collection('produits').getFullList() ;
    return records ;
}  

// Retourne les produits de type "fruit" et de saison "été"
export async function FruitsEte() {
    const records = await pb.collection('produits').getFullList({filter: 'saison = "été" && type = "fruit"', sort: 'disponible'}) ;
    return records ;
}

// Retourne les produits de type "fruit" et de saison "printemps"
export async function FruitsPrintemps() {
    const records = await pb.collection('produits').getFullList({filter: 'saison = "printemps" && type = "fruit"', sort: 'disponible'}) ;
    return records ;
}    

// Retourne les produits de type "fruit" et de saison "automne"
export async function FruitsAutomne() {
    const records = await pb.collection('produits').getFullList({filter: 'saison = "automne" && type = "fruit"', sort: 'disponible'}) ;
    return records ;
}    

// Retourne les produits de type "fruit" et de saison "hiver"
export async function FruitsHiver() {
    const records = await pb.collection('produits').getFullList({filter: 'saison = "hiver" && type = "fruit"', sort: 'disponible'}) ;
    return records ;
}    


// Retourne les produits de type "légume" et de saison "été"
export async function LegumesEte() {
    const records = await pb.collection('produits').getFullList({filter: 'saison = "été" && type = "légume"', sort: 'disponible'}) ;
    return records ;
}   

// Retourne les produits de type "légume" et de saison "printemps"
export async function LegumesPrintemps() {
    const records = await pb.collection('produits').getFullList({filter: 'saison = "printemps" && type = "légume"', sort: 'disponible'}) ;
    return records ;
}    

// Retourne les produits de type "légume" et de saison "automne"
export async function LegumesAutomne() {
    const records = await pb.collection('produits').getFullList({filter: 'saison = "automne" && type = "légume"', sort: 'disponible'}) ;
    return records ;
}    

// Retourne les produits de type "légume" et de saison "hiver"
export async function LegumesHiver() {
    const records = await pb.collection('produits').getFullList({filter: 'saison = "hiver" && type = "légume"', sort: 'disponible'}) ;
    return records ;
}    


// Recettes //

// Retourne toutes les recettes
export async function allRecettes() {
    const records = await pb.collection('recettes').getFullList();
    return records
}

// Retourne une recette par son id
export async function uneRecette(id) {
    const record = await pb.collection('recettes').getOne(id);
    return record
}

// Retourne les recettes de type "salée"
export async function recetteSalee() {
    const records = await pb.collection('recettes').getFullList({filter: 'type = "salée"', sort: 'titre'});
    return records
}

// Retourne les recettes de type "sucrée"
export async function recetteSucree() {
    const records = await pb.collection('recettes').getFullList({filter: 'type = "sucrée"', sort: 'titre'});
    return records
}

// Retourne les étapes recettes
export async function recetteEtapes(titre) {
    const records = await pb.collection('recettes').getFirstListItem(`titre = '${titre}'`);
    return records
}


function makeanimal(species, color, breed, age, sound)  {
    return  {
        species: species,
        color: color,
        breed: breed,
        age: age,
        sound: sound,
    };
}

let animal = makeanimal("Cat","Black","Short-hair",2,"Meow!");

delete animal.color;

function mydictionary() {
    document.getElementById("Dictionary").innerHTML = animal.color;
}
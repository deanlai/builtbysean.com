/*
    Convert HTML inputs to Joules
    butter: X grams
    water: boil X litres from room temp (~25 C)
    X volkswagen: dropped from 2m
    battery: X number of 13in Macbook Airs
    food: X number of 2000 DV caloric intakes
    nuclear: fission energy X g U 238
    Cyclist: pedaling for X hours
*/

var conversions = {
        "butter": 29990,
        "water": 334500,
        "volkswagen": 16464,
        "battery": 194400,
        "food": 8368000,
        "nuclear": 86750000000,
        "cyclist": 144000
};

function calculateEnergy(value, energyType) {
    return conversions[energyType] * value;
}

function calculateEntities(energy, energyType) {
    return energyType === "nuclear" ? parseFloat(energy / conversions[energyType]).toFixed(8) : parseFloat(energy / conversions[energyType]).toFixed(3);
}

function outputEnergies(value, energyType) {
    console.log(value);
    console.log('test');
    energy = calculateEnergy(value, energyType);
    document.getElementById("butter").value = calculateEntities(energy, "butter");
    document.getElementById("water").value = calculateEntities(energy, "water");
    document.getElementById("volkswagen").value = calculateEntities(energy, "volkswagen");
    document.getElementById("battery").value = calculateEntities(energy, "battery");
    document.getElementById("food").value = calculateEntities(energy, "food");
    document.getElementById("nuclear").value = calculateEntities(energy, "nuclear");
    document.getElementById("cyclist").value = calculateEntities(energy, "cyclist");
}


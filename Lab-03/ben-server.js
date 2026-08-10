const express = require('express');
const app = express();

const items = [
    { id: 1, name: "Heatblast", species: "Pyronite", planet: "Pyros" },
    { id: 2, name: "Four Arms", species: "Tetramand", planet: "Khoros" },
    { id: 3, name: "XLR8", species: "Kineceleran", planet: "Kinet" },
    { id: 4, name: "Diamondhead", species: "Petrosapien", planet: "Petropia" },
    { id: 5, name: "Upgrade", species: "Galvanic Mechamorph", planet: "Galvan B" },
    { id: 6, name: "Cannonbolt", species: "Arburian Pelarota", planet: "Arburia" },
    { id: 7, name: "Wildmutt", species: "Vulpimancer", planet: "Vulpin" },
    { id: 8, name: "Ghostfreak", species: "Ectonurite", planet: "Anur Phaetos" },
    { id: 9, name: "Stinkfly", species: "Lepidopterran", planet: "Lepidopterra" },
    { id: 10, name: "Ripjaws", species: "Piscciss Volann", planet: "Piscciss" }
];

//GET /items - It will return all Aliens list
app.get('/items', (req, res) => {
    res.json(items);
});

//GET /items/:id - It will return one alien based on id
app.get('/items/:id', (req, res) => {

    const id = Number(req.params.id);

    const alien = items.find(item => item.id === id);

    if (alien) {
        res.json(alien);
    } else {
        res.status(404).json({ error: "Alien not found..!" });
    }

});

app.use((req, res) => {
    res.json(404).json({ error: "Route not found." });
});

app.listen(3000, () => console.log("Server running on port http://localhost:3000"));
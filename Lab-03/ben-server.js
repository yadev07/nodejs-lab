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

//Navigation
app.get('/', (req, res)=>{
    res.send(`
        <h2>Home Page</h2>
        <a href="/items">Go to /items Route</a>
    `);
});

//GET /items - It will return all Aliens list
app.get('/items', (req, res) => {
    let html = `
        <h1>Ben 10 Aliens</h1>
        <hr>
    `;

    items.forEach(item => {
        html += `
            <div>
                <h2>${item.id}. ${item.name}</h2>
                <p>Species: ${item.species}</p>
                <p>Planet: ${item.planet}</p>
                <a href="/items/${item.id}">View Details</a>
                <hr>
            </div>
        `;
    });

    res.send(html);
});

//GET /items/:id - It will return one alien based on id
app.get('/items/:id', (req, res) => {

    const id = Number(req.params.id);

    const alien = items.find(item => item.id === id);

    if (alien) {
        res.send(`
            <h1>${alien.name}</h1>
            <p><b>Species:</b> ${alien.species}</p>
            <p><b>Planet:</b> ${alien.planet}</p>

            <a href="/items">← Back to Aliens</a>
        `);
    } else {
        res.status(404).send(`
            <h1>Alien Not Found</h1>
            <a href="/items">← Back to Aliens</a>
        `);
    }

});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found." });
});

app.listen(3000, () => console.log("Server running on port http://localhost:3000"));
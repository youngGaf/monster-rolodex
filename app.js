const express = require('express');

const app = express();

app.get('/api/monsters', (req, res) => {
    const monsters = [
        { id: '1', name:'Optimus Prime', email: 'grag@monster.com' },
        { id: '2', name:'Rayliegh', email: 'grag@monster.com' },
        { id: '3', name:'Prime', email: 'grag@monster.com' },
        { id: '4', name:'Drago', email: 'grag@monster.com' },
        { id: '5', name:'Bakugo', email: 'grag@monster.com' },
        { id: '6', name:'Deku', email: 'grag@monster.com' },
        { id: '7', name:'Gold', email: 'goldei@monster.com' },
        { id: '8', name:'luffy', email: 'grog@monster.com' },
        { id: '9', name:'grad', email: 'grag@monster.com' },
        { id: '10', name:'Baki', email: 'gragon@monster.com' },
        { id: '11', name:'Grappler', email: 'grag@monster.com' },
        { id: '12', name:'Kinemon', email: 'boools@monster.com' }
    ]
    return res.status(200).json(monsters);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
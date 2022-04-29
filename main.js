function createGrid() {
    const grid = document.querySelector('#grid');

    //creates 16x16 square grid
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const box = document.createElement('div');
            box.setAttribute('style', 'background-color: white; height: 50px; width: 50px;');
            grid.appendChild(box);
        }
    }
 
}

createGrid();



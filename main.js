function createGrid() {
    const grid = document.getElementById('grid');

    //creates 16x16 square grid
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const box = document.createElement('div');
            box.classList.add('cell');
            //Check cases for left grid pieces and upper grid pieces
            if (i === 0 && j === 0) {
                box.setAttribute('style', 'border-style: solid; border-width: 2px; height: 46px; width: 46px;');
            } else if (i === 0) {
                box.setAttribute('style', 'border-style: solid solid solid none; border-width: 2px; height: 46px; width: 48px;');
            } else if (j === 0) {
                box.setAttribute('style', 'border-style: none solid solid solid; border-width: 2px; height: 48px; width: 46px;');
            } else {
                box.setAttribute('style', 'border-style: none solid solid none; border-width: 2px; height: 48px; width: 48px;'); //normal pixel sets right and downward border
            }
            grid.appendChild(box);
        }
    }
    
    draw();
 
}

function draw() {
    const grid = document.getElementById('grid');
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('mousedown', clickInput)
    })

    function clickInput() {
        this.style.backgroundColor = 'green';
    }
}

createGrid();



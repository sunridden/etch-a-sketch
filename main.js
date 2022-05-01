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
}

function draw() {
    const cells = document.querySelectorAll('.cell');

    let mousePressed = false;

    cells.forEach((cell) => {
        cell.addEventListener('mousedown', () => (mousePressed = true));
        cell.addEventListener('mouseup', () => (mousePressed = false));
        cell.addEventListener('mousemove', function() {
            if (mousePressed) {
                this.style.backgroundColor = 'green';
            } 
        });

        //prevents drag from each cell
        cell.addEventListener('dragstart', e => e.preventDefault());
    })

}

function resetGrid() {
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', function() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.style.backgroundColor = 'white';
        })
    })
}

function changeGridSize() {
    const gridSize = document.getElementById('gridSize');
    const gridText = document.getElementById('gridSizeText');
    gridSize.oninput = function() {
        gridText.innerHTML = this.value;
    }
}

createGrid();
draw();
resetGrid();
changeGridSize();



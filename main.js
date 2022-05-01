function createGrid(size) {
    const grid = document.getElementById('grid');

    //creates a square grid depending on the size selected
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            let height = 0; // represents height and width for cells
            let width = 0;
            box.classList.add('cell');
            //Check cases for left grid pieces and upper grid pieces
            if (i === 0 && j === 0) {
                height = (800 / size) - 4;
                width = (800 / size) - 4;
                box.setAttribute('style', 'border-style: solid; border-width: 2px; height: ' + height + 'px; width: ' + width + 'px;');
            } else if (i === 0) {
                height = (800 / size) - 4;
                width = (800 / size) - 2;
                box.setAttribute('style', 'border-style: solid solid solid none; border-width: 2px; height: ' + height + 'px; width: ' + width + 'px;');
            } else if (j === 0) {
                height = (800 / size) - 2;
                width = (800 / size) - 4;
                box.setAttribute('style', 'border-style: none solid solid solid; border-width: 2px; height: ' + height + 'px; width: ' + width + 'px;');
            } else {
                height = (800 / size) - 2;
                width = (800 / size) - 2;
                box.setAttribute('style', 'border-style: none solid solid none; border-width: 2px; height: ' + height + 'px; width: ' + width + 'px;'); //normal pixel sets right and downward border
            }
            grid.appendChild(box);
        }
    }
}

function draw(color) {
    const cells = document.querySelectorAll('.cell');

    let mousePressed = false;
    let rainbowState = false;

    const rainbowBtn = document.getElementById('rainbow');

    cells.forEach((cell) => {
        cell.addEventListener('mousedown', () => (mousePressed = true));
        cell.addEventListener('mouseup', () => (mousePressed = false));
        cell.addEventListener('mousemove', function() {
            if (rainbowBtn.style.backgroundColor === 'red') {
                rainbowState = true; //check case for rainbow button being pressed
            }
            if (mousePressed) {
                if (rainbowState) {
                    let rgbRed = Math.floor(Math.random() * 256);
                    let rgbBlue = Math.floor(Math.random() * 256);
                    let rgbGreen = Math.floor(Math.random() * 256);
                    rgbValue = ("rgb(" + rgbRed + ", " + rgbBlue + ", " + rgbGreen + ")");
                    this.style.backgroundColor = rgbValue;
                } else {
                    this.style.backgroundColor = color;
                }
            } 
        });

        //prevents drag from each cell
        cell.addEventListener('dragstart', e => e.preventDefault());
    })

}

function rainbowColor() {
    const rainbowBtn = document.getElementById('rainbow');

    rainbowBtn.addEventListener('click', function() {
        rainbowBtn.style.backgroundColor = 'red';
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

function removeGrid() {
    const grid = document.getElementById('grid');
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        grid.removeChild(cell);
    })
}

function changeGridSize() {
    const gridSize = document.getElementById('gridSize');
    const gridText = document.getElementById('gridSizeText');
    let gridProportion = 16;
    gridSize.oninput = function() {
        gridText.innerHTML = "Grid: " + this.value + " x " + this.value;
        gridProportion = this.value;
        removeGrid();
        createGrid(gridProportion);
        draw('green');
        rainbowColor();
    }


    //make a call to createGrid with specified value
    //createGrid will use size value to determine cell width/height & borders
}

//createGrid();
changeGridSize();

resetGrid();




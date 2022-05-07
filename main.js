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
                //right and down borders are set 
                box.setAttribute('style', 'border-style: none solid solid none; border-width: 2px; height: ' + height + 'px; width: ' + width + 'px;'); 
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
            let currentColor = getColor();
            if (mousePressed) {
                this.style.backgroundColor = currentColor;
            } 
        });

        //prevents drag from each cell
        cell.addEventListener('dragstart', e => e.preventDefault());
    })

}

function checkRainbowColor() {
    const rainbowBtn = document.getElementById('rainbowBtn');

    rainbowBtn.addEventListener('click', function() {
        resetTools();
        rainbowBtn.style.backgroundColor = 'red';
    })
}

function randomRainbowColor() {
    let rgbRed = Math.floor(Math.random() * 256);
    let rgbBlue = Math.floor(Math.random() * 256);
    let rgbGreen = Math.floor(Math.random() * 256);
    let rgbValue = ("rgb(" + rgbRed + ", " + rgbBlue + ", " + rgbGreen + ")");
    return rgbValue;
}

function checkEraser() {
    const eraserBtn = document.getElementById('eraserBtn');

    eraserBtn.addEventListener('click', function() {
        resetTools();
        eraserBtn.style.backgroundColor = 'pink';
    })
}

function checkGreenColor() {
    const greenBtn = document.getElementById('greenBtn');

    greenBtn.addEventListener('click', function() {
        resetTools();
        greenBtn.style.backgroundColor = 'green';
    })
}

function getColor() {
    //checks background color of button to see if activated and returns the color to function draw()
    const eraserBtn = document.getElementById('eraserBtn');
    const rainbowBtn = document.getElementById('rainbowBtn');

    if (eraserBtn.style.backgroundColor === 'pink') {
        return ('white');
    } else if (rainbowBtn.style.backgroundColor === 'red') {
        let rainbowColor = randomRainbowColor();
        return rainbowColor;
    } else {
        return ('green');
    }
}

function resetTools() {
    const tools = document.querySelectorAll('.tool');
    tools.forEach((tool) => {
        tool.style.backgroundColor = 'white';
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

    //sets up initial grid functionality when browser first loads
    createGrid(16);
    draw();

    gridSize.oninput = function() {
        gridText.innerHTML = "Grid: " + this.value + " x " + this.value;
        gridProportion = this.value;
        removeGrid();
        createGrid(gridProportion);
        //draw function is called again to reference the new grid cells that were created with changeGridSize
        draw();
    }
}

changeGridSize();
resetGrid();
checkRainbowColor();
checkEraser();
checkGreenColor();




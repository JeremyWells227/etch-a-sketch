

const markBlack = (event)=>{
	let box = event.target;
	box.classList.add("blackcell");
}

const resetGrid = ()=> {
	console.log("resetting grid");
	let classArray = Array.from(document.getElementsByClassName("blackcell"))
	console.log(classArray) 
		classArray.forEach((cell)=>{
		cell.classList.remove('blackcell')
	})
}

const cleanupOldGrid = ()=>{
	let grid = document.getElementById("grid");
	let existingCells = Array.from(document.getElementsByClassName("cell"));
	existingCells.forEach((cell)=>{
		grid.removeChild(cell)
	}
	)
}

let initialGrid = false
const createGrid = ()=>{
	if(initialGrid){
		cleanupOldGrid();
	}

	const grid = document.getElementById("grid");
	console.log("Creating Grid...");
	const widthStr=document.getElementById("canvassize").value;
	const boxsideStr=document.getElementById("boxsize").value;
	const width = parseInt(widthStr);
	const boxside = parseInt(boxsideStr);
	if(boxside < 5) {
		alert("Box size is too small!  Minimum 5 px for speed")
		return
	}

	const height=width;
	grid.style["width"] = widthStr+'px';
	grid.style["height"] = widthStr+'px';
	console.log(grid.style);
	
	const area = width*height;
  console.log("Creating Grid...");
	for(let i=0; i < area/(boxside*boxside); i+=1){
		let newCell = document.createElement("div");
		newCell.style['width']=boxside+'px'
		newCell.style['height']=boxside+'px'
		newCell.classList.add("cell");
		newCell.id=`cell${i}`;
		newCell.addEventListener("mouseover",markBlack)
		grid.appendChild(newCell)
	}
	console.log("Done!")

	initialGrid=true;
	
}
window.onload = createGrid()

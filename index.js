

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

const createGrid = ()=>{
	const grid = document.getElementById("grid")
	console.log("Creating Grid...");
	const width=grid.clientWidth;
	const height=grid.clientHeight;
	const area = width*height;
	const boxside = 10;
	console.log(width);
	console.log(height);
	for(let i=0; i < area/(boxside*boxside); i+=1){
		console.log("Creating Grid...");
		let newCell = document.createElement("div");
		newCell.style.width=boxside+'px'
		newCell.style.height=boxside+'px'
		newCell.classList.add("cell");
		newCell.id=`cell${i}`;
		newCell.addEventListener("mouseover",markBlack)
		grid.appendChild(newCell)
	}
	
}

window.onload = createGrid;

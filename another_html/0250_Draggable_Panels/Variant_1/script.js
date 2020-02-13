let isLeftDragging = false;
let isRightDragging = false;

function ResetColumnSizes() {
	// when page resizes return to default col sizes
	let page = document.getElementById("pageFrame");
	page.style.gridTemplateColumns = "2fr 6px 6fr 6px 2fr";
}

function SetCursor(cursor) {
	let page = document.getElementById("page");
	page.style.cursor = cursor;
}

function StartLeftDrag() {
	console.log("mouse down");
	isLeftDragging = true;
	
	SetCursor("ew-resize");
}

function StartRightDrag() {
	console.log("mouse down");
	isRightDragging = true;
	
	SetCursor("ew-resize");
}

function EndDrag() {
	console.log("mouse up");
	isLeftDragging = false;
	isRightDragging = false;
	
	SetCursor("auto");
}

function OnDrag(event) {
	if(isLeftDragging || isRightDragging) {
		console.log("Dragging");
		//console.log(event);
		
		let page = document.getElementById("page");
		let leftcol = document.getElementById("leftcol");
		let rightcol = document.getElementById("rightcol");	
		
		let leftColWidth = isLeftDragging ? event.clientX : leftcol.clientWidth;
		let rightColWidth = isRightDragging ? page.clientWidth - event.clientX : rightcol.clientWidth;
		
		let dragbarWidth = 6;
		
		let cols = [
			leftColWidth,
			dragbarWidth,
			page.clientWidth - (2*dragbarWidth) - leftColWidth - rightColWidth,
			dragbarWidth,
			rightColWidth
		];
		
		let newColDefn = cols.map(c => c.toString() + "px").join(" ");
			
		console.log(newColDefn);
		page.style.gridTemplateColumns = newColDefn;
		
		event.preventDefault()
	}
}
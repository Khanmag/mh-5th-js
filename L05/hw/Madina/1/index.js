function selectBorder() {
    const width = document.getElementById("width").value + "px";
    const height = document.getElementById("height").value + "px";
    const thickness = document.getElementById("thickness").value + "px";
    const color = document.getElementById("color").value;
    const borderElement = document.getElementById("border");
    
    borderElement.style.width = width;
    borderElement.style.height = height;
    borderElement.style.borderWidth = thickness;
    borderElement.style.borderColor = color;
    borderElement.style.borderStyle = "solid";
}
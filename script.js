// blend modes select element
const blendModes = document.getElementById("blendMode");
// inner layer color select element
const innerLayerColors = document.getElementById("innerLayerColor");
// image element
const image = document.getElementById("imgElement");
// color layer element
const colorLayer = document.getElementById("LayerColor");
// image opacity
const imageOpacity = document.getElementById("imageOpacity");
// color layer opacity
const colorLayerOpacity = document.getElementById("innerLayerColorOpacity");
//file selector
const fileSelector = document.getElementById("file-selector");
//image container
const imageContainer = document.getElementById("imageContainer");
//download button
const downloadButton = document.getElementById("downloadButton");

const handleModeChange = () => {
  image.style.mixBlendMode = blendModes.value ? blendModes.value : "normal";
};

const handleColorChange = () => {
  colorLayer.style.backgroundColor = innerLayerColors.value
    ? innerLayerColors.value
    : "purple";
};

const handleImageOpacityChange = () => {
  image.style.opacity = imageOpacity.value ? imageOpacity.value : 1;
  console.log(imageOpacity.value);
};

const handleColorOpacityChange = () => {
  colorLayer.style.opacity = colorLayerOpacity.value
    ? colorLayerOpacity.value
    : 1;
  console.log(colorLayerOpacity.value);
};

const handleFileChange = (event) => {
  console.log(event.target.files[0]);
  image.src = URL.createObjectURL(event.target.files[0]);
};

const doCaptureDiv = (event) => {
  event.preventDefault();
  html2canvas(imageContainer).then((canvas) => {
    console.log(canvas.toDataURL("image/jpeg", 1));
  });
};

// adding events for image opacity change and input change event
imageOpacity.addEventListener("change", handleImageOpacityChange);
imageOpacity.addEventListener("input", handleImageOpacityChange);

// adding events for color layer opacity change and input change event
colorLayerOpacity.addEventListener("change", handleColorOpacityChange);
colorLayerOpacity.addEventListener("input", handleColorOpacityChange);

//bind download button click event
downloadButton.addEventListener("click", doCaptureDiv);

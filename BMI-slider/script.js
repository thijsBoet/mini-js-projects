let height = document.getElementById("height");
let weight = document.getElementById("weight");
let BMI = document.getElementById("BMI");
let bmiBackgroundColor = document.getElementById("bmiBackgroundColor").style.color;

const heightSlider = document.getElementById("heightSlider");
const weightSlider = document.getElementById("weightSlider");

height.innerText = `${heightSlider.value} cm`;
weight.innerText = `${weightSlider.value} kg`;

heightSlider.addEventListener("input", function () {
  height.innerText = `${heightSlider.value} cm`;
  calculateBMI();
});

weightSlider.addEventListener("input", function () {
  weight.innerText = `${weightSlider.value} kg`;
  calculateBMI();
});

const calculateBMI = () => {
  BMI.innerText = Math.round(+weightSlider.value / (((+heightSlider.value / 100) * +heightSlider.value) / 100));
};
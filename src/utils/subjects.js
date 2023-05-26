import images from "./images";

const subjects = [
    { name: "Chemistry", image: images.chemistry, goto: '/simulations/chemistry' },
    { name: "Biology", image: images.biology, goto: '/simulations/biology' },
    { name: "Physics", image: images.physics, goto: '/simulations/physics'},
    { name: "Geology", image: images.geology, goto: '/simulations/geology' },
    { name: "Maths", image: images.maths, goto: '/simulations/maths' },
    { name: "Computer Science", image: images.computer, goto: '/simulations/computer-science' },
    { name: "Food Science", image: images.food, goto: '/simulations/food-science' },
];

const area = [
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
]

export { subjects, area };
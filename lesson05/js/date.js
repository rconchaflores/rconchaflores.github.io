let date = new Date();

document.getElementById("update").innerHTML = date.toDateString();

let dayOfWeek = new Date();
const banner = document.getElementById("alert");
if (dayOfWeek.getDay() == 5) {
    banner.style.display = "content";
} else {
    banner.style.display = "none";
}
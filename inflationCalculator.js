var yearSelect = document.getElementById("yearSelect");
var targetyearSelect = document.getElementById("targetyearSelect");

for (var year = 1960; year <= 2022; year++) {
    var option = document.createElement("option");
    option.value = year;
    option.text = year;
    yearSelect.appendChild(option);
}
for (var year = 1960; year <= 2022; year++) {
    var option = document.createElement("option");
    option.value = year;
    option.text = year;
    targetyearSelect.appendChild(option);
}

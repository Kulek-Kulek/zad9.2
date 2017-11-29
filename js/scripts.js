var femaleNames = ["Zosia", "Basia", "Iga", "Aneta", "Wanda"];
var maleNames = ["Tomasz", "Stachu", "Izydor", "Waldi", "Lech"];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);  

var newName = "Stefan"

if (allNames.indexOf(newName) === -1) {
	var x = allNames.push(newName);
}


		

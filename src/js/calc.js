
let site, design, adaptive;

let calculator = {
	price: [
		[1000, 3000, 5000],
		[500, 4000, 6000],
		[3000, 5000, 3000],
	],
	days: [
		[1,5,10],
		[1,3,6],
		[1,2,1],
	],
	run(siteType, designType, adaptiveType){
	let sum = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][designType-1]) + parseInt(calculator.price[2][adaptiveType-1]);
	let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][designType-1]) + parseInt(calculator.days[2][adaptiveType-1]);
	alert("Сроки: " + days + " Стоимость: " + sum);
    }

}
function getAnswers() {
site = prompt("Какой тип сайта? 1 - Сайт-визитка 2 - Корпоративный сайт 3 - Интернет-магазин");
	if(site != 1 && site != 2 && site != 3){
		alert("Такого варианта нет");
		getAnswers();
		return;
	}
design = prompt("Какой дизайн сайта? 1 - Шаблон 2 - Уникальный 3 - WOW-дизайн");
	if(design != 1 && design != 2 && design != 3){
		alert("Такого варианта нет");
		getAnswers();
		return;
	}
adaptive = prompt("Какая адаптивность сайта? 1 - ПК 2 - ПК + Мобильный 3 - Мобильный");
	if(adaptive != 1 && adaptive != 2 && adaptive != 3){
		alert("Такого варианта нет");
		getAnswers();
		return;
	}
	calculator.run(site, design, adaptive);
	
}

getAnswers();
document.body.append("Os são que divididos por 11 dão resto 5 são: ")
var list = [];

var aleat = Math.floor(Math.random() * 50)+1;

for (var i = 0; i < aleat; i++) {
	var number = Math.floor(Math.random() * 999) + 1000;
	if (number%11===5) {
		list.push(number);
	}
}

if (list.length === 0) {
		document.body.append("Nenhum número divido por 11 de resto 5")
	}else {
		document.body.append(list.join(','))	
}




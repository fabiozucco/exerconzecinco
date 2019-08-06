document.body.append("Os são que divididos por 11 dão resto 5 são: ")

for (var i = 1000; i < 1999; i++) {
	if (i%11===5) {
		document.body.append(i +", ")
	}
}
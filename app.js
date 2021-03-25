let metin_kutusu = document.getElementById("textbox");

let klavye_kapsayici = document.querySelectorAll("#klavye ul li");

let sayac = 0;

let harf_sayaci = 0;


let Klavye = (e) => {


	Metin_Yazdir(e);

	Harf_Renk(e);

	/*if(e == "CapsLock"){

		sayac++;

		

		if(sayac % 1 == 0){
			CapsLock_Renk();
			BuyukHarf();

			
		}
		if(sayac % 2 == 0){
			CapsLock_Renk_Reset();
			KucukHarf();
		}

	}*/

}

// Klavyedeki tuşları kontrol et(ctrl,shift vb.)


// Metin Kutusuna, kullanıcının klavyeden bastığı harfi yazdır.

let Metin_Yazdir = (harf) => {

	harf_sayaci++;

	metin_kutusu.value += harf;

	Harf_Sayisi_Yaz(harf_sayaci);
}

// Kullanıcının Girdiği Harf Sayısını Yazdır.

let Harf_Sayisi_Yaz = (sayi) => {

	document.querySelector("#harf-sayaci p#sayi").innerText = sayi;
}
 

let Harf_Buyut = () => {

	for(let i = 0; i < klavye_kapsayici.length; i++){

		if(i == 13){
			klavye_kapsayici[i].innerText = "Backspace";
		}

		else if(i == 14){
			klavye_kapsayici[i].innerText = "Tab";
		}
		else if(i == 28){
			klavye_kapsayici[i].innerText = "CapsLock";
			klavye_kapsayici[i].style.background = 'green';
			klavye_kapsayici[i].style.color = 'white';
		}
		else if(i == 40){
			klavye_kapsayici[i].innerText = "Enter";
		}
		else if(i == 41){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 53){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 54){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		else if(i == 55){
			klavye_kapsayici[i].innerText = "FN";
		}
		else if(i == 56){
			klavye_kapsayici[i].innerText = "Win";
		}
		else if(i == 57){
			klavye_kapsayici[i].innerText = "Alt";
		}
		else if(i == 58){
			klavye_kapsayici[i].innerText = "Space";
		}
		else if(i == 59){
			klavye_kapsayici[i].innerText = "Alt Gr";
		}
		else if(i == 60){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		else{
			klavye_kapsayici[i].innerText = klavye_kapsayici[i].innerText.toUpperCase();
		}
	}
}


let Harf_Renk = (harf) => {

	for(let i = 0; i < klavye_kapsayici.length; i++){

		if(i == 13){
			klavye_kapsayici[i].innerText = "Backspace";
		}

		else if(i == 14){
			klavye_kapsayici[i].innerText = "Tab";
		}
		else if(i == 28){
			klavye_kapsayici[i].innerText = "CapsLock";

		}
		else if(i == 40){
			klavye_kapsayici[i].innerText = "Enter";
		}
		else if(i == 41){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 53){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 54){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		else if(i == 55){
			klavye_kapsayici[i].innerText = "FN";
		}
		else if(i == 56){
			klavye_kapsayici[i].innerText = "Win";
		}
		else if(i == 57){
			klavye_kapsayici[i].innerText = "Alt";
		}
		else if(i == 58){
			klavye_kapsayici[i].innerText = "Space";
		}
		else if(i == 59){
			klavye_kapsayici[i].innerText = "Alt Gr";
		}
		else if(i == 60){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		else if(harf == klavye_kapsayici[i].innerText){
			klavye_kapsayici[i].style.background = "green";
			klavye_kapsayici[i].style.color = "#fff";
			setTimeout(() => {
				Harf_Renk_Sifirla(harf)
			}, 100);
		}
	}
}

let Harf_Renk_Sifirla = (harf) => {

	for(let i = 0; i < klavye_kapsayici.length; i++){

		if(i == 13){
			klavye_kapsayici[i].innerText = "Backspace";
		}

		else if(i == 14){
			klavye_kapsayici[i].innerText = "Tab";
		}
		else if(i == 28){
			klavye_kapsayici[i].innerText = "CapsLock";

		}
		else if(i == 40){
			klavye_kapsayici[i].innerText = "Enter";
		}
		else if(i == 41){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 53){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 54){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		else if(i == 55){
			klavye_kapsayici[i].innerText = "FN";
		}
		else if(i == 56){
			klavye_kapsayici[i].innerText = "Win";
		}
		else if(i == 57){
			klavye_kapsayici[i].innerText = "Alt";
		}
		else if(i == 58){
			klavye_kapsayici[i].innerText = "Space";
		}
		else if(i == 59){
			klavye_kapsayici[i].innerText = "Alt Gr";
		}
		else if(i == 60){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		else if(harf == klavye_kapsayici[i].innerText){
			klavye_kapsayici[i].style.background = "#000";
			klavye_kapsayici[i].style.color = "#00ff00";
		}
	}
}

let Harf_Kucult = () => {

	for(let i = 0; i < klavye_kapsayici.length; i++){

		if(i == 13){
			klavye_kapsayici[i].innerText = "Backspace";
		}

		else if(i == 14){
			klavye_kapsayici[i].innerText = "Tab";
		}
		else if(i == 28){
			klavye_kapsayici[i].innerText = "CapsLock";
			klavye_kapsayici[i].style.background = 'black';
			klavye_kapsayici[i].style.color = '#00ff00';
		}
		else if(i == 40){
			klavye_kapsayici[i].innerText = "Enter";
		}
		else if(i == 41){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 53){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 54){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		else if(i == 55){
			klavye_kapsayici[i].innerText = "FN";
		}
		else if(i == 56){
			klavye_kapsayici[i].innerText = "Win";
		}
		else if(i == 57){
			klavye_kapsayici[i].innerText = "Alt";
		}
		else if(i == 58){
			klavye_kapsayici[i].innerText = "Space";
		}
		else if(i == 59){
			klavye_kapsayici[i].innerText = "Alt Gr";
		}
		else if(i == 60){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		else{
			klavye_kapsayici[i].innerText = klavye_kapsayici[i].innerText.toLowerCase();
		}
	}
}


let Tab = (harf) => {

	for(let i = 0; i < klavye_kapsayici.length; i++){

		if(i == 13){
			klavye_kapsayici[i].innerText = "Backspace";
		}

		else if(i == 14){
			klavye_kapsayici[i].innerText = "Tab";
			klavye_kapsayici[i].style.background = "green";
			klavye_kapsayici[i].style.color = "#fff";
			setTimeout(() => {
				klavye_kapsayici[i].style.background = "black";
				klavye_kapsayici[i].style.color = "#00ff00";
			}, 100);
		}
		else if(i == 28){
			klavye_kapsayici[i].innerText = "CapsLock";

		}
		else if(i == 40){
			klavye_kapsayici[i].innerText = "Enter";
		}
		else if(i == 41){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 53){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 54){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		else if(i == 55){
			klavye_kapsayici[i].innerText = "FN";
		}
		else if(i == 56){
			klavye_kapsayici[i].innerText = "Win";
		}
		else if(i == 57){
			klavye_kapsayici[i].innerText = "Alt";
		}
		else if(i == 58){
			klavye_kapsayici[i].innerText = "Space";
		}
		else if(i == 59){
			klavye_kapsayici[i].innerText = "Alt Gr";
		}
		else if(i == 60){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		
	}
}


let Alt_Gr = (harf) => {


	for(let i = 0; i < klavye_kapsayici.length; i++){

		if(i == 13){
			klavye_kapsayici[i].innerText = "Backspace";
		}

		else if(i == 14){
			klavye_kapsayici[i].innerText = "Tab";
			
		}
		else if(i == 28){
			klavye_kapsayici[i].innerText = "CapsLock";

		}
		else if(i == 40){
			klavye_kapsayici[i].innerText = "Enter";
		}
		else if(i == 41){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 53){
			klavye_kapsayici[i].innerText = "Shift";
		}
		else if(i == 54){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		else if(i == 55){
			klavye_kapsayici[i].innerText = "FN";
		}
		else if(i == 56){
			klavye_kapsayici[i].innerText = "Win";
		}
		else if(i == 57){
			klavye_kapsayici[i].innerText = "Alt";
		}
		else if(i == 58){
			klavye_kapsayici[i].innerText = "Space";
		}
		else if(i == 59){
			klavye_kapsayici[i].innerText = "Alt Gr";
			klavye_kapsayici[i].style.background = "green";
			klavye_kapsayici[i].style.color = "#fff";
			setTimeout(() => {
				klavye_kapsayici[i].style.background = "black";
				klavye_kapsayici[i].style.color = "#00ff00";
			}, 100);
		}
		else if(i == 60){
			klavye_kapsayici[i].innerText = "Ctrl";
		}
		
	}
}


let Backspace = () => {
	let cumle = []

	for(let i = 0; i <= metin_kutusu.value.length; i++){
		cumle.push(metin_kutusu.value[i]);
	}


	for(let i = 0; i <= cumle.length; i++){
		metin_kutusu.value[i] = cumle.pop();
		console.log(metin_kutusu.value[i]);
	}
}

window.onload = () => {
	
	let count = 0;
	
	window.addEventListener("keyup", (e) => {

		if(e.key == "Tab"){
			Tab(e.key);
		}
		else if(e.key == "F1"){
			console.log("err");
		}
		else if(e.key == "F2"){
			console.log("err");
		}
		else if(e.key == "F3"){
			console.log("err");
		}
		else if(e.key == "F4"){
			console.log("err");
		}
		else if(e.key == "F5"){
			console.log("err");
		}
		else if(e.key == "F6"){
			console.log("err");
		}
		else if(e.key == "F7"){
			console.log("err");
		}
		else if(e.key == "F8"){
			console.log("err");
		}
		else if(e.key == "F9"){
			console.log("err");
		}
		else if(e.key == "F10"){
			console.log("err");
		}
		else if(e.key == "F11"){
			console.log("err");
		}
		else if(e.key == "F12"){
			console.log("err");
		}
		else if(e.key == "AltGraph"){
			Alt_Gr(e.key);
		}

		else if(e.key == "Backspace"){
			Backspace(e.key);
		}
		else if(e.key == "CapsLock"){
			count++;
			if(count % 1 == 0){
				Harf_Buyut();
			}
			if(count % 2 == 0){
				Harf_Kucult();
			}
		}
		else if(e.key == "Shift"){
			console.log("err");
		}
		else if(e.key == "Control"){
			console.log("err");
		}
		else if(e.key == "Enter"){
			console.log("err");
		}

		else{
			Klavye(e.key);
		}

	});
}
let itemOrder = [
	{
		dipesan : false,
		harga : 15000,
		nama : 'Nasi Goreng',
	},
	{
		dipesan : false,
		harga : 15000,
		nama : 'Kwetiau Goreng',
	},
	{
		dipesan : false,
		harga : 10000,
		nama : 'Mie Rebus',
	},
	{
		dipesan : false,
		harga : 10000,
		nama : 'Mie Goreng',
	},
	{
		dipesan : false,
		harga : 10000,
		nama : 'Wedang Jahe',
	},
	{
		dipesan : false,
		harga : 5000,
		nama : 'Teh Manis',
	},
];

let totalOrder = 0;


const itemTerpilih = document.getElementsByClassName('item');

const textTotal = document.getElementById('last-item');

for (let i = 0; i < itemTerpilih.length; i++) {
	itemTerpilih[i].addEventListener('click' , function() {
		setItemPemesanan (i, itemTerpilih[i]);
	});
}

function setItemPemesanan (index, elemen) {
	if (itemOrder[index].dipesan == false) {
		itemOrder[index].dipesan = true;
		elemen.style.backgroundColor = 'brown';
		elemen.style.color = 'white';
		totalOrder = totalOrder + itemOrder[index].harga;
	} else {
		itemOrder[index].dipesan = false;
		elemen.style.backgroundColor = 'burlywood';
		elemen.style.color = 'black';
		totalOrder = totalOrder - itemOrder[index].harga;
	}
	textTotal.innerHTML = "Total <span>Rp " + totalOrder + '</span>';
}
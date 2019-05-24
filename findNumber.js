//Angka pilihan computer
var comp = Math.floor(Math.random() * 10);
console.log(comp);

alert('Tebak angka dari 1-10 \nAnda punya 3 kesempatan')

var nyawa = 3;
while(nyawa > 0){

    //Angka pilihan player
    var player = parseInt(prompt('Sisa kesempatan : ' + nyawa + '\nMasukkan tebakan angka :'));

    //Peraturan permainan
    var hasil = '';
    if (player == comp){
        hasil = 'Pilihan BENAR!';
        nyawa = -1;
    }
    else if(player < comp){
        hasil = 'Pilihan terlalu kecil';
        nyawa--;
    }
    else if(player > comp){
        hasil = 'Pilihan terlalu besar';
        nyawa--;
    }
    else{
        hasil = 'Yang dimasukkan bukan angka!';
    }

    //Hasil permainan
    alert('Hasilnya adalah : ' + hasil);
}

if(nyawa == 0){
    alert('Anda KALAH! \nAngka yang dicari adalah : ' + comp);
}
else{
    alert('Terima Kasih sudah bermain :)');
}

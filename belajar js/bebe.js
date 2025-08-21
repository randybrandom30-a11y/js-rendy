// document.getElementById('darex').addEventListener("click",
// () => document.getElementById('Hello').innerHTML='Yendra Anjing'
// );
// console.log("selamat pagii")
// console.log(1+10)
// console.log(Hello)

// const p_3 = 12.2;
// const p_4 = "Good morning everyone";

// console.log(p_3);
// console.log(p_4);


// function appendValue(value) {
//     document.getElementById('display').value += value;

// }

// function clearDisplay() {
//     document.getElementById('display').value = '';

// }

// function calculate() {
//     try {
//         let result = eval(document.getElementById('display').value);
//         document.getElementById('display').value = result;
//     } catch (error) {
//         alert("tidak valid")
//     }
// }

// let nama = "Randy Brandom Yandeday"
// let umur = 17
// let domisili = "semarang"
// let pacar = 3

// if else
// if(pacar == null){
//     pacar = 'belum punya'
// }else
//     pacar = 'udah punya'

// kondisi

// switch(pacar){
//      case 1:
//         pacar = "cuman 1 aja,udah cukup gausah banyak banyak"
//         break
//      case 2:
//         pacar = "2 lu gak bisa ya"
//         break
//     default:
//         pacar = "Belum punya anjing gwq tu jomblo"
//         break

// }
   

// alert(`Nama saya ${nama},Usia saya adalah ${umur},Saya berdomisili ${domisili},Pacar saya ${pacar}.`)
//  hitung"an
// let saldoAwal = 120000
// alert(`Saldo awal kamu ${saldoAwal}`)
// let saldo = confirm('apakah kamu mau saldo tambahan??')
// let saldotambahan = 200000

// const Hutang = 2000


// if(saldo){
    
//     alert("Selamat kamu mendapatkan saldo senilai 200000");
//     let hasil = saldoAwal + saldotambahan
//     alert(`saldo kamu sekarang adalah ${hasil}`)
//     alert(`Kamu memiliki hutang 2000 jadi kamu harus membayarnya`)
//     const saldoAklhir = hasil - Hutang
//     alert(`saldo kamu setelah bayar hutang adalah ${saldoAklhir}`)
// }

// lopping
// for(let gosi = 0; gosi <= 20; gosi = gosi + 1){
//     console.log('Kotralll')
// }
// for(let gosi = 1; gosi <= 20; gosi = gosi + 1){
//     console.log('Kotrll')
// }

// for loop of array
// const namaPacar = ['loliy', 'bibis', 'farmahh','gacor']
// for (let gosi = 0; gosi < namaPacar.length; gosi++){
//     console.log(namaPacar[gosi]);
    
// }

// do-while vs whi;e loop
// let Matthew = 0
// do {
//     Matthew++
//     console.log('GAcor kang')
// } while (Matthew < 10)
// tugas kecil


// let saldoAwal = prompt('Masukan Saldo awal anda')
// alert("kamu punya hutang 2000")
// let Hutang = 2000

// if (saldoAwal > Hutang){
//     alert('Uang kamu cukup saya akan potong saldo kamu')
//     let saldoAkhir = saldoAwal - Hutang
//     alert(`sisa saldo kamu adalah ${saldoAkhir} `)

// } else{
//     alert('Uang kamu tidak cukup untuk membayar hutang')
// }


    

// let Hari = new Date().getDay()
// let Namahari = ["Minggu","Senin","Selasa","rabu","Kamis","Jumat","Sabtu",]
// alert(`Hari ini adalah ${Namahari [Hari]}
// const body = document.body
// const btnn =document.getElementById('btn1')

// btnn.style.padding = '8px'
// btnn.style.borderRadius = '20px'
// btnn.style.fontSize = '30px'


// function tampilNama (){
//     const namaLengkap = document.createElement('p')
//     namaLengkap.textContent = "Randy Brandom Yandeday"
//     namaLengkap.onmouseout = function(){
//         namaLengkap.style.color = 'Red'
//     };
//     body.append(namaLengkap)
// }

// salahh
// function Ubahwarnatext (){
//     const Ubahwarna = document.createElement('p')
//     Ubahwarna.textContent = "Randy Brandom Yandeday";
//     Ubahwarna.style.color = "Blue"
//     body.append(Ubahwarna)
// }

// let Nama 
// Nama = "Sembilan Ratus";
// document.getElementById("output").innerHTML = "Nama";
// belajar array

// ,EMBUAT KALKULATOR
function hitung (){
let n1 = (document.getElementById("nilai1").value)
let n2 = (document.getElementById("nilai2").value)
let oper = (document.getElementById("operator").value)

let Hitung = n1 + oper + n2 
let p = eval(Hitung)

document.getElementById("hasiL").innerHTML = "Hasil : " + p;
}



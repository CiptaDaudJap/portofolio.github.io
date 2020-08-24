contoh.js
// event pd saat link di klik 

$('.halaman-scroll').on('click', function(e){
   
   //  console.log('ok'); ini utk debug jalan/tdk command di atas 
   // utk debug kalau kita klik hreff yg mana yg kena  
   //  var href= $(this).attr('href'); 
  //  console.log(href); 

   // untuk tangkap satu elemen section di gunakan utk debug  
   // mencari jarak dari  element masing masing element tsb ke hal atas ( top ) 
   
   var tujuan = $(this).attr('href'); 
   
   var elemenTujuan = $(tujuan); 

   // console.log(elemenTujuan.offset().top);
   // utk pindahkan scroll 
   
   // console.log($('body').scrollTop()) ;

   $('body').scrollTop(elemenTujuan.offset().top);

   e.preventDefault();

  
});
// event pd saat link di klik 
// function(e) itu utk mematikan link a di hreff nya utk di 
// handel dgn jquery.

$('.halaman-scroll').on('click', function(e){
   
  // ambil isi href 
     var tujuan = $(this).attr('href'); 
   
  // tangkap elemen ybs   
   var elemenTujuan = $(tujuan); 

   // pindahkan scroll function easeinoutexpo buka web jqueryeasing utk lihat lainnya 

   $('html , body').animate({scrollTop: elemenTujuan.offset().top -50
   }, 1250,'easeInOutExpo');

   e.preventDefault();

});

// paralax utk jumbroton efek ke tulisannya 
// javascrip carikan elemen window , pd saat windows ini di scroll jalankan fungsi berikut ini 
// fungsi console utk debug jalan atau tdk funsi ini dan kita bisa lihat nilai yg di hasilkan 
// dari fungsi scrool yg di jalankan .
// utk about kita taruh di luar scrool karena kita tdk mau paralax nya muncul pd waktu di scroll tetapi pd awal saja 
// funct di bawah ini bacanya JQ ketika windows di buka (on di load jalankan fungsi 

$(window).on('load', function() {
  $('.pkiri').addClass('pmuncul');
  $('.pkanan').addClass('pmuncul');
});

$(window).scroll(function(){
   var wscroll = $(this).scrollTop();
   // console.log(wscroll) , ini utk test nilai nya 
   // utk gambar ,h1 dan p berbeda kecepatannya di pembagi kunci nya makin besar makin perlahan  
   
   $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wscroll/6 +'%)'
   });
   
   $('.jumbotron h1').css({
      'transform' : 'translate(0px, '+ wscroll/4 +'%)'
   });
   
   $('.jumbotron p').css({
      'transform' : 'translate(0px, '+ wscroll/2 +'%)'
   });
   
   // paralax utk portfolio
   // sysntax penulisan jquaery biasakan jika { maka kurung } ini segera tutup dgn );
   // 300 * i itu waktu yg diperlukan utk setiap gambar muncul 300 second jadi bisa di mainkan di angka tsb 

   if ( wscroll > $('.portfolio').offset().top - 300 ){
      $('.portfolio .thumbnail').each(function(i) {
         setTimeout(function() {
            $('.portfolio .thumbnail').eq(i).addClass('muncul');
         }, 300 * i);
      })
   }
})

// coba cek apa arti ; dan cara penulisan jquery 

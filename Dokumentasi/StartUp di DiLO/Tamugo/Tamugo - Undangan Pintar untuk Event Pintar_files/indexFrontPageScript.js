$(function() {
    NProgress.start();
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(document).ready(function() {
    $('#myMenu li').click(function() {
        $('.top-bar').removeClass('expanded');
    });
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });

    //Init CallBack Form
    initForm();
});
/*Fix toggle menu*/
function fixToggleMenu() {
    Foundation.libs.topbar.toggle($('.top-bar'));
}
function toogleDaftarLogin(){

    if(!$("#loginContainer").is(":visible")){
        $("#loginContainer").slideDown();
        $("#daftarContainer").slideUp();
    }else{
        $("#loginContainer").slideUp();
        $("#daftarContainer").slideDown();
    }

}
var initForm = function () {
    // console.log(" ############## @[  INdexScript -> initForm ]  : lupaPasswordForm  ____________");
    NProgress.done();
    var lpf = $("#lupaPasswordForm");
    lpf.ajaxForm({
        scope: this,
        beforeSubmit: function(data, $form, options) {
            // console.log(" ############## @[  ->  ]  :  " + JSON.stringify(data)  +" ____________");
            NProgress.start()
            $("html").addClass('busy');
        },
        complete: function(xhr) {

            console.log(" ############## @[  ->  ]  :  " + JSON.stringify(xhr)   +" ____________");
            $('#lupaPasswordModal').foundation('reveal', 'close');
            if(xhr.responseJSON.status){
                window.alert("Password baru sudah dikirim, coba lihat di Inbox");
            }else{
                window.alert(xhr.responseJSON.error);
            }
            //Notification Email sudah dikirim

            $("html").removeClass('busy');
            NProgress.done();
        }
    });
}

 $('#kontakForm').ajaxForm({
      scope : this,
        beforeSend: function() {
        },
        success: function(responseText , statusText, xhr ,element ) {
          // alert(statusText);
          // tampilinInfoText(responseText,"success");
          if(statusText=="success"){

           // window.location.replace('/backdesk/confirmEvent');
           // var dataEv = JSON.stringify(xhr);
           // var cdAkses = dataEv.responseJSON.kodeAkses;
           // sails.log.info('print kode akses ='+cdAkses);
             document.getElementById("kontakFront").click();
              //window.location.replace('/backdesk/eventManagement');
          }
        },
        complete: function(xhr) {
          console.log("log : "+  JSON.stringify(xhr));
          tampilinInfoText(xhr.responseText,"alert");
        }
     });

//----------------------------------------------------------------- After doc READY

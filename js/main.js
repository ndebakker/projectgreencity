$(document).ready(function () {

    //------- vergelijking -----
    var SB = $('button.seizoenBtn');
    var infoToggel = $('.vergelijkingen');

    SB.click(function() {
        infoToggel.find('img.verill').toggle();

        if ($(this).text() == "s' Winters") {
            $(this).text("Zomers"); 
            
        } else {
            $(this).text("s' Winters"); 
        }; 
        infoToggel.find('p.ondertekst').toggle();
    });

    //--extra info bij de foto
    var EIP = $('#extraInfo');
    var IK = $('img.ExInknop');
    var SP = $('.titel');

    IK.click(function(){
        SP.find('img.ExInknop').toggle();

        if (EIP.hasClass('show')) {
            EIP.removeClass('show');
          } else {
            EIP.addClass('show');
          }
    });

    //----- vooruit/achteruit ----
    var forward = $('button#forward');
    var back = $('button#back');
    var totaalStad = $('#stadBg');

    forward.click(function() {
        var forw = totaalStad.scrollLeft() + 400;
        totaalStad.scrollLeft(forw);
    });
    back.click(function() {
        var bac = totaalStad.scrollLeft() - 400;
        totaalStad.scrollLeft(bac);
    });
    

    //---- uitleg pop-up + helpkknop ----
   var helpknop = $('.hulpBtn');
   var uitleg = $('.help');
   var close = $('button.closeX');

   close.click(function(){
    uitleg.removeClass('hulpnodig');
   });

   helpknop.click(function(){
    if(uitleg.hasClass('hulpnodig')){
        uitleg.removeClass('hulpnodig');
    } else{
        uitleg.addClass('hulpnodig');
    }
   });


    //------- infowolkpop-ups -------------
    var C = $('.city');
    $( "body" ).on( "click", "button.weginfo",function() {
        console.log("wegwegweg");

        C.find(".zwart").remove();
    });

    var huis = $('.huis');
    
    $(huis).click(function (event) {
        event.preventDefault();
        console.log('klikklikhuis');


        var IW = $(this).find('.inhoud');
        var C = $('.city');
        var TI= $(this).find('.informatie').html();
        // console.log(TI);
        var closeI= $(this).find('button.weginfo');

        $.ajax({
            success: function () {
                console.log("dubbelcheck");

                IW.innerHTML = "";
                C.append('<div class="zwart"><div class="infowolkje"><div class="informatie"><button class="weginfo" role="button"> X </button>'+ TI +'</div></div></div>');
            
            }
        });

    });
   

});


// var closeI = IW.find('button.weginfo');
//                 var removeDiv = document.querySelector('city');
    
//                 closeI.addEventListener('click', () => {
//                     removeDiv.removeChild('.zwart');
//                     });

// var huis = $('.huis');
    // var BGIW = $('.zwart');
    // // console.log(IB);
    // // var IW = $('.infowolkje');

    // $(huis).click(function (event) {
    //     event.preventDefault();
    //     var IW = $(this).find('.infowolkje');
    //     var HMW =$(this);

    //     console.log('klikklikhuis');
    //     console.log($(this));
    //     console.log(HMW);
    //     $.ajax({
    //         success: function (data) {
    //             console.log("ajaxwerkt");

    //             //--gesloten
    //             if (IW.hasClass('zichtbaar')) {
    //                 IW.removeClass('zichtbaar');
    //                 // IW.innerHTML = "";

                    
                    
    //             } else {
    //                 //--open
    //                 IW.addClass('zichtbaar');

    //             }

    //         }

    //     });
    // });










////////jiste
// var huis = $('.huis');
// var button = $('.knopje');

// $(huis).click(function (event) {
//     event.preventDefault();

//     console.log('klikklikhuis');
//     console.log($(this));


//     var IB = $(this).parent();
//     var IW = $('.infowolkje');
//     // var btn = $(this).children(".knopje");

//     var url = $(this).attr("href");
//     console.log(url);

//     $.ajax({
//         url: url,
//         success: function (data) {
//             console.log("ajaxwerkt");

//             //--------gesloten
//             if (IW.hasClass('zichtbaar')) {
//                 IW.removeClass('zichtbaar');

//                 // setTimeout(function () {
//                 //     IW.css({
//                 //         'z-index': -50,
//                 //         "content": "none",
//                 //     });

//                 //     // //knop
//                 //     // button.text("Discover");
//                 //     // buttonL.text("More about us").css({
//                 //     //     "left": "50%"
//                 //     // });
                
//                 // }, 1000);


//             } else {
//                 //---------open
//                 IW.addClass('zichtbaar');
//                 // IB.append('<div class="achtergrond"></div>');

//                 // setTimeout(function () {
//                 //     // //knop
//                 //     // button.text("Back");
//                 //     // buttonL.text("Back").css({
//                 //     //     "left": "80%"
//                 //     // });

//                 //     IW.css({
//                 //         "z-index": 30,
//                 //         "content": "normal",
//                 //     });
//                 // }, 1000);


//             }



//         }


//     });
// });


    //knoppen
    // var number = 1;
    // $('#back').click(function (event) {
    //     event.preventDefault();
    //     console.log("terug");

    //     number = number - 1;
    //     if (number == 0) {
    //         number = 6;
    //     }
    //     $('html, body').animate({
    //         scrollTop: $("#scene" + number).offset().top
    //     }, 400);

    //     //kleurknoptest
    //     if (number > 0 && number < 4) {
    //         // console.log("hetwerkt");
    //         $('#mastNav').css({
    //             color: "black",
    //         })
    //     } else {
    //         // console.log("heheheheh");
    //         $('#mastNav').css({
    //             color: "white",
    //         })
    //     }
    // });



    // $('#forward').click(function (event) {
    //     event.preventDefault();
    //     console.log("volgende");

    //     number = number + 1;
    //     if (number == 7) {
    //         number = 1;
    //     }
    //     $('html, body').animate({
    //         scrollTop: $("#scene" + number).offset().top
    //     }, 400);

    //     //kleurknoptest
    //     if (number > 0 && number < 4) {

    //         // console.log("zwarttetekst");
    //         $('#mastNav').css({
    //             color: "black",
    //         })
    //     } else {
    //         // console.log("witworden");
    //         $('#mastNav').css({
    //             color: "white",
    //         })
    //     }
    // });

    // //dino 
    // $(window).on('resize scroll', function () {
    //     if ($('#scene3').isInViewport()) {
    //         // console.log("dino pop-up");
    //         $('.pop').addClass('dino');
    //     } else {
    //         // console.log("nope");
    //         $('.pop').removeClass('dino');
    //     }
    // });











// var laad = $('#loadingPage');
// var draai = $('#draai');
// var content = $('#pagina');
// var bol = $("<span class='lader'></span>");

// $.ajax({
//     url: 'stad.php',

//     beforeSend: function () {
//         console.log("begin");
        
       
//     },

//     success: function (data) {
//         console.log("ladend");
//         $('body').append(data);

//         draai.removeClass('voor');
        
//         $('body').imagesLoaded(function () {
//             console.log("klaar");
//             laad.fadeOut(1000);
//             draai.addClass('na');
        
//         });
//     }
// });



// forward.click(function() {
    //    totaalStad.animate( { 
    //        scrollLeft: + 500
    //     }, 1000, 'easeOutQuad' );
    // });
    // back.click(function() {
    //     totaalStad.animate( { 
    //         scrollLeft: - 500 
    //      }, 1000, 'easeOutQuad' );
    // });



    // $(document).on('click', close, function() {
                // });

                // var x = document.getElementsByClassName("informatie").innerText;
                // document.getElementsByClassName("").innerHTML = x;

                // document.querySelector("h2, h3").style.backgroundColor = "red";

                // C.append('<div class="zwart"><div class="infowolkje"><div class="informatie">'+ content +'</div></div></div>');
                // elementInsideDiv.insertAdjacentHTML('afterend', 'additional HTML code');
 
                // $(document).on('click', 'button.weginfo', function() {
                //     });


                // if (BGIW.hasClass('zichtbaar')) {
                //     BGIW.removeClass('zichtbaar');
                //  // IW.innerHTML = "";
                
                                               
                // } else {
                // //--open
                // BGIW.removeClass('zichtbaar');
                // BGIW.addClass('zichtbaar');
                
                // }



                // IW.innerHTML = "";

                //--gesloten
                
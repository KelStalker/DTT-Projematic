


// document.getElementById('Preproject').onclick = function(){
//     document.body.innerHTML+=
//     `<section class="card-Preproject">
//     <h2> Preproject </h2>
//     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//     orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
//     orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
//     orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
//     </p>  <a href="" class="button">Learn more</a>
//     <a> Download </a>
//     </section>`;
// } 
// var myHeading=document.getElementById('Preproject');
// myHeading.addEventListener('mouseover',function(evnt){
//   document.body.title="Lorem Ipsum is simply dumook a galley of type and scrambled it to make a type specimen book."
//     });

//     document.getElementById('Initiation').onclick = function(){
//       document.body.innerHTML+=
//       `      <div class="inintionGrid">
//       <div id="project-charter"><a href=""> project-charter</a></div>
//       <div id="stakeholder-managementplan"><a href=""> stake holder management plan</a></div>
//       <!-- <div id="stakeholder-register"><a href=""> stakeholder-register</a></div> -->
//       <a href="#" id="hide-inintionGrid">Hide</a>
//   </div>      
//    `;
//   document.getElementById('hide-1').onclick = function(){
//     alert("zohair")
//   } 

// document.getElementById('Planning').onclick = function(){
//   document.body.innerHTML+=
//   `      <div class="planingGrid">

//   <div id="Project-managemnet-plan"><a href="">Project managemnet plan</a></div>
//   <div id="Scope-managemnet-plan"><a href="#"> Scope managemnet plan </a></div>
//   <div id="Cost-managemnet-plan"><a href="#"> Cost managemnet plan </a></div>
//   <div id="Schdule-managemnet-plan"><a href="#">Schdule managemnet plan</a></div>
//   <div id="Risk-managemnet-plan"><a href="#">Risk managemnet plan</a></div>
//   <div id="Communitcuion-managemnet-plan"><a href="#">Communitcuion managemnet plan </a></div>
//   <div id="resource-managemnet-plan"><a href="#">Resource managemnet plan </a></div>
//   <div id="procurement-managemnet-plan"><a href="#">procurement managemnet plan </a></div>
//   <div id="Quality-managemnet-plan"><a href="#">Quality managemnet plan </a></div>
//   <div id="Test-managemnet-plan"><a href="#">Test managemnet plan </a></div>
//   <div id="change-managemnet-plan"><a href="#">change managemnet plan </a></div>
//   <div id="Implementation-managemnet-plan"><a href="#">Implementation managemnet plan </a></div>
//   <div id="Traning-managemnet-plan"><a href="#">Traning managemnet plan </a></div>
//      <a href="#" id="hide-inintionGrid" onclick="hideFunction()">Hide</a>
// </div>   
// `;

// } 

//  function hideFunction() {
//   var x = document.getElementsByClassName("planingGrid");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// function ShowFunctionPlanning() {
//   var x = document.getElementById("planingGrid");
//   if (x.style.display === "none") {
//     x.style.display = "block";
   
    
//   } else {
//     x.style.display = "none";
//   }
// }
// function getStyleSheet(unique_title) {
//   for(var i=0; i<document.styleSheets.length; i++) {
//     var sheet = document.styleSheets[i];
//     if(sheet.title == unique_title) {
//       return sheet;
//     }
//   }
// }
// mouseOver.addEventListener('mouseover',function(evnt){
//   this.className= 'planingGrid';
//   });

var $form = $('#payment-form');
$form.on('submit', payWithStripe);

/* If you're using Stripe for payments */
function payWithStripe(e) {
    e.preventDefault();

    /* Visual feedback */
    $form.find('[type=submit]').html('Validating <i class="fa fa-spinner fa-pulse"></i>');

    var PublishableKey = 'pk_test_b1qXXwATmiaA1VDJ1mOVVO1p'; // Replace with your API publishable key
    Stripe.setPublishableKey(PublishableKey);
    
    /* Create token */
    var expiry = $form.find('[name=cardExpiry]').payment('cardExpiryVal');
    var ccData = {
        number: $form.find('[name=cardNumber]').val().replace(/\s/g,''),
        cvv: $form.find('[name=cardCVV]').val(),
        exp_month: expiry.month, 
        exp_year: expiry.year
    };
    
    Stripe.card.createToken(ccData, function stripeResponseHandler(status, response) {
        if (response.error) {
            /* Visual feedback */
            $form.find('[type=submit]').html('Try again');
            /* Show Stripe errors on the form */
            $form.find('.payment-errors').text(response.error.message);
            $form.find('.payment-errors').closest('.row').show();
        } else {
            /* Visual feedback */
            $form.find('[type=submit]').html('Processing <i class="fa fa-spinner fa-pulse"></i>');
            /* Hide Stripe errors on the form */
            $form.find('.payment-errors').closest('.row').hide();
            $form.find('.payment-errors').text("");
            // response contains id and card, which contains additional card details            
            console.log(response.id);
            console.log(response.card);
            var token = response.id;
            // AJAX - you would send 'token' to your server here.
            $.post('/account/stripe_card_token', {
                    token: token
                })
                // Assign handlers immediately after making the request,
                .done(function(data, textStatus, jqXHR) {
                    $form.find('[type=submit]').html('Payment successful <i class="fa fa-check"></i>').prop('disabled', true);
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                    $form.find('[type=submit]').html('There was a problem').removeClass('success').addClass('error');
                    /* Show Stripe errors on the form */
                    $form.find('.payment-errors').text('Try refreshing the page and trying again.');
                    $form.find('.payment-errors').closest('.row').show();
                });
        }
    });
}
/* Fancy restrictive input formatting via jQuery.payment library*/
$('input[name=cardNumber]').payment('formatCardNumber');
$('input[name=cardCVV]').payment('formatCardCVV');
$('input[name=cardExpiry').payment('formatCardExpiry');

/* Form validation using Stripe client-side validation helpers */
jQuery.validator.addMethod("cardNumber", function(value, element) {
    return this.optional(element) || Stripe.card.validateCardNumber(value);
}, "Please specify a valid credit card number.");

jQuery.validator.addMethod("cardExpiry", function(value, element) {    
    /* Parsing month/year uses jQuery.payment library */
    value = $.payment.cardExpiryVal(value);
    return this.optional(element) || Stripe.card.validateExpiry(value.month, value.year);
}, "Invalid expiration date.");

jQuery.validator.addMethod("cardCVV", function(value, element) {
    return this.optional(element) || Stripe.card.validateCVV(value);
}, "Invalid CVV.");

validator = $form.validate({
    rules: {
        cardNumber: {
            required: true,
            cardNumber: true            
        },
        cardExpiry: {
            required: true,
            cardExpiry: true
        },
        cardCVV: {
            required: true,
            cardCVV: true
        }
    },
    highlight: function(element) {
        $(element).closest('.form-control').removeClass('success').addClass('error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-control').removeClass('error').addClass('success');
    },
    errorPlacement: function(error, element) {
        $(element).closest('.form-group').append(error);
    }
});

paymentFormReady = function() {
    if ($form.find('[name=cardNumber]').hasClass("success") &&
        $form.find('[name=cardExpiry]').hasClass("success") &&
        $form.find('[name=cardCVV]').val().length > 1) {
        return true;
    } else {
        return false;
    }
}

$form.find('[type=submit]').prop('disabled', true);
var readyInterval = setInterval(function() {
    if (paymentFormReady()) {
        $form.find('[type=submit]').prop('disabled', false);
        clearInterval(readyInterval);
    }
}, 250);


/*
https://goo.gl/PLbrBK
*/
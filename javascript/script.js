// Validation using Validate.js
$(document).ready(function() {
    $("#payment-info-form").validate({
        rules: {
            "ccnumber": {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            expiration:{
                required:true
            },
            "cvv": {
                required: true,
                digits: true,
                minlength: 3,
                maxlength: 3
            }
        },
        messages: {
            "ccnumber": {
                required: "Credit Card number is required.",
                digits: "Credit Card number must contain only digits.",
                minlength: "Credit Card number must be 10 digits long.",
                maxlength: "Credit Card number must be 10 digits long."
            },
            "expiration":{
                required: "expiration is required"
            },
            "cvv": {
                required: "CVV is required.",
                digits: "CVV must contain only digits.",
                minlength: "CVV must be 3 digits long.",
                maxlength: "CVV must be 3 digits long."
            }
        }
    });
});

let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 'vertical' for vertical slider
    loop: true, // Loop the slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


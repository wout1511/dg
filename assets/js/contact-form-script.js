/*==============================================================*/
// Klev Contact Form  JS
/*==============================================================*/
// (function ($) {
//   "use strict"; // Start of use strict
//   $("#contactForm")
//     .validator()
//     .on("submit", function (event) {
//       if (event.isDefaultPrevented()) {
//         // handle the invalid form...
//         formError();
//         submitMSG(false, "Heb je alles juist ingevuld?");
//       } else {
//         // everything looks good!
//         event.preventDefault();
//         submitForm();
//       }
//     });

//   function submitForm() {
//     // Initiate Variables With Form Content
//     var name = $("#name").val();
//     var email = $("#email").val();
//     var msg_subject = $("#msg_subject").val();
//     var phone_number = $("#phone_number").val();
//     var message = $("#message").val();

//     $.ajax({
//       type: "POST",
//       url: "form-process.php",
//       data:
//         "name=" +
//         name +
//         "&email=" +
//         email +
//         "&msg_subject=" +
//         msg_subject +
//         "&phone_number=" +
//         phone_number +
//         "&message=" +
//         message,
//       success: function (text) {
//         if (text == "success") {
//           formSuccess();
//         } else {
//           formError();
//           submitMSG(false, text);
//         }
//       },
//     });
//   }

//   function formSuccess() {
//     $("#contactForm")[0].reset();
//     submitMSG(true, "Message Submitted!");
//   }

//   function formError() {
//     $("#contactForm")
//       .removeClass()
//       .addClass("shake animated")
//       .one(
//         "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
//         function () {
//           $(this).removeClass();
//         }
//       );
//   }

//   function submitMSG(valid, msg) {
//     if (valid) {
//       var msgClasses = "h4 text-left tada animated text-success";
//     } else {
//       var msgClasses = "h4 text-left text-danger";
//     }
//     $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
//   }
// })(jQuery); // End of use strict

(function ($) {
  "use strict"; // Start of use strict

  // Initialize EmailJS
  emailjs.init("h6D_rg6gIHF1RZX6Q"); // Replace 'your_user_id' with your actual User ID from EmailJS

  $("#contactForm").on("submit", function (event) {
    if (event.isDefaultPrevented()) {
      // handle the invalid form...
      formError();
      submitMSG(false, "Heb je alles juist ingevuld?");
    } else {
      // everything looks good!
      event.preventDefault();

      // Using EmailJS to send the form
      emailjs.sendForm("service_yyaorwy", "template_vaktne3", this).then(
        function () {
          formSuccess();
          submitMSG(true, "Message Submitted!");
        },
        function (error) {
          formError();
          submitMSG(
            false,
            "Failed to send message. Error: " + JSON.stringify(error)
          );
        }
      );
    }
  });

  function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
  }

  function formError() {
    $("#contactForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass();
        }
      );
  }

  function submitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h4 text-left tada animated text-success";
    } else {
      var msgClasses = "h4 text-left text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }
})(jQuery); // End of use strict

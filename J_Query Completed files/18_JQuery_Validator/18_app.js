$.validator.setDefaults( {
    submitHandler: function () {
        alert( "Form submitted Successfully!" );
    }
} );

$(document).ready( function () {
    $( "#register-form" ).validate( {
        rules: {
            firstname : {
                required : true,
                minlength : 5
            },
            lastname : {
                required : true,
                minlength : 5
            },
            username : {
                required : true,
                minlength : 5
            },
            email : {
                required : true,
                email: true
            },
            password : {
                required : true,
                minlength : 5
            },
            c_password : {
                required : true,
                minlength : 5,
                equalTo:'#password'
            },
            terms : {
                required : true
            }
        },
        messages: {
            firstname : {
                required : 'Please enter a firstName',
                minlength : 'Enter at least 5 letters for firstName'
            },
            lastname : {
                required : 'Please enter a lastName',
                minlength : 'Enter at least 5 letters for lastName'
            },
            username : {
                required : 'Please enter a UserName',
                minlength : 'Enter at least 5 letters for UserName'
            },
            email : {
                required : 'Please enter a Email',
                email: 'Enter a Proper Email'
            },
            password : {
                required : 'Please enter a Password',
                minlength : 'Enter at least 5 letters for Password'
            },
            c_password : {
                required : 'Please enter a Confirm Password',
                minlength : 'Enter at least 5 letters for Confirm Password',
                equalTo:'Both the passwords not Matched'
            },
            terms : {
                required : 'Please accept the terms & Conditions'
            }
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
            // Add the `invalid-feedback` class to the error element
            error.addClass( "invalid-feedback" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.next( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
        }
    } );

} );
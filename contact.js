(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault(); // Prevent the default form submission
                    // Custom email validation
                    var emailInput = document.getElementById('emailInput');
                    if (!emailInput.value.includes('@')) {
                        emailInput.setCustomValidity('Please include an "@" in the email address.');
                        emailInput.reportValidity();
                    } else {
                        emailInput.setCustomValidity('');
                        // Redirect to the index.html page after successful form validation
                        window.location.href = 'index.html';
                    }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

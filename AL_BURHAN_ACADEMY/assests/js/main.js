function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll('input, textarea');
            let valid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = '1px solid red';
                } else {
                    input.style.border = '1px solid #ccc';
                }
            });
            if (valid) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Please fill all required fields.');
            }
        });
    }
}

validateForm('contact-form');
validateForm('admission-form');
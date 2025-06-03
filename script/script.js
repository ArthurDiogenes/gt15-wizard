tailwind.config = {
    theme: {
        extend: {
            colors: {
                'wizard-blue': '#0a1172',
                'wizard-red': '#dc2626',
                'wizard-dark-blue': '#1e1b4b'
            }
        }
    }
}

function toggleFAQ(element) {
    const content = element.nextElementSibling;
    const btnText = element.querySelector('button');

    content.classList.toggle('active');

    if (content.classList.contains('active')) {
        btnText.textContent = 'Recolher';
    } else {
        btnText.textContent = 'Expandir';
    }
}
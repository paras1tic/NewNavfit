// chief-eval-form.js

document.getElementById('ssn').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 3) {
        e.target.value = value;
    } else if (value.length <= 5) {
        e.target.value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length <= 9) {
        e.target.value = value.slice(0, 3) + '-' + value.slice(3, 5) + '-' + value.slice(5, 9);
    } else {
        e.target.value = value.slice(0, 9); // Limit length to SSN format
    }
});

document.getElementById('chiefEvalForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get SSN value
    const ssn = document.getElementById('ssn').value;

    // Encrypt SSN (for demonstration purposes, here we just hash it as a simulation)
    const encryptedSSN = btoa(ssn); // Use btoa for base64 encoding (this is just a placeholder for real encryption)

    // Prepare form data
    const formData = {
        name: document.getElementById('name').value,
        rating: document.getElementById('rating').value,
        designation: document.getElementById('designation').value,
        ssn: encryptedSSN, // Use encrypted SSN
        uic: document.getElementById('uic').value,
        shipStation: document.getElementById('shipStation').value,
        promotionStatus: document.getElementById('promotionStatus').value,
        dateReported: document.getElementById('dateReported').value,
        physicalReadiness: document.getElementById('physicalReadiness').value,
        billetSubcategory: document.getElementById('billetSubcategory').value,
        reportingSenior: document.getElementById('reportingSenior').value,
        grade: document.getElementById('grade').value,
        desig: document.getElementById('desig').value,
        title: document.getElementById('title').value,
        block28: document.getElementById('block28').value
    };

    // Handle form data (you can send it to a server or save locally)
    console.log("Form Data:", formData);

    // Show success message (you can replace this with actual backend submission logic)
    alert('Form submitted successfully!');
});


const technicalMasterGradeSelect = document.getElementById('technicalMasterGrade');
const technicalMasterGradeScore = document.getElementById('technicalMasterGradeScore');

function updateTechnicalMasterScore() {
    if (!technicalMasterGradeSelect || !technicalMasterGradeScore) {
        return;
    }

    const selectedValue = technicalMasterGradeSelect.value;
    const scoreMatch = selectedValue.match(/^\s*([0-9]+(?:\.[0-9])?)/);

    if (scoreMatch) {
        technicalMasterGradeScore.textContent = scoreMatch[1];
    }
}

if (technicalMasterGradeSelect) {
    technicalMasterGradeSelect.addEventListener('change', updateTechnicalMasterScore);
    updateTechnicalMasterScore();
}



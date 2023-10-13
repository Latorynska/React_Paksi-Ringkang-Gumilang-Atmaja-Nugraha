let productModal = new bootstrap.Modal(document.getElementById('productModal'));
let products = [];
let productBuffer;
let files = new Array();
const form = document.getElementById('form-product');

function deleteLastProduct(datas){
    if(datas){
        datas.pop();
        drawTableBody(datas);
    } else {
        swal('Error', 'Product data already is empty.', 'error');
    }
}

function pushData(){
    products.push(productBuffer);
    drawTableBody(products);
    files.forEach(element => {
        console.log(element.files[0].name);
    });
}

function drawTableBody(datas) {
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    let data = '';
    let count = 1;
    datas.forEach(element => {
        data += `
        <tr>
            <td>${count++}</td>
            <td>${element.name}</td>
            <td>${element.category}</td>
            <td>${element.file.name}</td>
            <td>${element.freshness}</td>
            <td>${element.description}</td>
            <td>${element.price}</td>
        </tr>
    `;
    });
    tableBody.innerHTML = data;
}

document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.checkValidity() || !validateForm()) {
            event.stopPropagation();
        } else {
            productBuffer = {
                name: form.querySelector('input[name="productName"]').value,
                category: form.querySelector('select[name="productCategory"]').value,
                freshness: form.querySelector('input[type="radio"][name="freshness"]:checked').value,
                description: form.querySelector('textarea[name="description"]').value,
                price: form.querySelector('input[name="price"]').value,
                file: form.querySelector('input[type="file"][name="productImage"]').files[0]
            };

            populateModalData(productBuffer);

            document.getElementById('continueSubmitButton').style.display = "block";
            productModal.show();
        }
        form.classList.add('was-validated');
    });
});

// logic tambah ke table
document.getElementById('continueSubmitButton').addEventListener('click', function () {
    pushData();
    form.reset();
    productModal.hide();
    swal({
        title: "Data Ditambahkan!",
        text: "data berhasil ditambahkan ke dalam tabel",
        icon: "success",
        button: "oke!",
    });
});

// logic hapus data
document.getElementById('btn-delete-data').addEventListener('click', function() {
    swal({
        title: "hapus data?",
        text: "Anda yakin ingin menghapus data terakhir yang anda masukkan?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            deleteLastProduct(products);
            swal("Data terakhir berhasil dihapus!", {
            icon: "success",
            });
        } else {
            swal("Data tidak jadi dihapus");
        }
    });
});

// add event to search button
document.getElementById('btn-search').addEventListener('click', function () {
    const searchInput = document.getElementById('search');
    const keyword = searchInput.value.trim().toLowerCase();
    if (keyword === '') {
        swal('Error', 'Please enter a search keyword.', 'error');
    } else {
        searchProductByName(keyword);
    }
});

//logic search
function searchProductByName(keyword) {
    const tableBody = document.getElementById('table-body'); 
    const rows = tableBody.getElementsByTagName('tr'); 
    // perulangan untuk mengecek setiap row
    for (const row of rows) {
        const productNameCell = row.querySelector('td:nth-child(2)'); // child kedua karena product name berada di kolom kedua
        if (productNameCell.textContent.includes(keyword)) {
            document.getElementById('continueSubmitButton').style.display = "none";
            const cells = row.querySelectorAll('td');
            const product = {
                name: cells[1].textContent,
                category: cells[2].textContent,
                freshness: cells[4].textContent,
                description: cells[5].textContent,
                price: cells[6].textContent
            };
            populateModalData(product);
            productModal.show();
        } else {
            
        }
    }
}

// populate modal data
function populateModalData(product){
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductCategory').textContent = product.category;
    document.getElementById('modalProductFreshness').textContent = product.freshness;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductPrice').textContent = product.price;

}

function showError(element, message) {
    const invalidFeedback = element.nextElementSibling;
    invalidFeedback.textContent = message;
    invalidFeedback.style.display = "block";

    if (element.type === 'radio') {
        const radioName = element.name;
        const radios = document.querySelectorAll(`input[type="radio"][name="${radioName}"]`);
        radios.forEach(radio => radio.classList.replace('is-valid', 'is-invalid'));
    } else {
        element.classList.replace('is-valid', 'is-invalid');
    }
}

function hideError(element) {
    const invalidFeedback = element.nextElementSibling;
    invalidFeedback.textContent = '';
    invalidFeedback.style.display = "none";

    if (element.type === 'radio') {
        const radioName = element.name;
        const radios = document.querySelectorAll(`input[type="radio"][name="${radioName}"]`);
        radios.forEach(radio => radio.classList.replace('is-invalid', 'is-valid'));
    } else {
        element.classList.replace('is-invalid', 'is-valid');
    }
}


function validateForm() {
    const submitButton = form.querySelector('button[type="submit"]');
    
    const productNameInput = form.querySelector('input[name="productName"]');
    const productCategoryInput = form.querySelector('select[name="productCategory"]');
    const radioGroups = form.querySelectorAll('input[type="radio"][name="freshness"]');
    const fileInput = form.querySelector('input[type="file"][name="productImage"]');
    const descriptionInput = form.querySelector('textarea[name="description"]');
    const priceInput = form.querySelector('input[name="price"]');
    
    const isRadioChecked = Array.from(radioGroups).some(radio => radio.checked);
    
    let isFormValid = (
        productNameInput.checkValidity() &&
        productCategoryInput.checkValidity() &&
        isRadioChecked &&
        fileInput.checkValidity() &&
        descriptionInput.checkValidity() &&
        priceInput.checkValidity() &&
        productNameInput.value.length <= 25
    );
    if (!productNameInput.checkValidity()) {
        showError(productNameInput, 'Please enter a valid product name');
        isFormValid = false;
    } else {
        hideError(productNameInput);
    }

    if (!productCategoryInput.checkValidity()) {
        showError(productCategoryInput, 'Please select a product category');
        isFormValid = false;
    } else {
        hideError(productCategoryInput);
    }

    if (!isRadioChecked) {
        showError(radioGroups[radioGroups.length-1], 'Please select a product freshness');
        isFormValid = false;
    } else {
        hideError(radioGroups[radioGroups.length-1]);
    }

    if (!fileInput.checkValidity()) {
        showError(fileInput, 'Please select an image for the product');
        isFormValid = false;
    } else {
        hideError(fileInput);
    }

    if (!descriptionInput.checkValidity()) {
        showError(descriptionInput, 'Please provide a description for the product');
        isFormValid = false;
    } else {
        hideError(descriptionInput);
    }

    if (!priceInput.checkValidity()) {
        showError(priceInput, 'Please enter a valid product price');
        isFormValid = false;
    } else {
        hideError(priceInput);
    }
    
    if (productNameInput.value.trim() === "") {
        showError(productNameInput, 'Product Name must not empty!');
        isFormValid = false;
    } else if (productNameInput.value.length > 10) {
        showError(productNameInput, 'Product Name must not exceed 25 characters.');
    } else if (productNameInput.value.length > 25) {
        showError(productNameInput, 'Product Name must not exceed 25 characters.');
        isFormValid = false;
    } else if (/[#{}@]/.test(productNameInput.value)) {
        showError(productNameInput, "Product Name cannot contain '@', '#', '{', or '}'.");
        isFormValid = false;
    } else {
        hideError(productNameInput);
    }
    submitButton.disabled = !isFormValid;
    return isFormValid;
}

var formProduct = document.getElementById('form-product');
// Menambahkan event listener untuk event change ke seluruh elemen dalam formulir
var formElements = formProduct.querySelectorAll('input, select, textarea');
formElements.forEach(function(element) {
    element.addEventListener('change', validateForm);
});
// Menambahkan event listener untuk event input ke elemen "price", 
// karena price merupakan input yang harusnya hanya input angka
var priceInput = document.getElementById('price');
priceInput.addEventListener('input', validateForm);
var productNameInput = document.getElementById('productName');
productNameInput.addEventListener('keydown', validateForm);
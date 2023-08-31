
// Example starter JavaScript for disabling form submissions if there are invalid fields

let productModal = new bootstrap.Modal(document.getElementById('productModal'));
(function () {
    'use strict';
    
    var forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                var radioGroups = form.querySelectorAll('input[type="radio"][name="freshness"]');
                var radioError = form.querySelector('.invalid-feedback[data-radio="freshness"]');
                var fileInput = form.querySelector('input[type="file"][name="productImage"]');
                var fileError = form.querySelector('.invalid-feedback[data-input="productImage"]');
                var productNameInput = form.querySelector('input[name="productName"]');
                var productCategoryInput = form.querySelector('select[name="productCategory"]');
                var descriptionInput = form.querySelector('textarea[name="description"]');
                var priceInput = form.querySelector('input[name="price"]');;
                var selectedFreshness = form.querySelector('input[type="radio"][name="freshness"]:checked').value;
                
                var isRadioChecked = Array.prototype.slice.call(radioGroups).some(function (radio) {
                    return radio.checked;
                });
                
                if (!isRadioChecked) {
                    radioError.style.display = 'block';
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    radioError.style.display = 'none';
                }
                
                if (!fileInput.value) {
                    fileError.style.display = 'block';
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    fileError.style.display = 'none';
                }

                if (productNameInput.value.length > 25) {
                    event.preventDefault();
                    event.stopPropagation();
                    swal("Error", "Product Name must not exceed 25 characters.", "error");
                } 
                else if(productNameInput.value.trim() === ""){
                    event.preventDefault();
                    event.stopPropagation();
                    swal("Error", "Product Name Must Not Empty", "error");
                    productNameInput.classList.remove("is-valid");
                    productNameInput.classList.add("is-invalid");

                } else if (/[#{}@]/.test(productNameInput.value)) {
                    event.preventDefault();
                    event.stopPropagation();
                    swal("Error", "Product Name cannot contain '@', '#', '{', or '}'.", "error");
                    showError(productNameInput,"Product Name cannot contain '@', '#', '{', or '}'.");
                    productNameInput.classList.remove("is-valid");
                    productNameInput.classList.add("is-invalid");
                    productNameInput.style.backgroundImage = "none";
                } else {

                    // Populate the modal with product data
                    const product = {
                        name: productNameInput.value,
                        category: productCategoryInput.options[productCategoryInput.selectedIndex].text,
                        freshness: selectedFreshness,
                        description: descriptionInput.value,
                        price: priceInput.value
                    }
                    populateModalData(product);

                    // Show the modal
                    document.getElementById('continueSubmitButton').style.display = "block";
                    productModal.show();
                    
                }
            }
            
            form.classList.add('was-validated');
        }, false);
    });
})();

// logic tambah ke table
document.getElementById('continueSubmitButton').addEventListener('click', function () {
    let tableBody = document.getElementById('table-body');
    let trCount = tableBody.getElementsByTagName("tr").length;
    let form = document.getElementById('form-product');
    const productName = form.querySelector('input[name="productName"]').value;
    const productCategory = form.querySelector('select[name="productCategory"]').value;
    const file = form.querySelector('input[type="file"][name="productImage"]');
    const description = form.querySelector('textarea[name="description"]').value;
    const price = form.querySelector('input[name="price"]').value;
    const freshnessRadios = form.querySelectorAll('input[type="radio"][name="freshness"]');
    let freshness = '';
    for (const radio of freshnessRadios) {
        if (radio.checked) {
            freshness = radio.value;
            break;
        }
    }

    let newData = 
    `
        <tr>
            <td>${++trCount}</td>
            <td>${productName}</td>
            <td>${productCategory}</td>
            <td>${file.files[0].name}</td>
            <td>${freshness}</td>
            <td>${description}</td>
            <td>${price}</td>
        </tr>
    `;
    console.log(newData);
    tableBody.innerHTML += newData;
    form.reset();

    // Close the modal
    productModal.hide();

    // alert message
    swal({
        title: "Data Ditambahkan!",
        text: "data berhasil ditambahkan ke dalam tabel",
        icon: "success",
        button: "oke!",
    });
});

// logic hapus data
document.getElementById('btn-delete-data').addEventListener('click', function() {
    // memakai sweetalert untuk konfirmasi hapus data
    swal({
        title: "hapus data?",
        text: "Anda yakin ingin menghapus data terakhir yang anda masukkan?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            swal("Data terakhir berhasil dihapus!", {
            icon: "success",
            });
            // hapus data terakhir di table (logic)
            let tableBody = document.getElementById('table-body');
            let lastRow = tableBody.lastElementChild;
            if (lastRow) {
                tableBody.removeChild(lastRow);
            }
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
    const tableBody = document.getElementById('table-body'); // pengambilan object tabel
    const rows = tableBody.getElementsByTagName('tr'); // ambil semua tr dari dalam tabel tadi kedalam array tr
    // perulangan untuk mengecek setiap row
    for (const row of rows) {
        const productNameCell = row.querySelector('td:nth-child(2)'); // child kedua karena product name berada do kolom kedua
        if (productNameCell.textContent.includes(keyword)) {
            document.getElementById('continueSubmitButton').style.display = "none"; //sembunyikan tombol submit pada modal product setelah submit form
            const cells = row.querySelectorAll('td'); // ambil semua td di tr tersebut
            //buat object product berdasar data di row tersebut
            const product = {
                name: cells[1].textContent,
                category: cells[2].textContent,
                freshness: cells[4].textContent,
                description: cells[5].textContent,
                price: cells[6].textContent
            };
            // isi data modal
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
    const formGroup = element.closest('.mb-3');
    const invalidFeedback = formGroup.querySelector('.invalid-feedback');
    invalidFeedback.textContent = message;
    invalidFeedback.style.display = "block";
    formGroup.classList.add('has-error'); // Tambahkan class 'has-error' untuk merubah tampilan border
}

function hideError(element) {
    const formGroup = element.closest('.mb-3');
    const invalidFeedback = formGroup.querySelector('.invalid-feedback');
    invalidFeedback.textContent = '';
    invalidFeedback.style.display = "none";
    formGroup.classList.remove('has-error'); // Hapus class 'has-error' untuk merubah tampilan border
}

function validateForm() {
    const form = document.getElementById('form-product');
    const submitButton = form.querySelector('button[type="submit"]');
    
    const productNameInput = form.querySelector('input[name="productName"]');
    const productCategoryInput = form.querySelector('select[name="productCategory"]');
    const radioGroups = form.querySelectorAll('input[type="radio"][name="freshness"]');
    const fileInput = form.querySelector('input[type="file"][name="productImage"]');
    const descriptionInput = form.querySelector('textarea[name="description"]');
    const priceInput = form.querySelector('input[name="price"]');
    
    const isRadioChecked = Array.from(radioGroups).some(radio => radio.checked);
    
    const isFormValid = (
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
    } else {
        hideError(productNameInput);
    }

    if (!productCategoryInput.checkValidity()) {
        showError(productCategoryInput, 'Please select a product category');
    } else {
        hideError(productCategoryInput);
    }

    if (!isRadioChecked) {
        showError(radioGroups[0], 'Please select a product freshness');
    } else {
        hideError(radioGroups[0]);
    }

    if (!fileInput.checkValidity()) {
        showError(fileInput, 'Please select an image for the product');
    } else {
        hideError(fileInput);
    }

    if (!descriptionInput.checkValidity()) {
        showError(descriptionInput, 'Please provide a description for the product');
    } else {
        hideError(descriptionInput);
    }

    if (!priceInput.checkValidity()) {
        showError(priceInput, 'Please enter a valid product price');
    } else {
        hideError(priceInput);
    }
    
    if (productNameInput.value.trim() === "") {
        showError(productNameInput, 'Product Name must not empty!');
    } else if (productNameInput.value.length > 10) {
        showError(productNameInput, 'Product Name must not exceed 25 characters.');
    } else if (productNameInput.value.length > 25) {
        showError(productNameInput, 'Product Name must not exceed 25 characters.');
    } else if (/[#{}@]/.test(productNameInput.value)) {
        showError(productNameInput, "Product Name cannot contain '@', '#', '{', or '}'.");
    } else {
        hideError(productNameInput);
    }
    submitButton.disabled = !isFormValid;
}


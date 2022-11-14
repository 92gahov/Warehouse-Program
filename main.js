let dom = {
    // Sale page
    salePage: document.querySelector(".sale-main"),
    // Delivery page
    deliveryPage: document.querySelector(".delivery-main"),
    // Dashboard page
    dashboardPage: document.querySelector(".dashboard-main"),
    // Archive page
    archivePage: document.querySelector(".archive-main"),
    // Modal window for insufficient quantity - Sale page
    modal: document.querySelector(".modal"),
    // Table for products in store - Sale page
    tableProductsBody: document.getElementById("products-table-body"),
    // Current sale section - Sale page
    currSale: document.querySelector(".curr-sale"),
    // Table for products in current sale - Sale page
    currentSaleBody: document.getElementById("current-sale-body"),
    // Category section - Sale page
    categoriesBody: document.querySelector(".sale-category"),
    // Quantity section - Sale page
    saleProductQnt: document.querySelector(".model-sale"),
    // Input for searching product - Sale page
    searchProductInput: document.getElementById("search-product-input"),
    // Input for quantity - Sale page
    inputQnt: document.getElementById("input-qnt"),
    // Input for client name - Sale page
    clientNameInput: document.getElementById("client-name-input"),
    // Button for close quantity modal window - Sale page
    closeSaleProductQnt: document.querySelector(".close-sale-product-qnt"),
    // Button for close modal window for insufficient quantity - Sale page
    closeModal: document.getElementById("closeModal"),
    // Button for adding product in current sale table - Sale page
    addToCurrSale: document.getElementById("add-to-curr-sale"),
    // Button for finish sale - Sale page
    finishSaleBtn: document.getElementById("finish-sale-btn"),
    // Total amount in current sale table - Sale page
    totalCurrPrice: document.getElementById("total-curr-price"),
    // Input for searching product - Sale page
    searchProductInput: document.getElementById("search-product-input"),
    // All payments for sale - Sale page
    payments: document.getElementsByName("payment"),
    // Table for products in store - Delivery page
    tableProductsBodyDelivery: document.getElementById("products-table-body-delivery"),
    // Category section - Delivery page
    categoriesBodyInDelivery: document.querySelector(".delivery-category"),
    // Quantity section - Delivery page
    deliveryProductQnt: document.querySelector(".modal-delivery"),
    // Input for searching product - Delivery page
    searchProductInputDelivery: document.getElementById("search-product-input-delivery"),
    // Input for qunatity - Delivery page
    inputQntDelivery: document.getElementById("input-qnt-delivery"),
    // Button for close quantity modal window - Delivery page
    closeDeliveryProductQnt: document.querySelector(".close-delivery-product-qnt"),
    // Button for adding product in store - Delivery page
    addProductInStore: document.getElementById("add-product-in-store"),
    // All buttons for sale and delivery product
    qntBtn: document.querySelectorAll(".qnt-btn"),
    // Table for products in store - Dashboard page
    tableProductsBodyDashboard: document.getElementById("products-table-body-dashboard"),
    // Category section - Dashboard page
    categoriesBodyInDashboard: document.querySelector(".dashboard-category"),
    // Input for searching product - Dashboard page
    searchProductInputDashboard: document.getElementById("search-product-input-dashboard"),
    // Main button for adding new category - Dashboard page
    addNewCategoryMainBtn: document.getElementById("add-new-category-main-btn"),
    // Modal window for adding new category - Dashboard page
    modalDashboardNewCategory: document.querySelector(".modal-dashboard-new-category"),
    // Close modal window for adding new category - Dashboard page
    closeNewCategory: document.querySelector(".close-new-category"),
    // Button for adding new category - Dashboard page
    addNewCategoryBtn: document.getElementById("add-new-category-btn"),
    // Input for adding new category - Dashboard page
    addNewCategoryInput: document.getElementById("add-new-category-input"),
    // Modal window for adding new product - Dashboard page
    modalDashboardNewProduct: document.querySelector(".modal-dahsboard-new-product"),
    // Main button for adding new product - Dashboard page
    addNewProductMainBtn: document.getElementById("add-new-product-main-btn"),
    // Button for close modal window for adding new product - Dashboard page
    closeNewProduct: document.getElementById("close-new-product-modal"),
    // Input for name in new product window - Dashboard page
    modalNewProductNameInput: document.getElementById("modal-new-product-name-input"),
    // Input for measure in new product window - Dashboard page
    modalNewProductMeasInput: document.getElementById("modal-new-product-meas-input"),
    // Input for quantity in new product window - Dashboard page
    modalNewProductQntInput: document.getElementById("modal-new-product-qnt-input"),
    // Input for price in new product window - Dashboard page
    modalNewProductPriceInput: document.getElementById("modal-new-product-price-input"),
    // Button for adding new product in store - Dashboard page
    modalNewProductBtn: document.getElementById("modal-add-new-product-btn"),
    // All categories in new product window - Dashboard page
    categoriesNewProduct: document.getElementsByName("category"),
    // Category section in new product window - Dashboard page
    categoriesBodyInNewProduct: document.querySelector(".output-new-product-category"),
    // Modal window for deleting product - Dashboard page
    modalDashboardDeleteProduct: document.querySelector(".modal-dashboard-delete-product"),
    // Button for close modal window for deleteing product - Dashboard page
    closeDeleteProduct: document.getElementById("delete-product-no"),
    // Button for delete product from store - Dashboard page
    deleteProductYes: document.getElementById("delete-product-yes"),
    // Category section in edit product window - Dashboard page
    categoriesBodyInEditProduct: document.querySelector(".output-edit-product-category"),
    // Modal window for editing product - Dashboard page
    modalDashboardEditProduct: document.querySelector(".modal-dashboard-edit-product"),
    // Button for close modal window for editing product - Dashboard page
    closeEditProduct: document.getElementById("close-edit-product-modal"),
    // Input for name in edit product window - Dashboard page
    modalEditProductNameInput: document.getElementById("modal-edit-product-name-input"),
    // Input for measure in edit product window - Dashboard page
    modalEditProductMeasInput: document.getElementById("modal-edit-product-meas-input"),
    // Input for quantity in edit product window - Dashboard page
    modalEditProductQntInput: document.getElementById("modal-edit-product-qnt-input"),
    // Input for price in edit product window - Dashboard page
    modalEditProductPriceInput: document.getElementById("modal-edit-product-price-input"),
    // Input for category in edit product window - Dashboard page
    modalEditProductCatInput: document.getElementById("modal-edit-product-cat-input"),
    // Button for editing product - Dashboard page
    modalEditProductBtn: document.getElementById("modal-edit-product-btn"),
    // Main button for company info - Dashboard page
    addCompInfoMainBtn: document.getElementById("add-comp-info-main-btn"),
    // Modal window for company info - Dashboard page
    modalDashboardCompInfo: document.querySelector(".modal-dashboard-comp-info"),
    // Button for close modal window for company info - Dashboard page
    closeCompInfo: document.getElementById("close-comp-info-modal"),
    // Input for company name - Dashboard page
    compNameInput: document.getElementById("comp-name"),
    // Input for company city - Dashboard page
    compCityInput: document.getElementById("comp-city"),
    // Input for company address - Dashboard page
    compAddressInput: document.getElementById("comp-address"),
    // Input for company phone - Dashboard page
    compPhoneInput: document.getElementById("comp-phone"),
    // Input for company RP - Dashboard page
    compRPInput: document.getElementById("comp-rp"),
    // Input for company VAT - Dashboard page
    compVATInput: document.getElementById("comp-vat"),
    // Input for company bank - Dashboard page
    compBankInput: document.getElementById("comp-bank"),
    // Input for company IBAN - Dashboard page
    compIBANInput: document.getElementById("comp-iban"),
    // Button for add new company information - Dashboard page
    addNewCompInfo: document.getElementById("comp-info-btn"),
    // Table for sales - Archive page
    tableSalesBody: document.getElementById("sale-table-body-archive"),
    // Input for searching sales by name - Archive page
    searchSalesInput: document.getElementById("search-sales-input"),
    // Input for searching sales by date - Arhcive page
    searchSalesInputDate: document.getElementById("search-sales-input-date"),
    // Button for searching sales by date - Archive page
    searchSalesDateBtn: document.getElementById("search-by-date-btn"),
    // Modal window for deleting sale - Archive page
    modalDeleteSale: document.querySelector(".modal-delete-sale"),
    // Button for close modal window for deleting sale - Archive page
    closeModalSale: document.getElementById("delete-sale-no"),
    // Button for deleting sale - Archive page
    deleteSaleYes: document.getElementById("delete-sale-yes"),
    // Modal window for delete all sales - Archive page
    modalDeleteAll: document.querySelector(".modal-delete-all"),
    // Button for delete all sales - Archive page
    deleteAllYes: document.getElementById("delete-all-yes"),
    // Button for close modal window for delete all sales - Archive page
    deleteAllNo: document.getElementById("delete-all-no"),
    // Button for opening modal window for delete all sales - Archive page
    deleteAllMainBtn: document.getElementById("delete-all-main-btn")
};

// OPEN SALE PAGE

function openSale() {
    dom.salePage.style.display = "block";
    dom.deliveryPage.style.display = "none";
    dom.dashboardPage.style.display = "none";
    dom.archivePage.style.display = "none";
    dom.searchProductInput.value = "";
    dom.clientNameInput.value = "";
    displayAllProducts(allProducts);
    dom.saleProductQnt.style.display = "none";
    dom.inputQnt.value = "";
    theNum = "";
};

// OPEN DELIVERY PAGE

function openDelivery() {
    dom.salePage.style.display = "none";
    dom.deliveryPage.style.display = "block";
    dom.dashboardPage.style.display = "none";
    dom.archivePage.style.display = "none";
    dom.searchProductInputDelivery.value = "";
    displayAllProductsInDelivery(allProducts);
    dom.deliveryProductQnt.style.display = "none";
    dom.inputQntDelivery.value = "";
    theNum = "";
};

// OPEN DASHBOARD PAGE

function openDashboard() {
    dom.salePage.style.display = "none";
    dom.deliveryPage.style.display = "none";
    dom.dashboardPage.style.display = "block";
    dom.archivePage.style.display = "none";
    dom.searchProductInputDashboard.value = "";
    displayAllProductsInDashboard(allProducts);
    theNum = "";
};

// OPEN ARCHIVE PAGE

function openArchive() {
    dom.salePage.style.display = "none";
    dom.deliveryPage.style.display = "none";
    dom.dashboardPage.style.display = "none";
    dom.archivePage.style.display = "block";
    dom.searchSalesInput.value = "";
    dom.searchSalesInputDate.value = "";
    displayAllSales(allSales);
    theNum = "";
};

// CLOSE QUANTITY MODAL WINDOW IN SALE PAGE

dom.closeSaleProductQnt.addEventListener("click", () => {
    dom.saleProductQnt.style.display = "none";
    dom.inputQnt.value = "";
    theNum = "";
});

// CLOSE QUANTITY MODAL WINDOW IN DELIVERY PAGE

dom.closeDeliveryProductQnt.addEventListener("click", () => {
    dom.deliveryProductQnt.style.display = "none";
    dom.inputQntDelivery.value = "";
    theNum = "";
})

// CLOSE MODAL WINDOW FOR INSUFFICIENT QUANTITY IN SALE PAGE

dom.closeModal.addEventListener("click", () => {
    dom.modal.style.display = "none";
    dom.inputQnt.value = "";
    dom.inputQnt.focus();
    theNum = "";
});

// OPEN MODAL WINDOW FOR NEW CATEGORY IN DASHBOARD PAGE

dom.addNewCategoryMainBtn.addEventListener("click", () => {
    dom.modalDashboardNewCategory.style.display = "block";
    dom.addNewCategoryInput.focus();
});

// CLOSE MODAL WINDOW FOR NEW CATEGORY IN DASHBOARD PAGE

dom.closeNewCategory.addEventListener("click", () => {
    dom.modalDashboardNewCategory.style.display = "none";
    dom.addNewCategoryInput.value = "";
});

// OPEN MODAL WINDOWN FOR NEW PRODUCT IN DASHBOARD PAGE

dom.addNewProductMainBtn.addEventListener("click", () => {
    dom.modalDashboardNewProduct.style.display = "block";
    document.getElementById("error-new-product").innerHTML = "";
    dom.modalNewProductNameInput.focus();
});

// CLOSE MODAL WINDOW FOR NEW PRODUCT IN DASHBOARD PAGE

dom.closeNewProduct.addEventListener("click", () => {
    dom.modalDashboardNewProduct.style.display = "none";
    dom.modalNewProductNameInput.value = "";
    dom.modalNewProductMeasInput.value = "";
    dom.modalNewProductQntInput.value = "";
    dom.modalNewProductPriceInput.value = "";
    for (let i = 0; i < dom.categoriesNewProduct.length; i++) {
        dom.categoriesNewProduct[i].checked = false;
    }
});

// CLOSE MODAL WINDOW FOR DELETING PRODUCT IN DASHBOARD PAGE

dom.closeDeleteProduct.addEventListener("click", () => {
    dom.modalDashboardDeleteProduct.style.display = "none";
});

// CLOSE MODAL WINDOW FOR EDITING PRODUCT IN DASHBOARD PAGE

dom.closeEditProduct.addEventListener("click", () => {
    dom.modalDashboardEditProduct.style.display = "none";
    document.getElementById("error-edit-product").innerHTML = "";
    for (let i = 0; i < dom.categoriesNewProduct.length; i++) {
        dom.categoriesNewProduct[i].checked = false;
    }
});

// OPEN MODAL WINDOW FOR COMPANY NAME IN DASHBOARD PAGE

dom.addCompInfoMainBtn.addEventListener("click", () => {
    dom.modalDashboardCompInfo.style.display = "block";
    dom.compNameInput.focus();
});

// CLOSE MODAL WINDOW FOR COMPANY NAME IN DASHBOARD PAGE

dom.closeCompInfo.addEventListener("click", () => {
    dom.modalDashboardCompInfo.style.display = "none";
});

// CLOSE MODAL WINDOW FOR DELETING SALE IN ARCHIVE PAGE

dom.closeModalSale.addEventListener("click", () => {
    dom.modalDeleteSale.style.display = "none";
});

// OPEN MODAL WINDOW FOR DELETING ALL SALES IN ARCHIVE PAGE

dom.deleteAllMainBtn.addEventListener("click", () => {
    dom.modalDeleteAll.style.display = "block";
});

// CLOSE MODAL WINDOW FOR DELETING ALL SALES IN ARCHIVE PAGE

dom.deleteAllNo.addEventListener("click", () => {
    dom.modalDeleteAll.style.display = "none";
});

// GET ALL PRODUCTS IN STORE

function getAllProducts() {
    fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then(data => {
            allProducts = [...data];
            allProducts.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
            if (allProducts.length === 0) {
                dom.tableProductsBody.style.display = "none";
                dom.tableProductsBodyDelivery.style.display = "none";
                dom.tableProductsBodyDashboard.style.display = "none";
            } else {
                dom.tableProductsBody.style.display = "contents";
                dom.tableProductsBodyDelivery.style.display = "contents";
                dom.tableProductsBodyDashboard.style.display = "contents";
            }
            displayAllProducts(allProducts);
            displayAllProductsInDelivery(allProducts);
            displayAllProductsInDashboard(allProducts);
        });
};

// GET ALL CATEGORIES

function getAllCategories() {
    fetch("http://localhost:3000/categories")
        .then((res) => res.json())
        .then(data => {
            allCategories = [...data];
            if (allCategories.length === 0) {
                dom.categoriesBody.style.display = "none";
                dom.categoriesBodyInDelivery.style.display = "none";
                dom.categoriesBodyInDashboard.style.display = "none";
                dom.categoriesBodyInNewProduct.style.display = "none";
                dom.categoriesBodyInEditProduct.style.display = "none";
            } else {
                dom.categoriesBody.style.display = "contents";
                dom.categoriesBodyInDelivery.style.display = "contents";
                dom.categoriesBodyInDashboard.style.display = "contents";
                dom.categoriesBodyInNewProduct.style.display = "contents"
                dom.categoriesBodyInEditProduct.style.display = "contents";
            }
            displayAllCategories(allCategories);
            displayAllCategoriesInDelivery(allCategories);
            displayAllCategoriesInDashboard(allCategories);
            displayCategoriesNewProduct(allCategories);
            displayCategoriesEditProduct(allCategories);
        })
};

// GET COMPANY INFORMATION

function getCompInfo() {
    fetch("http://localhost:3000/compInfo")
        .then((res) => res.json())
        .then(data => {
            dom.compNameInput.value = data[0].compName;
            dom.compCityInput.value = data[0].compCity;
            dom.compAddressInput.value = data[0].compAddress;
            dom.compPhoneInput.value = data[0].compPhone;
            dom.compRPInput.value = data[0].compRP;
            dom.compVATInput.value = data[0].compVAT;
            dom.compBankInput.value = data[0].compBank;
            dom.compIBANInput.value = data[0].compIBAN;
            document.getElementById("iban").innerHTML = dom.compIBANInput.value;
        })
};

// GET SALE NUMBER

let saleNumber;

function getSaleNumber() {
    fetch("http://localhost:3000/saleNumber")
        .then((res) => res.json())
        .then(data => {
            saleNumber = data.number;
        })
};

// INCREMENT SALE NUMBER

function addSaleNum() {
    const num = {
        number: saleNumber + 1
    }
    fetch("http://localhost:3000/saleNumber", {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(num)
    })
};

// DISPLAY ALL PRODUCTS IN SALE PAGE

let allProducts = [];

function displayAllProducts(allProducts) {
    let outputProducts = "";
    allProducts.forEach(product => {
        outputProducts += `
        <tr onclick="getThisProduct(${product.id})">
            <td>${product.name}</td>
            <td>${product.measure}</td>
            <td>${(product.price).toFixed(2)}</td>
            <td>${product.currency}</td>
        </tr>
        `
        dom.tableProductsBody.innerHTML = outputProducts;
    });
};

// DISPLAY ALL CATEGORIES IN SALE PAGE

let allCategories = [];

function displayAllCategories(allCategories) {
    let outputCategories = "";
    allCategories.forEach(category => {
        outputCategories += `
            <button onclick="searchByCategory(event)">${category.category}</button>
        `
        dom.categoriesBody.innerHTML = outputCategories;
    })
};

// DISPLAY CURRENT SALE IN SALE PAGE

function displayCurrSale() {
    let outputCurrSale = "";
    let currSaleProducts = JSON.parse(localStorage.getItem("currProduct")) || [];
    if (currSaleProducts.length === 0) {
        dom.currSale.style.display = "none";
        document.getElementById("payment-div").style.display = "none";
        dom.clientNameInput.value = "";
        localStorage.removeItem("currProduct");
    } else {
        dom.currSale.style.display = "block";
    }
    currSaleProducts.forEach(curr => {
        outputCurrSale += `
        <tr>
            <td>${curr.name}</td>
            <td>${curr.measure}</td>
            <td>${curr.choosenQnt.toFixed(2)}</td>
            <td>${(curr.price).toFixed(2)}</td>
            <td>${curr.currency}</td>
            <td>${(curr.total).toFixed(2)}</td>
            <td><img src="img/undo.svg" onclick="deleteThisProduct(${curr.id})" class="filter-remove-product"></td>
        </tr>
        `
        dom.currentSaleBody.innerHTML = outputCurrSale;
        let temp = 0;
        for (let i = 0; i < currSaleProducts.length; i++) {
            temp = temp + currSaleProducts[i].total;
            dom.totalCurrPrice.innerHTML = `${temp.toFixed(2)} EUR`;
        }
    })
};

// GET PRODUCT FOR SALE AND DELIVERY IN SALE AND DELIVERY PAGE

let thisProduct = [];

function getThisProduct(id) {
    fetch(`http://localhost:3000/products/${id}`)
        .then((res) => res.json())
        .then(data => {
            thisProduct = data;
            document.getElementById("product-in-qnt-sale").innerHTML = thisProduct.name;
            document.getElementById("product-in-qnt-delivery").innerHTML = thisProduct.name;
            dom.saleProductQnt.style.display = "block";
            dom.deliveryProductQnt.style.display = "block";
            dom.inputQnt.focus();
            dom.inputQntDelivery.focus();
        })
};

// ADD NUMBERS IN QUANTITY WINDOW FOR SALE AND DELIVERY PAGE

let theNum = "";
let oldNum = "";
let result;

let setNum = (e) => {
    if (result) {
        theNum = e.target.getAttribute("data-num");
    } else {
        theNum += e.target.getAttribute("data-num");
    }
    dom.inputQnt.value = theNum;
    dom.inputQntDelivery.value = theNum;
};

for (let i = 0; i < dom.qntBtn.length; i++) {
    dom.qntBtn[i].onclick = setNum;
};

// ADD PRODUCT TO CURRENT SALE IN SALE PAGE

dom.addToCurrSale.addEventListener("click", () => {
    const changedQnt = {
        quantity: thisProduct.quantity - parseFloat(dom.inputQnt.value)
    }
    if (dom.inputQnt.value === "" || dom.inputQnt.value <= 0) {
        dom.inputQnt.focus();
        dom.inputQnt.value = "";
        theNum = "";
        return false;
    } else if (thisProduct.quantity < dom.inputQnt.value) {
        dom.modal.style.display = "block";
        document.getElementById("remaining-amount").innerHTML = (thisProduct.quantity).toFixed(2);
        return false;
    }
    else {
        dom.currSale.style.display = "block";
        document.getElementById("payment-div").style.display = "block";
        fetch(`http://localhost:3000/products/${thisProduct.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(changedQnt)
        })
            .then(() => {
                let currArr = JSON.parse(localStorage.getItem("currProduct")) || [];
                const current = {
                    id: currArr.length ? currArr[currArr.length - 1].id + 1 : 1,
                    urlId: thisProduct.id,
                    name: thisProduct.name,
                    measure: thisProduct.measure,
                    choosenQnt: parseFloat(dom.inputQnt.value),
                    price: thisProduct.price,
                    currency: thisProduct.currency,
                    total: thisProduct.price * parseFloat(dom.inputQnt.value)
                };
                currArr.push(current);
                localStorage.setItem("currProduct", JSON.stringify(currArr));
                dom.saleProductQnt.style.display = "none";
                dom.inputQnt.value = "";
                dom.searchProductInput.value = "";
                theNum = "";
                displayCurrSale();
                getAllProducts();
                getSaleNumber();
            })
        for (let i = 0; i < dom.payments.length; i++) {
            dom.payments[i].checked = false;
        }
    }
});

// REMOVE PRODUCT FROM CURRENT SALE IN SALE PAGE

function deleteThisProduct(id) {
    let currArr = JSON.parse(localStorage.getItem("currProduct"));
    let urlId;
    let qnt;
    let qntInStore;
    for (let i = 0; i < currArr.length; i++) {
        if (id === currArr[i].id) {
            urlId = currArr[i].urlId;
            qnt = currArr[i].choosenQnt;
        }
    };
    fetch(`http://localhost:3000/products/${urlId}`)
        .then((res) => res.json())
        .then(data => {
            qntInStore = data.quantity;
        })
        .then(() => {
            const current = {
                quantity: qntInStore + qnt
            }
            fetch(`http://localhost:3000/products/${urlId}`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(current)
            })
                .then(() => {
                    for (let i = 0; i < currArr.length; i++) {
                        if (id === currArr[i].id) {
                            currArr.splice(i, 1)
                        }
                    }
                    localStorage.setItem("currProduct", JSON.stringify(currArr));
                    displayCurrSale();
                    getAllProducts();
                })
        })
};

// FINISHING CURRENT SALE IN SALE PAGE

dom.finishSaleBtn.addEventListener("click", () => {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    day = addZero(day);
    month = addZero(month);
    let date = `${day}.${month}.${year}`;

    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    hour = addZero(hour);
    minutes = addZero(minutes);
    let time = `${hour}:${minutes}`;

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    let method;
    let thisId;
    if (dom.clientNameInput.value === "") {
        dom.clientNameInput.focus();
        return false;
    } else if (document.getElementById("cash").checked === false && document.getElementById("bank").checked === false) {
        alert("Please, enter a payment method!");
        return false;
    }
    else {
        for (let i = 0; i < dom.payments.length; i++) {
            if (dom.payments[i].checked) {
                method = dom.payments[i].value;
                break;
            }
        }
        let client = dom.clientNameInput.value;
        let currArr = JSON.parse(localStorage.getItem("currProduct"));
        let total = dom.totalCurrPrice.innerHTML;
        let compInfo = {
            name: dom.compNameInput.value,
            city: dom.compCityInput.value,
            address: dom.compAddressInput.value,
            phone: dom.compPhoneInput.value,
            rp: dom.compRPInput.value,
            vat: dom.compVATInput.value,
            bank: dom.compBankInput.value,
            iban: dom.compIBANInput.value
        };
        const archivedSale = {
            name: client,
            products: currArr,
            total: parseFloat(total),
            date: date,
            time: time,
            method: method,
            compInfo: compInfo,
            saleNumber: saleNumber
        };
        fetch("http://localhost:3000/archive", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(archivedSale)
        })
            .then(() => {
                dom.clientNameInput.value = "";
                localStorage.removeItem("currProduct");
                displayCurrSale();
                fetch("http://localhost:3000/archive")
                    .then((res) => res.json())
                    .then(data => {
                        thisId = data[data.length - 1].id;
                        localStorage.setItem("URLid", JSON.stringify(thisId));
                        window.open("sale.html", '', 'height=800, width=936');
                        addSaleNum();
                        getAllSales();
                    })
            })
    }
});

// SEARCH PRODUCTS BY NAME IN SALE PAGE

dom.searchProductInput.addEventListener("keyup", (e) => {
    const result = allProducts.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
    if (result.length > 0) {
        displayAllProducts(result);
        displayAllProductsInDelivery(result);
        displayAllProductsInDashboard(result);
    } else {
        dom.tableProductsBody.innerHTML = "<tr><td colspan='4'>No Products!</td></tr>";
        dom.tableProductsBodyDelivery.innerHTML = "<tr><td colspan='5'>No Products!</td></tr>";
        dom.tableProductsBodyDashboard.innerHTML = "<tr><td>No Products!</td></tr>";
    }
});

// SEARCH PRODUCTS BY CATEGORY BUTTONS

function searchByCategory(e) {
    e = e || window.event;
    const result = allProducts.filter(product => product.category.includes(e.target.innerHTML));
    if (result.length > 0) {
        displayAllProducts(result);
        displayAllProductsInDelivery(result);
        displayAllProductsInDashboard(result);
    } else {
        dom.tableProductsBody.innerHTML = "<tr><td colspan='4'>No Products!</td></tr>";
        dom.tableProductsBodyDelivery.innerHTML = "<tr><td colspan='6'>No Products!</td></tr>";
        dom.tableProductsBodyDashboard.innerHTML = "<tr><td>No Products!</td></tr>";
    }
    dom.searchProductInput.value = "";
    dom.searchProductInputDelivery.value = "";
    dom.searchProductInputDashboard.value = "";
};

// SEARCH PRODUCTS BY CATEGORY BUTTON "ALL"

function searchByAllCategories() {
    displayAllProducts(allProducts);
    displayAllProductsInDelivery(allProducts);
    displayAllProductsInDashboard(allProducts);
    dom.searchProductInput.value = "";
    dom.searchProductInputDelivery.value = "";
    dom.searchProductInputDashboard.value = "";
};

// DISPLAY ALL PRODUCTS IN DELIVERY PAGE

function displayAllProductsInDelivery(allProducts) {
    let outputProductsInDelivery = "";
    allProducts.forEach(product => {
        outputProductsInDelivery += `
        <tr onclick="getThisProduct(${product.id})">
            <td>${product.name}</td>
            <td>${product.measure}</td>
            <td>${product.quantity.toFixed(2)}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.currency}</td>
            <td>${product.category}</td>
        </tr>
        `
        dom.tableProductsBodyDelivery.innerHTML = outputProductsInDelivery;
    })
};

// DISPLAY ALL CATEGORIES IN DELIVERY PAGE

function displayAllCategoriesInDelivery(allCategories) {
    let outputCategoriesInDelivery = "";
    allCategories.forEach(category => {
        outputCategoriesInDelivery += `
        <button onclick="searchByCategory(event)">${category.category}</button>
        <br>
        `
        dom.categoriesBodyInDelivery.innerHTML = outputCategoriesInDelivery;
    })
};

// SEARCH PRODUCTS BY NAME IN DELIVERY PAGE

dom.searchProductInputDelivery.addEventListener("keyup", (e) => {
    const result = allProducts.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
    if (result.length > 0) {
        displayAllProducts(result);
        displayAllProductsInDelivery(result);
        displayAllProductsInDashboard(result);
    } else {
        dom.tableProductsBody.innerHTML = "<tr><td colspan='4'>No Products!</td></tr>";
        dom.tableProductsBodyDelivery.innerHTML = "<tr><td colspan='6'>No Products!</td></tr>";
        dom.tableProductsBodyDashboard.innerHTML = "<tr><td>No Products!</td></tr>";
    }
});

// ADD PRODUCTS IN STORE IN DELIVERY PAGE

dom.addProductInStore.addEventListener("click", () => {
    const changedQnt = {
        quantity: thisProduct.quantity + parseFloat(dom.inputQntDelivery.value)
    }
    if (dom.inputQntDelivery.value === "" || dom.inputQntDelivery.value <= 0) {
        dom.inputQntDelivery.focus();
        dom.inputQntDelivery.value = "";
        theNum = "";
        return false;
    } else {
        fetch(`http://localhost:3000/products/${thisProduct.id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(changedQnt)
        })
            .then(() => {
                dom.deliveryProductQnt.style.display = "none";
                dom.inputQntDelivery.value = "";
                dom.searchProductInputDelivery.value = "";
                theNum = "";
                getAllProducts();
            })
    }
});

// DISPLAY ALL PRODUCTS IN DASHBOARD PAGE

function displayAllProductsInDashboard(allProducts) {
    let outputProductsInDashboard = "";
    allProducts.forEach(product => {
        outputProductsInDashboard += `
        <tr>
            <td>${product.name}</td>
            <td>${product.measure}</td>
            <td>${product.quantity.toFixed(2)}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.currency}</td>
            <td>${product.category}</td>
            <td><button onclick="editThisProduct(${product.id})" class="edit-btn">Edit</button></td>
            <td><button onclick="deleteProduct(${product.id})" class="delete-btn">Delete</button></td>
        </tr>
        `
        dom.tableProductsBodyDashboard.innerHTML = outputProductsInDashboard;
    })
};

// DISPLAY ALL CATEGORIES IN DASHBOARD PAGE

function displayAllCategoriesInDashboard(allCategories) {
    let outputCategoriesInDashboard = "";
    allCategories.forEach(category => {
        outputCategoriesInDashboard += `
        <div class="dashboard-b">
            <div>
                <button onclick="searchByCategory(event)">${category.category}</button>
            </div>
            <div>
            <img onclick="deleteCategory(${category.id})" src="img/trash-can-solid.svg" class="filter-delete-category">
            </div>
        </div>
        `
        dom.categoriesBodyInDashboard.innerHTML = outputCategoriesInDashboard;
    })
};

// SEARCH PRODUCTS BY NAME IN DASHBOARD PAGE

dom.searchProductInputDashboard.addEventListener("keyup", (e) => {
    const result = allProducts.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
    if (result.length > 0) {
        displayAllProducts(result);
        displayAllProductsInDelivery(result);
        displayAllProductsInDashboard(result);
    } else {
        dom.tableProductsBody.innerHTML = "<tr><td colspan='4'>No Products!</td></tr>";
        dom.tableProductsBodyDelivery.innerHTML = "<tr><td colspan='6'>No Products!</td></tr>";
        dom.tableProductsBodyDashboard.innerHTML = "<tr><td>No Products!</td></tr>";
    }
});

// ADD NEW CATEGORY IN DASHBOARD PAGE

dom.addNewCategoryBtn.addEventListener("click", () => {
    if (dom.addNewCategoryInput.value === "") {
        dom.addNewCategoryInput.focus();
        return false;
    } else {
        const newCategory = {
            category: dom.addNewCategoryInput.value
        }
        fetch("http://localhost:3000/categories", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(newCategory)
        })
            .then((res) => res.json())
            .then(data => {
                allCategories = [...allCategories, data];
                getAllCategories();
                dom.addNewCategoryInput.value = "";
                dom.modalDashboardNewCategory.style.display = "none";
            })
    }
});

// DELETE CATEGORY IN DASHBOARD PAGE

function deleteCategory(id) {
    fetch(`http://localhost:3000/categories/${id}`, {
        method: "DELETE"
    })
        .then((res) => res.json())
        .then(data => {
            allCategories = [...allCategories, data];
            getAllCategories();
        })
};

// DISPLAY ALL CATEGORIES IN NEW PRODUCT WINDOW IN DASHBOARD PAGE

function displayCategoriesNewProduct(allCategories) {
    let outputCategoriesInNewProduct = "";
    allCategories.forEach(category => {
        outputCategoriesInNewProduct += `
        <label>
            <input type="radio" name="category" value="${category.category}">${category.category}
        </label>
        <br>
        `
        dom.categoriesBodyInNewProduct.innerHTML = outputCategoriesInNewProduct;
    })
};

// VALIDATE INPUT FIELDS FOR ADDING NEW PRODUCT IN STORE IN DASHBOARD PAGE

dom.modalNewProductBtn.addEventListener("click", () => {
    if (dom.modalNewProductNameInput.value === "") {
        document.getElementById("error-new-product").innerHTML = "Please, enter a name!";
        dom.modalNewProductNameInput.focus();
        return false;
    } else if (dom.modalNewProductQntInput.value === "" || dom.modalNewProductQntInput.value < 0) {
        document.getElementById("error-new-product").innerHTML = "Please, enter a quantity!";
        dom.modalNewProductQntInput.value = "";
        dom.modalNewProductQntInput.focus();
        return false;
    } else if (dom.modalNewProductPriceInput.value === "" || dom.modalNewProductPriceInput.value < 0) {
        document.getElementById("error-new-product").innerHTML = "Please, enter a price!";
        dom.modalNewProductPriceInput.value = "";
        dom.modalNewProductPriceInput.focus();
        return false;
    } else {
        addNewProduct();
        return true;
    }
});

// ADDING NEW PRODUCT IN STORE IN DASHBOARD PAGE

function addNewProduct() {
    let category = "";
    for (let i = 0; i < dom.categoriesNewProduct.length; i++) {
        if (dom.categoriesNewProduct[i].checked) {
            category = dom.categoriesNewProduct[i].value;
            break;
        } else {
            category = "";
        }
    }
    const newProduct = {
        name: dom.modalNewProductNameInput.value,
        measure: dom.modalNewProductMeasInput.value,
        quantity: parseFloat(dom.modalNewProductQntInput.value),
        price: parseFloat(dom.modalNewProductPriceInput.value),
        currency: "EUR",
        category: category
    }
    fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newProduct)
    })
        .then((res) => res.json())
        .then(data => {
            allProducts = [...allProducts, data];
            getAllProducts();
            dom.modalNewProductNameInput.value = "";
            dom.modalNewProductMeasInput.value = "";
            dom.modalNewProductQntInput.value = "";
            dom.modalNewProductPriceInput.value = "";
            dom.modalDashboardNewProduct.style.display = "none";
            for (let i = 0; i < dom.categoriesNewProduct.length; i++) {
                dom.categoriesNewProduct[i].checked = false;
            }
        })
};

// GET PRODUCT FOR DELETE IN DASHBOARD PAGE

let thisProductDelete = [];

function deleteProduct(id) {
    fetch(`http://localhost:3000/products/${id}`)
        .then((res) => res.json())
        .then(data => {
            thisProductDelete = data;
            dom.modalDashboardDeleteProduct.style.display = "block";
        })
};

// DELETE PRODUCT FROM STORE IN DASHBOARD PAGE

dom.deleteProductYes.addEventListener("click", () => {
    fetch(`http://localhost:3000/products/${thisProductDelete.id}`, {
        method: "DELETE"
    })
        .then((res) => res.json())
        .then(data => {
            allProducts = [...allProducts, data];
            getAllProducts();
            dom.modalDashboardDeleteProduct.style.display = "none";
        })
});

// DISPLAY ALL CATEGORIES IN EDIT PRODUCT WINDOW IN DASHBOARD PAGE

function displayCategoriesEditProduct(allCategories) {
    let outputCategoriesInEditProduct = "";
    allCategories.forEach(category => {
        outputCategoriesInEditProduct += `
        <label>
            <input onclick="getCategory(this.value)" type="radio" name="category" value="${category.category}">${category.category}
        </label>
        <br>
        `
        dom.categoriesBodyInEditProduct.innerHTML = outputCategoriesInEditProduct;
    })
};

// GET PRODUCT FOR EDIT IN DASHBOARD PAGE

let thisProductEdit = [];

function editThisProduct(id) {
    fetch(`http://localhost:3000/products/${id}`)
        .then((res) => res.json())
        .then(data => {
            thisProductEdit = data;
            dom.modalDashboardEditProduct.style.display = "block";
            dom.modalEditProductNameInput.value = thisProductEdit.name;
            dom.modalEditProductMeasInput.value = thisProductEdit.measure;
            dom.modalEditProductQntInput.value = (thisProductEdit.quantity).toFixed(2);
            dom.modalEditProductPriceInput.value = (thisProductEdit.price).toFixed(2);
            dom.modalEditProductCatInput.value = thisProductEdit.category;
        })
};

// PUT CATEGORY IN INPUT FIELD IN EDIT WINDOWN IN DASHBOARD PAGE

function getCategory(category) {
    dom.modalEditProductCatInput.value = category;
};

// VALIDATE INPUT FIELDS FOR EDITING PRODUCT IN DASHBOARD PAGE

dom.modalEditProductBtn.addEventListener("click", () => {
    if (dom.modalEditProductNameInput.value === "") {
        document.getElementById("error-edit-product").innerHTML = "Please, enter a name!";
        dom.modalEditProductNameInput.focus();
        return false;
    } else if (dom.modalEditProductQntInput.value === "" || dom.modalEditProductQntInput.value < 0) {
        document.getElementById("error-edit-product").innerHTML = "Please, enter a quantity!";
        dom.modalEditProductQntInput.value = "";
        dom.modalEditProductQntInput.focus();
        return false;
    } else if (dom.modalEditProductPriceInput.value === "" || dom.modalEditProductPriceInput.value < 0) {
        document.getElementById("error-edit-product").innerHTML = "Please, enter a price!";
        dom.modalEditProductPriceInput.value = "";
        dom.modalEditProductPriceInput.focus();
        return false;
    } else {
        editProduct();
        return true;
    }
});

// EDIT PRODUCT IN STORE IN DASHBOARD PAGE

function editProduct() {
    const editProduct = {
        name: dom.modalEditProductNameInput.value,
        measure: dom.modalEditProductMeasInput.value,
        quantity: parseFloat(dom.modalEditProductQntInput.value),
        price: parseFloat(dom.modalEditProductPriceInput.value),
        category: dom.modalEditProductCatInput.value
    }
    fetch(`http://localhost:3000/products/${thisProductEdit.id}`, {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(editProduct)
    })
        .then(() => {
            dom.modalDashboardEditProduct.style.display = "none";
            getAllProducts();
            for (let i = 0; i < dom.categoriesNewProduct.length; i++) {
                dom.categoriesNewProduct[i].checked = false;
            }
        })
};

// ADD NEW COMPANY INFORMATION IN DASHBOARD PAGE

dom.addNewCompInfo.addEventListener("click", () => {
    const compInfo = {
        compName: dom.compNameInput.value,
        compCity: dom.compCityInput.value,
        compAddress: dom.compAddressInput.value,
        compPhone: dom.compPhoneInput.value,
        compRP: dom.compRPInput.value,
        compVAT: dom.compVATInput.value,
        compBank: dom.compBankInput.value,
        compIBAN: dom.compIBANInput.value
    }
    fetch("http://localhost:3000/compInfo/1", {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(compInfo)
    })
        .then(() => {
            dom.modalDashboardCompInfo.style.display = "none";
            getCompInfo();
        })
});

// GET ALL SALES IN ARCHIVE PAGE

let allSales = [];

function getAllSales() {
    fetch("http://localhost:3000/archive")
        .then((res) => res.json())
        .then(data => {
            allSales = [...data];
            allSales.reverse();
            if (allSales.length === 0) {
                dom.tableSalesBody.style.display = "none";
            } else {
                dom.tableSalesBody.style.display = "contents";
            }
            displayAllSales(allSales);
        })
};

// DISPLAY ALL SALES IN ARCHIVE PAGE

function displayAllSales(allSales) {
    let outputSales = "";
    allSales.forEach(sale => {
        outputSales += `
        <tr>
            <td>${sale.date}</td>
            <td>${sale.name}</td>
            <td>${sale.total.toFixed(2)} EUR</td>
            <td><button onclick="reviewSale(${sale.id})" class="review-btn-sale">Review</button></td>
            <td><button onclick="deleteSale(${sale.id})" class="delete-btn-sale">Delete</button></td>
        </tr>
        `
        dom.tableSalesBody.innerHTML = outputSales;
    })
};

// SEARCH SALES BY NAME IN ARCHIVE PAGE

dom.searchSalesInput.addEventListener("keyup", (e) => {
    const result = allSales.filter(sale => sale.name.toLowerCase().includes(e.target.value.toLowerCase()));
    if (result.length > 0) {
        displayAllSales(result);
    } else {
        dom.tableSalesBody.innerHTML = "<tr><td>No Sales!</td></tr>";
    }
    dom.searchSalesInputDate.value = "";
});

// SEARCH SALES BY DATE IN ARCHIVE PAGE

dom.searchSalesDateBtn.addEventListener("click", () => {
    let split = dom.searchSalesInputDate.value.split("-");
    let date = `${split[2]}.${split[1]}.${split[0]}`;
    const result = allSales.filter(sale => sale.date.toLowerCase().includes(date.toLowerCase()));
    if (result.length > 0) {
        displayAllSales(result);
    } else {
        dom.tableSalesBody.innerHTML = "<tr><td>No Sales!</td></tr>";
    }
    dom.searchSalesInput.value = "";
});

// GET SALE FOR DELETE IN ARCHIVE PAGE

let thisSaleDelete = [];

function deleteSale(id) {
    fetch(`http://localhost:3000/archive/${id}`)
        .then((res) => res.json())
        .then(data => {
            thisSaleDelete = data;
            dom.modalDeleteSale.style.display = "block";
        })
};

// DELETE SALE IN ARCHIVE PAGE

dom.deleteSaleYes.addEventListener("click", () => {
    fetch(`http://localhost:3000/archive/${thisSaleDelete.id}`, {
        method: "DELETE"
    })
        .then((res) => res.json())
        .then(data => {
            allSales = [...allSales, data];
            getAllSales();
            dom.modalDeleteSale.style.display = "none";
        })
});

// GET SALE FOR REVIEW IN ARCHIVE PAGE

let thisSaleReview = [];

function reviewSale(id) {
    fetch(`http://localhost:3000/archive/${id}`)
        .then((res) => res.json())
        .then(data => {
            thisSaleReview = data.id;
            localStorage.setItem("URLid", JSON.stringify(thisSaleReview));
            window.open("sale.html", '', 'height=800, width=936');
        })
};

// DELETE ALL SALES IN ARCHIVE PAGE

function deleteAll(id) {
    fetch(`http://localhost:3000/archive/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            getAllSales();
            dom.modalDeleteAll.style.display = "none";
        })
};

dom.deleteAllYes.addEventListener("click", () => {
    const salesIdArr = allSales.map((sale) => sale.id);
    salesIdArr.forEach((id) => deleteAll(id));
});



/*------------------------------------------------------------------------------------*/

window.onload = () => {
    getAllProducts();
    displayCurrSale();
    getAllCategories();
    getCompInfo();
    getAllSales();
};
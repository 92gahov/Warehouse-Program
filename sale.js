let dom = {
    saleNumber: document.getElementById("sale-num"),
    saleDate: document.getElementById("sale-date"),
    saleTime: document.getElementById("sale-time"),
    receiverName: document.getElementById("receiver-name"),
    supplierName: document.getElementById("supplier-name"),
    supplierVAT: document.getElementById("supplier-vat"),
    supplierCity: document.getElementById("supplier-city"),
    supplierAddress: document.getElementById("supplier-address"),
    supplierRP: document.getElementById("supplier-rp"),
    supplierPhone: document.getElementById("supplier-phone"),
    dateOfEvent: document.getElementById("date-of-event"),
    placeOfEvent: document.getElementById("place-of-event"),
    total: document.getElementById("total"),
    tableBody: document.getElementById("table-body"),
    paymentMethod: document.getElementById("payment-method"),
    supplierIBAN: document.getElementById("supplier-iban"),
    supplierBank: document.getElementById("supplier-bank")
}

let urlId = JSON.parse(localStorage.getItem("URLid"));
let products = [];

function getSale() {
    fetch(`http://localhost:3000/archive/${urlId}`)
        .then((res) => res.json())
        .then(data => {
            products = [...data.products];
            dom.saleNumber.innerHTML = data.saleNumber;
            dom.saleDate.innerHTML = data.date;
            dom.saleTime.innerHTML = data.time;
            dom.receiverName.innerHTML = data.name;
            const { compInfo: { address, bank, city, iban, name, phone, rp, vat } } = data;
            dom.supplierName.innerHTML = name;
            dom.supplierVAT.innerHTML = vat;
            dom.supplierCity.innerHTML = city;
            dom.supplierAddress.innerHTML = address;
            dom.supplierRP.innerHTML = rp;
            dom.supplierPhone.innerHTML = phone;
            dom.dateOfEvent.innerHTML = data.date;
            dom.placeOfEvent.innerHTML = city;
            dom.total.innerHTML = (data.total).toFixed(2);
            if (data.method === "Cash") {
                dom.paymentMethod.innerHTML = "Cash";
                dom.supplierIBAN.innerHTML = "";
                dom.supplierBank.innerHTML = "";
            } else {
                dom.paymentMethod.innerHTML = "Bank";
                dom.supplierIBAN.innerHTML = iban;
                dom.supplierBank.innerHTML = bank;
            }
            displayProducts(products);
        })
};

function displayProducts(products) {
    const table = products.map(product => {
        return `
        <tr>
            <td>${product.name}</td>
            <td>${product.measure}</td>
            <td>${(product.choosenQnt).toFixed(2)}</td>
            <td>${(product.price).toFixed(2)}</td>
            <td>${product.currency}</td>
            <td>${(product.total).toFixed(2)}</td>
        </tr>
        `
    })
        .join('');
    const output = `${table}`;
    dom.tableBody.innerHTML = output;
};

window.onload = () => {
    getSale();
};

window.onbeforeunload = () => {
    localStorage.removeItem("URLid");
};
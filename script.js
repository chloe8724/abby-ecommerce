"use strict";

const products = [
  { name: "Bột mì làm bánh 1kg", variant: "Gói 1kg · Nguyên liệu", price: 32000, quantity: 2, image: "images/flour.svg", alt: "Minh họa túi bột mì" },
  { name: "Khuôn bánh tròn", variant: "Khuôn nhôm · Đường kính 18cm", price: 59000, quantity: 1, image: "images/cake-pan.svg", alt: "Minh họa khuôn bánh tròn" },
  { name: "Phới lồng inox", variant: "Inox · Kích thước 25cm", price: 45000, quantity: 1, image: "images/whisk.svg", alt: "Minh họa phới lồng inox" },
  { name: "Tô trộn inox", variant: "Inox · Dung tích 2 lít", price: 85000, quantity: 1, image: "images/mixing-bowl.svg", alt: "Minh họa tô trộn inox" }
];

const stores = [
  { id: "hcm-thu-duc", region: "Hồ Chí Minh", name: "Abby Thủ Đức", address: "Số 1 Chu Mạnh Trinh, phường Thủ Đức", phone: "0981601221", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hcm-phan-huy-thuc", region: "Hồ Chí Minh", name: "Abby Phan Huy Thực", address: "74 Phan Huy Thực, phường Tân Hưng", phone: "0382470327", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hcm-no-trang-long", region: "Hồ Chí Minh", name: "Abby Nơ Trang Long", address: "298/1 Nơ Trang Long, phường Bình Thạnh", phone: "0326432889", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hcm-xvnt", region: "Hồ Chí Minh", name: "Abby XVNT", address: "277/31 Xô Viết Nghệ Tĩnh, phường Gia Định", phone: "088 629 7980", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hcm-nguyen-oanh", region: "Hồ Chí Minh", name: "Abby Nguyễn Oanh", address: "41/9 Nguyễn Oanh, phường Gò Vấp", phone: "0903455269", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hcm-tran-hung-dao", region: "Hồ Chí Minh", name: "Abby Trần Hưng Đạo", address: "835/4 Trần Hưng Đạo, phường Chợ Quán", phone: "0902205869", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hcm-au-co", region: "Hồ Chí Minh", name: "Abby Âu Cơ", address: "249 Âu Cơ, phường Hòa Bình", phone: "0378935119", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hcm-doan-van-bo", region: "Hồ Chí Minh", name: "Abby Đoàn Văn Bơ", address: "89/8 Đoàn Văn Bơ, phường Xóm Chiếu", phone: "0328788380", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hcm-vuon-lai", region: "Hồ Chí Minh", name: "Abby Vườn Lài", address: "83/18 Vườn Lài, phường Phú Thọ Hòa", phone: "093 447 1266", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hn-tho-thap", region: "Hà Nội", name: "Abby Thọ Tháp", address: "BT03-NO4A đường Thọ Tháp, phường Cầu Giấy", phone: "032 602 0002", hours: "8h00 - 21h30 hàng ngày" },
  { id: "hn-dang-xuan-bang", region: "Hà Nội", name: "Abby Đặng Xuân Bảng", address: "18 Đặng Xuân Bảng, phường Định Công", phone: "0399075889", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hn-nguyen-son", region: "Hà Nội", name: "Abby Nguyễn Sơn", address: "Số 37 Nguyễn Sơn, phường Bồ Đề", phone: "0399207889", hours: "8h00 - 21h30 hàng ngày" },
  { id: "hn-van-quan", region: "Hà Nội", name: "Abby Vân Quán", address: "A2-TT18 Khu đô thị Văn Quán, phường Hà Đông", phone: "0911364620", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hn-ha-cau", region: "Hà Nội", name: "Abby Hà Cầu", address: "Lô NO09-LK05 khu đất dịch vụ Hà Trì 1, phường Hà Đông", phone: "0968542332", hours: "8h00 - 21h30 hàng ngày" },
  { id: "hn-vu-trong-phung", region: "Hà Nội", name: "Abby Vũ Trọng Phụng", address: "Số 3 ngõ 63 phố Vũ Trọng Phụng, phường Thanh Xuân", phone: "0383246750", hours: "8h00 - 21h00 hàng ngày" },
  { id: "hn-bui-xuong-trach", region: "Hà Nội", name: "Abby Bùi Xương Trạch", address: "Số nhà 108 phố Bùi Xương Trạch, phường Khương Đình", phone: "0399110889", hours: "8h00 - 21h00 hàng ngày" }
];

const state = {
  method: "delivery",
  region: "Hồ Chí Minh",
  selectedStoreId: null
};

const cartList = document.querySelector("#cart-list");
const storeList = document.querySelector("#store-list");
const searchInput = document.querySelector("#store-search");
const confirmationMessage = document.querySelector("#confirmation-message");
const deliveryForm = document.querySelector("#delivery-form");

function formatCurrency(amount) {
  return `${new Intl.NumberFormat("vi-VN").format(amount)}₫`;
}

function renderCart() {
  cartList.replaceChildren();

  products.forEach((product) => {
    const item = document.createElement("article");
    item.className = "cart-item";

    const art = document.createElement("div");
    art.className = "product-art";
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.alt;
    art.append(image);

    const info = document.createElement("div");
    info.className = "product-info";
    const name = document.createElement("strong");
    name.textContent = product.name;
    const variant = document.createElement("small");
    variant.textContent = product.variant;
    info.append(name, variant);

    const price = document.createElement("div");
    price.className = "product-price";
    const lineTotal = document.createElement("strong");
    lineTotal.textContent = formatCurrency(product.price * product.quantity);
    const quantity = document.createElement("small");
    quantity.textContent = `Số lượng: ${product.quantity}`;
    price.append(lineTotal, quantity);

    item.append(art, info, price);
    cartList.append(item);
  });

  const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  document.querySelector("#cart-total").textContent = formatCurrency(total);
  document.querySelector("#summary-subtotal").textContent = formatCurrency(total);
  document.querySelector("#summary-total").textContent = formatCurrency(total);
}

function renderStores() {
  const query = searchInput.value.trim().toLocaleLowerCase("vi");
  const matchingStores = stores.filter((store) => {
    const matchesRegion = store.region === state.region;
    const searchableText = `${store.name} ${store.address}`.toLocaleLowerCase("vi");
    return matchesRegion && searchableText.includes(query);
  });

  storeList.replaceChildren();
  document.querySelector("#store-count").textContent =
    `Hiển thị ${matchingStores.length} cửa hàng tại ${state.region === "Hồ Chí Minh" ? "TP. Hồ Chí Minh" : state.region}`;

  if (matchingStores.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-stores";
    empty.textContent = "Không tìm thấy cửa hàng phù hợp. Hãy thử từ khóa khác nhé.";
    storeList.append(empty);
    return;
  }

  matchingStores.forEach((store) => {
    const card = document.createElement("article");
    card.className = "store-card";
    card.classList.toggle("is-selected", store.id === state.selectedStoreId);

    const top = document.createElement("div");
    top.className = "store-card-top";
    const pin = document.createElement("span");
    pin.className = "store-pin";
    pin.setAttribute("aria-hidden", "true");
    pin.textContent = "⌖";
    const title = document.createElement("h4");
    title.textContent = store.name;
    top.append(pin, title);

    const address = document.createElement("p");
    address.className = "store-address";
    address.textContent = store.address;

    const phone = document.createElement("p");
    phone.className = "store-detail";
    const phoneIcon = document.createElement("span");
    phoneIcon.setAttribute("aria-hidden", "true");
    phoneIcon.textContent = "☎";
    const phoneText = document.createElement("span");
    phoneText.textContent = store.phone;
    phone.append(phoneIcon, phoneText);

    const hours = document.createElement("p");
    hours.className = "store-detail";
    const clockIcon = document.createElement("span");
    clockIcon.setAttribute("aria-hidden", "true");
    clockIcon.textContent = "◷";
    const hoursText = document.createElement("span");
    hoursText.textContent = store.hours;
    hours.append(clockIcon, hoursText);

    const selectButton = document.createElement("button");
    selectButton.className = "select-store-button";
    selectButton.type = "button";
    selectButton.textContent = store.id === state.selectedStoreId ? "Đang chọn cửa hàng này ✓" : "Chọn cửa hàng";
    selectButton.setAttribute("aria-pressed", String(store.id === state.selectedStoreId));
    selectButton.addEventListener("click", () => {
      state.selectedStoreId = state.selectedStoreId === store.id ? null : store.id;
      renderStores();
      updateSummary();
      clearConfirmation();
    });

    card.append(top, address, phone, hours, selectButton);
    storeList.append(card);
  });
}

function getDeliveryValues() {
  const formData = new FormData(deliveryForm);
  return {
    name: String(formData.get("name") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    city: String(formData.get("city") || "").trim(),
    district: String(formData.get("district") || "").trim(),
    address: String(formData.get("address") || "").trim(),
    note: String(formData.get("note") || "").trim()
  };
}

function updateSummary() {
  const methodLabel = state.method === "delivery" ? "Giao hàng tận nơi" : "Nhận tại cửa hàng";
  document.querySelector("#summary-method").textContent = methodLabel;
  document.querySelector("#summary-method-icon").textContent = state.method === "delivery" ? "↗" : "⌖";

  const destination = document.querySelector("#summary-destination");
  if (state.method === "pickup") {
    const store = stores.find((item) => item.id === state.selectedStoreId);
    destination.textContent = store ? `${store.name} · ${store.address}` : "Vui lòng chọn cửa hàng nhận hàng.";
    return;
  }

  const values = getDeliveryValues();
  const fullAddress = [values.address, values.district, values.city].filter(Boolean).join(", ");
  destination.textContent = fullAddress || "Vui lòng nhập địa chỉ giao hàng.";
}

function setMethod(method) {
  state.method = method;
  document.querySelector("#delivery-section").hidden = method !== "delivery";
  document.querySelector("#pickup-section").hidden = method !== "pickup";

  document.querySelectorAll("[data-method-card]").forEach((card) => {
    const selected = card.dataset.methodCard === method;
    card.classList.toggle("is-selected", selected);
    card.querySelector("input").checked = selected;
  });

  updateSummary();
  clearConfirmation();
}

function clearFieldErrors() {
  deliveryForm.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
  deliveryForm.querySelectorAll("input[aria-invalid]").forEach((input) => input.removeAttribute("aria-invalid"));
}

function setFieldError(fieldName, message) {
  const input = deliveryForm.elements.namedItem(fieldName);
  const error = document.querySelector(`#${fieldName === "name" ? "name" : fieldName}-error`);
  input.setAttribute("aria-invalid", "true");
  error.textContent = message;
}

function validateDelivery() {
  clearFieldErrors();
  const values = getDeliveryValues();
  const requiredFields = [
    ["name", values.name, "Vui lòng nhập họ và tên."],
    ["phone", values.phone, "Vui lòng nhập số điện thoại."],
    ["city", values.city, "Vui lòng nhập tỉnh / thành phố."],
    ["district", values.district, "Vui lòng nhập quận / huyện."],
    ["address", values.address, "Vui lòng nhập địa chỉ cụ thể."]
  ];
  let firstInvalidField = null;

  requiredFields.forEach(([fieldName, value, message]) => {
    if (!value) {
      setFieldError(fieldName, message);
      if (!firstInvalidField) firstInvalidField = deliveryForm.elements.namedItem(fieldName);
    }
  });

  if (values.phone && !/^0\d{9}$/.test(values.phone.replace(/\D/g, ""))) {
    setFieldError("phone", "Số điện thoại cần gồm 10 chữ số và bắt đầu bằng số 0.");
    if (!firstInvalidField) firstInvalidField = deliveryForm.elements.namedItem("phone");
  }

  if (firstInvalidField) {
    firstInvalidField.focus();
    return false;
  }
  return true;
}

function clearConfirmation() {
  confirmationMessage.hidden = true;
  confirmationMessage.classList.remove("is-error");
  confirmationMessage.textContent = "";
}

function showConfirmation(message, isError) {
  confirmationMessage.textContent = message;
  confirmationMessage.hidden = false;
  confirmationMessage.classList.toggle("is-error", isError);
  confirmationMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function confirmOrder() {
  clearConfirmation();
  if (state.method === "delivery") {
    if (!validateDelivery()) {
      showConfirmation("Vui lòng kiểm tra và bổ sung các thông tin giao hàng còn thiếu.", true);
      return;
    }
    const values = getDeliveryValues();
    showConfirmation(`Thông tin giao hàng đã hợp lệ, ${values.name}! Đây là xác nhận demo; không có đơn hàng thật được gửi đi.`, false);
    return;
  }

  const selectedStore = stores.find((store) => store.id === state.selectedStoreId);
  if (!selectedStore) {
    showConfirmation("Vui lòng chọn một cửa hàng trước khi xác nhận thông tin nhận hàng.", true);
    document.querySelector("#pickup-section").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  showConfirmation(`Bạn đã chọn ${selectedStore.name}. Đây là xác nhận demo; không có đơn hàng thật được gửi đi.`, false);
}

document.querySelectorAll('input[name="fulfillment"]').forEach((input) => {
  input.addEventListener("change", (event) => setMethod(event.target.value));
});

document.querySelectorAll(".region-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.region = button.dataset.region;
    document.querySelectorAll(".region-button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderStores();
  });
});

searchInput.addEventListener("input", renderStores);
deliveryForm.addEventListener("input", (event) => {
  if (event.target.matches("input")) {
    event.target.removeAttribute("aria-invalid");
    const error = document.querySelector(`#${event.target.name}-error`);
    if (error) error.textContent = "";
  }
  updateSummary();
  clearConfirmation();
});
document.querySelector("#confirm-button").addEventListener("click", confirmOrder);

renderCart();
renderStores();
updateSummary();

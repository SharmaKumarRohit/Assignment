const tableBody = document.querySelector("tbody");
const serviceMenuItem = document.querySelector(".service-menu-items");
const totalPrice = document.querySelector("#total-amount");
export let cart = [];

export default function renderCart() {
  let clutter = "";
  let total = 0;
  if (cart.length === 0) {
    clutter = `<tr class="no-item-row">
                      <td colspan="3" class="no-item">
                        <img
                          src="./assets/no-item.jpg"
                          alt="no-item"
                          class="add-img"
                        />
                      </td>
                    </tr>`;
  } else {
    cart.forEach((item, index) => {
      const { name, price } = item;
      clutter += `<tr>
                  <td>${index + 1}</td>
                  <td>${name}</td>
                  <td>&#x20B9;${price}.00</td>
                </tr>`;
      total += price;
    });
  }
  tableBody.innerHTML = clutter;
  totalPrice.innerHTML = total;
}

serviceMenuItem.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-btn")) {
    const price = +e.target.dataset.price;
    const name = e.target.dataset.name;
    const index = cart.findIndex((item) => item.name === name);
    if (index === -1) {
      cart.push({ name, price });
      e.target.innerHTML = `Remove <i class="ri-indeterminate-circle-line"></i>`;
      e.target.classList.remove("add");
      e.target.classList.add("remove");
    } else {
      cart.splice(index, 1);
      e.target.innerHTML = `Add Item <i class="ri-add-circle-line"></i>`;
      e.target.classList.remove("remove");
      e.target.classList.add("add");
    }
    renderCart();
  }
});

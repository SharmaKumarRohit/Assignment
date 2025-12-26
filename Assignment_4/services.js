const services_container = document.querySelector(".service-menu-items");

export default function showServices() {
  let services = [
    { image: "./assets/cleaning.png", s_name: "Dry Cleaning", price: 200 },
    { image: "./assets/basket.png", s_name: "Wash & Fold", price: 100 },
    { image: "./assets/ironing.svg", s_name: "Ironing", price: 30 },
    { image: "./assets/stain.png", s_name: "Stain Removal", price: 500 },
    {
      image: "./assets/leather.png",
      s_name: "Leather & Suede Cleaning",
      price: 999,
    },
    {
      image: "./assets/dress.png",
      s_name: "Wedding Dress Cleaning",
      price: 2800,
    },
  ];

  let clutter = "";
  services.forEach((service) => {
    const { image, s_name, price } = service;
    clutter += `<div class="service-menu-item">
                  <h3>
                    <img src="${image}" alt="${
      image.split(".")[1].split("/")[2]
    }" loading="lazy" />
                    <span>${s_name}</span>
                    <span class="circle"></span>
                    <span class="price">&#x20B9;${price}.00</span>
                  </h3>
                    <button data-name="${s_name}" data-price="${price}" class="toggle-btn add">
                      Add Item <i class="add ri-add-circle-line"></i>
                    </button>
                </div>`;
  });
  services_container.innerHTML = clutter;
}

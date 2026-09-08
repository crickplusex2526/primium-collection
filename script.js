const WHATSAPP_NUMBER = "919016410508";

const orderForm = document.getElementById("orderForm");
const orderStatus = document.getElementById("orderStatus");

orderForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const formData = new FormData(orderForm);

  const name = formData.get("name");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const city = formData.get("city");
  const state = formData.get("state");
  const pincode = formData.get("pincode");
  const shoe = formData.get("shoe");
  const size = formData.get("size");
  const quantity = formData.get("quantity");
  const transactionId = formData.get("transactionId");

  const message = `
🛍️ NEW ORDER
━━━━━━━━━━━━━━━━━━

👤 Name: ${name}
📱 Mobile: ${phone}

🏠 Address:
${address}

🏙️ City: ${city}
📍 State: ${state}
📮 PIN: ${pincode}

👟 Product: ${shoe}
📏 Size: ${size}
🔢 Quantity: ${quantity}

💰 Total Price: ₹2,499
💳 Advance: ₹1,249.50

🧾 UTR / Transaction ID:
${transactionId || "Not provided"}

⏰ Order Time:
${new Date().toLocaleString("en-IN")}

━━━━━━━━━━━━━━━━━━
PREMIUM COLLECTION
`;

  const whatsappURL =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  orderStatus.innerHTML =
    "Order details WhatsApp par bhejne ke liye open ho raha hai...";

  window.location.href = whatsappURL;
});
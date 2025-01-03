const badges = document.querySelectorAll(".p-badge");
const whatsapp_logos = document.querySelectorAll(".whatsapp-logo");

function badgeClick(badge) {
  return badge.addEventListener("click", () => {
    alert("Badge was Click agin");
  });
}

function whataAppClick(wh) {
  return wh.addEventListener("click", () => {
    alert("WhatsApp Icone Foi Clicado");
  });
}

badges.forEach((badge, indice) => {
  if (indice % 2 == 0) {
    badge.style.backgroundColor = "green";
    badge.innerHTML = "Promocao";
  }
  else{
    badge.style.backgroundColor = "red";
    badge.innerHTML = "Destaque";
  }
  badgeClick(badge);
});

whatsapp_logos.forEach((wh, indice) => {
  whataAppClick(wh);
});

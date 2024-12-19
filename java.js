    // JavaScript az ajándékokra történő szavazáshoz
    document.addEventListener("DOMContentLoaded", () => {
      const ajandekCards = document.querySelectorAll(".ajandek-card");

      ajandekCards.forEach(card => {
        card.addEventListener("click", () => {
          const ajandek = card.getAttribute("data-ajandek");
          const szavazatokElem = document.getElementById(`szavazatok-${ajandek}`);
          let szavazatokSzama = parseInt(szavazatokElem.textContent, 10);
          szavazatokSzama++;
          szavazatokElem.textContent = szavazatokSzama;
        });
      });

      // Navigáció a szakaszok között
      const tortenetBtn = document.getElementById("tortenet-btn");
      const szavazasBtn = document.getElementById("szavazas-btn");
      const tortenetSection = document.getElementById("tortenet");
      const szavazasSection = document.getElementById("szavazas");

      tortenetBtn.addEventListener("click", () => {
        tortenetSection.classList.remove("d-none");
        szavazasSection.classList.add("d-none");
      });

      szavazasBtn.addEventListener("click", () => {
        szavazasSection.classList.remove("d-none");
        tortenetSection.classList.add("d-none");
      });
    });
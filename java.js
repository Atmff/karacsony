document.addEventListener("DOMContentLoaded", () => {
    // Navigációs gombok
    const tortenetBtn = document.getElementById("tortenet-btn");
    const szavazasBtn = document.getElementById("szavazas-btn");
    
    // Szakaszok
    const tortenetSection = document.getElementById("tortenet");
    const szavazasSection = document.getElementById("szavazas");
    
    // Szavazatok tárolása
    const votes = {
      "Játék": 0,
      "Könyv": 0,
      "Ruházat": 0,
      "Édesség": 0,
      "Elektronikai eszköz": 0,
      "Lakberendezés": 0,
      "Kézműves termék": 0,
      "Sportfelszerelés": 0,
      "Utazási utalvány": 0,
      "Illatszer": 0,
      "Élményajándék": 0,
      "Egyedi ajándék": 0,
    };
  
    // Szavazatokat frissítő függvény
    function updateResults() {
      Object.keys(votes).forEach(ajandek => {
        const szavazatSpan = document.getElementById(`szavazatok-${ajandek.toLowerCase().replace(/ /g, "-")}`);
        if (szavazatSpan) {
          szavazatSpan.textContent = votes[ajandek];
        }
      });
    }
  
    // Szavazás kezelése: kattintásra növeli a szavazatokat
    document.querySelectorAll(".ajandek-card").forEach(card => {
      card.addEventListener("click", () => {
        const ajandek = card.getAttribute("data-ajandek");
        votes[ajandek]++;  // Szavazat hozzáadása
        updateResults();  // Eredmények frissítése
        alert(`Köszönjük a szavazatát a ${ajandek} ajándékra!`);
      });
    });
  
    // Szakaszok közötti navigálás
    tortenetBtn.addEventListener("click", () => {
      tortenetSection.classList.remove("d-none");
      szavazasSection.classList.add("d-none");
    });
  
    szavazasBtn.addEventListener("click", () => {
      szavazasSection.classList.remove("d-none");
      tortenetSection.classList.add("d-none");
    });
  
    // Kezdeti eredmények frissítése
    updateResults();
  });
  
const pages = document.querySelectorAll(".page");
const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
const form = document.getElementById("regForm");
const emailInput = document.getElementById("email");

let current = 0;

function showPage(n) {
  pages.forEach((p, i) => {
    p.classList.toggle("active", i === n);
    steps[i].classList.toggle("active", i <= n);
  });
}

// Cek input wajib sebelum lanjut
function validateInputs(pageIndex) {
  const inputs = pages[pageIndex].querySelectorAll("input[required], select[required], textarea[required]");
  for (let input of inputs) {
    if (!input.value) {
      alert("Harap isi semua field wajib");
      return false;
    }
    if (input.type === "email" && !input.value.includes("@")) {
      alert("Alamat email tidak valid. Harus mengandung '@'.");
      return false;
    }
  }
  return true;
}

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!validateInputs(current)) return;
    if (current < pages.length - 1) current++;
    showPage(current);
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (current > 0) current--;
    showPage(current);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Pendaftaran Anda berhasil dikirim! Terima kasih.");
});

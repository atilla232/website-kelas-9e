document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.pathname; // Dapatkan path URL halaman saat ini
  const navLinks = document.querySelectorAll(".nav-links"); // Temukan semua tautan navigasi

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname; // Dapatkan path URL dari tautan
    if (currentLocation === linkPath) {
      link.classList.add("active"); // Tambahkan kelas "active" jika cocok
    } else {
      link.classList.remove("active"); // Hapus kelas "active" jika tidak cocok
    }
  });
});

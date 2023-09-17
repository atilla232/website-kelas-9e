document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.pathname; // Dapatkan path URL halaman saat ini
  const navLinks = document.querySelectorAll(".nav-links"); // Temukan semua tautan navigasi

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname; // Dapatkan path URL dari tautan
    if (currentLocation === linkPath) {
      link.id = "active"; // Mengganti kelas "active" dengan ID "active" jika cocok
    } else {
      link.removeAttribute("id"); // Menghapus ID "active" jika tidak cocok
    }
  });
});

// Toggle class active untuk navbar
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  // Mencegah perilaku default dari link (misalnya, melompat ke bagian atas halaman jika href="#")
  e.preventDefault(); 
  // Menambah/menghapus class 'active' untuk menampilkan/menyembunyikan menu navigasi
  navbarNav.classList.toggle("active");
};



// klik di luar sidebar/hamburger menu untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  // Memastikan klik tidak terjadi di dalam hamburger menu atau navigasi itu sendiri
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    // Menghapus class 'active' untuk menyembunyikan menu navigasi
    navbarNav.classList.remove("active");
  }
});
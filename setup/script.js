document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");
    const userIcon = document.getElementById("userIcon");
    const userDropdown = document.getElementById("userDropdown");
    const searchIcon = document.querySelector(".search-btn");
    const searchBar = document.getElementById("searchBar");
    const closeSearch = document.getElementById("closeSearch");

    // Sidebar
    if (menuBtn && sidebar) {
        menuBtn.addEventListener("click", function () {
            sidebar.classList.add("active");
        });

        document.addEventListener("click", function (event) {
            if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
                sidebar.classList.remove("active");
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    }

    // Search Bar
    if (searchIcon && searchBar) {
        searchIcon.addEventListener("click", function () {
            searchBar.classList.add("active");
        });

        if (closeSearch) {
            closeSearch.addEventListener("click", function () {
                searchBar.classList.remove("active");
            });
        }
    }

    // User Dropdown
    if (userIcon && userDropdown) {
        userIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            userDropdown.style.display = (userDropdown.style.display === "block") ? "none" : "block";
        });

        document.addEventListener("click", function (event) {
            if (!userIcon.contains(event.target) && !userDropdown.contains(event.target)) {
                userDropdown.style.display = "none";
            }
        });
    }
// remove if dont work
    document.addEventListener("DOMContentLoaded", function () {
        const fileInput = document.getElementById("fileInput");
        const uploadPreview = document.getElementById("uploadPreview");
    
        if (fileInput && uploadPreview) {
            fileInput.addEventListener("change", function () {
                const file = this.files[0];
                if (file && file.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        uploadPreview.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
    
            // Optional: click anywhere on the box to trigger file input
            document.getElementById("fileUpload").addEventListener("dragover", function (e) {
                e.preventDefault();
                e.stopPropagation();
                this.style.borderColor = "#555";
            });
    
            document.getElementById("fileUpload").addEventListener("drop", function (e) {
                e.preventDefault();
                e.stopPropagation();
                fileInput.files = e.dataTransfer.files;
                fileInput.dispatchEvent(new Event("change")); // trigger preview
            });
        }
    });

    // Confirm popup for Setup/Upgrade form
    const setupForm = document.getElementById("setupForm");
    if (setupForm) {
        setupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const isConfirmed = confirm("Are you sure you want to submit this setup/upgrade request?");
            if (isConfirmed) {
                window.location.href = "../Homepage/Homepage.html";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");
    const userIcon = document.getElementById("userIcon");
    const userDropdown = document.getElementById("userDropdown");
    const searchIcon = document.querySelector(".search-btn");
    const searchBar = document.getElementById("searchBar");
    const closeSearch = document.getElementById("closeSearch");

    // Open Sidebar
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

    // Confirm popup for closing the sidebar
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            const isConfirmed = confirm("Are you sure you want to close the sidebar?");
            if (isConfirmed) {
                sidebar.classList.remove("active");
            }
        });
    }

    // Open search bar when clicking search icon
    if (searchIcon && searchBar) {
        searchIcon.addEventListener("click", function() {
            searchBar.classList.add("active");
        });

        // Close search bar when clicking the close button
        if (closeSearch) {
            closeSearch.addEventListener("click", function() {
                searchBar.classList.remove("active");
            });
        }
    }

    // USER DROPDOWN FUNCTIONALITY
    if (userIcon && userDropdown) {
        userIcon.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent immediate closure
            userDropdown.style.display = (userDropdown.style.display === "block") ? "none" : "block";
        });

        // Hide dropdown when clicking outside
        document.addEventListener("click", function(event) {
            if (!userIcon.contains(event.target) && !userDropdown.contains(event.target)) {
                userDropdown.style.display = "none";
            }
        });
    }

    // Confirm popup for Checkout form
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
            const isConfirmed = confirm("Are you sure you want to proceed with the payment?");
            if (isConfirmed) {
                alert("Proceeding with payment...");
                window.location.href = "../Homepage/Homepage.html";
            }
        });
    }
});

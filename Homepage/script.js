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

    // Close Sidebar when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            sidebar.classList.remove("active");
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

    //products tab
    document.addEventListener("DOMContentLoaded", () => {
        const newTab = document.getElementById("newProducts");
        const topTab = document.getElementById("topProducts");
      
        newTab.addEventListener("click", () => {
          newTab.classList.add("active");
          topTab.classList.remove("active");
        });
      
        topTab.addEventListener("click", () => {
          topTab.classList.add("active");
          newTab.classList.remove("active");
        });
      });
      
});

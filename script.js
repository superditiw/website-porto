document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("modal");
    var btn = document.getElementById("open-modal"); // Ensure this ID exists in the HTML
    var span = document.querySelector(".close");
    var items = document.querySelectorAll(".timeline-item"); // Updated to select all list items

    // Open modal when button is clicked
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    // Close modal when "x" is clicked
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Close modal when clicking outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function elementInView(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function elementOutView(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top > (window.innerHeight || document.documentElement.clientHeight) ||
            rect.bottom < 0
        );
    }

    function callBack() {
        for (var i = 0; i < items.length; i++) {
            if (elementInView(items[i])) {
                items[i].classList.add("in-view");
            } else if (elementOutView(items[i])) {
                items[i].classList.remove("in-view");
            }
        }
    }

    // Attach the callback to events
    window.onload = callBack;
    window.onresize = callBack;
    window.onscroll = callBack;
});

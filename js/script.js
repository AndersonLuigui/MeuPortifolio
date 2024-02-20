document.addEventListener("DOMContentLoaded", function() {
    // Adiciona o evento de scroll
    window.addEventListener("scroll", revealOrHideTimelineItems);

    function revealOrHideTimelineItems() {
        var timelineItems = document.querySelectorAll(".timeline li");
        for (var i = 0; i < timelineItems.length; i++) {
            var item = timelineItems[i];
            if (isElementInViewport(item)) {
                item.classList.add("visible");
                item.classList.remove("hidden");
            } else {
                item.classList.remove("visible");
                item.classList.add("hidden");
            }
        }
    }

    // Verifica se o elemento está no viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Reveal items on page load
    revealOrHideTimelineItems();
});


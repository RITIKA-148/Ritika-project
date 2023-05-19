window.onload = function () {
    const listItems = document.querySelectorAll("ul.filter__section li");
    const galleryItem = document.querySelectorAll(".gallery__type");

    function toggleActiveClass(t) {
        listItems.forEach((t) => {
            t.classList.remove("active");
        }),
            t.classList.add("active");
    }

    function toggleProjects(t) {
        // OPTION 1
        // Outer if/then, two inner .forEach()

        if ("all" === t)
            galleryItem.forEach(item => {
                item.style.display = "block";
            });
        else
            galleryItem.forEach(item => {
                item.dataset.class === t
                    ? (item.style.display = "block")
                    : (item.style.display = "none");
            });
        
        // OPTION 2
        // One outer .forEach(), inner if/then

        // galleryItem.forEach(item => {
        //     if ("all" === t)
        //         item.style.display = "block";
        //     else
        //         item.dataset.class === t
        //             ? (item.style.display = "block")
        //             : (item.style.display = "none");
        // });
    }

    for (let t = 0; t < listItems.length; t++)
        listItems[t].addEventListener("click", function () {
            toggleActiveClass(listItems[t]),
                toggleProjects(listItems[t].dataset.class);
        });
};
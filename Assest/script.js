fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

    window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 100) {
            navbar.classList.add("opaque");
            navbar.classList.remove("transparent");
        } else {
            navbar.classList.add("transparent");
            navbar.classList.remove("opaque");
        }
    });
    

     // Select all elements with the "i" tag and store them in a NodeList called "stars"
    //  const stars = document.querySelectorAll(".stars i");

    //  stars.forEach((star, index1) => {
    //    star.addEventListener("click", () => {
    //      stars.forEach((star, index2) => {
    //        if (index1 >= index2) {
    //          star.classList.add("active");
    //        } else {
    //          star.classList.remove("active");
    //        }
    //      });
    //    });
    //  });
     



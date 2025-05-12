        const hamburgerBtn = document.getElementById("hamburger-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const closeMenuBtn = document.getElementById("close-menu-btn");
        const mobileMenuLinks = mobileMenu.querySelectorAll("a");
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section');
        const morePicturesBtn = document.getElementById("more-pictures-btn");
        const imageGallery = document.getElementById("image-gallery");

        function toggleMobileMenu() {
            mobileMenu.classList.toggle("hidden");
        }

        hamburgerBtn.addEventListener("click", toggleMobileMenu);
        closeMenuBtn.addEventListener("click", toggleMobileMenu);
        mobileMenuLinks.forEach(link => {
            link.addEventListener("click", toggleMobileMenu);
        });

        document.addEventListener('click', (event) => {
            if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(event.target) && event.target !== hamburgerBtn) {
                toggleMobileMenu();
            }
        });

        function updateActiveNavLink() {
            let currentSectionId = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === currentSectionId) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveNavLink);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        morePicturesBtn.addEventListener("click", () => {
            // Array of new image URLs
            const newImages = [
                "https://source.unsplash.com/featured/?gogabooro,landscape,nature",
                "https://source.unsplash.com/featured/?gogabooro,culture,people",
                "https://source.unsplash.com/featured/?gogabooro,tradition,art",
                "https://source.unsplash.com/featured/?gogabooro,community,events",
                "https://source.unsplash.com/featured/?gogabooro,heritage,history",
                "https://source.unsplash.com/featured/?gogabooro,development,progress"
            ];

            // Loop through the new images and create elements
            newImages.forEach(imageUrl => {
                const imageContainer = document.createElement("div");
                imageContainer.className = "bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg";

                const img = document.createElement("img");
                img.src = imageUrl;
                img.alt = "Goga-Booro Community";
                img.className = "w-full h-48 object-cover rounded-t-lg";

                const textDiv = document.createElement("div");
                textDiv.className = "p-4";
                textDiv.innerHTML = "<p class='text-gray-700 text-sm'>More glimpses of Goga-Booro.</p>";

                imageContainer.appendChild(img);
                imageContainer.appendChild(textDiv);
                imageGallery.appendChild(imageContainer);
            });

            // Change the button text
            morePicturesBtn.textContent = "Show Less";

            // Remove the event listener
            morePicturesBtn.removeEventListener("click", () => {});

            // Add a new event listener to show less
            morePicturesBtn.addEventListener("click", () => {
                // Remove the added images
                const addedImages = imageGallery.querySelectorAll(":nth-child(n+4)"); // Select images after the initial 3
                addedImages.forEach(img => img.remove());

                // Change the button text back
                morePicturesBtn.textContent = "More Pictures";

                // Remove the event listener
                morePicturesBtn.removeEventListener("click", () => {});

                // Add the original event listener back
                morePicturesBtn.addEventListener("click", () => {
                    // Array of new image URLs
                    const newImages = [
                        "https://source.unsplash.com/featured/?gogabooro,landscape,nature",
                        "https://source.unsplash.com/featured/?gogabooro,culture,people",
                        "https://source.unsplash.com/featured/?gogabooro,tradition,art",
                        "https://source.unsplash.com/featured/?gogabooro,community,events",
                        "https://source.unsplash.com/featured/?gogabooro,heritage,history",
                        "https://source.unsplash.com/featured/?gogabooro,development,progress"
                    ];

                    // Loop through the new images and create elements
                    newImages.forEach(imageUrl => {
                        const imageContainer = document.createElement("div");
                        imageContainer.className = "bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg";

                        const img = document.createElement("img");
                        img.src = imageUrl;
                        img.alt = "Goga-Booro Community";
                        img.className = "w-full h-48 object-cover rounded-t-lg";

                        const textDiv = document.createElement("div");
                        textDiv.className = "p-4";
                        textDiv.innerHTML = "<p class='text-gray-700 text-sm'>More glimpses of Goga-Booro.</p>";

                        imageContainer.appendChild(img);
                        imageContainer.appendChild(textDiv);
                        imageGallery.appendChild(imageContainer);
                    });

                    // Change the button text
                    morePicturesBtn.textContent = "Show Less";

                    // Remove the event listener
                    morePicturesBtn.removeEventListener("click", () => {});

                     // Add a new event listener to show less
                    morePicturesBtn.addEventListener("click", () => {
                        // Remove the added images
                        const addedImages = imageGallery.querySelectorAll(":nth-child(n+4)"); // Select images after the initial 3
                        addedImages.forEach(img => img.remove());

                        // Change the button text back
                        morePicturesBtn.textContent = "More Pictures";

                        // Remove the event listener
                        morePicturesBtn.removeEventListener("click", () => {});

                        // Add the original event listener back
                        morePicturesBtn.addEventListener("click", () => {

                        });
                    });
                });
            });
        });
    
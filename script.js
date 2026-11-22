
/* ==================================
   NOVARC STUDIO
   WEBSITE JAVASCRIPT
================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("NOVARC STUDIO is ready!");

    // CURRENT YEAR
    const year = document.getElementById("currentYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // MOBILE NAVIGATION (HOME PAGE)
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {

            navigation.classList.toggle("open");

            const opened = navigation.classList.contains("open");

            menuToggle.textContent = opened ? "✕" : "☰";
            menuToggle.setAttribute("aria-expanded", opened);

        });

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navigation.classList.remove("open");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            });

        });
    }

    // ACTIVE HOME NAVIGATION
    const navLinks = document.querySelectorAll(".navigation a");

    if (navLinks.length > 0) {

        window.addEventListener("scroll", function () {

            let currentSection = "";

            document.querySelectorAll("main section[id]").forEach(function (section) {

                const top = section.offsetTop - 150;
                const bottom = top + section.offsetHeight;

                if (window.scrollY >= top && window.scrollY < bottom) {
                    currentSection = section.id;
                }

            });

            navLinks.forEach(function (link) {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + currentSection) {
                    link.classList.add("active");
                }

            });

        });
    }

    // PROJECT INFORMATION
    const projectData = {

        "modern-residence": {
            title: "Modern Residence",
            category: "RESIDENTIAL ARCHITECTURE",
            subtitle: "Contemporary Residential Concept",
            description: "A contemporary residential concept exploring clean forms, natural light, open spaces and comfortable modern living.",
            type: "Residential",
            design: "Modern Architecture",
            cover: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
            concept: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200",
            gallery: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000",
                "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000"
            ]
        },

        "commercial-building": {
            title: "Commercial Building",
            category: "COMMERCIAL ARCHITECTURE",
            subtitle: "Modern Commercial Design Concept",
            description: "A modern commercial building concept focused on architectural identity, functional planning and a clear contemporary appearance.",
            type: "Commercial",
            design: "Contemporary Architecture",
            cover: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600",
            concept: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
            gallery: [
                "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000"
            ]
        },

        "interior-design": {
            title: "Interior Design",
            category: "INTERIOR DESIGN",
            subtitle: "Elegant Interior Concept",
            description: "An interior design concept combining comfortable spaces, thoughtful material selection and a balanced modern atmosphere.",
            type: "Interior",
            design: "Modern Interior",
            cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
            concept: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
            gallery: [
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000"
            ]
        }

    };

    // LOAD SELECTED PROJECT
    const projectTitle = document.getElementById("projectTitle");

    if (projectTitle) {

        const params = new URLSearchParams(window.location.search);

        const projectKey = params.get("project") || "modern-residence";

        const project = projectData[projectKey] || projectData["modern-residence"];

        const category = document.getElementById("projectCategory");
        const subtitle = document.getElementById("projectSubtitle");
        const description = document.getElementById("projectDescription");
        const type = document.getElementById("projectType");
        const design = document.getElementById("projectDesign");

        if (category) category.textContent = project.category;
        projectTitle.textContent = project.title;

        if (subtitle) subtitle.textContent = project.subtitle;
        if (description) description.textContent = project.description;
        if (type) type.textContent = project.type;
        if (design) design.textContent = project.design;

        const cover = document.getElementById("projectCover");
        const concept = document.getElementById("conceptImage");

        if (cover) {
            cover.src = project.cover;
            cover.alt = project.title;
        }

        if (concept) {
            concept.src = project.concept;
            concept.alt = project.title + " concept";
        }

        const galleryIds = [
            "galleryOne",
            "galleryTwo",
            "galleryThree"
        ];

        galleryIds.forEach(function (id, index) {

            const image = document.getElementById(id);

            if (image && project.gallery[index]) {
                image.src = project.gallery[index];
                image.alt = project.title + " gallery " + (index + 1);
            }

        });

        document.title = project.title + " | NOVARC STUDIO";

    }

});

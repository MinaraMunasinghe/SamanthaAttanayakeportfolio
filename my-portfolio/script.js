document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const experiences = [
        {
            title: "Music Teacher",
            date: "2023 - Present",
            location: "GEMS Education OOB | Sharjah, UAE",
            description: "Directing the school choir and rock bands to victories in inter-school competitions. Implementing inclusive music curricula integrating digital instruments across K-12.",
            side: "left"
        },
        {
            title: "Senior Music Teacher",
            date: "2020 - 2022",
            location: "Vidura College | Sri Lanka",
            description: "Managed 7 diverse classes from Grades 6 to 12. Maintained a 100% student pass rate in G.C.E. O/L and A/L music examinations for three consecutive years using tools like Sibelius.",
            side: "right"
        },
        {
            title: "Western Music Head of Department",
            date: "2018 - 2020",
            location: "Royal International School | Sri Lanka",
            description: "Led the music department and prepared over 300 students for Trinity College London and ABRSM exams, achieving 50% Distinctions and 35% Merits alongside a 100% O/L and A/L pass rate.",
            side: "left"
        },
        {
            title: "Music Teacher",
            date: "2016 - 2018",
            location: "Sheffield Private School | Dubai, UAE",
            description: "Delivered interactive music lessons aligned with the British Curriculum for primary levels, blending core music theory with modern music technology applications.",
            side: "right"
        },
        {
            title: "Senior Music Teacher",
            date: "2013 - 2016",
            location: "Oxford School | Dubai, UAE",
            description: "Coordinated major school events and prepared foundational student choirs. Trained exam candidates for international examination boards with exceptional distinction rates",
            side: "left"
        },
        {
            title: "Government Teacher",
            date: "2010 - 2013",
            location: "Ferguson High School | Sri Lanka",
            description: "Designed extracurricular training programs for national examinations and directed the school's official Brass Band for major public performances and sports meets.",
            side: "right"
        },
    ];

    const skills = [
        { name: "Practical Skills", icon: "fas fa-headphones", level:"100%", desc: "Choir Conducting, Vocal Coaching, Rehearsal Management, Brass & Rock Band Directing, Piano Instruction" },
        { name: "Theory & Classroom", icon: "fab fa-book", level: "100%", desc: "British & Local Curriculum Design, ABRSM & Trinity Exam Prep, Staff Notation, Sibelius Software" },
      
        
    ];

    const projects = [
        {
            id: 1,
            title: "TutorSphere – Online Learning Platform",
            image: "tutorsphere.png.jpg",
            category: "Web Development / Architecture",
            date: "Oct 2025 - Nov 2025",
            shortDesc: "A centralized digital ecosystem designed to streamline supplemental education in Sri Lanka, focusing on STEM and ICT fields.",
            fullDesc: "TutorSphere is a centralized, end-to-end digital ecosystem designed to streamline supplemental education in Sri Lanka. Focused specifically on STEM and ICT fields, the platform bridges the gap between students seeking quality guidance and educators operating in fragmented social media spaces. It transforms traditional, manual tutoring operations into an automated, data-driven web application featuring intelligent scheduling, progress tracking, and AI-powered learning assistance.",
            tech: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB", "Responsive Design"],
            github: "https://github.com/MinaraMunasinghe/tutorsphere-platform.git",
            liveDemo: "https://www.tutorsphere.me/"
        },
        {
            id: 2,
            title: "Evoria –  Event Management Platform",
            image: "evoria.png.png",
            category: "Full-Stack Development / Mobile Architecture",
            date: "May 2026",
            shortDesc: "A centralized digital ecosystem designed to streamline event lifecycle operations, focusing on community and professional gatherings.",
            fullDesc: "Evoria is a centralized, end-to-end digital ecosystem designed to streamline event lifecycle operations. Focused specifically on community and professional gatherings, the platform bridges the gap between attendees seeking seamless experiences and organizers operating in fragmented planning spaces.It automates the entire event lifecycle from secure email OTP verification, waitlists, and interactive ticketing to real-time event analytics, automated push notifications, and digital QR check-ins.",
            tech: ["Node.js", "React Native", "TypeScript", "MongoDB", "Express", "Expo SDK"],
            github: "https://github.com/MinaraMunasinghe/evoria-event-management-system.git"
        }
    ];

    // --- Selectors ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const timelineContainer = document.getElementById('experience-timeline');
    const skillsGrid = document.getElementById('skills-grid');
    const projectsGrid = document.getElementById('projects-grid');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    // --- Theme Management ---
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';

        // Update profile pic filter or source if needed
        const profilePic = document.getElementById('profile-pic');
        if (newTheme === 'light') {
            profilePic.style.filter = "brightness(0.9) contrast(1.1)";
        } else {
            profilePic.style.filter = "none";
        }
    });

    // --- Rendering Functions ---
    function renderTimeline() {
        timelineContainer.innerHTML = experiences.map((exp, index) => `
            <div class="timeline-item ${exp.side} animate-fade" style="animation-delay: ${index * 0.1}s">
                <div class="timeline-content">
                    <span class="date">${exp.date}</span>
                    <h3>${exp.title}</h3>
                    <p style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--text-secondary);">${exp.location}</p>
                    <p>${exp.description}</p>
                </div>
            </div>
        `).join('');
    }

    function renderSkills() {
        skillsGrid.innerHTML = skills.map((skill, index) => `
            <div class="skill-card animate-fade" style="animation-delay: ${index * 0.1}s">
                <i class="${skill.icon}"></i>
                <h3>${skill.name}</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${skill.desc}</p>
                <div style="background: var(--border-color); height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="width: ${skill.level}; background: var(--accent-color); height: 100%; transition: width 1.5s ease-in-out;"></div>
                </div>
                <p style="text-align: right; font-size: 0.8rem; margin-top: 0.5rem; font-weight: 700; color: var(--accent-color);">${skill.level}</p>
            </div>
        `).join('');
    }

    function renderProjects() {
        projectsGrid.innerHTML = projects.map((project, index) => `
            <div class="project-card animate-fade" style="animation-delay: ${index * 0.1}s" data-id="${project.id}">
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-overlay">
                    <p class="project-category">${project.category}</p>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-short-desc">${project.shortDesc}</p>
                </div>
            </div>
        `).join('');

        // Add event listeners to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                const projectId = parseInt(card.getAttribute('data-id'));
                const project = projects.find(p => p.id === projectId);
                openProjectModal(project);
            });
        });
    }

    // --- Modal Functions ---
    function openProjectModal(project) {
        modalBody.innerHTML = `
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-category">${project.category}</p>
            <img src="${project.image}" alt="${project.title}" class="modal-hero-img">
            <div class="modal-grid">
                <div>
                    <h4 class="modal-heading">Project Overview</h4>
                    <p class="modal-description">${project.fullDesc}</p>
                </div>
                <div>
                    <h4 class="modal-heading">Technologies</h4>
                    <div class="modal-tech-list">
                        ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="modal-actions">
                <a href="${project.liveDemo || '#'}" target="_blank" rel="noopener noreferrer" class="btn">Live Demo</a>
                <a href="${project.github || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Github Repo</a>
            </div>
        `;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scroll
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

    // --- Init ---
    renderTimeline();
    renderSkills();
    renderProjects();

    // Smooth scroll for nav links (native scroll on mobile for reliable anchoring)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            const target = document.querySelector(href);
            if (!target) return;

            // Mobile: use native anchor jump — respects html scroll-padding
            if (window.matchMedia('(max-width: 768px)').matches) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  new SweetScroll({});
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 160,
        density: {
          enable: !0,
          value_area: 500
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !0,
        anim: {
          enable: !0,
          speed: 1,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 3,
        random: !0,
        anim: {
          enable: !1,
          speed: 4,
          size_min: .3,
          sync: !1
        }
      },
      line_linked: {
        enable: !1,
        distance: 150,
        color: "#ffffff",
        opacity: .4,
        width: 1
      },
      move: {
        enable: !0,
        speed: 1,
        direction: "none",
        random: !0,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !1,
          mode: "bubble"
        },
        onclick: {
          enable: !1,
          mode: "repulse"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: !0
  });

  function parseCvContent(cvContent) {
    try {
      // Extract summary
      const summaryRegex = /## SUMMARY\s*?\n\s*?\n(.*?)\s*?\n\s*?\n##/s;
      const summaryMatch = cvContent.match(summaryRegex);
      const summary = summaryMatch ? summaryMatch[1].trim() : "";

      // Extract education
      const educationRegex = /## EDUCATION\s*?\n\s*?\n(.*?)\s*?\n\s*?\n##/s;
      const educationMatch = cvContent.match(educationRegex);
      const education = educationMatch ? educationMatch[1].trim() : "";

      // Extract projects
      const projectsRegex = /## PROJECTS\s*?\n\s*?\n(.*?)\s*?\n\s*?\n##/s;
      const projectsMatch = cvContent.match(projectsRegex);
      const projects = projectsMatch ? projectsMatch[1].trim() : "";

      // Extract skills
      const skillsRegex = /## SKILLS\s*?\n\s*?\n(.*?)(?:\n##|\s*$)/s;
      const skillsMatch = cvContent.match(skillsRegex);
      const skills = skillsMatch ? skillsMatch[1].trim() : "";

      // Update user description
      const userDescriptionElement = document.querySelector(".user-details p");
      if (userDescriptionElement) {
        userDescriptionElement.textContent = summary;
      }

      // Update education list
      const educationList = document.getElementById("education-list");
      if (educationList) {
        educationList.innerHTML = education.split('\n\n').map(item => `<li>${item}</li>`).join('');
      }

      // Update project list
      const projectList = document.getElementById("project-list");
      if (projectList) {
        projectList.innerHTML = projects.split('\n\n').map(item => `<li>${item}</li>`).join('');
      }

      // Update skills container
      const skillsContainer = document.getElementById("skills-container");
      if (skillsContainer) {
        skillsContainer.innerHTML = skills.split('\n\n').map(item => `<p>${item}</p>`).join('');
      }
    } catch (error) {
      console.error("Error parsing cvContent:", error);
    }
  }

  if (typeof cvContent !== 'undefined') {
    parseCvContent(cvContent);
  }
}, !1);
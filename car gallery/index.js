document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
    const modal = document.getElementById("car-details-modal");
    const closeBtn = document.querySelector(".close-btn");
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("header nav");
  
    // Burger menu toggle
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      nav.classList.toggle("active");
    });
  
    // Close the menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  
    // Event listener for navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        sections.forEach((section) => section.classList.add("hidden"));
        target.classList.remove("hidden");
      });
    });
  
    // Embed the JSON data directly in JS
    // I use cloudinary.com to store all my image and video files 
    const carData = [
      {
        name: "Dodge SRT",
        images: [
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949063/srt1_kg4q5y.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949061/srt2_j9kvit.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949059/srt3_eatxck.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949059/srt4_e2lhio.jpg",
        ],
        description:
          "The Dodge SRT is a high-performance sports car known for its raw power and aggressive styling.",
        engine: "V8 Engine, 707 hp",
        location: "123 Speedway Ave, Amsterdam",
      },
      {
        name: "Chevrolet Camaro",
        images: [
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949055/camaro1_o9qnjx.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949060/camaro2_y2ogpp.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949056/camaro3_gpyinc.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949056/camaro4_t9uujd.jpg",
        ],
        description:
          "The Chevrolet Camaro offers a perfect mix of speed, design, and driving experience.",
        engine: "V6 Engine, 335 hp",
        location: "456 Muscle St, Utrecht",
      },
      {
        name: "Ford Mustang",
        images: [
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949066/gt1_x7ccxy.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949063/gt2_gmdizc.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949065/gt3_udih4s.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949066/gt5_teccdx.jpg",
        ],
        description:
          "The Ford Mustang is an iconic American muscle car with a legendary design.",
        engine: "V8 Engine, 450 hp",
        location: "789 Muscle Ave, Rotterdam",
      },
      {
        name: "Nissan GTR",
        images: [
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949065/gtr1_v8ymqq.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949069/gtr2_juk0kq.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949068/gtr3_dhkvr0.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949072/gtr4_h6gpg5.jpg",
        ],
        description:
          "The Nissan GTR is a high-performance sports car from Japan, known for its technology and speed.",
        engine: "V6 Engine, 565 hp",
        location: "1010 Racer Blvd, Utrecht",
      },
      {
        name: "Porsche 911",
        images: [
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949077/911_1_cd0ugm.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949071/911_2_hcyqlq.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949070/911_3_d5z8tr.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949073/911_4_fwbtaf.jpg",
        ],
        description:
          "The Porsche 911 is a luxury sports car with a timeless design and exceptional driving dynamics.",
        engine: "Flat-6 Engine, 379 hp",
        location: "1111 Prestige Rd, Den Hag",
      },
      {
        name: "Toyota Supra",
        images: [
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949081/supra1_yxmodh.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949080/supra2_ame7bs.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949087/supra5_y4ldou.jpg",
          "https://res.cloudinary.com/dvogj6wt8/image/upload/v1735949079/supra4_lbeuxp.jpg",
        ],
        description:
          "The Toyota Supra is a legendary sports car that combines incredible performance and reliability.",
        engine: "Inline-6 Engine, 335 hp",
        location: "1212 Turbo Way, Amsterdam",
      },
    ];
  
    const carCardsContainer = document.querySelector(".car-container");
  
    // Loop through the car data and create car cards dynamically
    carData.forEach((car, index) => {
      const carCard = document.createElement("div");
      carCard.classList.add("car-card");
  
      const carImage = document.createElement("img");
      carImage.src = car.images[0]; // Set the first image as default
      carImage.alt = car.name;
  
      const carTitle = document.createElement("h3");
      carTitle.textContent = car.name;
  
      const moreDetailsBtn = document.createElement("button");
      moreDetailsBtn.classList.add("more-details-btn");
      moreDetailsBtn.textContent = "More Details";
  
      const bookVisitBtn = document.createElement("button");
      bookVisitBtn.classList.add("book-visit-btn");
      bookVisitBtn.textContent = "Book a Visit";
  
      carCard.appendChild(carImage);
      carCard.appendChild(carTitle);
      carCard.appendChild(moreDetailsBtn);
      carCard.appendChild(bookVisitBtn);
      carCardsContainer.appendChild(carCard);
  
      // Hover functionality to change images
      let hoverIndex = 0;
      let intervalId;
      carImage.addEventListener("mouseover", () => {
        intervalId = setInterval(() => {
          hoverIndex = (hoverIndex + 1) % car.images.length;
          carImage.src = car.images[hoverIndex];
        }, 1000); // Change image every 1000 milliseconds
      });
  
      carImage.addEventListener("mouseout", () => {
        clearInterval(intervalId); // Stop the image change loop
        carImage.src = car.images[0]; // Revert to the first image
      });
  
      // More details button functionality
      moreDetailsBtn.addEventListener("click", () => {
        document.getElementById("car-name").textContent = car.name;
        document.getElementById("car-image").src = car.images[0]; // Show first image in modal
        document.getElementById("car-description").textContent = car.description;
        document.getElementById("car-engine").textContent = car.engine;
        document.getElementById("car-location").textContent = car.location;
        modal.style.display = "block"; // Show modal
      });
  
      // Book a Visit button functionality
      bookVisitBtn.addEventListener("click", () => {
        const bookingSection = document.getElementById("booking");
        sections.forEach((section) => section.classList.add("hidden"));
        bookingSection.classList.remove("hidden");
      });
    });
  
    // Close modal when close button is clicked
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none"; // Close modal
    });
  
    // Close modal when clicking outside the modal content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none"; // Close modal
      }
    });
  
    // result modal
    const resultModal = document.getElementById("result-overlay");
  
    //  booking
    const bookingModal = document.getElementById("booking");
    const bookingLink = document.querySelector('a[href="#booking"]'); // Contact link in the navbar
    let bookingForm = document.getElementById("booking-form");
  
    // Open the contact modal when the Contact link is clicked
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the default link behavior
      console.log('lllll');
      bookingModal.classList.add("hidden"); // Show the modal
      resultModal.classList.remove("hidden"); // Show the modal
      setTimeout(() => {
        resultModal.classList.add("hidden");
        const homeSection = document.getElementById("home");
        sections.forEach((section) => section.classList.add("hidden"));
        homeSection.classList.remove("hidden");
      }, 3000);
    });
  
    // Booking page - Back to Home functionality
    const backToHomeButton = document.getElementById("back-to-home");
    backToHomeButton.addEventListener("click", () => {
      const homeSection = document.getElementById("home");
      sections.forEach((section) => section.classList.add("hidden"));
      homeSection.classList.remove("hidden");
    });
  
    // Booking page - Back to Home functionality
    const bookSubmitButton = document.getElementById("book-submit-btn");
    backToHomeButton.addEventListener("click", () => {
      const homeSection = document.getElementById("home");
      sections.forEach((section) => section.classList.add("hidden"));
      homeSection.classList.remove("hidden");
    });
  
    // Contact Modal functionality
    const contactModal = document.getElementById("contact-overlay");
    const closeContactBtn = document.getElementById("close-contact"); // Close button for contact modal
    const contactLink = document.querySelector('a[href="#contact-overlay"]'); // Contact link in the navbar
  
    // Open the contact modal when the Contact link is clicked
    contactLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the default link behavior
      contactModal.classList.remove("hidden"); // Show the modal
    });
  
    // Close the contact modal when the Close button is clicked
    closeContactBtn.addEventListener("click", () => {
      contactModal.classList.add("hidden"); // Hide the modal
  
      // After closing the contact modal, show the Home page
      const homeSection = document.getElementById("home");
      sections.forEach((section) => section.classList.add("hidden"));
      homeSection.classList.remove("hidden");
    });
  
    // Close the contact modal when clicking outside the modal content
    window.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.classList.add("hidden"); // Hide the modal
  
        // After closing the contact modal, show the Home page
        const homeSection = document.getElementById("home");
        sections.forEach((section) => section.classList.add("hidden"));
        homeSection.classList.remove("hidden");
      }
    });
  });
  
  let dateInput = document.getElementById("start-date");
  dateInput.min = new Date()
    .toISOString()
    .slice(0, new Date().toISOString().lastIndexOf(":"));
  
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('navbar');
menuIcon.onclick=() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top>=offset && top <offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.srollY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200

});
// ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
// ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin:'bottom' });
// ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
// ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });





const  typedElement = document.getElementById('typed-text');
const typed = new Typed(typedElement, {
  strings: ['Front-end Developer.'],
  typeSpeed: 50,
  loop: true
});



  document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Collect the form data
    var formData = new FormData(this);
    
    // Send the form data to the server-side script
    fetch('send_email.php', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      // Handle the response from the server
      // Display a success message or perform any other desired actions
    })
    .catch(function(error) {
      // Handle errors, if any
    });
  });
  
  const nodemailer = require('nodemailer');

// Create a transporter for sending the email
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password'
  }
});


// Handle the form submission and send the email
app.post('/send_email', (req, res) => {
  const { name, email, message } = req.body;

  // Configure the email content
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient_email@example.com',
    subject: 'New Message from Website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.sendStatus(500);
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200);
    }
  });
});







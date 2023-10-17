document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        const name = form.querySelector('[placeholder="Name"]').value;
        const email = form.querySelector('[placeholder="Email"]').value;
        const number = form.querySelector('[placeholder="Number"]').value;
        const message = form.querySelector('textarea').value;

        // Create a JSON object to send to the server
        const data = {
            name: name,
            email: email,
            number: number,
            message: message,
        };

        // Send data to the server using Fetch API
        fetch("/email.php", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Message sending failed. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
    });
});


let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1 ');
let cursor2= document.querySelector('.cursor-2 ');

window.onmousemove = () => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseenter = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
    
})

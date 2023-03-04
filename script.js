let events = [
    {
        "title": "événement exemple",
        "date": "2022-03-20",
        "description": "Description du troisième événement."
    },
    {
        "title": "événement exemple",
        "date": "2022-02-15",
        "description": "Description du deuxième événement."
    },
    {
        "title": "événement exemple",
        "date": "2022-01-10",
        "description": "Description du premier événement."
    },
];

let timeline = document.querySelector('.wrapper');

// Afficher les événements existants
showEvents();

// Ajouter un événement à la timeline
let eventForm = document.getElementById('event-form');
eventForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let eventTitle = document.getElementById('event-title').value;
    let eventDate = document.getElementById('event-date').value;
    let eventDescription = document.getElementById('event-description').value;
    let event = {
        "title": eventTitle,
        "date": eventDate,
        "description": eventDescription
    };
    events.push(event);
    events.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    showEvents();
    eventForm.reset();
});

function showEvents() {
    timeline.innerHTML = '';
    let centerLine = document.createElement('div');
    centerLine.classList.add('center-line');
    centerLine.innerHTML += '<a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>';
    timeline.appendChild(centerLine);
    for (let i = 0; i < events.length; i++) {
        let rowClass = i % 2 === 1 ? 'row row-2' : 'row row-1';
        let event = document.createElement('article');
        event.innerHTML = '<i class="icon fas fa-calendar"></i>' +
            '<div class="details">' +
            '<span class="title">' + events[i].title + '</span>' +
            '<span class="date">' + formatDate(events[i].date) + '</span>' +
            '</div>' +
            '<p class="description">' + events[i].description + '</p>' +
            '<div class="bottom">' +
            '<a href="#">Read more</a>' +
            '<i>- Someone famous</i>' +
            '</div>';
        timeline.innerHTML += '<div class="' + rowClass + '">' + event.outerHTML + '</div>';
    }
}

// Formater la date au format 'jour mois année'
function formatDate(date) {
    let dateObj = new Date(date);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString('fr-FR', options);
}

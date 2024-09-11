$(document).ready(function () {
    // Basic dynamic projects list
    const projects = ['TimeSaver Extension for Chrome'];

    projects.forEach(project => {
        $('#projects-list').append(`<li>${project}</li>`);
    });
});

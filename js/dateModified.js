function lastModified() {
    document.getElementById('dateModified').innerHTML = `Date Modified: ${document.lastModified}`;
    document.getElementById('year').innerHTML = new Date().getFullYear();
}
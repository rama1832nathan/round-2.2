let currentContainer = 1;
const totalContainers = 2;

function navigate(direction) {
    document.getElementById('container' + currentContainer).style.display = 'none';
    currentContainer += direction;
    document.getElementById('container' + currentContainer).style.display = 'block';
    document.getElementById('prevBtn').disabled = currentContainer === 1;
    document.getElementById('nextBtn').disabled = currentContainer === totalContainers;
}

// Select all path elements from the SVG
const paths = document.querySelectorAll('path');

// Function to animate the paths
function animate() {
    const time = performance.now() / 1000; // current time in seconds

    paths.forEach((path, index) => {
        // Calculate the y offset based on index and current time
        const xOffset = Math.sin(index / 8 + time) * 5;

        // Apply the transform to the path
        path.setAttribute('transform', `translate(0, ${xOffset})`);
    });

    // Request the next animation frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();

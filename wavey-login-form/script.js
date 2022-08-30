// Create a node list of all the labels from the querySelectorAll
const labels = document.querySelectorAll('.form-control label');

// Loop through node list and assign each letter in the label into and array and map through each letter with a span around it and in line styling for the transition delay
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style='transition-delay:${idx * 100}ms'>${letter}</span>`
    )
    .join('');
});

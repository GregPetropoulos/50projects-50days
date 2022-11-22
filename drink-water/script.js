const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// ONLOAD
updatedBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highLightCups(idx));
});

function highLightCups(idx) {
  //TO TOGGLE LAST FULL CUP
  //  IF THE CUP IS FULL AND THE NEXT ONE IS NOT FULL,WHEN CLICKED THEN REMOVE THE FULL STYLE
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  // IF A CUP IS CLICKED ON AND LESS THAN THE CURRENT INDEX IN THIS LOOP ADD THE FULL STYLES
  smallCups.forEach((cup, idx2) => {
    idx2 <= idx ? cup.classList.add('full') : cup.classList.remove('full');
  });
  updatedBigCup();
}

function updatedBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    // FILLING THE BIG CUP LOGIC BY HEIGHT AND VISIBILITY
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  //   IF THE BIG CUP IS FULL REMOVE THE REMAINED TEXT
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    // MATH FOR THE REMAINING DIFFERENCE OF 2 LITERS
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}

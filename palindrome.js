const textInput = document.getElementById("text-input");
const checkPalindromeButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (input) => {
 const userInput = input;
  
  if (userInput===''){
    alert("Please input a value");
    return;
  }

  result.replaceChildren();
  result.classList.remove('hidden');

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${userInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  result.appendChild(pTag);

    
}

checkPalindromeButton.addEventListener('click', () => {
  checkPalindrome(textInput.value);
  textInput.value = '';
});

textInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    checkPalindrome(textInput.value);
    textInput.value = '';
  }
});

document.querySelector('#credit_card_result').parentNode.innerHTML += `
<a class="copy-to-clipboard" onclick="copyCreditCardToClipboard(this)" title="Copy to clipboard">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 210.107 210.107"
        style="enable-background:new 0 0 210.107 210.107;" xml:space="preserve">
        <g>
            <path d="M168.506,0H80.235C67.413,0,56.981,10.432,56.981,23.254v2.854h-15.38
                c-12.822,0-23.254,10.432-23.254,23.254v137.492c0,12.822,10.432,23.254,23.254,23.254h88.271
                c12.822,0,23.253-10.432,23.253-23.254V184h15.38c12.822,0,23.254-10.432,23.254-23.254V23.254C191.76,10.432,181.328,0,168.506,0z
                M138.126,186.854c0,4.551-3.703,8.254-8.253,8.254H41.601c-4.551,0-8.254-3.703-8.254-8.254V49.361
                c0-4.551,3.703-8.254,8.254-8.254h88.271c4.551,0,8.253,3.703,8.253,8.254V186.854z M176.76,160.746
                c0,4.551-3.703,8.254-8.254,8.254h-15.38V49.361c0-12.822-10.432-23.254-23.253-23.254H71.981v-2.854
                c0-4.551,3.703-8.254,8.254-8.254h88.271c4.551,0,8.254,3.703,8.254,8.254V160.746z" />
        </g>
    </svg>
    <span>Copied!</span>
</a>
`

document.querySelectorAll('.credit-card-inputs input').forEach(input => {
    input.addEventListener('input', () => {
        const creditCardInput = document.getElementById("credit_card_result");

        if (creditCardInput.value.length === 16) {
            document.querySelector(".copy-to-clipboard").classList.add("isComplete");
        } else {
            document.querySelector(".copy-to-clipboard").classList.remove("isComplete");
        }
    })
})

// copy credit card to clipboard
function copyCreditCardToClipboard(element) {
    const copyText = document.getElementById("credit_card_result");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    element.querySelector('span').classList.add('show');

    setTimeout(function () {
        element.querySelector('span').classList.remove('show');
    }, 1500);
}
// Executes when site is finished loading
document.addEventListener("DOMContentLoaded", () => {
    // Gets all element with *id* 'card-openurl'
    const $cards_openurl = document.querySelectorAll("#card-openurl");

    $cards_openurl.forEach((el) => {
        // Add event listener for clicking
        el.addEventListener("click", () => {
            const target = el.dataset.url;
            window.open(target);
        })
    })

    // Gets all element with *id* 'card-copytext'
    const $cards_copytext = document.querySelectorAll("#card-copytext")

    $cards_copytext.forEach((el) => {
        // Add event listener for clicking
        el.addEventListener("click", () => {
            const target = el.dataset.text;           
            CopyToClipboard(target);
        })
    })
})

/**
 * Copies text to clipboard
 * @param {string} text 
 */
function CopyToClipboard(text) {
    // creates textbox
    const input = document.createElement("input");

    // set value of textbox to text
    input.value = text;

    // adds it to body
    document.body.appendChild(input);

    // selects text
    input.select();
    input.setSelectionRange(0, 99999);

    // write to clipboard
    navigator.clipboard.writeText(input.value);

    // remove the child (not like that)
    document.body.removeChild(input);

    ShowToast("Text copied to clipboard");
    return;
}

/**
 * Shows toast
 * @param {string} message
 */
function ShowToast(message) {
    // gets div element
    const $toast = document.getElementById('snackbar');

    // sets inner html to message
    $toast.innerHTML = message;

    // toggles class "show"
    $toast.classList.toggle("show");

    // sets a timer for 3 seconds
    setTimeout(() => {
        // toggles class "show"
        $toast.classList.toggle("show");
    }, 3000);
}


// blob

const blob = document.getElementById("blob2");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
}

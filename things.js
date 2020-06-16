const container = document.querySelector(".thingList")

document.querySelector("#saveThing").addEventListener("click", event => {
    // Target the form entry fields
    const thingName = document.querySelector("#name")
    const thingLocation = document.querySelector("#location")

    // Check for completed fields
    if (thingName.value !== "" && thingLocation.value !== "") {
        // Render 'thing' form values to the DOM
        container.innerHTML += `
            <section class="thingEntry">
                <p>I can purchase ${thingName.value} at ${thingLocation.value}</p>
            </section>`

        // Clear the form fields and reset autofocus
        thingName.outerHTML = `<input type="text" id="name" placeholder="Enter a thing" autofocus />`
        thingLocation.outerHTML = `<input type="text" id="location" placeholder="Enter location where thing can be purchased" />`
    } else {
        window.alert("Please fill in all blanks")
    }
})
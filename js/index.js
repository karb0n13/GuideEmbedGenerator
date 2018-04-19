function processForm(e) {
    //Actions in here are preformed when Submit button is pressed
    if (e.preventDefault) e.preventDefault();
    var cb = document.getElementById("codebox");
    var outCode = document.getElementById("outputcode");
    var sEmbed = ">embed ";

    //set author
    if (document.getElementById("element_1").value === "") {
        alert("You must enter an author");
        return false;
    } else {
        sEmbed =
            sEmbed + "author=" + document.getElementById("element_1").value + " | ";
    }

    //set title
    if (document.getElementById("element_2").value === "") {
        alert("You must enter a title");
        return false;
    } else {
        sEmbed =
            sEmbed + "title=__**" + document.getElementById("element_2").value + "**__ | ";
    }

    //set thumbnail
        sEmbed = sEmbed + "thumbnail=" + $("input[type='radio'][name='element_1']:checked").val() + " | ";

    //set description
    if (document.getElementById("element_4").value === "") {
        alert("You must enter a description");
        return false;
    } else {
        sEmbed =
            sEmbed +
            "description=" +
            document.getElementById("element_4").value +
            " | ";
    }

    //set guide url
    if (document.getElementById("element_8").value === "") {
        alert("You must enter a Guide URL");
        return false;
    } else {
        sEmbed = sEmbed + "field=name=_ value=[Click Here to View Guide...](" + document.getElementById("element_8").value + ") | ";
    }

    //set tags
    var inpfields = document.getElementsByTagName("input");
    var nr_inpfields = inpfields.length;
    var tags = null;
    for (var i = 0; i < nr_inpfields; i++) {
        if (inpfields[i].type == "checkbox" && inpfields[i].checked === true) {
            if (tags === null) { tags = ''; }
            tags = tags + "#" + inpfields[i].value + " ";
        }
    }
    if (tags !== null) {
        sEmbed = sEmbed + "footer=" + tags;
    }

    //output to the text area
    cb.innerHTML = sEmbed;
    outCode.style.display = "block";
    // You must return false to prevent the default form behavior
    return false;
}

var form = document.getElementById("form_74898");
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}
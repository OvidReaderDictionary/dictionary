function search() {
    // Declare variables
    var input, filter, dictionary, word, a, i, txtValue;
    input = document.getElementById('search_term');
    filter = input.value.toUpperCase();
    dictionary = document.getElementById("dictionary");
    word = dictionary.getElementsByTagName('li');

    // Loop through all wordst items, and hide those who don't match the search query
    for (i = 0; i < word.length; i++) {
        a = word[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            word[i].style.display = "";
        } else {
            word[i].style.display = "none";
        }
    }
}

function add_dictionary_entry(entry) {
    // <li class="list-group-item"><a href="#">Porta ac consectetur ac</a></li>

    var dictionary = document.getElementById('dictionary');

    var li = document.createElement('li');
    li.classList.add("list-group-item");

    var a = document.createElement('a');
    a.href = "#";
    a.innerHTML = entry;

    li.appendChild(a);
    dictionary.appendChild(li);
}

function populate() {
    add_dictionary_entry("bob");
    add_dictionary_entry("alice");
    add_dictionary_entry("some more random stuff");
}

populate();
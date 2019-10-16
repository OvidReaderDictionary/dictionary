function search() {
    var input, filter, dictionary, words, a, i, txtValue;
    input = document.getElementById('search_term');
    filter = input.value.toUpperCase();
    dictionary = document.getElementById("dictionary");
    words = dictionary.getElementsByTagName('li');

    // Workaround: just display the next few items in the search
    for (i = 0; i < words.length; i++) {
        a = words[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            words[i].style.display = "";
        } else {
            words[i].style.display = "none";
        }
    }
}

function add_dictionary_entry(entry, position) {
    // <li class="list-group-item"><a href="#">Porta ac consectetur ac</a></li>

    var dictionary = document.getElementById('dictionary');

    var li = document.createElement('li');
    li.classList.add("list-group-item");

    var a = document.createElement('a');
    a.href = "#";
    a.id = (position + "");
    a.innerHTML = entry;

    li.appendChild(a);
    dictionary.appendChild(li);
}

function populate(file) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", file, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var dictionary = xhr.responseText;

                var lines = dictionary.split(/\r?\n/);
                for (var i = 0; i < lines.length; i++) {
                    add_dictionary_entry(lines[i], i);
                }
                
            } else {
                console.error(xhr.statusText);
            }
        }
    };

    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };

    xhr.send(null);
}

populate("dictionary.txt");
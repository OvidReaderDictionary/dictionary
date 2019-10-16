function search() {
    var input, filter, dictionary, word, a, i, txtValue;
    input = document.getElementById('search_term');
    filter = input.value.toUpperCase();
    dictionary = document.getElementById("dictionary");
    word = dictionary.getElementsByTagName('li');

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

function populate(file) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", file, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var dictionary = xhr.responseText;

                var lines = dictionary.split(/\r?\n/);
                for (var i = 0; i < lines.length; i++) {
                    add_dictionary_entry(lines[i]);
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
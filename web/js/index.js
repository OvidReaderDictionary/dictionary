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

function read_file(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                // alert(allText);
                return allText;
            }
        }
    }
}

function read_file_async(file) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", file, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
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

var text = read_file("http://mattnappo.com/dictionary/static/dictionary.txt");
// var text = read_file_async("final.txt");

console.log(text);

populate();
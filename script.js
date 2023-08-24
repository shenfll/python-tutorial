function highlight(element) {
    var regexes = [
        {
            color: "green",
            regex: /#.*/g
        },
        {
            color: "deeppink",
            regex: /(?:""".*?""")|(?:'''.*?''')/gms
        },
        {
            color: "deeppink",
            regex: /(?:".*?")|(?:'.*?')/g
        },
        {
            color: "royalblue",
            regex: /(?<=\W|^)(?:while|def|True|False|import|if|else|from|return|len|str|if|in|float|abs|round|global|pass|and|range|raise|print|sum)(?=\W|$)/g
        },
        {
            color: "grey",
            regex: /[\[\]\(\)]/g
        },
        {
            color: "orange",
            regex: /-?\d+(?:\.\d+)?/g
        }
    ];
    var main = /(<\/.*?>|^)([^<>]*?)(<.*?>|$)/g;
    for (regex of regexes) {
        for (match of element.innerHTML.matchAll(main)) {
            element.innerHTML = element.innerHTML.replaceAll(match[0], match[1] + match[2].replaceAll(regex.regex, `<span style="color: ${regex.color};">$&</span>`) + match[3]);
        }
    }
}

window.onload = async function () {
    sanitized = (await (await fetch("page.md")).text()).replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    var html = "";
    var block = false;
    var regex = /`(.+?)`/g;
    var newline = /\s\s+$/;
    var link = /\[(.+)\]\((.+)\)/g;
    for (line of sanitized.split("\n")) {
        if (line.startsWith("```")) {
            if (block == false) {
                html += "<pre><code>";
            } else {
                html += "</code></pre>";
            }
            block = !block;
        } else if (block == false) {
            if (line.startsWith("###")) {
                html += "<h3>" + line.substring(4) + "</h3>";
            } else if (line.startsWith("##")) {
                html += "<h2>" + line.substring(3) + "</h2>";
            } else if (line.startsWith("#")) {
                html += "<h1>" + line.substring(2) + "</h1>";
            } else {
                html += line.replaceAll(regex, "<code>$1</code>").replace(newline, "<br />").replaceAll(link, `<a href="$2" target="_blank">$1</a>`);
            }
        } else {
            html += line;
        }
    }
    document.getElementById("content").innerHTML = html;
    var elements = document.getElementsByTagName("code");
    for (var i = 0; i < elements.length; i++) {
        highlight(elements.item(i));
    }
}
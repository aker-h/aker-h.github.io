javascript:(function(d){
    var copiedText = "hello world!";

    var storeName = d.getElementById ("cas4_ilecell").textContent;
    var userName = d.getElementById ("00N10000001k9KD_ileinner").textContent;
    var shortDescription = d.getElementById ("00N10000001k8tE_ileinner").textContent;
    var longDescription = d.getElementById ("00N10000001k8t9_ilecell").textContent;

    copiedText = location.href + "\n" + storeName + " " + userName + "様\n" + shortDescription;

    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = copiedText;
    var bodyElm = d.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);
    copyFrom.select();
    d.execCommand('copy');
    bodyElm.removeChild(copyFrom);
    
    alert('copied :\n' + copiedText);
})(document);

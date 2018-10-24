function update_tags(name) {
    var entry=document.getElementById(name).previousSibling;
    var result=document.getElementById(name+"result");
    result.value="";
    tags=[];
    do {
        tags.push(entry.innerHTML);
        entry=entry.previousSibling;
    } while (entry != null && entry.className=="btn btn-secondary mr-2 mb-1 mt-1");
    result.value=tags.reverse().join(';');
}
function remove(id,name) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
    update_tags(name);
}
function addTag(e,name) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    var entry=document.getElementById(name);
    entry.value=entry.value.toLowerCase();
    if (keyCode == '8' && entry.value.length==0) {
        if (entry.previousSibling.className=="btn btn-secondary mr-2 mb-1 mt-1") {
            entry.previousSibling.parentNode.removeChild(entry.previousSibling);
        }
        return;
    } 
    if (keyCode != '13' || !/^[a-z\-]+$/.test(entry.value) || document.getElementById(name+"_"+entry.value) != null) {
        return;
    }
    var id;
    var btn = document.createElement("label");
    var t = document.createTextNode(entry.value);
    btn.appendChild(t);
    btn.setAttribute("id",name+"_"+entry.value);
    btn.className="btn btn-secondary mr-2 mb-2 mt-1";
    btn.setAttribute("onclick","remove('"+name+"_"+entry.value+"','"+name+"')");
    entry.parentNode.insertBefore(btn, entry);
    entry.value=""
    update_tags(name);
}


    function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function store()

{
    if (typeof(Storage) !== "undefined") 
        
    {
        // Store
        localStorage.setItem("", "Ssdfg");
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } 
    
    
    else
        
    {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

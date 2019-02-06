
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
        var nameOfIdeator= document.getElementById("nameOfIdeator");
        var ideaGiven = document.getElementById("ideaGiven");
        
        var user={
        
            name: nameOfIdeator,
            idea: ideaGiven
            
        }
        
        console.log(user);
        
        // Store
        localStorage.setItem('user', 'user');
        
            
        }

        // Retrieve
        
    } 
    
    
    else
        
    {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

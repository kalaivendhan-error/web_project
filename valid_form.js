var sbt_btn=document.querySelector("#sbt-btn")
sbt_btn.addEventListener('click', (e) =>{
    var ip_name=document.querySelector("#name")
    var number=document.querySelector("#number")
    var email=document.querySelector("#email")
    var pass=document.querySelector("#password")
    var c_pass=document.querySelector("#c-password")
    var form=document.querySelector("#form")


    if (ip_name.value.trim()==''){
        e.preventDefault()
        var name_parent=ip_name.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent="name is required"
    }else if(ip_name.value.trim()!=""){
        var name_parent=ip_name.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent=" "
    }


    if (number.value.trim()==''){
        e.preventDefault()
        var name_parent=number.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent="number is required"
    } else if(number.value.length<10){
        e.preventDefault()
        var name_parent=number.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent="number contains atleast 10 number"
    }else{
        var name_parent=number.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent=" "
    }


    if (email.value.trim()==''){
        e.preventDefault()
        var name_parent=email.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent="email is required"
    }else{
        var name_parent=email.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent=" "
    }


    if (pass.value.trim()==''){
        e.preventDefault()
        var name_parent=pass.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent="password is required"
    }else if(pass.value.length<8){
        e.preventDefault()
        var name_parent=pass.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent="password contains atleast 8 characters long"
    }else{
        var name_parent=pass.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent=" "
    }

    if (c_pass.value.trim()==''){
        e.preventDefault()
        var name_parent=c_pass.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent="Please re-enter the password"
    }else if (c_pass.value.trim()!=pass.value){
        e.preventDefault()
        var name_parent=c_pass.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent="Password does not match"
    }else{
        var name_parent=c_pass.parentElement
        var new_p=name_parent.querySelector("p")
        new_p.textContent=" "
    }
    
} )


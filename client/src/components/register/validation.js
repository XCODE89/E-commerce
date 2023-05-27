const validation = (input) => {
    
    let errors = {}
    if (!input.name) {
        errors.name = "This field cannot be empty."
    } else if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input.name)) {
        errors.name = "Only should contain letters."
    }
    if (!input.lastname) {
        errors.lastname = "This field cannot be empty."
    } else if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input.lastname)) {
        errors.lastname = "Only should contain letters."
    }
    if (!input.country) {
        errors.country = "This field cannot be empty."
    }
    if (!input.city) {
        errors.city = "This field cannot be empty."
    }
    if (!input.email) {
        errors.email = "This field cannot be empty."
    } else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(input.email)) {
        errors.email = "Format not valid";
    }
    if (!input.nickname) {
        errors.nickname = "This field cannot be empty."
    }
    // if(allUsers.find(user=>user.name.toUpperCase()===input.name.toUpperCase())) {
    //     errors.nickname = "This nickname already exists"
    // }
    if (!input.password){
        errors.password = "This field cannot be empty."
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/.test(input.password)) {
        errors.password = "Password must contain: e.g. 'Abcd123@'"
    }
    return errors
}

export default validation
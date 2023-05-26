const validation = (input) => {
    
    let errors = {}
    if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input.name)) {
        errors.name = "Only should contain letters."
    }
    if (!input.name) {
        errors.name = "This field cannot be empty."
    }
    if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input.lastname)) {
        errors.lastname = "Only should contain letters."
    }
    if (!input.lastname) {
        errors.lastname = "This field cannot be empty."
    }
    if (!input.country) {
        errors.country = "This field cannot be empty."
    }
    if (!input.city) {
        errors.city = "This field cannot be empty."
    }
    if (!input.lastname) {
        errors.lastname = "This field cannot be empty."
    }
    if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{6,10})+$/.test(input.email)) {
        console.error = "Format not valid";
    }
    if (!input.nickname) {
        errors.nickname = "This field cannot be empty."
    }
    // if(allUsers.find(user=>user.name.toUpperCase()===input.name.toUpperCase())) {
    //     errors.nickname = "This nickname already exists"
    // }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/.test(input.password)) {
        errors.password = "Password must contain: e.g. 'Abcd123@'"
    }
}

export default validation
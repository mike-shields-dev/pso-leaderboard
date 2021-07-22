const formDataToObject = formData => {
    const formDataToObj = {}
    
    for(const entry of formData) {
        const [key, value] = [entry[0], entry[1]]
        formDataToObj[key] = value
    }
    return formDataToObj
}

export default formDataToObject
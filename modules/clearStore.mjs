const clearStore = () => {
    if(window.confirm("Are you sure you want to clear ALL data?\nthis action cannot be undone!")) {
        window.localStorage.clear()
    }
}

export default clearStore
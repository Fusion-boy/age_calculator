const findAge = () => {
    let birthYear = document.getElementById("birthYear").value;

    let year = new Date().getFullYear();

    let age = (year - birthYear);
    

    document.getElementById("result").value = `${age} Years Old.`;
}
// Write y code to fetch data
//task 1
async function fetchRandomUserData() {
    try{
        var response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];
        return{
            name: `${user.name.first} ${user.name.last}`,
            email:  user.email
        };
    }
    catch(error){
        console.log("Error:", error.message);
    }
};
fetchRandomUserData();
async function displayUserData() {
    try {
        const { name, email } = await fetchRandomUserData();
        console.log("the name is "+name+", and the email is "+email );
    } catch (error) {
        console.log("Error:",error.message);
    }
};
displayUserData()
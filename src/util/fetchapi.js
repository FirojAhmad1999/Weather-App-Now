
export const fetchApi = async (value) => {
    try {debugger;
        if (!value) {
            throw new Error('City name cannot be empty');
        }
    const url = `${process.env.REACT_APP_API_LINK}&q=${value}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok or City name is invalid');
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.log("Error:", error.message);
        return { error: error.message };  // Return error message to display on the UI
    }
}

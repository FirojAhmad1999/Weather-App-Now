const REACT_APP_API_KEY='26d7a94801b35990d2dd98e96fe30022'
const REACT_APP_API_LINK='https://api.openweathermap.org/data/2.5'

export const fetchApi = async (value) => {
    try {debugger;
        if (!value) {
            throw new Error('City name cannot be empty');
        }
    const url = `${REACT_APP_API_LINK}&q=${value}&units=metric&appid=${REACT_APP_API_KEY}`;
    
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City name is invalid');
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.log("Error:", error.message);
        return { error: error.message };  // Return error message to display on the UI
    }
}

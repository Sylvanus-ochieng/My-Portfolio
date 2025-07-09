import requests

def get_weather(city_name):
    api_key = "your_api_key_here"  # <-- we will replace this with a real API key soon!
    base_url = "http://api.openweathermap.org/data/2.5/weather"

    params = {
        'q': city_name,
        'appid': api_key,
        'units': 'metric'
    }

    response = requests.get(base_url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        print(f"Weather in {city_name}: {data['weather'][0]['description'].capitalize()}")
        print(f"Temperature: {data['main']['temp']}°C")
        print(f"Humidity: {data['main']['humidity']}%")
    else:
        print("Error fetching weather data!")

if __name__ == "__main__":
    city = input("Enter city name: ")
    get_weather(city)

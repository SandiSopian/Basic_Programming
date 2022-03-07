# Get IP and location from a URL
# Author: @Sandiss

import socket
list = socket.getaddrinfo('127.0.0.1', 8000)
from ip2geotools.databases.noncommercial import DbIpCity

url = input("insert a URL: ")
ip = socket.gethostbyname(url)
response = DbIpCity.get(ip, api_key='free')
print("IP:", ip)
print("City:", response.city)
print("Region:", response.region)
print("Country:", response.country)


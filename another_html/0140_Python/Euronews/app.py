
from bs4 import BeautifulSoup
import requests
import string

def print_match(match):
    for element in match:
        element = element.text
        element = element.lstrip()
        element = element.rstrip()
        try:    
            print(element)
        except:
            UnicodeEncodeError
    
res = requests.get('https://www.euronews.com/')
soup = BeautifulSoup(res.text, 'lxml')

match = soup.find_all('h1', {'class': 'm-object__title'})
print_match(match)

match = soup.find_all('li', {'class': 'm-object__related__article'})
print_match(match)
    
match = soup.find_all('h3', {'class': 'm-object__title'})
print_match(match)

match = soup.find_all('a', {'class': 'm-object__title__link'})
print_match(match)

match = soup.find_all('a', {'class': 'm-object__title__link '})
print_match(match)




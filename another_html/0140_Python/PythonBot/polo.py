import requests, json
from config import polo_key, polo_secret

def piblic_method(command):
	url = 'https://poloniex.com/public?command={0}'.format(command)
	api = requests.get(url)
	data = json.loads(api.text)

	return data

def main():
	print(piblic_method('returnTicker')) 

if __name__ == '__main__':
	main()
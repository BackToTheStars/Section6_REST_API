import requests, json
from config import polo_key, polo_secret

def piblic_method(command):
	url = 'https://poloniex.com/public?command={0}'.format(command)
	api = requests.get(url)
	data = json.loads(api.text)
	return data

def main():
	print(piblic_method('returnOrderBook&currencyPair=BTC_NXT&depth=10')) 
		# returnTicker       - works
		# return24Volume     - error, invalid command
		# returnOrderBook    - specify a currency pair  returnOrderBook&currencyPair=BTC_NXT&depth=10
		# returnTradeHistory - specify a currency pair
		# returnChartData    - specify a valid period
		# returnCurrencies   - works
		# returnLoanOrders   - you must specify a currency 

if __name__ == '__main__':
	main()




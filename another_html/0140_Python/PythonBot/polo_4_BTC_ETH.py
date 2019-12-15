
import requests, json

def poloniex():
	url  = 'https://poloniex.com/public?command=returnTicker'    # public method
	api  = requests.get(url)
	data = json.loads(api.text)
	return data

def bittrex():
	url  = 'https://bittrex.com/api/v1.1/public/getmarketsummaries'
	api  = requests.get(url)
	data = json.loads(api.text)
	return data

def main():
	polo = poloniex()
	bitt = bittrex()

	print(bitt)

#	for i in polo.keys():
#		if 'USDT' in i:
#			print i, "= ", polo[i]['last'], "USD"
#		if 'USDT_BTC' in i:
#			print i, "= ", polo[i]['last'], "USD"       # print key and its value
#		if 'USDT_ETH' in i:
#			print i, "=   ", polo[i]['last'], "USD"
	print 

if __name__ == '__main__':
	main()




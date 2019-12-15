
import requests, json

def poloniex():
	url = 'https://poloniex.com/public?command=returnTicker'    # public method
	api = requests.get(url)
	data = json.loads(api.text)
	return data

def main():
	polo = poloniex()

	for i in polo.keys():
		# print(i)
		if 'USDT_BTC' in i:
			print i, "  Bitcoin =", polo[i]['last'], "USD"       # print key value
		if 'USDT_ETH' in i:
			print i, "  Ethereum =", polo[i]['last'], "USD"
	print 

if __name__ == '__main__':
	main()




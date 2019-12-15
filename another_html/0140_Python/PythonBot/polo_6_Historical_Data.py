import sys, getopt, requests, json, time

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

def main(argv):

	while True:
		polo = poloniex()          # data returned by requests.get & json.loads
		bitt = bittrex()           # data returned

		for i in bitt:                		# data structure - massive of dictionaries [{}, {}, {}, {}, ... {}]  
			if i == 'result':         		# 'message'   'result'     'success'
				for h in bitt[i]:     		# h - slovar'
					if 'USDT-BTC' in h['MarketName']:   # key in slovar dlya rynka USDT-BTC 
						print "Bittrex   USD/BTC = ", h["Last"]    # value of key "Last trade"
		
		for i in polo.keys():
			if 'USDT_BTC' in i:
				print "Poloniex  USD/BTC = ", polo[i]['last']       # print key and its value
		print 
		
		time.sleep(5)


#	print bitt['result'][1]["Ask"]
#	print
#	print bitt['result'][2]["Low"]
#	print
#	print bitt['result'][3]["Created"]
#	print
#	print bitt['result'][4]["PrevDay"]
#	print
#	print bitt['result'][5]["OpenSellOrders"]


if __name__ == "__main__":
	main(sys.argv[1:])


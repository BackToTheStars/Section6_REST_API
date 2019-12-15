import sys, requests, json, time
import numpy, scipy, matplotlib, pandas
import numpy, scipy, matplotlib, pandas    #added to learn
from bs4 import BeautifulSoup              #added to learn


def poloniex():
    url  = 'https://poloniex.com/public?command=returnTicker'    
    # public method
    api  = requests.get(url)
    data = json.loads(api.text)
    return data
    
def bittrex():
    url  = 'https://bittrex.com/api/v1.1/public/getmarketsummaries'
    api  = requests.get(url)
    data = json.loads(api.text)
    return data
    
def bitfinex():
    url = 'https://api.bitfinex.com/v1/pubticker/btcusd'
    api  = requests.get(url)
    data = json.loads(api.text)
    return data

def main(argv):
    counter = 0                       
    while True:
        counter = counter + 1
        polo = poloniex()
        bitt = bittrex()             # data returned
        # data returned by requests.get & json.loads
        bitfx = bitfinex()
        print(" Reading #", counter) 
        print(" Poloniex  USD/BTC =", polo['USDT_BTC']['last'])
        for i in bitt: # data structure - massive of dictionaries [{}, {}, {}, {}, ... {}]  
            if i == 'result':                           # 'message'   'result'   'success'
                for h in bitt[i]:                       # h - slovar'
                    if 'USDT-BTC' in h['MarketName']:   # key in slovar dlya rynka USDT-BTC 
                        print(" Bittrex   USD/BTC =", h["Last"]) # value of key "Last trade"
                        # print key and its value
        print(" Bitfinex  USD/BTC =", bitfx['last_price'])
        print()
        time.sleep(20)    
        # wait 20 seconds

if __name__ == "__main__":
	main(sys.argv[1:])
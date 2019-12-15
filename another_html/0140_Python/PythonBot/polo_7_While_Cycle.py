import sys, getopt, requests, json, time
from time import localtime, gmtime, strftime

###################################################### New part 
# Blah
import argparse
from argparse import ArgumentParser    ## Added
import os.path
import logging
import pandas as pd
from pprint import pprint
import sys
import requests
import os

# API 
import hmac
import time
import hashlib
from future.builtins import bytes 
from urllib import Requests  # changed from import urllib.request for Python3
import json

import talib as ta
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from matplotlib.lines import Line2D
from matplotlib.patches import Rectangle
from PIL import Image
###################################################################### End of the new part

def new_candles():   #new one
	url  = 'https://api.bitfinex.com/v2/candles/trade:1D:tBTCUSD/hist?limit=200'
	api  = requests.get(url)
	data = json.loads(api.text)
	return data

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

def bitfinex():
	url = 'https://api.bitfinex.com/v1/pubticker/btcusd'
	api  = requests.get(url)
	data = json.loads(api.text)
	return data

def gdax():
	url = 'https://api.gdax.com/products/BTC-USD/ticker'
	api  = requests.get(url)
	data = json.loads(api.text)
	return data

def bitstamp():
	url = 'https://www.bitstamp.net/api/v2/ticker/btcusd/'
	api  = requests.get(url)
	data = json.loads(api.text)
	return data

def main(argv):

	counter = 0                             # counter

	while True:
		polo     = poloniex()                # data returned by requests.get & json.loads
		bitt     = bittrex()                 # data returned
		bitfx    = bitfinex()
		gdx      = gdax() 
		btstmp   = bitstamp()
		data_set = new_candles()             #new
		counter  = counter + 1

############################################# new begin

	


############################################# new end

		print()

#		print strftime(" %H:%M:%S  %d %b %Y, %A", localtime())
		print(" Reading #", counter) 
        # , gmtime()), "GMT (Pacific = GMT-8:00)"
        # https://docs.python.org/3/library/time.html    - reference of "Time" library

		print(" Bitfinex  USD/BTC =", bitfx['last_price']) 
		print("               Bid =", bitfx['bid'], " Ask =", bitfx['ask'], " High =",bitfx['high'], " Low = ", bitfx['low'])

		print(" GDAX      USB/BTC =", gdx['price'])                 # commission buy / sell 0.25%

		print(" Bitstamp  USD/BTC =", btstmp['last'])

		for i in bitt:                   # data structure - massive of dictionaries [{}, {}, {}, {}, ... {}]  
			if i == 'result':         		                        # 'message'   'result'   'success'
				for h in bitt[i]:     		                        # h - slovar'
					if 'USDT-BTC' in h['MarketName']:               # key in slovar dlya rynka USDT-BTC 
						print(" Bittrex   USD/BTC =", h["Last"])    # value of key "Last trade"
		
		print(" Poloniex  USD/BTC =", polo['USDT_BTC']['last'])     # print key and its value

		# print

		time.sleep(15)                                               # wait 15 seconds

if __name__ == "__main__":
	main(sys.argv[1:])

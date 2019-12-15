import os
import time
import json
import sqlite3
import urllib, http.client
# эти модули нужны для генерации подписи API
import hmac, hashlib

from urllib.parse import urlparse
from datetime import datetime
from statistics import median

# ключи API, которые предоставил Poloniex
API_KEY = ''
# обратите внимание, что добавлена 'b' перед строкой
API_SECRET = b''

# Пары, по которым собираемся торговать
PAIRS = {
    'BTC_SC' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
     'BTC_NXT' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.005 Btc)
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 30, # За какой период брать среднюю цену (в минутах)
    },
    'BTC_NAUT' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_ETC' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_DCR' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_PASC' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_BCY' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_CLAM' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    
    'BTC_GNT' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_BTCD' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_NAV' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_NXC' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
   
    'BTC_PINK' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    
    'BTC_REP' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_SBD' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
  
    'BTC_BLK' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
     'BTC_VRC' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_XBC' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_XEM' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },
    'BTC_XMR' : {
        'ORDER_AMOUNT': '0.002', # Сколько валюты 1 использовать в ордере ( в данном случае, 0.002 Btc),
        'ORDER_LIFE_TIME': 3, # через сколько минут отменять неисполненный ордер на покупку CURR_1
        'PROFIT_MARKUP_DOWN': 0.001, # Какой навар нужен с каждой сделки при покупке (поверх комиссии)? (0.001 = 0.1%). Можно ставить 0
        'PROFIT_MARKUP_UP': 0.002, # Какой навар нужен с каждой сделки при продаже (поверх комиссии)? (0.002 = 0.2%)
        'MED_PRICE_PERIOD': 20, # За какой период брать среднюю цену (в минутах)

    },

}


#for pair in PAIRS:
#    print(pair)
#print(len(PAIRS))
##
#import sys
#sys.exit(0)

STOCK_FEE = 0.0015 # Минимальная комиссия, которую берет биржа (0.002 = 0.2%)
STOCK_SHIFT = -3 #Время на бирже отличается от текущего 
DEBUG = True # True - выводить отладочную информацию, False - писать как можно меньше

CURR_DIR = os.path.dirname(os.path.abspath(__file__))

LOG_FILE = CURR_DIR + '/log.txt'

def log(*args):
    l = open(LOG_FILE, 'a')
    print(datetime.now(), *args)
    print(datetime.now(), *args, file=l)
    l.close()


# Свой класс исключений
class ScriptError(Exception):
    pass
class ScriptQuitCondition(Exception):
    pass

# все обращения к API проходят через эту функцию
def call_api(api_url='https://poloniex.com/tradingApi', http_method="POST", **kwargs):
    time.sleep(0.2) # По правилам биржи нельзя больше 6 запросов в секунду
    payload = {'nonce': int(round(time.time()*1000))}

    if kwargs:
        payload.update(kwargs)
    payload =  urllib.parse.urlencode(payload)

    H = hmac.new(key=API_SECRET, digestmod=hashlib.sha512)
    H.update(payload.encode('utf-8'))
    sign = H.hexdigest()

    headers = {"Content-type": "application/x-www-form-urlencoded",
           "Key":API_KEY,
           "Sign":sign}

    url_o = urlparse(api_url)
    conn = http.client.HTTPSConnection(url_o.netloc)
    conn.request(http_method, api_url, payload, headers)
    response = conn.getresponse().read()

    conn.close()

    try:
        obj = json.loads(response.decode('utf-8'))

        if 'error' in obj and obj['error']:
            raise ScriptError(obj['error'])
        return obj
    except ValueError: #json.decoder.JSONDecodeError:
        raise ScriptError('Ошибка анализа возвращаемых данных, получена строка', response)


while True:
    try:
        conn = sqlite3.connect('local.db')
        cursor = conn.cursor()

        # Если не существует таблиц, их нужно создать (первый запуск)
        orders_q = """
          create table if not exists
            orders (
              order_type TEXT,
              order_pair TEXT,

              buy_order_id NUMERIC,
              buy_initial_amount REAL,
              buy_initial_price REAL,
              buy_created DATETIME,
              buy_finished DATETIME,
              buy_cancelled DATETIME,

              sell_order_id NUMERIC,
              sell_amount REAL,
              sell_initial_price REAL,
              sell_created DATETIME,
              sell_finished DATETIME
            );
        """
        cursor.execute(orders_q)

        log("Получаем все неисполненные ордера по БД")

        orders_q = """
            SELECT
              CASE WHEN order_type='buy' THEN buy_order_id ELSE sell_order_id END order_id, order_type, order_pair, sell_amount, sell_initial_price,  strftime('%s',buy_created), buy_initial_price
            FROM
              orders
            WHERE
              buy_cancelled IS NULL AND CASE WHEN order_type='buy' THEN buy_finished IS NULL ELSE sell_finished IS NULL END
        """
        orders_info = {}
        for row in cursor.execute(orders_q):
            orders_info[str(row[0])] = {'order_type': row[1], 'order_pair': row[2], 'sell_amount': row[3], 'sell_initial_price': row[4], 'buy_created': row[5], 'curr_rate': row[6]}
        if orders_info:
            log("Получены неисполненные ордера из БД:", [order for order in orders_info])

            stock_orders = call_api(command="returnOpenOrders", currencyPair="all")

            log("Получена информация по ордерам с биржи", [(order, stock_orders[order]) for order in stock_orders if len(stock_orders[order])])
            for order in orders_info:
                finished = True
                for stock_order in stock_orders[orders_info[order]['order_pair']]:
                    if stock_order['orderNumber'] == order:
                        finished = False
                        log('Ордер %s всё еще не выполнен' % order)
                        break

                if orders_info[order]['order_type'] == 'buy':
                    if finished:
                        log('Ордер %s выполнен, создаем ордер на продажу' % order)

                        order_trades = call_api(command="returnOrderTrades", orderNumber=order)
                        
                        got_amount = 0
                        max_fee = STOCK_FEE

                        for trade in order_trades:
                            got_amount += float(trade['amount']) - float(trade['amount'])*float(trade['fee'])
                            max_fee = max(max_fee, float(trade['fee']))

                        if max_fee != STOCK_FEE:
                            sell_price = float(orders_info[order]['curr_rate']) + float(orders_info[order]['curr_rate'])*float(max_fee+PAIRS[orders_info[order]['order_pair']]['PROFIT_MARKUP_UP'])
                            log("Комиссия не совпадает с расчетной, объем торгов изменился. Комиссия: %s, объем: %s" % (max_fee, got_amount))
                            new_order = call_api(command='sell', currencyPair=orders_info[order]['order_pair'], amount=got_amount, rate=sell_price)
                            
                            sell_amount = got_amount
                            sell_initial_price = sell_price
                        else:
                            new_order = call_api(command='sell', currencyPair=orders_info[order]['order_pair'], amount=orders_info[order]['sell_amount'], rate=orders_info[order]['sell_initial_price'])

                            sell_amount = orders_info[order]['sell_amount']
                            sell_initial_price = orders_info[order]['sell_initial_price']
                        
                                
                        if not 'error' in new_order:
                            log("Создан ордер на продажу", new_order)
                            cursor.execute(
                                """
                                  UPDATE orders
                                  SET
                                    order_type = 'sell',
                                    buy_finished = datetime(),
                                    sell_order_id = :sell_order_id,
                                    sell_created = datetime(),
                                    sell_amount = :sell_amount,
                                    sell_initial_price = :sell_initial_price
                                  WHERE
                                    buy_order_id = :buy_order_id

                                """, {
                                    'buy_order_id': order,
                                    'sell_order_id': new_order['orderNumber'],
                                    'sell_amount':sell_amount,
                                    'sell_initial_price':sell_initial_price
                                }
                            )
                            conn.commit()

                        else:
                            log("Не удалось создать ордер на продажу", new_order)
                    else:
                        order_created = int(orders_info[order]['buy_created'])
                        time_passed = time.time() - order_created
                        if time_passed > PAIRS[orders_info[order]['order_pair']]['ORDER_LIFE_TIME'] * 60:
                            log("Ордер по покупку не выполнен за %s секунд, отменяем" % time_passed)
                            cancel = call_api(command="cancelOrder", orderNumber=order)
                            if 'success' in cancel and cancel['success'] == 1:
                                log("Ордер %s был успешно отменен" % order)
                                cursor.execute(
                                    """
                                      UPDATE orders
                                      SET
                                        buy_cancelled = datetime()
                                      WHERE
                                        buy_order_id = :buy_order_id

                                    """, {
                                        'buy_order_id': order
                                    }
                                )
                                conn.commit()
                            else:
                                log('Какие-то проблемы при отмене ордера', cancel)

                if finished and orders_info[order]['order_type'] == 'sell':
                    log("$"*80)
                    log("#========== Ордер на продажу %s выполнен" % order)
                    log("$"*80)
                    cursor.execute(
                            """
                              UPDATE orders
                              SET
                                sell_finished = datetime()
                              WHERE
                                sell_order_id = :sell_order_id

                            """, {
                                'sell_order_id': order
                            }
                        )
                    conn.commit()
        else:
            log("Неисполненных ордеров в БД нет")

        log('Получаем из настроек все пары, по которым нет неисполненных ордеров')

        all_pairs = [pair for pair in PAIRS]

        orders_q = """
            SELECT
              distinct(order_pair) pair
            FROM
              orders
            WHERE
              buy_cancelled IS NULL AND CASE WHEN order_type='buy' THEN buy_finished IS NULL ELSE sell_finished IS NULL END
        """
        for row in cursor.execute(orders_q):
            all_pairs.remove(row[0])

        if all_pairs:
            log('Найдены пары, по которым нет неисполненных ордеров:', all_pairs)
            for pair in all_pairs:
                log("Работаем с парой", pair)


                end_time =  time.time() + STOCK_SHIFT*60*60 
                start_time =  end_time - float(PAIRS[pair]['MED_PRICE_PERIOD'])*60

                log("Получаем результаты последних торгов для определения цены за период с %s по %s" % (start_time, end_time))

                trades = call_api(api_url='https://poloniex.com/public?command=returnTradeHistory&currencyPair=%s&start=%s&end=%s' % (pair, start_time, end_time))
                log("Получено %s записей" % len(trades))

                buy_prices  = []

                for trade in trades:
                    if trade['type'] == 'buy':
                        buy_prices.append(float(trade['rate']))



                if not buy_prices:
                    log('Не удалось получить цены продаж за период (не было сделок на покупку), пропускаем пару')
                else:
                    buy_price = median(buy_prices)
                    curr_rate = buy_price + buy_price*float(STOCK_FEE-PAIRS[pair]['PROFIT_MARKUP_DOWN'])
                    buy_amount = float(PAIRS[pair]['ORDER_AMOUNT'])/curr_rate
                    sell_amount = buy_amount - buy_amount * STOCK_FEE
                    sell_price = curr_rate + curr_rate*float(STOCK_FEE+PAIRS[pair]['PROFIT_MARKUP_UP'])

                    # wanna_get = CAN_SPEND + CAN_SPEND * (STOCK_FEE+PROFIT_MARKUP)
                    # price=wanna_get/float(balances[CURRENCY_1])
                    log(
                        'Медианная цена покупки = %0.8f, с наценкой %s и комиссией биржи %s курс составит %0.8f'
                        %
                        (
                            buy_price,
                            PAIRS[pair]['PROFIT_MARKUP_DOWN'],
                            STOCK_FEE,
                            curr_rate
                        )
                    )
                    log(
                        """Итого собираемся купить %0.8f %s по курсу %0.8f.
                           После вычета комиссии останется %0.8f %s, которые продадим по курсу %0.8f.
                           Итого на баланс упадет %0.8f %s
                           """
                        %
                        (
                             buy_amount,
                             pair.split('_')[1],
                             curr_rate,
                             sell_amount,
                             pair.split('_')[1],
                             sell_price,
                             sell_amount * sell_price - buy_amount*curr_rate,
                             pair.split('_')[0],
                        )
                    )

                    new_order = call_api(command='buy', currencyPair=pair, amount=buy_amount, rate=curr_rate)
                    if not 'error' in new_order:
                        log("Создан ордер на покупку", new_order)
                        cursor.execute(
                            """
                              INSERT INTO orders(
                                  order_type,
                                  order_pair,
                                  buy_order_id,
                                  buy_initial_amount,
                                  buy_initial_price,
                                  buy_created,
                                  sell_amount,
                                  sell_initial_price

                              ) Values (
                                'buy',
                                :order_pair,
                                :order_id,
                                :buy_order_amount,
                                :buy_initial_price,
                                datetime(),
                                :sell_amount,
                                :sell_initial_price
                              )
                            """, {
                                'order_pair':pair,
                                'order_id': new_order['orderNumber'],
                                'buy_order_amount': buy_amount,
                                'buy_initial_price': curr_rate,
                                'sell_amount':sell_amount,
                                'sell_initial_price': sell_price
                            }
                        )
                        conn.commit()
                    else:
                        log("Не удалось создать ордер", new_order)

        else:
            log('По всем парам есть неисполненные ордера')

        #break

    except Exception as e:
        log(e)
    finally:
        conn.close()

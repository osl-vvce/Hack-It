import pandas as pd
from bs4 import BeautifulSoup as soup
import bs4
import requests



headers={
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
}
df = pd.read_csv('C:\Users\moham\Desktop\hackathon\Hack-It\Arham\Input.csv')
data = df.URL
name = df.URL_ID
# print(name)
# print(data)


for url, i in zip(data, name):
    page = requests.get(url,headers=headers).text
    soup = bs4.BeautifulSoup(page,"html.parser")
    article_title = soup.find('h1',class_='entry-title')
    article = soup.find('div',class_='td-post-content')
    with open('%i.txt'%i,'w',encoding='utf-8') as fp:
        for article_body in soup.find_all('p'):
            title = article_title.text
            body = article.text
            fp.write(title)
            fp.write(body)
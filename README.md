# CZK Currency converter
Convert CZK (Czech Koruna) to foreign currencies.

## Run with docker
Follow these steps to run this app locally without docker.
1. Build Docker image:
```shell
npm run docker-create-image
```
2. Run Docker image:
```shell
npm run docker-run-image
```

## Run without docker
Follow these steps to run this app locally without docker.
1. Copy .env file:
```shell
cp .env.example .env
```
2. Adjust .env content. Example .env content:
```yaml
NODE_ENV=development
PORT=8000
WAIT_BEFORE_SERVER_CLOSE=10
CURRENCY_PROVIDER_URL=https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt
REACT_APP_API_URL=http://localhost:8000
```
3. Install dependencies:
```shell
npm install
```
4. Start the app in dev mode:
```shell
npm run start:dev
```

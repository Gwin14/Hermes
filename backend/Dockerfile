# backend/Dockerfile
FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y gcc

COPY requirements.txt ./
RUN pip install --upgrade pip
# adiciona watchdog para garantir polling
RUN pip install watchdog
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

# força o autoreload via watchdog
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000 --reload"]

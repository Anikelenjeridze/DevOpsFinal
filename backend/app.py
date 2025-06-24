from flask import Flask, jsonify
from prometheus_flask_exporter import PrometheusMetrics
import os

app = Flask(__name__)
metrics = PrometheusMetrics(app)

# A secret key fetched from environment variables
API_KEY = os.environ.get("API_KEY", "default-key")

@app.route('/api/status')
def get_status():
    return jsonify(status="ok", service="backend")

@app.route('/')
def index():
    return "Backend is running. Metrics available at /metrics"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
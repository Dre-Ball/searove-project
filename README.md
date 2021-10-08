Searove
---------
***Mock company that offers boat rentals for cargo transportation***

Based on my OSU CS493 personal portfolio project found here: https://github.com/Dre-Ball/cs493_portfolio

Instead of using GCP Datastore as the database and GCP to host the API, this project will use MongoDB as the database and will be hosted on the cloud using Docker+AWS.  Initial application will have a simple login using social sign-on.  Basic ELK stack capabilities implemented: http/error logging provided by morgan/winston.  Logs are sent to Elasticsearch via logstash/filebeat and data can be visualized by kibana.

Future implementations:
- fully functioning front-end using React

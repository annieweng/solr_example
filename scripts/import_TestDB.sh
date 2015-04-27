curl http://localhost:8983/solr/TEST_DB/update?commit=true -H "Content-Type: text/xml" --data-binary '<delete><query>*:*</query></delete>'
#import all data in  Oracle database databaseHost databaseName into TEST_DB collection in solr server
java -jar solrOracleDBdataImporter-1.5.jar --collectionURL=http://localhost:8983/solr/TEST_DB --collectionName=TEST_DB --UNIQ_ID=UNIQ_ID --username=rcu --password=pwd --databaseHost=databaseServer  --databaseName=test --SID=testdata

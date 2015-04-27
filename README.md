# solr_example
this package show you how  to use SolrJSView and SolrIngestPipeLine to create, ingest, host and view multimedia files from your local computer to your local solr server and local web server.

this packages shows example of how to set up solr, tomcat to ingest multimedia data from media folder to SOLR cloud instance.
In additional, It will show you how to host and access your multimedia data in your server via http://localhost:8080/media url.

media folder contains multimedia folder that will be ingested into solr server.
go ahead update the solr_example\apache-tomcat-7.0.59\conf\Catalina\localhost\media.xml file 
"docBase" property to reflect where your multimedia files is going to be. it's set to 
D:\solr_example\solr\media\ by default.


script directory contains scripts to create solr collection, run ingest utility using SolrIngestPipeLine.
SolrIngestPipeline is available at 
https://github.com/annieweng/SolrIngestPipeLine.git. 

the front end userinterface are hosted in tomcat instance, the url is http://localhost:8080/SolrJSView
the full source code of front end ui is available to download at https://github.com/annieweng/SorlJS.git



to start solrServer, cd solr-5.0.0 folder, and enter ".\bin\solr start -cloud"

to start tomcat instance, cd apache-tomcat-7.0.59\bin and enter "sh startup.sh" for linux, or "./startup.bat" for window.

bring up browser, and enter url http://localhost:8983/solr/ and verfiy solr server comes up successfully.


follow following steps to create a TEST_DOC collection, update a common configuration folder to solr server,
and ingest all files in solr_example\media folder into solr server.
>cd d:\solr_example\scripts
>.\updateConfig.bat
> .\createTestDocsCollection.bat
> .\import_ALL_DOCS.bat

At this point, all files in solr_example\media folder are ingested into http://localhost:8983/solr/TEST_DOC collection.



by default, front end User interface SolrJsView is using localhost:8983/solr/all as solr server end point.
go ahead create aliase for TEST_DOC by enter following command:
curl "http://localhost:8983/solr/admin/collections?action=CREATEALIAS&name=all&collections=TEST_DOC"
if you have multiple solr collections across the solr server, you will want to include other collections to all alias url.
see script/createAliase.sh for example.

enter URL "http://localhost:8080/SolrJSView" to view custom UI for the dataset.


to shutdown solr server,
> cd solr-5.0.0
>bin/solr stop -all

to shutdown tomcat server
>cd apache-tomcat-7/bin
>shutdown.bat




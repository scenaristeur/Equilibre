<template>
    <ais-instant-search :search-client="searchClient" index-name="test">
      <ais-search-box />
      <ais-hits>
        <!-- <div slot="item" slot-scope="{ item }">
          <h2>{{ item.name }}</h2>
        </div> -->
      </ais-hits>
    </ais-instant-search>
  </template>
  
  <script>
  import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch/vue3/es';
  import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
  
  const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
      apiKey: "kNjgTWVlhjzKyK4vfD8OvwB1TukI7c2KsmkIGKMrVrx5VAAz", // Be sure to use an API key that only allows search operations
      nodes: [
        {
          host: "localhost",
          path: "", // Optional. Example: If you have your typesense mounted in localhost:8108/typesense, path should be equal to '/typesense'
          port: "8108",
          protocol: "http",
        },
      ],
      cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  query_by is required.
    additionalSearchParameters: {
      query_by: "@graph.http://purl.org/dc/terms/title",
     // query_by: "@graph.http://purl.org/dc/terms/title,name,description,categories",
    },
  });
  const searchClient = typesenseInstantsearchAdapter.searchClient;
  
  export default {
    components: {
        AisInstantSearch,
      AisSearchBox,
      AisHits
    },
    data() {
      return {
        searchClient,
      };
    },
  };
  </script>
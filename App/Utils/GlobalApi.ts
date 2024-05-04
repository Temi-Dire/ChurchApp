import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-eu-west-2.hygraph.com/v2/clv5bph3t00g507v3wiuuqaap/master";

const getRecentReadings = async () => {
  const query = gql`
  query MyQuery {
    recentReadings {
      id
      name
      image {
        url
      }
      bibleVerse
      study
    }
  }
  
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export default { getRecentReadings };

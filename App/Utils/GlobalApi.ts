import axios from "axios";
import { request, gql } from "graphql-request";

// interface Data {
//   body: string;
//   date: string;
//   title: string;
//   userEmail: string ;
//   userName: string ;
// }

const MASTER_URL =
  "https://api-eu-west-2.hygraph.com/v2/clv5bph3t00g507v3wiuuqaap/master";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "AIzaSyAuR7iBeVhEje5yCjCQrynVhyBpI70Yyfc";

const config = {
  headers: {
    "content-type": "application/json",
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": [
      "places.displayName",
      "places.formattedAddress",
      "places.location",
      "places.evChargeOptions",
      'places.photo'
    ],
  },
};

const NewNearByPlaces = (data: any) => axios.post(BASE_URL, data, config)

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

const createNotes = async (data: { body: string; date: string; title: string; userEmail: string; userName: string; }) => {
  const mutationQuery =
    gql`
    mutation MyMutation {
      createNote(
        data: {
          body: "` +
    data.body +
    `"
          date: "` +
    data.date +
    `"
          title: "` +
    data.title +
    `"
          userEmail: "` +
    data.userEmail +
    `"
          userName: "` +
    data.userName +
    `"
        }
      ) {
        id
      }
      publishManyNotes(to: PUBLISHED) {
        count
      }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

const getNotes = async (userEmail: string) => {
  const query =
    gql`
  query MyQuery {
    notes(orderBy: publishedAt_DESC, where: {userEmail: "` +
    userEmail +
    `"}) {
      title
      body
      date
      id
    }
  }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const deleteNote = async (id: string) => {
  const mutationQuery =
    gql`
  mutation MyMutation {
    deleteNote(where: {id: "` +
    id +
    `"}) {
      userEmail
    }
  }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
const updateNote = async (data: { body: string; title: string; id: string; }) => {
  const mutationQuery =
    gql`
  mutation MyMutation {
    updateNote(
      data: {body: "` +
    data.body +
    `", title: "` +
    data.title +
    `"}
      where: {id: "` +
    data.id +
    `"}
    ) {
      id
    }
    publishNote(where: {id: "` +
    data.id +
    `"}) {
      id
    }
  }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
export default {
  getRecentReadings,
  createNotes,
  getNotes,
  deleteNote,
  updateNote,
  NewNearByPlaces
};

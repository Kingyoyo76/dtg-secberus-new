import axios from "axios";

export async function fetchAPI(
  query: string,
  variables: { [key: string]: string | number | boolean } = {}
) {
  try {
    const url = `${process.env.GRAPHQL_BASE_URL}/graphql`;

    const response = await axios.post(
      url,
      { query, variables },
      { timeout: 30000 } // Timeout of 30 seconds
    );

    const json = response.data;
    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
      throw new Error("Failed to fetch API");
    }

    return json.data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
}

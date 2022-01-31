import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { api_key, context_key } from "../keys";

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} -Google Search</title>
      </Head>
      {/* search header */}
      <Header />
      {/* search results */}
      <SearchResults result={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${context_key}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // TODO: after the server rendered pass the results to client
  return {
    props: {
      results: data,
    },
  };
}

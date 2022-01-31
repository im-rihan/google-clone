import PaginationButtons from "./PaginationButtons";

function SearchResults({ result }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 mb-5 mt-3 text-lg">
        About {result.searchInformation?.formattedTotalResults} results(
        {result.searchInformation?.formattedSearchTime} seconds)
      </p>
      {result.items.map((item) => (
        <div key={item.link} className="max-w-xl mb-8">
          <div className="group">
            {/* results */}
            <a href={item.link} className="text-sm">
              {item.formattedUrl}
            </a>
            <a href={item.link}>
              <h2 className="font-medium text-blue-800 truncate group-hover:underline">
                {item.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">
            {/* Snippets */}
            {item.snippet}
          </p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;

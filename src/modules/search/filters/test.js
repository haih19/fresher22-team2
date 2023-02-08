// useEffect(() => {
//     const getTotalPagesSearch = async () => {
//       try {
//         const data = await Promise.all([
//           tmdbApi.getSearch({
//             category: "movie",
//             page: pageCount,
//             query: info,
//           }),
//           tmdbApi.getSearch({
//             category: "tv",
//             page: 1,
//             query: info,
//           }),
//           tmdbApi.getSearch({
//             page: pageCount,
//             category: "person",
//             query: info,
//           }),
//           tmdbApi.getSearch({
//             category: "multi",
//             page: 1,
//             query: info,
//           }),
//           tmdbApi.getSearch({
//             category: "company",
//             page: 1,
//             query: info,
//           }),
//           tmdbApi.getSearch({
//             category: "keyword",
//             page: 1,
//             query: info,
//           }),
//           tmdbApi.getSearch({
//             category: "collection",
//             page: 1,
//             query: info,
//           }),
//         ]);
//         const totalResults = await data.map((item) => item.total_results);
//         await setTotalResults(totalResults);
//         // console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getTotalPagesSearch();
//   }, []);

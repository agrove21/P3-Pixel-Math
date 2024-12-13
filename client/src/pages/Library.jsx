import { useQuery, gql } from "@apollo/client";
import Gallery from "../components/Gallery";
import PixelGrid from "../components/PixelGrid";

const GET_Me = gql`
  query Query {
    me {
      pixels {
        _id
        design
        name
      }
    }
  }
`;
function Library() {
  const { loading, error, data } = useQuery(GET_Me);

  if (loading) return <div>Loading...</div>;

  if (!data?.me?.pixels?.length) return <div className="flex items-center justify-center h-96 text-2xl">No designs yet!</div>;

  return <div className="flex justify-start flex-wrap">
    <div className="w-[450px]">

    </div>
    <div className="flex justify-center flex-wrap">
      <Gallery designs={data?.me?.pixels} />
    </div>
  </div>;
}

export default Library;

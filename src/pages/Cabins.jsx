import { useEffect } from "react";

import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://ngwctajdniaxzgssivrb.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-12-26T23%3A46%3A54.414Z" />
    </Row>
  );
}

export default Cabins;

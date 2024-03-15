import { useEffect, useState } from "react";

const useCollections = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const tokenIDs = [...Array.from({ length: 30 })].map((_, index) => index);

      const promises = tokenIDs.map((x) =>
        fetch(`${import.meta.env.VITE_TOKEN_BASE_URL}/${x}`)
      );

      const tokensMetadataResponse = await Promise.all(promises);

      const tokensMetadataJson = [];

      for (let i = 0; i < tokensMetadataResponse.length; i++) {
        const json = await tokensMetadataResponse[i].json();
        tokensMetadataJson.push(json);
      }

      setData(tokensMetadataJson);
      setIsLoading(false);
    })();
  }, []);

  return { data, isLoading };
};

export default useCollections;

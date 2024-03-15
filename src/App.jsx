import { Inbox } from "lucide-react";
import Header from "./components/shared/Header";
import LoadNft from "./components/shared/LoadNft";
import MaxContainer from "./components/shared/MaxContainer";
import NftCard from "./components/shared/NftCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import useAddressNft from "./hooks/useAddressNft";
import useCollections from "./hooks/useCollections";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

export default function App() {
  const { address } = useWeb3ModalAccount();
  const { data: tokensData, isLoading } = useCollections();

  const {
    data: { data, adrress },
    isMintedId,
  } = useAddressNft();

  const myTokensData = tokensData.filter((x, index) => data.includes(index));

  const tokens = tokensData.map((x, index) => ({
    ...x,
    isMinted: isMintedId.includes(index),
    add: adrress,
  }));

  const mytokens = myTokensData.map((x) => ({
    ...x,
    isMintedId,
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MaxContainer className="py-10 flex items-center gap-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Collections</TabsTrigger>

            <TabsTrigger value="mine">My Collections</TabsTrigger>
          </TabsList>

          <div className="py-5 mt-6 border-t w-full">
            <TabsContent
              value="all"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {isLoading ? (
                <LoadNft />
              ) : tokens.length === 0 ? (
                <p className="py-2 px-3 border-yellow-700 border bg-yellow-500/10 rounded-md w-max text-sm flex items-center">
                  <Inbox className="w-5 h-5 mr-2" />
                  There are no collections yet
                </p>
              ) : (
                tokens.map((collection, _key) => (
                  <NftCard
                    {...collection}
                    attributes={collection}
                    currentUserAddress={address}
                    key={_key}
                  />
                ))
              )}
            </TabsContent>
            <TabsContent
              value="mine"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {isLoading ? (
                <LoadNft />
              ) : myTokensData.length === 0 ? (
                <p className="py-2 px-3 border-yellow-700 border bg-yellow-500/10 rounded-md w-max text-sm flex items-center">
                  <Inbox className="w-5 h-5 mr-2" />
                  You do not have any collections yet
                </p>
              ) : (
                mytokens.map((collection, _key) => (
                  <NftCard
                    {...collection}
                    attributes={collection}
                    currentUserAddress={address}
                    mine
                    key={_key}
                  />
                ))
              )}
            </TabsContent>
          </div>
        </Tabs>
      </MaxContainer>
    </div>
  );
}

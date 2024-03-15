import MaxContainer from "./MaxContainer";

export default function Header() {
  return (
    <header className="w-full sticky top-0 inset-x-0 z-10 backdrop-blur-2xl">
      <MaxContainer className="flex items-center justify-between py-4">
        <h1>NFT Collections</h1>
        <w3m-button />
      </MaxContainer>
    </header>
  );
}

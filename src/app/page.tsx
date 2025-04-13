import Image from "next/image";
import Art from "./components/art";
import NFT from "./components/nft";
import Loan from "./components/loan";

export default function Home() {
  return (
    <div className="pt-16">
      <Art />
      <NFT />
      <Loan />
    </div>
  );
}

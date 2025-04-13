"use client";

import { Button, Card, Descriptions } from "antd";
import Image from "next/image";

export default function NFT() {

  const nft = {
    tokenId: "0xC3A1BH324LJNKJ4324KHK23K432KH4VBK2HF9D7",
    standard: "ERC-721",
    mintDate: "2024-09-01",
    contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
    blockchain: "Ethereum",
    custody: "DBS Digital Vault",
    fractionalized: "No",
    legalFramework: "UCC Filing No. 2024-DBS-ART-0098",
    explorerLink: "https://etherscan.io/token/0xC3A1...F9D7",
    ownerWallet: "0x9aBc3b42bk24oi234ol224b3jk2j1234",
  };

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full py-10" id={"art"}>
          <h2 className="text-3xl font-bold mb-8">{"NFT Details"}</h2>
          <Card>
            <Descriptions bordered column={2}>
              <Descriptions.Item label="Token ID">{nft.tokenId}</Descriptions.Item>
              <Descriptions.Item label="Token Standard">{nft.standard}</Descriptions.Item>
              <Descriptions.Item label="Mint Date">{nft.mintDate}</Descriptions.Item>
              <Descriptions.Item label="Smart Contract">{nft.contractAddress}</Descriptions.Item>
              <Descriptions.Item label="Blockchain">{nft.blockchain}</Descriptions.Item>
              <Descriptions.Item label="Custody">{nft.custody}</Descriptions.Item>
              <Descriptions.Item label="Fractionalized">{nft.fractionalized}</Descriptions.Item>
              <Descriptions.Item label="Legal Framework">{nft.legalFramework}</Descriptions.Item>
              <Descriptions.Item label="Owner Wallet">{nft.ownerWallet}</Descriptions.Item>
              <Descriptions.Item label="View on Explorer">
                <Button type="link" href={nft.explorerLink} target="_blank">View on Etherscan</Button>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>

    </div>
  );
}
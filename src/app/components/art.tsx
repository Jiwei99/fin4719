"use client";

import { Card, Descriptions } from "antd";
import Image from "next/image";

export default function Art() {

  const prefix = process.env.NODE_ENV === 'production' ? "/fin4719" : "";

  const art = {
    title: "The Card Players",
    artist: "Paul Cézanne",
    year: 1895,
    medium: "Oil on canvas",
    dimensions: "134 cm x 181 cm",
    appraisalValue: "$250,000,000",
    appraisalDate: "2024-08-01",
    condition: "Excellent",
    provenance: "Private European Collection",
    certifier: "Sotheby’s Authentication Services",
    location: "DBS Vault, Singapore",
    imageUrl: `${prefix}/art.jpeg`,
  };

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full py-10" id={"art"}>
          <h2 className="text-3xl font-bold mb-8">{"Artwork Details"}</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <Image src={art.imageUrl} alt="Artwork" width={700} height={500} className="rounded-lg shadow-lg" />

            <Card>
              <Descriptions bordered column={1}>
                <Descriptions.Item label="Title">{art.title}</Descriptions.Item>
                <Descriptions.Item label="Artist">{art.artist} ({art.year})</Descriptions.Item>
                <Descriptions.Item label="Medium">{art.medium}</Descriptions.Item>
                <Descriptions.Item label="Dimensions">{art.dimensions}</Descriptions.Item>
                <Descriptions.Item label="Appraised Value">{art.appraisalValue}</Descriptions.Item>
                <Descriptions.Item label="Appraisal Date">{art.appraisalDate}</Descriptions.Item>
                <Descriptions.Item label="Condition">{art.condition}</Descriptions.Item>
                <Descriptions.Item label="Provenance">{art.provenance}</Descriptions.Item>
                <Descriptions.Item label="Certifier">{art.certifier}</Descriptions.Item>
                <Descriptions.Item label="Storage Location">{art.location}</Descriptions.Item>
              </Descriptions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
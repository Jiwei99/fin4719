"use client";

import { Badge, Card, Descriptions } from "antd";
import { Column, Line } from '@ant-design/plots';

export default function Loan() {

  const loan = {
    id: "LN-DBS-2024-0098",
    principal: "$125,000,000",
    collateralValue: "$250,000,000",
    ltvRatio: "50%",
    interestRate: "5.25% per annum",
    term: "36 months",
    startDate: "2024-09-15",
    repaymentSchedule: "Quarterly",
    nextPayment: "2025-06-15",
    outstandingBalance: "$118,750,000",
    status: "Active",
    riskRating: "Low",
    penalty: "NFT Liquidation",
  };

  const annualRate = 0.0525;
  const quarterlyRate = annualRate / 4;
  const principal = 125000000;
  const termQuarters = 12;
  const quarterlyPayment = principal * quarterlyRate / (1 - Math.pow(1 + quarterlyRate, -termQuarters));

  const repaymentData = Array.from({ length: termQuarters }, (_, i) => {
    const quarter = i + 1;
    const remainingPrincipal = principal * Math.pow(1 + quarterlyRate, -quarter);
    const interestPayment = remainingPrincipal * quarterlyRate;
    const principalPayment = quarterlyPayment - interestPayment;
    return {
      period: `Q${quarter}`,
      balance: parseFloat(remainingPrincipal.toFixed(2)),
      interest: parseFloat(interestPayment.toFixed(2)),
      principal: parseFloat(principalPayment.toFixed(2)),
    };
  });

  const configBalance = {
    data: repaymentData,
    xField: 'period',
    yField: 'balance',
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    axis: {
      y: {
        labelFormatter: '$~s',
      },
    },
  };

  const configBreakdown = {
    data: repaymentData.flatMap((item) => [
      { period: item.period, type: 'Principal', value: item.principal },
      { period: item.period, type: 'Interest', value: item.interest },
    ]),
    xField: 'period',
    yField: 'value',
    stack: {
      groupBy: ['x'],
      series: false,
    },
    colorField: 'type',
    axis: {
      y: {
        labelFormatter: '$~s',
      },
    },
  }

  return (
    <div className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full py-10" id={"art"}>
          <h2 className="text-3xl font-bold mb-8">{"Loan Details"}</h2>
          <Card style={{ marginBottom: 24 }}>
            <Descriptions bordered column={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}>
              <Descriptions.Item label="Loan ID">{loan.id}</Descriptions.Item>
              <Descriptions.Item label="Principal">{loan.principal}</Descriptions.Item>
              <Descriptions.Item label="Collateral Value">{loan.collateralValue}</Descriptions.Item>
              <Descriptions.Item label="Loan-to-Value Ratio">{loan.ltvRatio}</Descriptions.Item>
              <Descriptions.Item label="Interest Rate">{loan.interestRate}</Descriptions.Item>
              <Descriptions.Item label="Loan Term">{loan.term}</Descriptions.Item>
              <Descriptions.Item label="Start Date">{loan.startDate}</Descriptions.Item>
              <Descriptions.Item label="Repayment Schedule">{loan.repaymentSchedule}</Descriptions.Item>
              <Descriptions.Item label="Next Payment Due">{loan.nextPayment}</Descriptions.Item>
              <Descriptions.Item label="Outstanding Balance">{loan.outstandingBalance}</Descriptions.Item>
              <Descriptions.Item label="Risk Rating">{loan.riskRating}</Descriptions.Item>
              <Descriptions.Item label="Penalty Clause">{loan.penalty}</Descriptions.Item>
              <Descriptions.Item label="Status">
                <Badge status="processing" text={loan.status} />
              </Descriptions.Item>
            </Descriptions>
          </Card>
          <Card title="Amortisation Forecast">
            <Line {...configBalance} />
          </Card>
          <Card title="Repayment Breakdown">
            <Column {...configBreakdown} />
          </Card>
        </div>
      </div>
    </div>
  );
}
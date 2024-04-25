"use client"

import Chart from "@/components/ui/chart"
import Highlights from "@/components/ui/highlights"
import UtilityButton from "@/components/ui/utilitybutton"


export default function Home() {
    const data_overview = [
        {
            "id": "Savings",
            "label": "Savinges and Investments",
            "value": 30000,
            "color": "hsl(100, 60%, 50%)"
        },
        {
            "id": "Expenses",
            "label": "Expenses",
            "value": 10000,
            "color": "rgba(255, 255, 255, 0.3)"
        }
    ]
    const data_sav = [
        {
            "id": "Cash",
            "label": "Cash",
            "value": 15000,
            "color": "hsl(271, 70%, 50%)"
        },
        {
            "id": "Gold",
            "label": "Gold",
            "value": 5000,
            "color": "hsl(60, 70%, 40%)"
        },
        {
            "id": "Stocks",
            "label": "Stocks",
            "value": 10000,
            "color": "hsl(40, 70%, 40%)"
        }
    ]
    const data_exp = [
        {
            "id": "House",
            "label": "House",
            "value": 1500,
            "color": "hsl(271, 70%, 50%)"
        },
        {
            "id": "Car Loan",
            "label": "Car Loan",
            "value": 5000,
            "color": "hsl(60, 70%, 40%)"
        },
        {
            "id": "Leisure",
            "label": "Leisure",
            "value": 10000,
            "color": "hsl(40, 70%, 40%)"
        }
    ]
    return (
        <>

            <div className="flex-1 space-y-4 p-8 pt-6">
                <h1 className="text-4xl font-bold text-green-500 space-y-2">FundFlow</h1>
                <div className="lg:flex lg:items-center lg:justify-between lg:space-y-0">
                    <h2 className="text-3xl font-bold tracking-tight lg:w-1/2">Dashboard</h2>
                    <div className="grid gap-4 md:flex md:items-center md:justify-end md:w-1/2 lg:w-auto">
                        <UtilityButton hoverColor="hover:bg-green-400" utility="Income" />
                        <UtilityButton hoverColor="hover:bg-red-400" utility="Expense" />
                        <UtilityButton hoverColor="hover:bg-amber-400" utility="Investment" />
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <Highlights title="Income" value="40,231.89" gain="45.1" />
                    <Highlights title="Total Savings" value="700,231.89" gain="25.1" />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                    <Chart title="Overview" data={data_overview} />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <Chart title="Savings And Investments" data={data_sav} />
                    <Chart title="Expenses" data={data_exp} />
                </div>
            </div>
        </>
    )
}
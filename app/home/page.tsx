"use client"

import Highlights from "@/components/ui/highlights"
import Overview from "@/components/ui/overview"
import UtilityButton from "@/components/ui/utilitybutton"


export default function CardWithForm() {

    return (
        <>

            <div className="flex-1 space-y-4 p-8 pt-6">
                <h1 className="text-4xl font-bold text-green-500 space-y-2">FundFlow</h1>
                <div className="lg:flex lg:items-center lg:justify-between lg:space-y-0">
                    <h2 className="text-3xl font-bold tracking-tight lg:w-1/2">Dashboard</h2>
                    <div className="grid gap-4 md:flex md:items-center md:justify-end md:w-1/2 lg:w-auto">
                        <UtilityButton hoverColor="bg-green-400" utility="Income" />
                        <UtilityButton hoverColor="bg-red-400" utility="Expense" />
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <Highlights title="Income" value="40,231.89" gain="45.1" />
                    <Highlights title="Total Savings" value="700,231.89" gain="25.1" />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                    <Overview />
                </div>
            </div>
        </>
    )
}
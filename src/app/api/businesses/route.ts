import Business from "@/lib/models/businessProfile";
import { connectDb } from "@/lib/mongodb";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await connectDb();
        const businesses = await Business.find({});
        // const updated = await Promise.all(businesses.map(async (business) => {
        //     return ({
        //         ...business,
        //         isOpen: (new Date() < business.openingHours) && (new Date() > business.closingHours) ? true : false,
        //     })
        // }))
        const updated = await Business.aggregate([
            {
                $addFields: {
                    isOpen: {
                        $cond: {
                            if: { $lte: ["$openingHours", "$closingHours"] },
                            then: {
                                $and: [
                                    { $gte: ["$$NOW", "$openingHours"] },
                                    { $lt: ["$$NOW", "$closingHours"] }
                                ]
                            },
                            else: {
                                $or: [
                                    { $gte: ["$$NOW", "$openingHours"] },
                                    { $lt: ["$$NOW", "$closingHours"] }
                                ]
                            }
                        }
                    }
                }
            },
            {
                $project: { password: 0, __v: 0, createdAt: 0, updatedAt: 0 }
            }
        ]);
        return new Response(JSON.stringify({
            data: updated,
            status: 200,
            success: true
        }));
    } catch (error) {
        console.error("Error fetching businesses:", error);
        return new Response(JSON.stringify({
            message: "Error fetching businesses",
            status: 500,
            success: false
        }));
    }
}
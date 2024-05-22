import { notFound } from "next/navigation"
export default function ReviewDetails({ params }: { params: { reviewId: string, productId: string } }) {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return <div>
        <h1>Review Details -{params.reviewId} product-{params.productId}</h1>

    </div>
}
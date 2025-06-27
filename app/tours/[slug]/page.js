import { getMetaData } from "@/app/Data/metaDataJson";
import Tour from "./Tour";
export async function generateMetadata({params}) {
    const {slug} = params;
    const url = `https://ujjainmahakal.com/tours/${slug}`;
    return getMetaData(url);
}

export default function TourPage() {
    return <Tour/>
}
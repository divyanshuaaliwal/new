import Simahasta2018News from "./simahstra2018News";
import { getMetaData } from "@/app/Data/metaDataJson";

export async function generateMetadata() {
    const url = `https://ujjainmahakal.com/simahasta-2018-news`
    return getMetaData(url);
}

export default function simahstra2018NewsPage() {
    return <Simahasta2018News/>
}
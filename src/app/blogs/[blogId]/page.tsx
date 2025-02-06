import { use } from "react";
import "./page.css";
import blogData from "@/app/DB/blogData";
import Image from "next/image";


interface Params {
    blogId?: number;
}

function BlogSummary({params}: { params: Promise<Params>}) {

    const { blogId } = use(params);
    const blogSummaryData = blogData.find(item => (item.id === Number(blogId)));

  return (
    <div>
        <div className="blogSummaryContainer">
            <div className="blogSummaryContent">
                <div className="blogSummaryImageContainer">
                    <Image fill src={blogSummaryData?.image1 || ""} alt={blogSummaryData?.title1 || ""} />
                </div>
                <div className="blogSummaryText">
                    <p>By <span>{blogSummaryData?.author}</span> {blogSummaryData?.date}</p>
                    <h1>{blogSummaryData?.title1}</h1>
                    <p>{blogSummaryData?.description1}</p>
                </div>
                <div className="blogSummaryChildrenImageContainer">
                    <Image fill src={blogSummaryData?.image1 || ""} alt={blogSummaryData?.title1 || ""} />
                </div>
                <div className="blogSummaryText">
                    <h1>{blogSummaryData?.title2}</h1>
                    <p>{blogSummaryData?.description2}</p>
                </div>
                <div className="blogSummaryChildrenImageContainer">
                    <Image fill src={blogSummaryData?.image1 || ""} alt={blogSummaryData?.title1 || ""} />
                </div>
                <div className="blogSummaryText">
                    <h1>{blogSummaryData?.title3}</h1>
                    <p>{blogSummaryData?.description3}</p>
                </div>
            </div>
        </div>  
    </div>
  );
}

export default BlogSummary;

import React from "react";
import PostHeader from "./PostHeader";
import classes from "./postContent.module.css";

const DUMMY_POST = {
    slug: "getting-started-with-next-js",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisi nunc ultricies nisl, euismod euismod nunc nisi euismod.",
    date: "2022-02-13",
    content: "# this is the first post"
};

export default function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            {DUMMY_POST.content}
        </article>
    );
}

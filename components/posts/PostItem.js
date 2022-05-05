import Link from 'next/link'
import classes from './postItem.module.css'
import Image from 'next/image'


export default function PostItem(props) {
    const {title, image, excerpt, date, slug} = props.post
    const dateFormatted = new Date(date).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const linkPath = `/posts/${slug}`

    const imagePath = `/images/posts/${slug}/${image}`
  return (
    <li className={classes.post}>
    <Link href={linkPath}>
        <a>
            <div className={classes.image}>
                <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>july 13 2022</time>
                <p>{excerpt}</p>
            </div>
        </a>
    </Link>

    </li>
  )
}

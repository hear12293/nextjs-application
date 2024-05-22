import Link from 'next/link'

export default function Home() {
    return (<div>
        <h2>Welcome to next js</h2>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
    </div>)
}
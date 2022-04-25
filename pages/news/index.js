import React from 'react'
import Link from 'next/link';
export default function News() {
    return (
        <div>|News|
            <ul>
                <li>

                    <Link href={"/news/news-1"}>goto News1 </Link>
                </li>
                <li>

                    <Link href={"/news/news-2"}>goto News2 </Link>
                </li>
            </ul>
        </div>
    )
}

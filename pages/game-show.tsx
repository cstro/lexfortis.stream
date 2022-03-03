import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import Link from 'next/link'
import shows from 'data/game-shows'


const GameShow: NextPage = () => {
  return (
    <Layout>
      <h2 className="font-display text-4xl mb-8">Game Shows</h2>
      <p className="mb-6">This is the results history of Game Shows!</p>
      {shows.map((show) => (
        <div key={show.id} className="mb-4">
          <Link href="/game-show/1" passHref>
            <a className="text-blue-500 hover:text-blue-600 hover:underline text-lg block">Game Show #{show.id}</a>
          </Link>
          <div className="text-sm text-gray-500">{show.date}</div>
        </div>
      ))}
    </Layout>
  )
}

export default GameShow

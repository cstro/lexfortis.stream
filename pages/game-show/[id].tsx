import Layout from '@/components/Layout'
import shows, { GameShow } from 'data/game-shows'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'

function QuizResult(props: GameShow) {
  const date = (new Intl.DateTimeFormat()).format(new Date(props.date))

  return (
    <Layout>
      <div>
        <Link href="/game-show" passHref>
          <a className="inline-block mb-4 text-blue-500 hover:text-blue-600 hover:underline">
            Back to list
          </a>
        </Link>

        <h3 className="text-sm text-gray-500 mb-2">{date}</h3>
        <h2 className="font-display text-4xl mb-12">Game Show #{props.id}</h2>

        <div className="flex items-end w-full">
          <div className="text-center w-1/3">
            <div className="mb-2">1 fox</div>
            <div className="bg-orange-400 h-64">
            </div>
          </div>
          <div className="text-center w-1/3">
            <div className="mb-2">Doodles</div>
            <div className="bg-orange-400 h-80 shadow-2xl relative z-10">
            </div>
          </div>
          <div className="text-center w-1/3">
            <div className="mb-2">CjDaPolarBear2</div>
            <div className="bg-orange-400 h-52">
            </div>
          </div>
        </div>
        
      </div>
    </Layout>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<GameShow> = (context) => {
  const { id } = context.params as Params
  const show = shows.find((show) => show.id === id) 

  return {
    props: show as GameShow
  }
}

export async function getStaticPaths() {
  return {
    paths: shows.map(show => {
      return {
        params: {
          id: show.id
        }
      }
    }),
    fallback: false
  }
}

export default QuizResult

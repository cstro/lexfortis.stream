import type { NextPage } from 'next'
import Layout from '@/components/Layout'

const About: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-prose m-auto prose">
        <h1 className="font-display">About Me</h1>
      <p>Hi :) Welcome to my stream!</p>

      <p>My name is Lex. I&apos;m from Romania and I&apos;m in my 20s.</p>

<p>
      I want my stream to be a chill place for discussions, from big picture conversations to more practical and friendly ones. A chill place for hanging out.
      I must admit that I do have a preference for futuristic and big picture topics though. That&apos;s why we always have a Question Of The Day - !qotd in chat - to talk about such things.
      </p>
      <p>
      We play a lot of interactive games. So feel free to join. They are mostly chill and fun games. I will also play more intense, competitive and single-player games at times. But I will still talk to you and welcome discussions in the chat.
      </p>
      <p>
      I am passionate about filmmaking so that&apos;s why you will see a lot of cinematics, either things I do out of passion or the subscriber intro cinematic. If you want to see a sub intro, go to my highlights.
      </p>

      <p>
      Also, I like challenges. That&apos;s how I became a Getting Over It speedrunner. I completed the game over 60 times. :D I know, what sane person would do that, right? :D Right? :D
      I can also play games blindfolded. No joke. I have one such attempt in highlights.
      </p>
      <p>
        But all in all, come in! Join and have a chat. If you happen to have a curious mind as well, I&apos;m sure we&apos;ll have plenty of things to talk about.
      </p>
      </div>
    </Layout>
  )
}

export default About

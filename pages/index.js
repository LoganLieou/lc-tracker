import Head from 'next/head'

function ListItem(props) {
  return (
    <li>
      <a href={props.link}>{props.name}</a>
    </li>
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leetcode Tracker</title>
        <meta name="description" content="Application to help you track leetcode" />
        <link rel="icon" href="/pepecoffee.png" />
      </Head>

      <main className="container">
        <h1>The Leetcode Tracker</h1>
        <hr/>
        List of concepts to cover:
        <ul>
          <ListItem name="Graph" link="/graph"/>
          <ListItem name="Linked List" link="/linkedlist"/>
          <ListItem name="Array" link="/array"/>
          <ListItem name="Dynamic Programming" link="/dp"/>
          <ListItem name="Intervals" link="/interval"/>
          <ListItem name="String" link="/string"/>
        </ul>
      </main>
    </div>
  )
}
